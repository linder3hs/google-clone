import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@mui/material";

interface Props {
  result: any;
}

const ItemResult: FC<Props> = ({ result }): JSX.Element => {
  return (
    <Grid item xs={12} sm={8}>
      <Card>
        <CardContent>
          <Typography variant="body2">{result.cite.domain}</Typography>
          <a href={result.link} target="_blank">
            <Typography variant="subtitle1">{result.title}</Typography>
          </a>
          <Typography variant="body2">{result.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ItemResult;
