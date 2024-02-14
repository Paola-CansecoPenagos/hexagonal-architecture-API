export class Status {
    public token:string;
    public verifiedAt:Date;

    constructor(token:string,verifiedAt:Date) {
        this.token = token;
        this.verifiedAt = verifiedAt;
    }

}