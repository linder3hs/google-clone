import { FC } from "react";
import { Typography } from "@mui/material";
import { IResult } from "../../interface/results";
import "./index.css";

interface Props {
  results: IResult;
}

const SearchImages: FC<Props> = ({ results }): JSX.Element => {
  return (
    <div className="images__container">
      {results &&
        results.image_results.map((result, index) => (
          <div className="images__item">
            <img key={index} src={result.image.src} alt={result.image.alt} />
            <a href={result.link.href} target="_blank">
              <Typography variant="body1">{result.link.title}</Typography>
            </a>
          </div>
        ))}
    </div>
  );
};

export default SearchImages;
