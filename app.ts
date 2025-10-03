// let arr:[string , number] =["vidhi",22];
// enum UserRoles{
//     Admin="vidhi",
//     Guest="guest",
//     Super_Admin="super_admin"

// }
// enum StatusCodes{
//     Abandoned ="Abondend status code 500",
//     NotFound="not found at code 404"
// }
// StatusCodes.NotFound           


// class HumanMaker{
//     age=0;
//     constructor(public name : string, public isHandsome: boolean){

//     }

// }
// new HumanMaker("vishi",true)
// class BottleMaker{
//     constructor(public brand:string , public price:number, public color: string)
//    {

//    }

// }
//  let b1 = new BottleMaker("Milton",2333,"black")
//    let b2 = new BottleMaker("milton" ,787,"blue")

// class BottleMaker{
//     constructor(public name: string){

//     }
    
// }
// class MetalBottleMaker extends BottleMaker{
//     constructor(name:string){
//     super(name);
//     }
//     getValue(){
//         console.log(this.name);
//     }
// }

// let b1 = new BottleMaker("Milton");
// function abcdef(name:string,age:number,cb:(arg:string)=>void){
//     cb("hey");
// }
// abcdef("vidhi",20,(arg: string)=>{
//     console.log("abcshjb");
// })


// function Overloading
// function abcd(a:string):void;
// function abcd(a:string,b:number):number;

// function abcd(a:any , b?: any){
//     if(typeof a==="string" &&  b=== undefined){
//            console.log("hey");
//     }
//      if(typeof a==="string" &&  b=== "number"){
//         return 123;
//     }
//     else throw new Error("Something is wrong");
// }


//generics

// function abcd<T>(a:T){}
// abcd<string>("vidhi")
// abcd<number>(12);


// function log<T>(value:T){
// console.log(value);
// }
// log<string>("vidhi")

// interface Generics

// interface Halua<T>{
//     name:string;
//     age:number;
//     key :T;

// }

// function abcd(obj: Halua<string>){

// }
// abcd({name:"foo",age:24,key:"hhdhdhwg"})


//classes Generics

// class BottleMaker<T>{
//     constructor(public key:T){}
// }
// let b1=new BottleMaker<string>("hey");
// let b2=new BottleMaker<number>(12);
// console.log(b1,b2);

// import { getDetails,addPayment} from "./payment";
// let a=addPayment(12);
// let b=newPayment(122);
// console.log(a,b)
