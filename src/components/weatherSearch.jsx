import React, { useContext, useState } from "react";
import { fetchWeatherData } from "../api.js";
import WeatherContext from "../weatherContext.js";

function weatherSearch() {
  let [address, setAddres] = useState("");
  const { setWeatherData } = useContext(WeatherContext);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    address = address ? address : "Maringá - PR";
    try {
      const data = await fetchWeatherData(address);
      setWeatherData(data);
      setError("");
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  return (
    <div className="h-18 md:w-[65%] w-11/12 rounded-2xl bg-blue-1  m-6 mx-auto flex flex-row items-center justify-center p-5">
      <form
        className="flex flex-row items-center justify-center gap-2 w-[100%]"
        onSubmit={handleSearch}
      >
        <input
          className="w-[85%] bg-slate-500 h-8 rounded-full p-4 focus:outline-0 border border-white/10 focus:border-blue-300 focus:placeholder-slate-500 focus:bg-slate-500 ease-linear duration-300 "
          type="text"
          value={address}
          onChange={(e) => setAddres(e.target.value)}
          placeholder="pesquise um endereço"
        />
        <button
          className="bg-blue-600/30 hover:bg-blue-900/80 text-white font-bold  border border-blue-700 rounded-full w-16 h-8 flex justify-center "
          type="submit"
        >
          <img
            className="-mt-0 hover:stroke-bg-red-600 "
            width="32px"
            height="35px"
            src="/icons/search.svg"
          />
        </button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}

export default weatherSearch;
