import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { SuperheroesRoutes } from "../superheroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<SuperheroesRoutes />} />
      </Routes>
    </>
  );
};
