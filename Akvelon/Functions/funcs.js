function Reverse(input){
    const str = input.toString(2);
    let revStr = "";    
    if(input<0)
    {
        for (let index = str.length-1; index >0; index--)
            revStr+=str[index];
        revStr='-'+revStr
    }
    else  {
        for (let index = str.length-1; index >=0; index--)
            revStr+=str[index];
          
    }  
    console.log("Initial:" + str)   
    console.log("Reversed:"+ revStr)
}
function Factorial(number){
    if(number===1||number===0) return 1
    else return number* Factorial(number-1)
}
function Unique(string){
    let hash = [];
    let resString="";
    words = string.toLowerCase().split(' ')
    words.forEach(word => {
        if(hash.indexOf(word)===-1){
            hash.push(word);
            resString+=word+' ';
        }
    });
    return resString;
}