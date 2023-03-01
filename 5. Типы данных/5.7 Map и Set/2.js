function aclean(arr){
    let map = new Map()
    arr.forEach(word => {
        let value = word.toLowerCase().split('').sort().join('')
        map.set(value, word)
    })
    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

console.log(aclean(arr))