import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

const columnOptions = [
  'select a collum',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class NumericFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'Maior que',
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type, value) {
    this.setState({
      [type]: value,
    });
  }

  render() {
    const { getPlanetByNumericValues } = this.props;
    return (
      <div>
        <label htmlFor="column-filter">Filtre por coluna</label>
        <select
          data-testid="column-filter" name="column-filter"
          onMouseOver={() => columnOptions.map((e) => <option value={e}>{e}</option>)}
          onChange={(e) => this.handleChange('column', e.target.value)}
        />
        <label htmlFor="comparison-filter">Condição</label>
        <select
          data-testid="comparison-filter" name="comparison-filter"
          onChange={(e) => this.handleChange('comparison', e.target.value)}
        >
          <option value="Maior que">Maior que</option>
          <option value="Menor que">Menor que</option>
          <option value="Igual a">Igual a</option>
        </select>
        <label htmlFor="value-filter">Valor</label>
        <input
          data-testid="value-filter" type="number" maxLength="12"
          onChange={(e) => this.handleChange('value', Number(e.target.value))}
        />
        <button
          data-testid="button-filter"
          onClick={() => getPlanetByNumericValues(this.state)}
        >Filtrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetByNumericValues: (data) => dispatch(actions.filterByNumericValues(data)),
});

export default connect(null, mapDispatchToProps)(NumericFilter);

NumericFilter.propTypes = {
  getPlanetByNumericValues: PropTypes.func.isRequired,
};
