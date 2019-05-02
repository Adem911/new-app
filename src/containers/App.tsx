import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from '../components/navigation-bar/NavigationBar';
import HomePage from './home-page/HomePage';
import PageOne from './page-1/PageOne';
import PageTwo from './page-2/PageTwo';
import PageThree from './page-3/PageThree';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <div>
        <Route path='/' exact component={HomePage} />
        <Route path='/page1' exact component={PageOne} />
        <Route path='/page2' exact component={PageTwo} />
        <Route path='/page3' exact component={PageThree} />

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
