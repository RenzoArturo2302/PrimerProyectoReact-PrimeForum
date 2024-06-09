import React from "react";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import {
  HomeView,
  PostsView,
  LibraryView,
  ContactView,
  LoginView,
  RegisterView,
} from "./utils/Indice";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomeView />
            </>
          }
        />
        <Route
          path="/posts"
          element={
            <>
              <Navbar /> <PostsView />
            </>
          }
        />
        <Route
          path="/library"
          element={
            <>
              <Navbar /> <LibraryView />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar /> <ContactView />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <LoginView />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <RegisterView />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
