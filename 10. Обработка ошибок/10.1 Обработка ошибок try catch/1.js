try {
  //начать работу
  //работать
} catch (e) {
  //обработать ошибку
} finally {
  //очистить рабочее пространство
}



try {
  //начать работу
  //работать
} catch (e) {
  //обработать ошибку
}

//очистить рабочее пространство


/*
Преимущество в использовании finally определенно есть.
Например, если в блоке try будет какой-то return (или управление "вылетит" из
блока по другой причине), то очистка во 2 варианте не сработает. Finally же
гарантирует очистку при любом исходе.
*/