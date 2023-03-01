import React from 'react';

const Social = ({domain, image}) => {
    return (
        <div>
            <h4>Descubre más: <a href={`${domain}`} target="_blank"><img src={`${image}`} alt="" /></a></h4>
        </div>
    );
};

export default Social;