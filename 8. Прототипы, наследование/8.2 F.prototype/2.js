function Book(title){
    this.title = title
}

let book1 = new Book('Kolobok')
let book2 = new book1.constructor('Teremok') // Работает

console.log(book2.title)


/*Book.prototype = {} // изменяем 

let book1 = new Book('Kolobok')
let book2 = new book1.constructor('Teremok') // Не работает

console.log(book2.title)
*/

