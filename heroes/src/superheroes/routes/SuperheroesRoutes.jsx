import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroePage, MarvelPage } from "../pages";
import { HomePage } from "../pages/HomePage";

export const SuperheroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="heroe" element={<HeroePage />} />
        <Route path="/*" element={<Navigate to="home" />} />
      </Routes>
    </>
  );
};
