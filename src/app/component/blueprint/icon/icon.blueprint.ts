import { TypeId } from '../base/typeid';
import { BluePrint } from '../base/blueprint';

export class IconBluePrint extends BluePrint {
    public id: number;
    public size: number;
    public data: any;
    public src: string;
    public alt: string;
    public type: string;
    constructor() {
        super(TypeId.ICON);
    }
}