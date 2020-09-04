import React from 'react';
//import { Link } from 'react-router-dom';


const Item=({id, name,html_url})=>(
   <div style={{}}>
   <ul style={{listStyle:'none', padding:0,display:'flex',justifyContent:"center", flexDirection:'row'}}>   
  <li style={{  padding: '5px 10px',border: '1px solid #DDDDDD', width:'30%', backgroundColor:'#EEEEEE'}} key={id}>
     <a href={html_url} id="url"> {name} </a>
     </li>
   </ul>
   </div>
)


export default Item