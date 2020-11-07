import React from 'react';

import { Link } from 'react-router-dom';

import countries from '../../countries.json';

function CountryDetails(props) {
  const c3code = props.match.params.country;

  const mountJSX = (country, borderCountries) => {
    console.log(country);
    return (
      <div>
        <h1>{country.name.common}</h1>
        <table>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km²</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{displayBorders(borderCountries)}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const displayCountry = () => {
    const country = countries.find((oneCountry) => oneCountry.cca3 === c3code);
    const borderCountries = countries.filter((oneCountry) =>
      country.borders.includes(oneCountry.cca3)
    );
    return mountJSX(country, borderCountries);
  };

  const displayBorders = (borderCountries) =>
    borderCountries.map((country) => (
      <li key={country.cca3}>
        <Link to={`/detail/${country.cca3}`}>{country.name.common}</Link>
      </li>
    ));

  return displayCountry();
}

export default CountryDetails;
