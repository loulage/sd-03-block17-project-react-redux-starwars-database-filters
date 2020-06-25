import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUE, REMOVE_FILTER, SORT_COLUMNS } from '../actions/filters';

const INITIAL_STATE = {
  filterByName: {
    name: ''
  },
  filterByNumericValue: [
    {
      column: '',
      comparison: '',
      value: '',
    }
  ],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
}

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {name: action.value},
      };
    case FILTER_BY_NUMERIC_VALUE:
      return {
        ...state,
        filterByNumericValue:
          state.filterByNumericValue[0].column === ''
            ? action.parameters
            : [...state.filterByNumericValue, action.parameters],
      };
      case REMOVE_FILTER:
        return {
          ...state,
          filterByNumericValues: [
            ...state.filterByNumericValue.filter(
              (filter) => filter !== action.value,
            ),
          ]
        };
      case SORT_COLUMNS:
        return {
          ...state,
          order: { column: action.value.column, sort: action.value.order },
        };
      default:
        return state;
  }
}

export default filters;
