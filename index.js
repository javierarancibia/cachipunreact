const ppt = prop => {
  const arr = ['piedra', 'papel', 'tijera'];
  const pcChoice = arr[Math.floor(Math.random() * arr.length)];

  if (prop === 'piedra' && pcChoice === 'piedra') {
    return console.log('Empataste, el pc eligió ' + pcChoice);
  }
  if (prop === 'piedra' && pcChoice === 'papel') {
    return console.log('Perdiste, el pc eligió ' + pcChoice);
  }
  if (prop === 'piedra' && pcChoice === 'tijera') {
    return console.log('Ganaste, el pc eligió ' + pcChoice);
  }
};
