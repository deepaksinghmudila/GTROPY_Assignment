import axios from "axios";

const url1 = "https://api.covid19india.org/data.json";
const url2 = "https://api.covid19india.org/states_daily.json";


export const fetchData = async () => {
  let changeableUrl = url1;
   
  try {
      const data = await axios.get(changeableUrl);             
      //console.log(typeof(data.data.statewise));
      return data.data.statewise;
      
  } catch (error) {
    console.log(error);
  }    
};





