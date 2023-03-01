if (-1 || 0) alert( 'first' );// = -1 = true => выполнится
if (-1 && 0) alert( 'second' );// = 0 = false => не выполнится
if (null || -1 && 1) alert( 'third' );// = (null || 1) = true => выполнится

/*
Выполнятся 1 и 3 alert
*/