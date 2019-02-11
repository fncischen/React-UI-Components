import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

// ReactDOM.render(<App />, document.getElementById('root'));

const HeaderInfo = {
    thumbnail: <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"></img> ,
    title: "Lambda School",
    content: "Let's learn React by building simple interfaces with components." 
}

ReactDOM.render(<HeaderContainer headerInfo={HeaderInfo} />, document.getElementById("root"))
