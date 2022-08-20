import { useEffect, useInsertionEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
