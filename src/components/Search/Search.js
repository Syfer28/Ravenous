import React, { useState } from 'react';
import './Search.css'


const sortOption = {
    match: 'Best Match',
    rate: 'Highest Rated',
    review: 'Most Reviewed'
}

const styles = {
    color: '#daa646',
    borderColor: '#daa646',
}

const Search = () => {
    const [active, setActive] = useState(null);

    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    const handleTermChange = ({ target }) => {
        setTerm(target.value);
    }
    const handleLocationChange = ({ target }) => {
        setLocation(target.value);
    }
    const handleSortByChange = (value) => {
        setSortBy(value);
    }

    const handleSearch = event => {
        event.preventDefault();
        console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
    }

    const list = () => {
        const listItems = Object.values(sortOption).map((value, index) => (
            <li
                key={index}
                style={index === active ? styles : null}
                onClick={() => {
                    setActive(index);
                    handleSortByChange(value);
                }}
            >
                {value}
            </li>
        ));
        return (
          <ul>{listItems}</ul>
        );
    };
    return (
        <div className = 'search_container'>
            <div className = 'search_sort'>
                {list()}
            </div>
            <form className = 'search_field' onSubmit={handleSearch}>
                <div className='search_input'>
                    <input className = 'search_input_bussinesses' placeholder='Seacrh Businesses' value={term} onChange={handleTermChange} />
                    <input className = 'search_input_where' placeholder='Where?' value={location} onChange={handleLocationChange} />
                </div>
                <button className = 'search_button' type = 'submit'>Let's Go</button>
            </form>
        </div>
    )
}

export default Search;