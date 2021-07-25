console.log(Math.PI);

console.log(Math.E);

console.log(Math.LOG10E);

console.log(Math.sin(90));

console.log(Math.cos(0));

console.log(Math.atan(76));

console.log(Math.pow(5,3));

console.log(Math.sqrt(25));

console.log(Math.min(2,5));

console.log(Math.max(100,10));

console.log(Math.round(5.1111));

console.log(Math.floor(10.98));

console.log(Math.ceil(10.01));

console.log(Math.random());

console.log(Math.random()*5+1);

var captcha="1234567890qwertyuioplkjhgfdsazxcvbnm";
var c1=Math.floor(Math.random()*10+5);
var c2=Math.floor(Math.random()*10+10);
var c3=Math.floor(Math.random()*10+1);
var c4=Math.floor(Math.random()*10+7);
var c5=Math.floor(Math.random()*10+9);
//console.log(c1+"  "+c2+"  "+c3+"  "+c4+"  "+c5)
var cap=captcha.charAt(c1)+captcha.charAt(c2)+captcha.charAt(c3)+captcha.charAt(c4)+captcha.charAt(c5);
console.log(cap)