export default function useCartListViewModel(props) {
    const onClickFunc = () => {
        props.onClickFunc(props.param);
    };
    return {
        onClickFunc
    };
}
