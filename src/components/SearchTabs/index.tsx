import { FC, useState, ReactNode, SyntheticEvent } from "react";
import { TabPanel } from "./components";
import { Box, Tab, Tabs } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Props {
  AllResults: ReactNode;
  AllImages: ReactNode;
}

const SearchTabs: FC<Props> = ({ AllResults, AllImages }): JSX.Element => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Images" {...a11yProps(1)} />
          <Tab label="Videos" {...a11yProps(2)} />
          <Tab label="News" {...a11yProps(3)} />
          <Tab label="Books" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {AllResults}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {AllImages}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Videos
      </TabPanel>
    </Box>
  );
};

export default SearchTabs;
