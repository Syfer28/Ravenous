import React from 'react';
import './Search.css'


const sortOption = {
    match: 'Best Match',
    rate: 'Highest Rated',
    review: 'Most Reviewed'
}

const Search = () => {
    const list = () => {
        const listItems = Object.values(sortOption).map((value) =>
          <li>{value}</li>
        );
        return (
          <ul>{listItems}</ul>
        );
    };
    return (
        <div className = 'search_container'>
            <div className = 'search_sort'>
                {list()}
            </div>
            <div className = 'search_input'></div>
            <button className = 'search_button' type = 'submit'>Let's Go</button>
        </div>
    )
}

export default Search;