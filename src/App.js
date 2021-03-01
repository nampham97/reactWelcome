import Navbar from './Component/Navbar';
import './App.css';
import Hello from './Component/Hello';
import Posts from './Component/Posts';

import CounterWrap from './Component/counter_wrap';
import { useState } from 'react';
import Banner from './Component/Header/banner';
import Header from './Component_snap/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemInfoSearch from './Component_snap/Item';
import SearchInfo from './Component_snap/SearchInfo';
import NotFound from './Component_snap/NotFound';
import PhotoContextProvider from './Context/photoContext';

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
  const renderSearch = (prop) => (
    <Header handleSubmit = {handleSubmit} history={prop.history}/>
  )
    

  const handleSubmit = (e, history, searchEntry) => {
    e.preventDefault();
    console.log(searchEntry);
    let url = `/search/${searchEntry}`;
    history.push(url);
    console.log('history:', history);
  }

  const renderSearchInput = (prop) =>{
    console.log('propne:' ,prop);
    return <SearchInfo searchCondtion={prop.match.params.searchInput}></SearchInfo>
  }


  return (
    <PhotoContextProvider>
    <div className="App">
      <BrowserRouter>
      <Banner />
        <Navbar totalItems = {count.filter(item => item.value > 0).length}/>
      <div className="container">

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


        <Route render = {renderSearch}>
        </Route>

        <Switch>
          <Route exact path="/Travel" render={() => <ItemInfoSearch searchCondtion='Travel'/>}></Route>
          <Route exact path="/Car" render={() => <ItemInfoSearch searchCondtion='Car'/>}></Route>
          <Route exact path="/Fashion" render={() => <ItemInfoSearch searchCondtion='Fashion'/>}></Route>
          <Route exact path="/Animals" render={() => <ItemInfoSearch searchCondtion='Animals'/>}></Route>

          <Route exact path='/search/:searchInput' render={renderSearchInput}/>

          
          <Route component={NotFound}/>
        </Switch>

        <Posts />
      </div>
      </BrowserRouter>

    </div>
    </PhotoContextProvider>
  );
}

export default App;
