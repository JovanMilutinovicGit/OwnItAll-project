import jsonPhotos from "../apis/jsonPhotos";

export const fetchRandomPhotos = () => async (dispatch) => {
  const response = await jsonPhotos.get("/photos", {
    headers: {
      Authorization: "Client-ID ymk0YO6NLCiy7lLifZrd5jOvKEly1LpSI7_iYxJeQrc",
    },
  });
  dispatch({ type: "FETCH_RANDOM_PHOTOS", payload: response.data });
  console.log(response.data);
};
