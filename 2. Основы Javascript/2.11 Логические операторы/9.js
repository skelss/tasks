let userName = prompt('Кто вы?', '')

if (userName === 'Админ'){
  let pass = prompt('Какой пароль?', '')
  if (pass === 'Я главный'){
    alert('Здравствуйте!')
  } 
  else if (pass === '' || pass === null){
    alert('Отменено')
  } 
  else{
    alert('Неверный пароль')
  }

} 
else if (userName === '' || userName === null){
  alert('Отменено')
} 
else{
  alert('Я вас не знаю')
}