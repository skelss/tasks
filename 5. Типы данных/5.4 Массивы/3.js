let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

console.log(arr[2]()) // a, b, function(){alert(this)}

/*
this в данном случае это массив arr, т.к. он является объектом. Соответсвенно при
вызове метода arr[2] выводятся все элементы массива arr
*/