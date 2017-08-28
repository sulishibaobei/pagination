import { TypeId } from '../base/typeid';
import { BluePrint } from '../base/blueprint';

export class LabelBluePrint extends BluePrint {
    public id: number;
    public content: string;

    constructor() {
        super(TypeId.LABEL);
    }
}