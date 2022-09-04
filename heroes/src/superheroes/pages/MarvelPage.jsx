import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
        Top 20
      </h1>
      <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
        <span classNameName="text-red-500">Marvel</span> Super heroes
      </h4>

      <div classNameName="grid sm:grid-cols-4 gap-4">
        {getHeroes.map((heroe) => (
          <div key={heroe.id}>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img
                  className="rounded-t-lg"
                  src={heroe.image}
                  alt={heroe.name}
                />

                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {heroe.name}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    {heroe.description.substring(0, 180).concat("...")}
                  </p>
                  <Link to={`/heroe/${heroe.id}`}>
                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
