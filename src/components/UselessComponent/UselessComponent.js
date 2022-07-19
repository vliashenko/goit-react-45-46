import React, { memo } from 'react';

const UselessComponent = ({ items }) => {
    console.log("render");
    return (
        <p>
            {items.length}
        </p>
    );
};

export default memo(UselessComponent);