import { FC, useState, ChangeEvent } from "react";
import { Button, Grid, TextField } from "@mui/material";

interface Props {
  textSearch: string;
}

const SearchBar: FC<Props> = ({ textSearch }): JSX.Element => {
  const [search, setSearch] = useState<string>(textSearch);

  const handleGetSearch = async (): Promise<void> => {
    if (textSearch === "") return;

    location.href = `/results/${search}`;
  };

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Grid container spacing={3} mt={3}>
      <Grid item xs={8}>
        <TextField
          size="small"
          onChange={handleInputSearch}
          value={search}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button onClick={handleGetSearch} variant="contained" color="secondary">
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
