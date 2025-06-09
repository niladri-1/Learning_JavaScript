// Date objects = objects that contain values that represend dates and times
// 				  These date objects can be chenged and formatted

const date = new Date();
console.log(date); //2025-06-09T10:42:18.734Z
console.log(`${date}`); //Mon Feb 03 2025 07:03:04 GMT+0530 (India Standard Time)

// Date(year, month, day, hour, minute, second, ms)
const newDate = new Date(2025, 1, 3, 7, 3, 4, 5);
console.log(newDate); //2025-02-03T01:33:04.005Z
console.log(`newDate:${newDate}`); //Mon Feb 03 2025 07:03:04 GMT+0530 (India Standard Time)

const customDate = new Date("2024-01-02T12:00:00.000Z");
console.log(customDate); //2024-01-02T12:00:00.000Z
console.log(`customDate:${customDate}`); //Tue Jan 02 2024 17:30:00 GMT+0530 (India Standard Time)




const myDate = new Date();

const year = myDate.getFullYear();
const month = myDate.getMonth();
const day = myDate.getDate();
const hour = myDate.getHours();
const minutes = myDate.getMinutes();
const seconds = myDate.getSeconds();
const dayOfWek = myDate.getDay();

console.log(year, month, day, hour, minutes, seconds, dayOfWek); //2025 5 9 16 44 18 1





const myNewDate = new Date();

myNewDate.setFullYear(2024);
myNewDate.setMonth(0); //January
myNewDate.setDate(2); //1st day of January
myNewDate.setHours(3);
myNewDate.setMinutes(3);
myNewDate.setSeconds(4);


console.log(myNewDate); //2024-01-01T21:33:04.740Z
console.log(`myNewDate:${myNewDate}`); //Tue Jan 02 2024 03:03:04 GMT+0530 (India Standard Time)



const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");

if (date1 > date2) {
	console.log(`date1 - ${date1}`);
} if (date1 < date2) {
	console.log(`date2:${date2}`); //Wed Jan 01 2025 05:30:00 GMT+0530 (India Standard Time)
}