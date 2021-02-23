import * as React from 'react';
import { ISimpleListOperationsProps } from './ISimpleListOperationsProps';
import { ISimpleListOperationsState, IListItem } from './ISimpleListOperationsState';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export declare const formatStrHtml: (str: string) => any;
export declare const formatStr: (str: any) => any;
export default class SimpleListOperations extends React.Component<ISimpleListOperationsProps, ISimpleListOperationsState> {
    constructor(prop: ISimpleListOperationsProps, state: ISimpleListOperationsState);
    render(): React.ReactElement<ISimpleListOperationsProps>;
    _onChange(row: IListItem): (ev: React.MouseEvent<HTMLElement, MouseEvent>, checked: boolean) => void;
    _updateListItem({ status }: {
        status: any;
    }, row: IListItem): Promise<void>;
    _getListItems(): Promise<void>;
    private _clearClicked;
}
//# sourceMappingURL=SimpleListOperations.d.ts.map