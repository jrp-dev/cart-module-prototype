import React from 'react'
import { buttonTypes } from './buttonTypes'

export default function Button(data: buttonTypes) {
    return (
        <button onClick={() => data.onClickFunc(data.param)} className='srn-miniapp-cart-btn'>{data.title}</button>
    )
}