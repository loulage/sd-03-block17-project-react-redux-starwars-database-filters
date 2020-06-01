import fetchSWAPI from '../services/fetchSWAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const FETCH_PLANETS_SUCESS = 'FETCH_PLANETS_SUCESS';
export const FETCH_PLANETS_FAILURE = 'FETCH_PLANETS_FAILURE';
export const FETCH_PLANETS = 'FETCH_PLANETS';

const requestPlanets = () => ({ type: REQUEST_PLANETS });

const fetchPlanetsSucess = (planets) => ({
  type: FETCH_PLANETS_SUCESS,
  planets,
});

const fetchPlanetsFailure = (error) => ({
  type: FETCH_PLANETS_FAILURE,
  error
});

export const fetchPlanets = () => (
  (dispatch) => {
    dispatch(requestPlanets);

    return fetchSWAPI()
      .then(
        (planets) => fetchPlanetsSucess(planets),
        (error) => fetchPlanetsFailure(error),
      );
  }
);
