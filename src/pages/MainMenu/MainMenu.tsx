import "./MainMenu.css";
import { useNavigate } from "react-router-dom";


const MainMenu = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-hero">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block text-amber-100">Ready to start game?</span>
          <span className="block text-emerald-200">Start new game</span>
        </h2>
        <div className="mt-8 flex lg:mt-0">
          <button
            onClick={() => navigate("/settings")}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainMenu;
