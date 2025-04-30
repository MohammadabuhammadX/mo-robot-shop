export interface IProduct{//indicates that a product should be an object which has a numeric id and the namedescription name etc etc..
    id : number;
    description:string;
    name : string;
    imageName: string;
    category:string;
    price: number;
    discount:number;
}