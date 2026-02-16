function isLessThan(num1, num2) {
  // your code here
  let es_menor_que = false;

  if(num2 < num1) {
    es_menor_que = true;
  } else {
    es_menor_que = false;
  }

  return es_menor_que
}

isLessThan(9, 4)