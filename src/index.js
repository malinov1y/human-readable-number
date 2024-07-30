module.exports = function toReadable (number) {
  
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const elevenToNineteen = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let result = '';

    if (number === 0) {
        return "zero";
    }

    if(number < 10){
        result += units[number];
    }
    else if(number > 10 && number < 20){
        result += elevenToNineteen[number - 10];
    }
    else if(number >= 10 && number < 100){
        result += tens[Math.floor(number / 10)] + " " + units[number % 10];
    }
    else if(number >= 100 && number <= 999){
        result += units[Math.floor(number / 100)] + " " + "hundred";
        
        if(number % 100 > 10 && number % 100 < 20){
            result += " " + elevenToNineteen[(number % 100) - 10];
        }
        else if(number % 100 >= 10 && number % 100 < 100){
            result += " " + tens[Math.floor((number % 100) / 10)] + " " + units[number % 10];
        }
        else if(number % 100 > 0 && number % 100 < 10){
            result += " " + units[number % 10];
        }
    }

    return result.trim();
}
