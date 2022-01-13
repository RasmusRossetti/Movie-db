
import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import {data} from './Data'
import Spec from './Film'
import {greeting} from './new/test'

function FilmList() {
  console.log(greeting)
  return (
  <section className ='FilmList'>
    
    {data.map((film, index) => {
 return <Spec key = {film.id} {...film}></Spec>;

    })}
</section>
  );  
}


reactDOM.render(<FilmList />, document.
  getElementById('root'));