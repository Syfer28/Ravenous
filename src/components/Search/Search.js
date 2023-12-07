import React from 'react';
import './Search.css'


const sortOption = {
    match: 'Best Match',
    rate: 'Highest Rated',
    review: 'Most Reviewed'
}

const Search = () => {
    const list = () => {
        const listItems = Object.values(sortOption).map((value, index) =>
          <li key = {index}>{value}</li>
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
            <div className = 'search_input'>
                <input className = 'search_input_bussinesses'placeholder='Seacrh businesses'/>
                <input className = 'search_input_where'placeholder='Where?'/>
            </div>
            <button className = 'search_button' type = 'submit'>Let's Go</button>
        </div>
    )
}

export default Search;