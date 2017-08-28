import { TypeId } from '../base/typeid';
import { BluePrint } from '../base/blueprint';

export class AlertBluePrint extends BluePrint {
    public type: string;
    public title: string;
    public message: string;
    public staticAlertClosed: boolean;
    public AlertClose: () => any;
    constructor() {
        super(TypeId.AlERT);
    }
}