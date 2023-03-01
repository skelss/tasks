function formatDate(date){
    let result = new Date() - date
    let secResult = (result / 1000).toFixed(0)
    let minResult = (secResult / 60).toFixed(0)
    let answer = ''

    if(result < 1000) answer = 'только что'
    else if(secResult < 60) answer = secResult + ' сек. назад'
    else if(minResult < 60) answer = minResult + ' мин. назад'
    else {
        let year = date.getFullYear()
        let month = addZero(date.getMonth() + 1)
        let day = addZero(date.getDate())
        let hours = addZero(date.getHours())
        let minutes = addZero(date.getMinutes())

        answer = `${day}.${month}.${year} ${hours}:${minutes}`
    }
    return answer
}

function addZero(item){
    return ('0' + item).slice(-2)
}


console.log(formatDate(new Date(new Date - 1)))
console.log(formatDate(new Date(new Date - 30 * 1000)))
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)))
console.log(formatDate(new Date(new Date - 86400 * 1000)))