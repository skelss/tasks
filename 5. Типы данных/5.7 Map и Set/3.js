let map = new Map()
map.set("name", "John")
let keys = map.keys()

keys.push("more")

/*
map.keys() возвращает объект, поэтому к нему неприменим метод push()
Чтобы все работало, можно сделать из объекта массив:
keys = Array.from(map.keys())
*/