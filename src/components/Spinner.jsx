import React,{Fragment} from 'react';
import spinner from './Blackhole.gif';

const Spinner = () => {
    return (
        <div>
            <Fragment>
                <div className='h-96 w-full flex justify-center items-center'>
                <img
                src={spinner}
                style={{ width: '50px', display:'block'}}
                alt='Loading...'/>
                </div>
            </Fragment>
        </div>
    )
}

export default Spinner;
