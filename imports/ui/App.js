import React, { Component } from 'react';
import SearchBar from './Search_Bar';
import WeatherList from './Weather_List';


export default class App extends Component {
    
    render() {
        document.body.style = 'background:linear-gradient(to bottom right,  #48c9b0 , #5dade2); height: 100%; margin: 0; background-repeat: no-repeat; background-attachment: fixed;';

        return (
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>        
        );
    }
}