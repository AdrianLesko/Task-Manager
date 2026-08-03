import {useState} from 'react'
import './filter.css'

export default function Filter ({filterValue, handleFilterChange, sortingValue, handleSortChange}) {

    return (
        <div className='filter-wrapper'>

            <div className='filter icon-box'>
                <img
                    src='/src/assets/filter2.png'
                    alt='filter icon'
                    width='18px'
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
            <div className='sort icon-box'>
                <img 
                    src='/src/assets/sort.png'
                    alt='sort icon'
                    width='18px'
                />

                <select
                    id='sort-select'
                    value={sortingValue}
                    onChange={(e) => handleSortChange(e.target.value)}
                >   
                    <option value='latest'>Latest</option>
                    <option value='completed-first'>Completed first</option>
                    <option vlaue='priority'>Priority</option>
                </select> 
            </div>
        </div>
    )
}