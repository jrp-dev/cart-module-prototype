import React from 'react';
import useButtonViewModel from '../model/useButtonViewModel';
export default function Button(data) {
    const { onClickFunc } = useButtonViewModel(data);
    return (React.createElement("button", { onClick: onClickFunc, className: `srn-miniapp-cart-btn ${data.className}` }, data.title));
}
