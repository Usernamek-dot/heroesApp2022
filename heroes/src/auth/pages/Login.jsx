import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/home");
  };
  return (
    <>
      <div class="flex space-x-2 justify-center">
        <div>
          <button
            onClick={login}
            type="button"
            class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
