import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component {
    
    constructor(props){
		super(props);

		//use the state to display the input value instead of the other way around
		//thus we need to initialize the state term to empty string
		this.state = {term:''};

		//whenever callback is just a function without fat arrow, and the function calls this
		//we have to bind the function to this.
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}


	onInputChange(event){
		//console.log(event.target.value);
		this.setState({term:event.target.value});
	}


	onFormSubmit(event){
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}

    render(){
		return (
			<div className="col-12 col-md-12 col-lg-12">
				<div className="title-container">
					<img src="icon.png" className="icon-img"/>
					<h1 className="title-text">Canada City Weather Search</h1>
				</div>
				<form onSubmit={this.onFormSubmit} className="input-group search-bar">
					<input 
						placeholder="Search weather with city name..."
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Search</button>
					</span>
				</form>
			</div>
			
		);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
