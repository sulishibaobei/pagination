import { TypeId } from '../base/typeid';
import { BluePrint } from '../base/blueprint';
import { LabelBluePrint } from '../label/label.blueprint';
export class ButtonBluePrint extends BluePrint {
    public id: number;
    public caption: LabelBluePrint = new LabelBluePrint();
    public type: string;
    public onClick: (id: number) => any;
    constructor() {
        super(TypeId.BUTTON);
    }
}