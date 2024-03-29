import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/tv/";
const POPULAR_REQUEST = "popular";
const RECOMMENDATIONS_REQUEST = "52814/recommendations";
const API_KEY = "?api_key=6d6977fb3d49280ccc2a654f664bcb2e";

export async function getRecommendations() {
	let response = await axios({
		method: 'get',
		url: `${BASE_URL}${RECOMMENDATIONS_REQUEST}${API_KEY}`,
	});
	return response.data;
}