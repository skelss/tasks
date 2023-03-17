function f() {
  alert( this ); // null, т.к. this потеряется
}

let user = {
  g: f.bind(null)
};

user.g();