export interface character {
    id:number;
    name:string;
    image:string;
    species:string;
    gender:string;
    created:string;
    status:string;
    origin:{
        name:string,
        url:string
    }
}
export interface RequestInfo{
    next:string|null
}