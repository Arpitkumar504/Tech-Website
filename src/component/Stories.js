import React from 'react'
import { BsFillClockFill } from 'react-icons/bs'
import { useGlobalContext } from '../context/Context'
import Card from '../component/Card.js'

const Stories = () => {
    const { data, isLoading } = useGlobalContext();
    if (isLoading) {
        return (
            <div className="story">
                <h5>Loading... <BsFillClockFill /></h5>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="storydata">
                {
                    data.map((element, index) => {
                        const { title, author, num_comments, url, created_at, objectID } = element;
                        return (
                            <Card
                                key={objectID}
                                title={title}
                                author={author}
                                comment={num_comments}
                                created={created_at.slice(0, 10)}
                                url={url}
                                object={objectID}
                            />
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Stories
