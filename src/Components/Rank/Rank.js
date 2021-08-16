import React from 'react';



const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, you have done total`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
            <div className='white f3'>
                {' face detections'}
            </div>
        </div>
    );
}



export default Rank;