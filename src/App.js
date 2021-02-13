import React from "react";
import './App.css';
import { Cards } from "./components";  
import { fetchData } from "./api";  

 class App extends React.Component {
   state = {
     data: [],
     state: "",
   };

   async componentDidMount() {
     const fetchedData = await fetchData();

     //console.log(fetchedData.data.statewise[0].recovered);
     //console.log(fetchedData);      

     this.setState({ data: fetchedData });      
     //console.log(fetchedData[fetchedData.length-1].active);     
   }   

   render() {
     const { data,state } = this.state;      
     //for (let i = 0; i < data.length;  i+= 1)
       //console.log(data[i].ative);

     return (               
       <div className="container">
         this is app div
          <Cards data={data}/> 
       </div>
     );
   }
 }

 export default App;