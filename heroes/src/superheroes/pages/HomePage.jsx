import marvel from "../../assets/marvel.svg";
import dc from "../../assets/dc.svg";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();
  const goDc = () => {
    navigate("/dc");
  };
  const goMarvel = () => {
    navigate("/marvel");
  };
  return (
    <>
      <div className="flex flex-row justify-around items-center mt-10">
        <img
          alt="MARVEL"
          onClick={goMarvel}
          src={marvel}
          className="animate__animated  animate__infinite animate__rubberBand  rounded-lg cursor-pointer m-4 object-contain h-48 w-60"
        />
        <h1 className=" text-center text-3xl uppercase mt-12 text-green-300 ">
          vs
        </h1>

        <img
          alt="DC"
          onClick={goDc}
          src={dc}
          className="animate__animated animate__infinite animate__rubberBand rounded-lg cursor-pointer m-4 object-contain h-48 w-50"
        />
      </div>
    </>
  );
};
