<!DOCTYPE html>
<html>
 <head><script src="/j/out"></script>
  <title>FUNC-007 Рекурсивные функции</title><meta charset="utf-8"><meta name="author" content="Ilya Gosudarev">
 </head>
 <body>
  <script src="/j/dblttl"></script>
  <script>{
    const sec = a => 1 + a;
    const add = (a, b) => (b === 0) ? a : sec(add(a, b - 1));
    const mpy = (a, b) => (b === 1) ? a : add(a, mpy(a, b - 1));
    // mpy(11,3) = 11 + mpy(11,2) = 11 + 11 + mpy(11,1) = 11 + 11 + 11 = 33
  	const pwr = (a, b) => (b === 1) ? a ** b : mpy(a, pwr(a, b - 1));

    Out.log(mpy(11, 3)); // 33
    Out.log(pwr(11, 3)); // 1331
/*
   Допишите определение функции pwr от a и b, которая определяется через себя и mpy и выдаёт a ** b для положительных целых чисел.
   Выясните, при каких значениях аргументов наступает переполнение стека. Докажите это деревом вызовов.
   
   Ранее: recur_task
*/
}</script>
 </body>
</html>

{/* https://kodaktor.ru/func_9f3ad */}