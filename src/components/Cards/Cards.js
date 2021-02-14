import React from 'react';
import './Cardsmodule.css';
import Map from './Map.js';

const Cards = ({ data}) => {
         
    const item = data.map((item, index) => {
        return {
            confirmed: item.confirmed,
            active: item.active,
            death: item.death,
            recovered: item.recovered,
            state: item.state,
            statecode: item.statecode,
            lastupdatedtime: item.lastupdatedtime
        };
    }); 
           
    //console.log(item[0].lastupdatedtime);  // item is an array of objects with 38 length

    return (
      <div className="cardbox">
        <div className="cardrow">
          <div className="c1"></div>
          <div className="c2"> </div>
          <div className="c3"> </div>
          <div className="c4"> </div>
        </div>
        <div className="row2">
          <div className="statename"></div>
          <div className="lastupdatedtime"></div>
        </div>             
                <Map item={item}/>              
      </div>
    );
};

export default Cards;