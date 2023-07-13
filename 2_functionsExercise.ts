//use parameter type, return type
function twoFer(name: string ="you"): string{
    return `one for ${name}, one for me`
}

console.log(twoFer("sreekar"))
console.log(twoFer())


//checkc leap year
function isLeapYear(year: number): boolean{
    if(year%400 === 0)
        return true
    else if(year%4 === 0 && year%100 !== 0)
        return true
    return false
}

const checkLeapYear = (year: number): boolean => {
    return (year%4 === 0 && year%100 !== 0) || year%400 === 0 
}

console.log(isLeapYear(2016), checkLeapYear(2016))
console.log(isLeapYear(2000), checkLeapYear(2000))
console.log(isLeapYear(2500), checkLeapYear(2500))