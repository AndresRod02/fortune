import React from 'react';


const Text = ({phrase, author}) => {
    return (
        <div>
            <div className='lucky'>
            <div className='phrase'>
            <h2>{phrase}</h2>
            </div>
            <h3>{author}</h3>
            </div>
        </div>
    );
};

export default Text;