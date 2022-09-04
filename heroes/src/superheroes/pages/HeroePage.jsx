import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import heroesApi from "../../api/Api";

export const HeroePage = () => {
  const { heroId } = useParams();
  const [getHeroes, setGetHeroes] = useState([]);
  useEffect(() => {
    gettingHeroes();
  }, []);
  const gettingHeroes = async () => {
    try {
      const resp = await heroesApi.get(`/superheroes/${heroId}`);
      setGetHeroes(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  return <div>Heroe</div>;
};
