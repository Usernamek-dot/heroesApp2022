import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { Navbar } from "../design";
import { DcPage, MarvelPage } from "../superheroes";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
