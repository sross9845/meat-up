import React from 'react';

const FilterInput = props => {
    return (
        <div className='filter-input'>
            <h4>Search for an Event:</h4>
            <input type='text' value={props.value} onChange={props.handleFilterChange} name='event-filter' />
        </div>
    )
}

export default FilterInput;