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
      <div>
        <h3 className="animate__animated animate__bounce ">DC</h3>
        <img
          onClick={goDc}
          src={dc}
          className="rounded-lg cursor-pointer m-4"
        />
        <span className="text-green-300">vs</span> MARVEL
        <img
          onClick={goMarvel}
          src={marvel}
          className="rounded-lg cursor-pointer m-4"
        />
      </div>
    </>
  );
};
