import React from 'react';

class Table extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { planets } = this.props;
    return (
      <div>
        <h2>StarWars Datatable with Filters</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Diameter</th>
            <th>Population</th>
            <th>Climate</th>
            <th>Orbital period</th>
            <th>Rotation period</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Gravity</th>
            <th>URL</th>
          </tr>
          {planets.map((planet) => (
            <tr key={planet.url}>
              <td>{planet.name}</td>
              <td>{planet.diameter}</td>
              <td>{planet.population}</td>
              <td>{planet.climate}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.gravity}</td>
              <td>{planet.url}</td>
            </tr>
              ))
            }
        </table>
      </div>
    )
  }
};

export default Table;
