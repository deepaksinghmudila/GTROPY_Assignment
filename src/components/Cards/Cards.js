import React from 'react';
import './Cardsmodule.css';
 

const Cards = (data) => {
       
    //console.log(data.length);
    const state = [];
    const active=[]; const deaths=[];

    for (let i = 0; i < data.length; i += 1)
    {
        state[i] = data[i].state;
        active[i] = data[i].active;
    }

    for (let i = 0; i < data.length; i += 1)
    {          
      console.log(active[i]);
    }

    return (
      <div className="cardbox">
        <div className="cardrow">
          <div className="c1">this is cards div</div>
          <div className="c2"> </div>
          <div className="c3"> </div>
          <div className="c4"> </div>
        </div>
        <div className="row2">
          <div className="statename"></div>
          <div className="lastupdatedate"></div>
        </div>
        <div classname="map"></div> 
      </div>
    );
};

export default Cards;