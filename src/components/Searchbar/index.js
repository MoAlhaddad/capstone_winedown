import React, { Component } from "react";
import { Button } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";

function SearchBar() {
  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search Wines</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search Wines"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
