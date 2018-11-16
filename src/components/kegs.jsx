import React from 'react';
import { getKegList } from '../services/kegService';

const Kegs = () => {
  const kegs = getKegList();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>brewer</th>
          <th>abv</th>
          <th>price</th>
          <th>remaining</th>
          <th />
        </tr>
      </thead>

      <tbody>
        {kegs.map((keg, index) => (
          <tr key={index}>
            <td>{keg.name}</td>
            <td>{keg.brewer}</td>
            <td>{keg.abv}</td>
            <td>{keg.price}</td>
            <td>{keg.remaining}</td>
            <td>
              {/* <Like /> */}
              Like!
            </td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Kegs;
