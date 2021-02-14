import React from 'react';
import ReactDOM from 'react-dom';

const Table = ({ data }) => {
    


  return (
    <>
      <div className="tablediv">
        <table className="tablecontainer">
          <thead>
            <tr>
              <th>STATE/UT</th>
              <th>CONFIRMED</th>
              <th>ACTIVE</th>
              <th>RECOVERED</th>
              <th>DECEASED</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td> {item.state}</td>
                <td> {item.confirmed}</td>
                <td> {item.active}</td>
                <td> {item.recovered}</td>
                <td> {item.deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;