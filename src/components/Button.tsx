import React from 'react'
import { IButtonProps } from '../types/buttonTypes'

export default function Button(data: IButtonProps) {
    return (
        <button onClick={() => data.onClickFunc(data.param)} className='srn-miniapp-cart-btn'>{data.title}</button>
    )
}