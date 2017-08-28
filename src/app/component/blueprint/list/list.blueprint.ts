import { TypeId } from '../base/typeid';
import { BluePrint } from '../base/blueprint';
export class ListBluePrint extends BluePrint {
    public id: number;
    public size: number;
    public onListItemClick: (id: number, idx: number) => any;

    constructor() {
        super(TypeId.LIST);
    }

}