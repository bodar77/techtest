namespace techtest {

    export class Company implements IRender {
        public name : string;
        public companyName : string;
        public price : number;
        public change : number;
        public chgPercent : number;
        public mktCap : number;

        public nameChanged : boolean;
        public companyChanged : boolean;
        public priceChanged : boolean;
        public changeChanged : boolean;
        public chgPercentChanged : boolean;
        public mktCapChanged : boolean;

        public UpdateRecieved() : void {

        }

        public Render() : void {

        }

        public RenderUpdate() : void {

        }

    }

}