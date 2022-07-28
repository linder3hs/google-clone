import { FC, useState, ChangeEvent } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import "./index.css";

const Search: FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSearch = (): void => {
    if (search === "") return;

    location.href = `/results/${search.replaceAll(" ", "+")}`;
  };

  return (
    <Container maxWidth="xl" className="container__search">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">Google</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            onChange={handleInputSearch}
            fullWidth
            className="container__search__input"
            placeholder="Search whatever"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleSearch}
            fullWidth
            color="secondary"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
