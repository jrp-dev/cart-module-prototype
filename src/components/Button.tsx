import React from 'react'
import { IButtonProps } from '../types/buttonTypes'
import useButtonViewModel from '../model/useButtonViewModel'

export default function Button(data: IButtonProps) {

    const { onClickFunc } = useButtonViewModel(data)
    
    return (
        <button onClick={onClickFunc} className={`srn-miniapp-cart-btn ${data.className}`}>{data.title}</button>
    )
}