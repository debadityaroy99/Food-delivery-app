import React from 'react'
import FilterItem from './filterItem';
import './filter.css'

const Filters = ({filterlist}) => {
  return (
  <div className='filters'>
    {filterlist && 
        filterlist.map((filter)=>{
            return <FilterItem filter={filter} key={filter.id} />;
    })}
  </div>
  );
};

export default Filters;