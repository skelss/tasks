function getSecondsToday(){
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return ((now - today) / 1000).toFixed(0)
}

console.log(getSecondsToday())