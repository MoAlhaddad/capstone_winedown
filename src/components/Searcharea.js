import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';


const SearchArea = (props) => {
        return (
            <div className="search-area">
                <form action="">
                    <input onChange={props.handleSearch} type="text"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
        
    }
 


export default SearchArea;
