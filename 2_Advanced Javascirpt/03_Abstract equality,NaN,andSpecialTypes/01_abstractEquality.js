// == when types are not same
console.log( null== undefined);
console.log( undefined== null);
console.log('1'==1);//ToNumber('1')=>1,1==1->true;
console.log('2'==1);//ToNumber('2')=>2,2==1->false
console.log(2=='2');
console.log(false== 0);//ToNumber(false)=>0,0==0->true
console.log(true== 0);//ToNumber(true)=>1,1==10->false
console.log("10"=={valueOf(){return 10 }});//ToPrimitive({valueOf(){return 10;}})=>10
                                        //  NOw ("10"==10)//ToNumber("10")=>10,10==10 ->true;