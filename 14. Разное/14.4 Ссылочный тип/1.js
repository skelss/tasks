let user = {
  name: "John",
  go: function() {console.log(this.name)}
} // будет ошибка из-за отсутствия в этом месте точки с запятой

(user.go)()