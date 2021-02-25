import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const content=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, culpa nemo? A dignissimos saepe aliquid, quos perferendis atque ad voluptates nostrum soluta ratione eos, provident, impedit alias. Molestias, iste veniam.';

  const students=[
    {name:'Tuhin',id:12,dept:'CSE'},
    {name:'Arafat',id:13,dept:'CMS'},
    {name:'Shakib',id:44,dept:'BBA'},
    {name:'Sakira',id:77,dept:'ARTS'},
    {name:'Subonra',id:77,dept:'MUSIC'},
    {name:'Anika',id:77,dept:'PHARMACY'},
  ]
  const hotels = [
    {hotel:'Seraton',cost:'$200/day',quality:'High Class'},
    {hotel:'SonarGao',cost:'$150/day',quality:'Mid Class'},
    {hotel:'Pankouri',cost:'$50/day',quality:'Low Class'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <h2>React app is starting </h2>
            <MovieCounter></MovieCounter>
            <hr/>
            {
              students.map( std => <Students name={std.name} id={std.id} dept={std.dept}></Students>)
            }
            {
              hotels.map(hotelInfo => <Hotels hotel={hotelInfo.hotel} cost = {hotelInfo.cost} quality={hotelInfo.quality}></Hotels>)
            }
            <hr/>
          
            <Blog name='HTML Blog' content ={content}></Blog>
            <Blog name ='CSS Blog' content={content}></Blog>
            <Blog name='JS Blog' content={content}></Blog>
            <Blog name='React Blog' content={content}></Blog>
            <Blog name='Node js Blog' content={content}></Blog>
      </header>
    </div>
  );
}
function Blog(props){
const blogStyle ={
  border:'3px solid green',
  borderRadius:'10px',
  padding:'30px',
  margin:'20px',
  width:'600px',
  color:'gold'  
}
const btnStyle={
  padding:'10px 20px',
  backgroundColor:'green',
  border:'none',
  borderRadius:'10px',
  color:'white',
  fontSize:'18px'
  
}
  return(
    <div style={blogStyle}>
      <h1>{props.name}</h1>
      <p>{props.content}</p>
     <button style={btnStyle}> Read More</button>
    </div>
  )
}
// ---------------------------------Movie Counter State------------------------
function MovieCounter(){
  //Declare state
    const [count, setCount]=  useState(0);

  // arrow increase decrease function  
    const addMovie =() => setCount(count+1);
    const minusMovie =() => setCount(count-1);

// Button style bellow
    const addBtnStyle={
      padding:'10px',
      borderRadius:'10px',
      backgroundColor:'green',
      marginRight:'20px',
      fontSize:'20px',
      color:'white'
    }
    const removeBtnStyle={
      padding:'10px',
      borderRadius:'10px',
      backgroundColor:'red',
      fontSize:'20px',
      color:'white'
    };
  
  return(
    <div>
      <button style={addBtnStyle} onClick={addMovie}>Increase</button>
      <button style={removeBtnStyle} onClick={minusMovie}>Dicrease</button>
      <h2>Number Of Movies : {count}</h2>
      <Movies movies={count}></Movies>
      <Foods foods = {count}></Foods>
      <GentsDress gentDress ={count + 4}></GentsDress>
      <LadiesDress ladiesDress ={count + 9}></LadiesDress>
      
    </div>
    
  )
}
function Movies(props){

  return <h3>Movies I have acted : {props.movies}</h3>
}
function Foods(props){

  return <h2>Food Item : {props.foods}</h2>
}

function GentsDress(props){

  return (
    <div>
      <h2>Dress Item Gents: {props.gentDress}</h2>   
    </div>
  )
}
function LadiesDress(props){

  return (
    <div>
      <h2>Dress Item Ladies: {props.ladiesDress}</h2>   
    </div>
  )
}

//Student Array Rendering using map 

function Students(props){

  return (

    <div style={{width:'400px',border:'3px solid skyblue',borderRadius:'20px', backgroundColor:'#8A3321',padding:'30px', margin:'20px'}}>
      <h1>Name: {props.name}</h1>
      <h2>ID : {props.id}</h2>
      <h2>Dept: {props.dept}</h2>
    </div>
  )
}

// Hotels Array rendering using map
function Hotels(props){

  return(
    <div style={{width:'400px',border:'3px solid skyblue',borderRadius:'20px', backgroundColor:'black',padding:'30px', margin:'20px'}}>
      <h2>Hotel: {props.hotel}</h2>
      <h3>Cost: {props.cost}</h3>
      <h3>Quality: {props.quality}</h3>
    </div>
  )
}
export default App;
