import { FC, useState, useEffect } from "react";
import { CircularProgress, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  SearchBar,
  SearchResults,
  SearchTabs,
  SearchImages,
} from "../../components";
import { Results as IResults, IResult } from "../../interface/results";
import * as GoogleApi from "../../service";
import "./index.css";

const Results: FC = (): JSX.Element => {
  const { search } = useParams();

  const jsonResult: IResult = {
    answers: [],
    device_region: "",
    device_type: "",
    image_results: [],
    results: [],
    ts: 0,
  };

  const [results, setResults] = useState<IResults>({
    searchs: jsonResult,
    images: jsonResult,
    videos: null,
    news: null,
    books: null,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetSearch = async (): Promise<void> => {
    const searchs = await GoogleApi.getSearch(search ?? "");
    const images = await GoogleApi.getImages(search ?? "");
    console.log("images", images);
    setResults({
      ...results,
      searchs,
      images,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetSearch();
  }, []);

  return (
    <Container>
      <SearchBar textSearch={search?.replaceAll("+", " ") ?? ""} />
      <SearchTabs
        AllResults={<SearchResults results={results.searchs} />}
        AllImages={<SearchImages results={results.images} />}
      />
      {isLoading && (
        <div className="container__progress">
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};

export default Results;
