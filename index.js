function isPrime(num) {
  var divisores = 0;
  let array = []

  for (var count = 1 ; count <= num ; count++) {
      if (num % count == 0) {
        array.push(count)
        divisores++
      }
    }
  
  if (divisores == 2) return console.log('Primo', array);
  else return console.log('Composto\n', array)
}

isPrime(2) // Inserir Número Natural
