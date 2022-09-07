import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroesApi from "../../api/Api";
import { Loader } from "../components/Loader";

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
  {
    if (!getHeroes.length) {
      return;
      <div className="flex justify-center items-center">
        <Loader />
      </div>;
    }
  }
  return (
    <>
      <div className="text-center">
        <h1 className="font-medium leading-tight text-5xl mt-2 mb-4 text-slate-600">
          Top <span className="text-red-500">20</span>
        </h1>
        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">
          Marvel Super heroes
        </h4>
      </div>
      <div className="grid sm:grid-cols-4 gap-4">
        {getHeroes.map((heroe) => (
          <div key={heroe.id}>
            <div className="flex justify-center mt-5 p-2">
              <div className="rounded-lg shadow-lg dark:bg-slate-900    max-w-sm  ">
                <img
                  className="rounded-t-lg"
                  src={heroe.image}
                  alt={heroe.name}
                />

                <div className="p-6">
                  <h5 className="text-slate-400 text-xl font-medium mb-2">
                    {heroe.name}
                  </h5>
                  <p className="text-slate-400 text-base mb-4">
                    {heroe.description.substring(0, 180).concat("...")}
                  </p>
                  <Link to={`/heroe/${heroe.id}`}>
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      See more...
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
