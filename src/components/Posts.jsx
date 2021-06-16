import React from 'react'
import { Link } from 'react-router-dom';

function Posts({ data }) {
    return (
        <div className=''>
            <Link to={`/post/${data.id}`}>
            <div>
                {data.id}
                {data.title}
            </div>
                {data.text}
                {data.body}
            </Link>
        </div>
    )
}

export default Posts
