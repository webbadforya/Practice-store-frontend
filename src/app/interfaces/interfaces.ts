export interface Admin{
   id?: number;
   login: string;
   password?: string
}
export interface Product{
   id?: number;
   name: string;
   color: string;
   price: number;
   isAvailable: boolean
}