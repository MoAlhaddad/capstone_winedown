import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import SearchArea from './Searcharea';
import request from 'superagent';


class Wines extends Component {
    constructor(props){
        super(props);
        this.state = {
            wines: [],
            searchField: ''
        }
    }

    searchWine = () => {
        // request.get
    }

    handleSearch = (e) => {
        
        this.setState({ searchField: e.target.value })
    }

    
    render() {
        return (
            <div>
                <SearchArea handleSearch={this.handleSearch} />

            </div>
        );
        
    }
  }


export default Wines;
