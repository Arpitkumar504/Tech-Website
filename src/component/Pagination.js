import React from 'react'
import { useGlobalContext } from '../context/Context'

const Pagination = () => {
    const { page, noofpages, prev, next } = useGlobalContext();
    return (
        <div className='pagination'>
            <button type='button' onClick={() => { prev() }}>Prev</button>
            <h5>{page} of {noofpages}</h5>
            <button type='button' onClick={() => { next() }}>Next</button>
        </div>
    )
}

export default Pagination
