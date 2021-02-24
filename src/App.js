import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const content=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, culpa nemo? A dignissimos saepe aliquid, quos perferendis atque ad voluptates nostrum soluta ratione eos, provident, impedit alias. Molestias, iste veniam.';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <h2>React app is starting </h2>
            <MovieCounter></MovieCounter>
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


export default App;
