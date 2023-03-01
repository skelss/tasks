function checkSpam(str){
    if(str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx'))
        return true
    else return false
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))