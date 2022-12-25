import React from 'react'
import Pagination from '../component/Pagination.js'
import Search from '../component/Search.js'
import Stories from '../component/Stories.js'

const Home = () => {
    return (
        <div>
            <Search />
            <Pagination/>
            <Stories />
        </div>
    )
}

export default Home
