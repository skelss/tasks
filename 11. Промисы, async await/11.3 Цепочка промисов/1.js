promise.then(f1).catch(f2)

promise.then(f1, f2)

/*
Фрагменты кода не являются эквивалентными.
При наличии ошибки в первом случае она передастся по цепочке в блок catch()
Во втором случае она не передастся никуда и, соотвественно, останется 
необработанной 
*/
