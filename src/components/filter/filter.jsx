import {useState} from 'react'
import './filter.css'

export default function Filter ({filterValue, handleFilterChange}) {

    return (
        <div className='filter-wrapper'>
            <img
                src='/src/assets/filter.png'
                alt='filter icon'
                width='10px'
            />

            <select 
                id='filter-select'
                value={filterValue}
                onChange={(e) => handleFilterChange(e.target.value)}
            >
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='not-completed'>Not completed</option>
            </select>
        </div>
    )
}