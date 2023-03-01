it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/*
Данный тест лучше разбить на несколько блоков и объединить их в группу с помощью
describe, в этом случае будет намного проще понять, где именно происходит
ошибка
*/