import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

// ReactDOM.render(<App />, document.getElementById('root'));

const HeaderInfo = {
    thumbnail: <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"></img> ,
    title: <h2>Lambda School</h2>,
    content: "Let's learn React by building simple interfaces with components." 
}

const CardInfo = {
    bannerImage: <img src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"></img>,
    cardContent: 
    <div className="card-description">
    <h3>Get started with React</h3><p>"React makes it painless to create interactive UIs. Design simple views for each state in your application</p><footer><a href="reactjs.org">reactjs.org</a></footer>
    </div>
}

const Element = (
    <div className="reactElement">
    <HeaderContainer headerInfo={HeaderInfo} /> <CardContainer cardInfo={CardInfo} />
    </div>
)

ReactDOM.render(Element, document.getElementById("root"));