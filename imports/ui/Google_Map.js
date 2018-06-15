import React, { Component } from 'react';

export default class GoogleMap extends Component {
    render() {
        const API_KEY = "AIzaSyBK9y9T04Jv-yqqKrUYy8QL__SlB6OQ4Jc";
        const url = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${this.props.cityName}`;
        return (
            <div className="google-map">
                <h3>{this.props.cityName}</h3>
                <iframe
                    width="100%"
                    height="180"
                    frameBorder="0"
                    src = {url} allowFullScreen>
                </iframe>
            </div>
        );
    }
}