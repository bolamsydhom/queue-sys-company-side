import {City} from './../_model/city'
export interface Company{
    id:number;
    name:string;
    imgUrl:string;
    locations:string[];
    services;
    createdAt;
    updatedAt;
}