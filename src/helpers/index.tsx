export function isValidHttpUrl(urlInput: string) {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  return !!urlPattern.test(urlInput);
}

export const fetchTown = async (city: string) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=2f8488811c964dab95b211457251803&q=${city}`
  );
  return response.json();
};
