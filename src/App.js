import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AppLayout from "./pages/layouts/AppLayout";
import MovieCreatePage from "./pages/movies/Create";
import ReviewListPage from "./pages/reviews/List";
import StreamListPage from "./pages/stream/List";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import MovieEditPage from "./pages/movies/Edit";
import PageNotFound from "./pages/errors/404";
import StreamCreatePage from "./pages/stream/Create";
import StreamEditPage from "./pages/stream/Edit";

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/movie/create" element={<MovieCreatePage />} />
          <Route path="/movie/edit/:movieId" element={<MovieEditPage />} />
          <Route path="/stream" element={<StreamListPage />} />
          <Route path="/stream/create" element={<StreamCreatePage />} />
          <Route path="/stream/edit/:streamId" element={<StreamEditPage />} />
          <Route path="/reviews" element={<ReviewListPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AppLayout>
    </Router>
  );
}
