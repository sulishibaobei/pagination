import { TypeId } from './typeid';


export class BluePrint {
    public readonly typeId: TypeId;

    constructor(typeId: TypeId) {
        this.typeId = typeId;
    }
}