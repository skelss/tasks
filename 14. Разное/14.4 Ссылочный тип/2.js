let obj, method

obj = {
  go: function() {console.log(this)}
};

obj.go();               // (1) [object Object]
(obj.go)();             // (2) [object Object]
(method = obj.go)();    // (3) undefined
(obj.go || obj.stop)(); // (4) undefined

/*
В 3 и 4 вариантах вызова значение this не передается, т.к. применяется операция
присваивания (=) и оператор ||
*/