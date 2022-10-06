import jsonPhotos from "../apis/jsonPhotos";
import jsonTestimonials from "../apis/jsonTestimonials";

export const fetchRandomPhotos = () => async (dispatch) => {
  const response = await jsonPhotos.get("/photos", {
    headers: {
      Authorization: "Client-ID ymk0YO6NLCiy7lLifZrd5jOvKEly1LpSI7_iYxJeQrc",
    },
  });
  dispatch({ type: "FETCH_RANDOM_PHOTOS", payload: response.data });
  console.log(response.data);
};

export const fetchTestimonials = () => async (dispatch) => {
  const response = await jsonTestimonials.get("/api");
  dispatch({ type: "FETCH_TESTIMONIALS", payload: response.data });
  console.log(response.data);
};
