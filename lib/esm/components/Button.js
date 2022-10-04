import React from 'react';
export default function Button(data) {
    return (React.createElement("button", { onClick: () => data.onClickFunc(data.param) }, data.title));
}
