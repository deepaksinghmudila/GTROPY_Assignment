import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"; 
import ReactTooltip from "react-tooltip";

 
const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

/*const getStateData = () => {
      return {
        confirmed: item.confirmed,         
        state: item.state,
        statecode:item.statecode,
        lastupdatedtime: item.lastupdatedtime,
      };
    };*/

const Map = ({item}) => {    
     
    const getConfirm  = (code) => {         
        const ind = item.map((it, value) => {
            return (
                    it.statecode === code ? parseInt(it.confirmed) : null                   
                );
        });         
        return ind; 
    }     

    const getStateData = () => {
      return [
        { id: "AP", state: "Andhra Pradesh", value: getConfirm("AP") },
        { id: "AR", state: "Arunachal Pradesh", value: getConfirm("AR") },
        { id: "AS", state: "Assam", value: getConfirm("AS") },
        { id: "BR", state: "Bihar", value: getConfirm("BR") },
        { id: "CT", state: "Chhattisgarh", value: getConfirm("CT") },        
        { id: "GA", state: "Goa", value: getConfirm("GA") },
        { id: "GJ", state: "Gujarat", value: getConfirm("GJ") },
        { id: "HR", state: "Haryana", value: getConfirm("HR") },
        { id: "HP", state: "Himachal Pradesh", value: getConfirm("HP") },
        { id: "JK", state: "Jammu and Kashmir", value: getConfirm("JK") },
        { id: "JH", state: "Jharkhand", value: getConfirm("JH") },
        { id: "KA", state: "Karnataka", value: getConfirm("KA") },
        { id: "KL", state: "Kerala", value: getConfirm("KL") },
        { id: "MP", state: "Madhya Pradesh", value: getConfirm("MP") },
        { id: "MH", state: "Maharashtra", value: getConfirm("MH") },
        { id: "MN", state: "Manipur", value: getConfirm("MN") },
        { id: "ML", state: "Meghalaya", value: getConfirm("ML") },
        { id: "MZ", state: "Mizoram", value: getConfirm("MZ") },
        { id: "NL", state: "Nagaland", value: getConfirm("NL") },
        { id: "OD", state: "Odisha", value: getConfirm("OD") },
        { id: "PB", state: "Punjab", value: getConfirm("PB") },
        { id: "RJ", state: "Rajasthan", value: getConfirm("RJ") },
        { id: "SK", state: "Sikkim", value: getConfirm("SK") },
        { id: "TN", state: "Tamil Nadu", value: getConfirm("TN") },
        { id: "TS", state: "Telangana", value: getConfirm("TS") },
        { id: "TR", state: "Tripura", value: getConfirm("TR") },
        { id: "UT", state: "Uttarakhand", value: getConfirm("UT") },
        { id: "UP", state: "Uttar Pradesh", value: getConfirm("UP") },
        { id: "WB", state: "West Bengal", value: getConfirm("WB") },         
        { id: "AN", state: "Andaman and Nicobar Islands", value: getConfirm("AN")},
        { id: "CH", state: "Chandigarh", value: getConfirm("CH") },
        
        { id: "DN", state: "Dadra and Nagar Haveli", value: getConfirm("DN") },
        { id: "DD", state: "Daman and Diu", value: getConfirm("DD") },
        { id: "DL", state: "Delhi", value: getConfirm("DL") },
        
        { id: "LA", state: "Ladakh", value: getConfirm("LA") },
        { id: "LD", state: "Lakshadweep", value: getConfirm("LD") },
        { id: "PY", state: "Puducherry", value: getConfirm("PY") },
      ];
    };

  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getStateData());
   
    const onMouseEnter = (geo, current = { value: 0 }) => {         
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
              console.log(geo.id);
              const current = data.find((s) => s.id === geo.id);
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