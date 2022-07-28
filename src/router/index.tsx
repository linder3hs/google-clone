import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchView, ResultsView } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchView />} />
        <Route path="/results/:search" element={<ResultsView />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
