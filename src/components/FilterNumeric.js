import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterNumeric } from '../action/index';

export class FilterNumeric extends Component {
  constructor(props) {
    super(props);
    this.filterNumbers = this.filterNumbers.bind(this);
  }

  filterNumbers() {
    const { filterNumber } = this.props ;

    const column = document.getElementById('filter');
    const comparation = document.getElementById('comparation');
    const value = document.getElementById('input-value');
    if (column.selectedIndex > 0 && comparation.selectedIndex > 0 && value.value !== '') {
      const SelectionColumn = column.options[column.selectedIndex].value;
      console.log(SelectionColumn);

      const selectioncomparation = comparation.options[comparation.selectedIndex].value;
      console.log(selectioncomparation);

      const selectionValue = value.value;
      console.log(selectionValue);

      filterNumber();
    } else {
      alert('Preencha Todos os campos para filtrar !');
    }
  }

  render() {
    return (
      <div>
        <select data-testid="column-filter" id="filter">
          <option value=" ">Selecione Uma Opção </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" id="comparation">
          <option value=" ">Selecione Uma Opção </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input type="number" placeholder="numeros" id="input-value" data-testid="value-filter" />
        <button type="button" onClick={this.filterNumbers} data-testid="button-filter"> Filtrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterNumber: (e) => dispatch(filterNumeric(e)),
});

export default connect(null, mapDispatchToProps)(FilterNumeric);
