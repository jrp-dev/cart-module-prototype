import React from 'react'

export default function Text(data: {data: string}) {
    return (
        <span className='srn-miniapp-cart-text'>{data.data}</span>
    )
}