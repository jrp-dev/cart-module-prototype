export interface IButtonProps {
    title: string;
    onClickFunc: (event: any) => void;
    param: any;
    className?: string;
}