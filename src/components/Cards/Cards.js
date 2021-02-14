import React from 'react';
import './Cardsmodule.css';
import Map from './Map.js';

const Cards = ({ data}) => {
         
    const item = data.map((item, index) => {         
      var obj ={
            confirmed: item.confirmed,
            active: item.active,
            deaths: item.deaths,
            recovered: item.recovered,
            state: item.state,
            statecode: item.statecode,
            lastupdatedtime: item.lastupdatedtime
      };
        return obj;
    }); 
          
  //console.log(item); 
    //console.log(item[0].lastupdatedtime);  // item is an array of objects with 38 length

    return (
      <div className="cardbox">
        <div className="cardrow">
          <div className="c1">Confirmed</div>
          <div className="c2">Active</div>
          <div className="c3">Recovered</div>
          <div className="c4">Deceased</div>
        </div>
        <div className="row2">
          <div className="statename">statename</div>
          <div className="lastupdatedtime">lastupdated</div>
        </div>             
        <Map item={item}/>              
      </div>
    );
};

export default Cards;