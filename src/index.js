import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import Details from './components/season/CommentDetails'
import Card from './components/season/card'
import Season from './components/season/Season'
import SearchBar from './components/videos/searchbar';

const App = ()=>{
    // console.log(faker.image.avatar);
    
    return (
    <>
        {/* <Card> 
        <Details author='bilal'
        time='10:00'
        post='Nice'
        avatar={faker.image.avatar()}
        />
        
        
        </Card>
         <Details author='samad'
        time='11:00'
        post='Aws'
        avatar={faker.image.avatar()}
        />
         <Details author='Ahmed'
        time='12:00'
        post='fun'
        avatar={faker.image.avatar()}
        /> */}
        {/* <Season /> */}
        <div className="ui container">
            <SearchBar  />
        </div>
    </>
    );

}
ReactDOM.render(<App />, document.querySelector('#root') );