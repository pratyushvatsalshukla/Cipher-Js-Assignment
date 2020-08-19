                                    //Very Easy Problems
const convert = (min) =>{
    var Sec = min*60 ;
    return Sec ;
}
console.log(convert(5));
                                    // Question 2 Divides Evenly
const Division = (a, b) =>{
    if(a%b == 0){
        return true ;
    }else{
        return false ;
    }
}
console.log(check(98,7));

                                // Easy Problems

const charCount = (a, b) =>{
    var Count = 0 ;
    for(var i = 0 ; i < b.length ; i++)
    {
        if(b[i] === a)
        {
            Count += 1 ;
        }
    }
    return Count ;

}
console.log(charCount('a',"edabit"));
 
// Question 2 Add up the Numbers from a Single Number

const addUp = (num) =>{
        var Sum = 0 ;
        for(var i = 1 ; i <= num ; i++)
        {
            Sum += i ;
        }
        return Sum ;
}
console.log(addUp(4))

// Question 3 Replace Vowel with Another Character

const replaceVowels = (str) =>{
    var str1 = str.split('');
    for(var t = 0; t < str.length; t++){
        if(str1[t] == 'a')
        {
            str1[t] = '1';
        }
        if(str1[t] == 'e')
        {
            str1[t] = '2';
        }
        if(str1[t] == 'i')
        {
            str1[t] = '3';
        }
        if(str1[t] == 'o')
        {
            str1[t] = '4';
        }
        if(str1[t] == 'u')
        {
            str1[t] = '5';
        }
    }
    str.join('');
    for(var t = 0; t < str.length; t++){
        return str;
    }
}
console.log(replaceVowels("karachi"));

                                    // Medium Level Problems
// Question 1  Reverse Words Starting with a Particular Letter

const specialReverse = (str1,str2) => {
    var wordAr = str1.split(' ');
    var size = wordAr.length;
    for(var i = 0; i < size; i++)
    {
        if(wordAr[i][0] === str2)
        {
            var temp = wordAr[i].split('').reverse();
            wordAr[i] = temp.join('');
        }
    }

   return wordAr.join(' ');
} 
console.log(specialReverse("word searches are super fun", "s"));


// Question 2 Hitting the Jackpot
const testJackpot = (a) =>{
    var Count = 1 ;
        for(var i = 1 ; i < a.length ; i++)
        {
            if(a[i] === a[i-1]){
                Count += 1 ;
            }
        }
        if(Count == a.length)
        {
            return true ;
        }
        else{
            return false ;
        }
}
console.log(testJackpot(["@", "@", "@", "@"]));

// Question 3  Remove Duplicates from an Array

const removeDups = (arr) => {
    for(var i = 0 ; i < arr.length ; i++)
    {
        for(var j = i+1 ; j < arr.length ; j++ )
        {
            if(arr[i] === arr[j])
            {
                arr[j].splice(j,j) ;
            }
        }
    }
    return arr ;
}
console.log(removeDuplicates([1,0,1,0]));

                            // Hard Level PRoblems

// Question 1 . Get Real Type

const realType = (value) => 
{
return Object.prototype.toString.call(value);
}
console.log(realType ([]));

// Question 02 Hard

const numInStr = (para) => 
{
    var array = [];
    var k = 0;
    for(var i = 0; i < para.length; i++)
    {
        var count = 0;
        var temp = para[i];
        var temp1 = temp.split('');
        for(var j=0; j < temp1.length; j++)
        {
            if( !isNaN(temp1[j]) && temp1[j] != " " )
            {
                count++;
            }
        }
        if(count > 0)
        {
            array[k] = temp1.join('');
            k++;
        }
    }
   return(" [" + array + "] ");
}

console.log(numInStr(["1a", "a", "2b", "b"]));
