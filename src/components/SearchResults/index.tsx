import { FC } from "react";
import { Grid } from "@mui/material";
import ItemResult from "../ItemResult";
import { IResult } from "../../interface/results";

interface Props {
  results: IResult;
}

const SearchResults: FC<Props> = ({ results }): JSX.Element => {
  return (
    <Grid container spacing={3}>
      {results &&
        results?.results?.map((result, index) => (
          <ItemResult key={index} result={result} />
        ))}
    </Grid>
  );
};

export default SearchResults;
