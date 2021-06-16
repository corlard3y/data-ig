import React from 'react'
import { Link } from 'react-router-dom';

function Posts({ data }) {
    return (
        <div className='w-full p-2 m-4 border rounded-md'>
            <Link to={`/post/${data.id}`}>
            <div className='font-bold'>
                {/* {data.id} */}
                {data.title}
            </div>
                {data.text}
                {data.body}
            </Link>
        </div>
    )
}

export default Posts
