// Write a function to check if a given character is a vowel or consonant.
// 	Ex: 	  Input:  “a”	
// Output: “Vowel”

function vowelsconsonant(char){
     if (char == "a"||char=="e"||char=="i"||char=="o"||char=="u"){
        return "vowel";
    
     }else{ 
        return "consonant";
        }   

}
console.log("Given character is a:",vowelsconsonant("a"));

// Write a program to check if a given year is a leap year.
// 	Ex: 	  Input: 2024	  Output: true
// 	Ex: 	  Input: 1900	  Output: false



function isleapYear(year){
    if ((year%4==0 && year%100!==0)||(year%400==0)){
        return "True";
    }else{
        return "False";
    }
}
console.log("Given Year is a Leap Year:",isleapYear(2020))

// Write a program to calculate the factorial of a given number.
// Ex: 	  Input:  5
// 	 	 Output:  120


function factorial(n){
    if(n==0||n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log("factorial of a given number is:",factorial(5));


function checkAge(age){
    if(age<18){
        return "minor"
    }else{
        return"adult"
    }
}
console.log("your",checkAge(5))

