const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
  if (counter === MAX_VALUE) {  // если  counter равен
    console.log('The end'); // выводит в консоль the end
    clearInterval(timer);  //clearInterval - закрывает setInterval
    return; // завершает выполнение текущей функции
  }
  console.dir({ counter, date: new Date() }); // вывод в консоль свойства данного обьекта
  counter++; //counter - счетчик
}

console.log('Begin'); // вывод в консоль Begin
timer = setInterval(event, INTERVAL); // setInterval -запускает выполнение функции не один раз, а регулярно повторяет её через указанный интервал времени
