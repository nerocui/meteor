import React, { Component } from 'react';
import GoogleMap from './Google_Map';
import WeatherChart from './Weather_Chart';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class WeatherList extends Component {

    renderWeather(cityData){

        if(cityData){//when the user input the wrong city name, the returned request is null, thus we have to handle it here
            const temp = cityData.list.map(weather => weather.main.temp);
            const pres = cityData.list.map(weather => weather.main.pressure);
            const humi = cityData.list.map(weather => weather.main.humidity);
            const w = 250;
            const h = 160;
            return (
                <tr key={cityData.city.name} className="col-12 col-md-12 col-sm-12 col-lg-12 list-item">
                    <td className="col-12 col-sm-12 col-lg-3 col-md-3" >
                        <GoogleMap cityName={cityData.city.name}  className="google-map"/>
                    </td>
                    <td className="col-12 col-sm-12 col-lg-3 col-md-3" >
                        <WeatherChart data={temp} height ={h} color="green"/>
                    </td>
                    <td className="col-12 col-sm-12 col-lg-3 col-md-3" >
                        <WeatherChart data={pres} height ={h} color="blue"/>
                    </td>
                    <td className="col-12 col-sm-12 col-lg-3 col-md-3" >
                        <WeatherChart data={humi} height ={h} color="cyan"/>
                    </td>
                </tr>
            );
        }

        return (
            <tr>
                <td>
                    <h1>That</h1>
                </td>
                <td>
                    <h1>City</h1>
                </td>
                <td>
                    <h1>Doesn't</h1>
                </td>
                <td>
                    <h1>Exist!</h1>
                </td>
            </tr>
        );
        
    }

    render() {
        return (
            <table className="table col-12 col-md-12 col-sm-12 col-lg-12">
                <thead className="col-12 col-md-12 col-sm-12 col-lg-12">
                    <tr className="col-12 col-md-12 col-sm-12 col-lg-12">
                        <th className="col-12 col-sm-12 col-lg-3 col-md-3">City</th>
                        <th className="col-12 col-sm-12 col-lg-3 col-md-3">Temperature</th>
                        <th className="col-12 col-sm-12 col-lg-3 col-md-3">Pressure</th>
                        <th className="col-12 col-sm-12 col-lg-3 col-md-3">Humidity</th>
                    </tr>
                </thead>
                <tbody className="col-12 col-md-12 col-sm-12 col-lg-12">
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}



function mapStateToProp(state){
    return {weather: state.weather};//equal to {weather:state.weather}
}
export default connect(mapStateToProp)(WeatherList);