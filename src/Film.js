import React from 'react'

const Film = ({Title, bild, Director, kat}) => {
  //atrubut
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert ('This is FE film lista');
  };
  const exempel = (Director) => {
    console.log(Director);
  }
  return (
  <article className='film' onMouseOver = {() => {
    console.log(Title);
  }}>
     <img src ={bild} alt =''/>
     <h1 onClick = {() => console.log(Title)}> {Title}</h1>
    <h3>{Director}</h3>
    <h1>{kat}</h1>
    <button type='button' onClick={clickHandler}>
       Knapp</button>
       <button type = "button" onClick={exempel(Director)
      }>
        mer exempel
        </button>
    </article>
  );
 };
 
export default Film