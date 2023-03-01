function getSecondsToTomorrow(){
    let now = new Date()
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    return((tomorrow - now) / 1000).toFixed(0)
}

console.log(getSecondsToTomorrow())


/*
function getSecondsToday(){
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return ((now - today) / 1000).toFixed(0)
}

console.log(Number(getSecondsToday()) + Number(getSecondsToTomorrow()))
*/