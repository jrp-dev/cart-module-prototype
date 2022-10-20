import {IButtonProps} from '../../types/buttonTypes'

export default function Button(data: IButtonProps) {
    return (
        <button onClick={() => data.onClickFunc(data.param)}>{data.title}</button>
    )
}