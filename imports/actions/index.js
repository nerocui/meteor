import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = '912c116ab50ec50f5eb93f060f319485';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){

	const url = `${BASE_URL}&q=${city},ca`;

	//axios returns a promise, it does not contain data.
	//we are calling it request
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}