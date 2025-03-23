
export const exercisesOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "21c2b1e142msh6e4ac9be2d6f986p1056dajsn9b9a481c4366",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '21c2b1e142msh6e4ac9be2d6f986p1056dajsn9b9a481c4366',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
