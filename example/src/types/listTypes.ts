export interface IListProps {
    data: any[];
    rightContent?: Array<{type: 'button' | 'staticText' | 'dynamicText', title: string, onclickFunc: (prop: any) => void}>;
    titleProp: string;
    keyProp: string;
}