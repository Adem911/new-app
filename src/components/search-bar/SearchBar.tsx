import React from "react";
import { Input } from 'antd';

const Search = Input.Search;

const SearchBar =(props:any)=> {
  
    return (
      <div>
        <Search
          placeholder="input search text"
          enterButton="Search"
          onSearch={value => props.streamSearch(value)}
          size="large"
          
        />
      </div>
    );
  
}

export default SearchBar;
