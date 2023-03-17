new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert)

/*
.catch() в данном случае не выполнится, т.к. ошибка появляется через какое-то 
время, а не по ходу выполнения кода
*/