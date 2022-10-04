import React, {Fragment} from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import { listTypes } from "../types/listTypes";

export const CartList = (props: listTypes) => {

    return (
        <>
            <ul>
                {props?.data?.map((item, index) => (
                    <li key={item[props.keyProp] ? item[props.keyProp] : index }>
                        <div>
                            <p>{item[props.titleProp] ?  item[props.titleProp] : ''}</p>
                            {
                                props.rightContent?.map((content, i) => (
                                    <Fragment key={i}>
                                        {
                                            content.type === 'button' ?
                                            <Button key={i} title={content.title} onClickFunc={content.onclickFunc} param={item} /> :
                                            content.type === 'staticText' ?
                                            <span>{content.title}</span> :
                                            content.type === 'dynamicText' ?
                                            <Text data={item[content.title].toString()} /> : ''
                                        }
                                    </Fragment>
                                ))
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CartList