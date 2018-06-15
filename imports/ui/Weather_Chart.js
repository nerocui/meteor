import React, { Component } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default class WeatherChart extends Component {

    max(list){
        return _.round(_.max(list));
    }

    min(list){
        return _.round(_.min(list));
    }

    render() {
        return (
            <div className="weather-chart">
                <Sparklines data={this.props.data} width={this.props.width} height={this.props.height}>
                    <SparklinesLine color={this.props.color}/>
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div className="weather-chart__data">
                    <div className="weather-chart__data-item">High of {this.max(this.props.data)}</div> 
                    <div className="weather-chart__data-item">Low of {this.min(this.props.data)}</div>
                </div>
            </div>
        );
    }
}