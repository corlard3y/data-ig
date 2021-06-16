import React,{ Fragment } from 'react';
import data from '../components/data/data.json'
import Posts from './Posts';

function Post({props}) {
    console.log(props);
    console.log(data.filter(data => data.id === '1'));
    
    return (
        <Fragment>
     <div className="">
        <div className=''>
          
          {/* {data.map((x)=>(
            <Posts key={x.id}
              data={x}
            />
          ))} */}
        </div>
    </div>
        </Fragment>
    )
}

export default Post
