import React, { Fragment } from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import useCartListViewModel from "../model/useCartListViewModel";
import { IListProps } from "../types/listTypes";

export const CartList = (props: IListProps) => {

    const { removeCartItem, total } = useCartListViewModel(props)

    return (
        <div className='srn-miniapp-cart-container'>
            <ul className='srn-miniapp-cart-ul'>
                {props?.data?.map((item, index) => (
                    <li key={item[props.keyProp] ? item[props.keyProp] : index } className='srn-miniapp-cart-li'>
                        <div className='srn-miniapp-cart-li-content'>
                            <p className='srn-miniapp-cart-li-content-title'>{item[props.titleProp] ?  item[props.titleProp] : ''}</p>
                            {
                                props.rightContent?.map((content, i) => (
                                    <Fragment key={i}>
                                        {
                                            content.type === 'button' ?
                                            <Button title={content.title} onClickFunc={content.onclickFunc} param={item} /> :
                                            content.type === 'staticText' ?
                                            <Text data={content.title} /> :
                                            content.type === 'dynamicText' ?
                                            <Text data={item[content.title].toString()} /> : ''
                                        }
                                    </Fragment>
                                ))
                            }
                            {
                                props.showRemoveButton &&
                                <Button title="x" onClickFunc={removeCartItem} param={item} className='srn-miniapp-cart-remove-btn' />
                            }
                        </div>
                    </li>
                ))}
            </ul>
            {
                props.showTotal &&
                <div className="srn-miniapp-cart-total-container">
                    <p className="srn-miniapp-cart-total-label">Total</p>
                    <p className="srn-miniapp-cart-total-value">{total}</p>
                </div>
            }
        </div>
    )
}

export default CartList