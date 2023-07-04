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
			// console.log(data)
		} catch (error) {
			setWeatherData(null);
			setError(error.message);
		}
	};

	return (
		<div className='h-24 md:w-[70%] w-11/12 rounded-2xl p-5 bg-blue-1  m-6 mx-auto'>
			<form className='flex gap-2 ' onSubmit={handleSearch}>
				<input
					className='w-[85%]  bg-slate-500 h-8 rounded-full p-4 focus:outline-0	 focus:bg-white focus:placeholder-gray-600 ease-linear'
					type='text'
					value={address}
					onChange={(e) => setAddres(e.target.value)}
					placeholder='Digite o endereço'
				/>
				<button
					className='bg-blue-600/30 hover:bg-blue-900/80 text-white font-bold  border border-blue-700 rounded-full w-16 h-8 flex justify-center '
					type='submit'>
					<img
						className='-mt-0 hover:stroke-bg-red-600 '
						width='32px'
						height='35px'
						src='/icons/search.svg'
					/>
				</button>
			</form>
			{error && <div>{error}</div>}
		</div>
	);
}

export default weatherSearch;
