import Navbar from './Component/Navbar';
import './App.css';
import Hello from './Component/Hello';
import Posts from './Component/Posts';

import CounterWrap from './Component/counter_wrap';
import { useState } from 'react';
import Banner from './Component/Header/banner';
import Header from './Component_snap/header';
import FormSearh from './Component_snap/formSearch';


function App() {

  const list_counter = [
    {id: 1, value: 0},
    {id: 2, value: 0},
    {id: 3, value: 0}
  ];

  let [count, setCount] = useState(list_counter);

  let tanglen = (counterby) =>{
    const counters = [...count];  //copy list
    const index = counters.indexOf(counterby);
    counters[index] = {...counters[index]}; //set all property to object by index - valid object
    counters[index].value++;

    setCount(counters);

  }

  let giamxuong = (counterby) =>{
    const counters = [...count];  //copy list
    const index = counters.indexOf(counterby);
    counters[index] = {...counters[index]}; //set all property to object by index - valid object
    counters[index].value--;

    setCount(counters);
  }

  let xoaluon = (counterId) =>{
    const counters = count.filter(items => items.id !== counterId); // lay gia list khong co id trung voi id duoc chon
    setCount(counters);

  }

  let lamtuoi = () =>{
    const counters = count.map(items => {
      items.value = 0;
        return items;
    });

    setCount(counters);

  }

  let reset = () =>{
    setCount(list_counter);
  }


  //==================================== SNAPSHOT FUNCTION ================================




  return (
    <div className="App">
      <Banner />
      <div className="container">
        <Navbar totalItems = {count.filter(item => item.value > 0).length}/>

        <CounterWrap 
          list_counter={count}
          refresh = {lamtuoi}
          recycle = {reset}
          tang = {tanglen}
          giam = {giamxuong}
          xoa  = {xoaluon}
        />

        <br/>
        <Hello myName='Nampd'/>

        <Header/>
        <FormSearh/>



        <Posts />
      </div>
    </div>
  );
}

export default App;
