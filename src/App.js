import React from "react";
import './App.css';
import { Cards,Chart,Table } from "./components";  
import { fetchData } from "./api";  

 class App extends React.Component {
   state = {
     data: [],
     states: "",
   };

   async componentDidMount() {
     const fetchedData = await fetchData();

     //console.log(fetchedData.data.statewise[0].recovered);
     //console.log(fetchedData);      

     this.setState({ data: fetchedData });      
     //console.log(fetchedData[fetchedData.length-1].active);     
   }   

   render() {
     const { data,states } = this.state;      
     //for (let i = 0; i < data.length;  i+= 1)
       //console.log(data[i].ative);

     return (               
       <div className="container">          
         <Cards data={data} />          
         <Chart data={data} />
         <Table data={data} /> 
       </div>
     );
   }
 }

 export default App;