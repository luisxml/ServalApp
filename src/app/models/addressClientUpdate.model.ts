export class AddressClientUpdate {

    constructor(
        public ID_ADDRESS_CLIENT: number,
        public ID_CLIENT: number,
        public DS_ADDRESS_CLIENT: string,
        public ADDRESS: string,
        public ID_DISTRITO: number,
        public ID_DEPARTAMENTO: number,
        public ID_PROVINCIA: number,
        public DS_CLIENT: string,
    ) { }
}
