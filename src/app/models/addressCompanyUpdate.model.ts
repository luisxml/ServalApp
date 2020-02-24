export class AddressCompanyUpdate {

    constructor(
        public ID_ADDRESS_COMPANY: number,
        public ID_COMPANY_USER: number,
        public DS_ADDRESS_COMPANY: string,
        public ADDRESS: string,
        public ID_DISTRITO: number,
        public ID_DEPARTAMENTO: number,
        public ID_PROVINCIA: number,
        public DS_COMPANY: string,
    ) { }
}
