let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

/*
Для хранения информации о том, когда именно сообщение было прочитано, лучше
всего использовать структуру WeakMap. Как и в предыдущем примере, дата прочтения
сообщения будет удаляться из этой структуры при удалении соответствующего
сообщения 
*/