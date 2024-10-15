// 1.


function compare(str1, str2)
{
    if(str1.toLowerCase()==str2.toLowerCase())
        return 1;
    else
    return 0;


}

let str1 ="javascript";
let str2 ="react";


if (compare(str1,str2)==1)
{
    console.log("The Strings are equal");

}
else
{
    console.log("The Strings are not equal.");
}




// 2.




function wordCheker(word, sentence)
{
    let check = sentence.includes(word, 0);

    if(check== true)
 {
    let result = sentence.indexOf(word);
    return result;
 }
 else
 {
    return -1;
 }   
        
}


let word = "is";
let sentence = "Banladesh is the beautyful country";


console.log(wordCheker(word, sentence));





// 3.



function stringsCheaker(apple1, apple2, sentence)
{
    let rslt1 = sentence.startsWith(apple1);
    let rslt2 = sentence.endsWith(apple2);
    return rslt1, rslt2;
}


let apple1 = 'p';
let apple2 = 'o';
let sentence1 = 'te';
console.log(stringsCheaker(apple1,apple2,sentence1));






// 4.

function split(sentence)
{
    let a = sentence.split("");
    return a;

}

let sentence2 = "Today is a very beautiful day";
console.log(split(sentence));





// 5.


function extract(start, end , sentence)
{
    let extract1 = sentence.slice(start, end);
    let extract2 = sentence.substring(start, end);
    return extract1 + "/n" + extract2;
}

let start = 2;
let end = 6;
let sentence3 = "This is sirajum Munira";
console.log(extract(start, end, sentence3));




// 6.
function concatination(str1 , str2)
{
    let rslt = str1.concat(str2);

    return rslt;
}

let str3 = "Hello There";
let str4 = "this is samira rumi";
let arr1 = ["marjia", "Eva","lamiya"];
let arr2 = [", "];


let rslt2 = arr1.join(arr2);
console.log(concatination(str1,str2));
console.log(rslt2);



// 7.
function absolute(number)
{
    let result = Math.abs(number);
    return result;
}
let number = -5;
console.log("Absolute value of "+ number +" is "+ absolute(number));




// 8.


function mathg(num)
{
    let res1 = Math.round(num);
    let res2 = Math.ceil(num);
    let res3 = Math.floor(num);
    return res1+ "/n"+ res2+ "/n"+ res3;
}


let number1 = 6.98007;
console.log(mathg(number1));




// 9.


function genNum(num1, num2)
{
    let number = Math.round((Math.random() * num2) + num1);
    return number;

}

let num1 = 2;
let num2 = 50;
console.log(genNum(num1, num2));


