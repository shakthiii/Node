import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { HomeRoute } from "./routes/HomeRoute";
import { ListRoute } from "./routes/ListRoute";
import { NotFound } from "./routes/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/api/list/:id" element={<ListRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
