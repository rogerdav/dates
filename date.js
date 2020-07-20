let birthday = new Date();

console.log('birthday', birthday);
console.log('local time', birthday.toLocaleString());
console.log('hours', birthday.getHours());
console.log('hours', birthday.getMinutes());
console.log('hours', birthday.getSeconds());
console.log('date string', birthday.toLocaleTimeString());
console.log('now', Date.now());

let newDate = new Date(1970, 5, 11, 12, 0, 0);
console.log('Rogers birthday', newDate);
console.log('time of rogers birthday', newDate.getHours());

let newDate2 = new Date('1970 06 11');
console.log('new Date 2', newDate2);

console.log('elapsed time', birthday - newDate2);
let elapsedTime = birthday - newDate2;
let days = elapsedTime / 1000 / 60 / 60 / 24;
console.log('days', days);