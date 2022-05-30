export default async function apiGiphy(keyword) {
  const api_key = "ecb7oWws7gW6rshkvIiNRrxydHrTK6WT&q";
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}=${keyword}&limit=24&offset=0&rating=g&lang=en`;

  return await fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const apiGifts = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return apiGifts;
    });
}
