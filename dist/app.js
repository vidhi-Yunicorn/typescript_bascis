"use strict";
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
class BottleMaker {
    name;
    constructor(name) {
        this.name = name;
    }
}
class MetalBottleMaker extends BottleMaker {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name);
    }
}
let b1 = new BottleMaker("Milton");
