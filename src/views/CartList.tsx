import React, {Fragment} from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import { IListProps } from "../types/listTypes";
import { ICartItemsState } from "../types/cartTypes";

export const CartList = (props: IListProps) => {

    const setCartItems = (item: ICartItemsState) => {
        let newItems = props.data.filter(x => x.id !== item.id)
        console.log({newItems})
        if (props.onRemove) {
            props.onRemove(newItems)
        }

    }

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
                                            <Button key={i} title={content.title} onClickFunc={content.onclickFunc} param={item} /> :
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
                                <button onClick={() => setCartItems(item)} className='srn-miniapp-cart-btn srn-miniapp-cart-remove-btn'>x</button>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartList