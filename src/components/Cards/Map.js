import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"; 
import ReactTooltip from "react-tooltip";

 
const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};


const Map = ({item}) => {    
  
/*  const ret = (code) => {
     
    const lis = item.map((it, index) => {       
      if (it.statecode === code)
      return it.confirmed;                    
    });     
     return lis;
  }
*/  
  //const arr = ret();
  //console.log(arr);

/*const ret = (code) => {
  return parseInt(Math.random() * 100);
};*/

  //console.log(typeof item);
  
  var ll = 0;
  const ret = (code) => {         
       
    for (let i = 0; i < item.length; i += 1) {
      if (item[i].statecode === code) {
        ll = parseInt(item[i].confirmed);
        //console.log("it is ", item[i].statecode);
        break;
      }
      //console.log(ll);
    }  
    return ll ;
  }    
  //console.log(item.length);

    const getStateData = () => {
      return [
        { id: "AP", state: "Andhra Pradesh", value: ret("AP") },
        { id: "AR", state: "Arunachal Pradesh", value: ret("AR") },
        { id: "AS", state: "Assam", value: ret("AS") },
        { id: "BR", state: "Bihar", value: ret("BR") },
        { id: "CT", state: "Chhattisgarh", value: ret("CT") },        
        { id: "GA", state: "Goa", value: ret("GA") },
        { id: "GJ", state: "Gujarat", value: ret("GJ") },
        { id: "HR", state: "Haryana", value: ret("HR") },
        { id: "HP", state: "Himachal Pradesh", value: ret("HP") },
        { id: "JK", state: "Jammu and Kashmir", value: ret("JK") },
        { id: "JH", state: "Jharkhand", value: ret("JH") },
        { id: "KA", state: "Karnataka", value: ret("KA") },
        { id: "KL", state: "Kerala", value: ret("KL") },
        { id: "MP", state: "Madhya Pradesh", value: ret("MP") },
        { id: "MH", state: "Maharashtra", value: ret("MH") },
        { id: "MN", state: "Manipur", value: ret("MN") },
        { id: "ML", state: "Meghalaya", value: ret("ML") },
        { id: "MZ", state: "Mizoram", value: ret("MZ") },
        { id: "NL", state: "Nagaland", value: ret("NL") },
        { id: "OR", state: "Odisha", value: ret("OR") },
        { id: "PB", state: "Punjab", value: ret("PB") },
        { id: "RJ", state: "Rajasthan", value: ret("RJ") },
        { id: "SK", state: "Sikkim", value: ret("SK") },
        { id: "TN", state: "Tamil Nadu", value: ret("TN") },
        { id: "TS", state: "Telangana", value: ret("TS") },
        { id: "TR", state: "Tripura", value: ret("TR") },
        { id: "UK", state: "Uttarakhand", value: ret("UT") },
        { id: "UP", state: "Uttar Pradesh", value: ret("UP") },
        { id: "WB", state: "West Bengal", value: ret("WB") },         
        { id: "AN", state: "Andaman and Nicobar Islands", value: ret("AN")},
        { id: "CH", state: "Chandigarh", value: ret("CH") },
        
        { id: "DN", state: "Dadra and Nagar Haveli", value: ret("DN") },
        { id: "DD", state: "Daman and Diu", value: ret("DD") },
        { id: "DL", state: "Delhi", value: ret("DL") },
        
        { id: "LA", state: "Ladakh", value: ret("LA") },
        { id: "LD", state: "Lakshadweep", value: ret("LD") },
        { id: "PY", state: "Puducherry", value: ret("PY") },
      ];
    };

  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getStateData());
   
  const onMouseEnter = (geo, current = { value: 'NA' }) => {                
      return () => {        
        setTooltipContent(`${geo.properties.name}: ${current.value}`);       
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };
   

  return (
    <div className="full-width-height container">
       <h1 className="no-margin center">States and UTs</h1>
          
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              //console.log(geo.id);
              const current = data.find((s) => s.id === geo.id);
              //console.log(data);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}                                    
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
        </ComposableMap>                 
    </div>
  );
}

export default Map;


/*
import React,{useState} from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
 
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = ({ item }) => {

 
   
    return (
<>
    <div>
        <ComposableMap>
            <Geographies geography={geoUrl}>
                    {({ geographies }) =>                            
                            geographies.map((geo) => (                        
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}                                                          
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
            </div>
     </>     
  );     
};

export default Map;
*/