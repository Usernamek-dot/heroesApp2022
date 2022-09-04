import { useEffect, useState } from "react";
import heroesApi from "../../api/Api";

export const MarvelPage = () => {
  const [getHeroes, setGetHeroes] = useState([]);
  useEffect(() => {
    gettingHeroes();
  }, []);
  const gettingHeroes = async () => {
    try {
      const resp = await heroesApi.get("/superheroes?type=heroes-marvel");
      setGetHeroes(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {getHeroes.map((heroe) => (
        <>
          <div key={heroe.id}></div>
          <h1> {heroe.name} </h1>
        </>
      ))}
    </div>
  );
};
