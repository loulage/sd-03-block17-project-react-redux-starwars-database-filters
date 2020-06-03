
const INITIAL_STATE = {
  data: { results: ['Loading ....'] },
  filters: {
    filterByName: {
      name: ' ',
      filteredPlanets: [],
    },
  },
};

function requestReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'RECEIVE_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'FILTER_PLANET_DATA':
      const filterName = action.filters.filterByName.name.toLowerCase();
      let filteredPlanets = state.data.results.filter((element) => 
      {const lowerName = element.name.toLowerCase();
        console.log(element.name , lowerName);
      return lowerName.includes(filterName)});
      console.log(filteredPlanets,"planetas filtrados");
      console.log(filterName, "FIlter,e");
      return {
        ...state,
        filters: { filterByName: { filterName,filteredPlanets: [filteredPlanets] } },
      };
    default:
      return state;
  }
}

export default requestReducer;