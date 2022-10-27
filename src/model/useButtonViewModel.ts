import { IButtonProps } from '../types/buttonTypes';

export default function useCartListViewModel(props: IButtonProps) {

    const onClickFunc = () => {
        props.onClickFunc(props.param)
    }

    return {
        onClickFunc
    }

}