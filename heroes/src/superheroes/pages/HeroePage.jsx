import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import heroesApi from "../../api/Api";
import "animate.css";

export const HeroePage = () => {
  const { heroId } = useParams();
  const [getHeroes, setGetHeroes] = useState([]);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
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
  return (
    <>
      <div
        key={getHeroes.id}
        className="w-1/1 sm:w-1/2 grid sm:grid-cols-2 gap-4 rounded-2xl shadow-2xl bg-gray-800 m-8"
      >
        <img className="w-full h-full rounded-l-2xl" src={getHeroes.image} />
        <h6>Name: {getHeroes.name} </h6>
        <h6>Publisher: {getHeroes.publisher} </h6>
        <h6>Publisher: {getHeroes.publisher} </h6>
        <h6>Premiere: {getHeroes.premiere} </h6>
        <h6>Description: {getHeroes.description} </h6>
      </div>
      <button
        onClick={goBack}
        type="button"
        class="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="arrow-alt-circle-left"
          class="w-7 h-7"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"
          ></path>
        </svg>
      </button>
    </>
  );
};
