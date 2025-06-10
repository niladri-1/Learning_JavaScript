// Date objects = objects that contain values that represend dates and times
// 				  These date objects can be chenged and formatted


// Current date & time
const now = new Date();
console.log(now); //2025-06-09T10:42:18.734Z
console.log(`${now}`); //Mon Feb 03 2025 07:03:04 GMT+0530 (India Standard Time)

// Create specific date: Date(year, monthIndex, day, hour, min, sec, ms)
const d1 = new Date(2025, 1, 3, 7, 3, 4, 5);
console.log(d1); //2025-02-03T01:33:04.005Z
console.log(`${d1}`); //Mon Feb 03 2025 07:03:04 GMT+0530 (India Standard Time)


// Create date from string (ISO format)
const d2 = new Date("2024-01-02T12:00:00.000Z");
console.log(d2); //2024-01-02T12:00:00.000Z
console.log(`${d2}`); //Tue Jan 02 2024 17:30:00 GMT+0530 (India Standard Time)




const myDate = new Date();

const year = myDate.getFullYear();
const month = myDate.getMonth();
const day = myDate.getDate();
const hour = myDate.getHours();
const minutes = myDate.getMinutes();
const seconds = myDate.getSeconds();
const dayOfWek = myDate.getDay();

console.log(year, month, day, hour, minutes, seconds, dayOfWek); //2025 5 9 16 44 18 1



// Set parts of a date
const modDate = new Date();
modDate.setFullYear(2024);
modDate.setMonth(0);  // Jan
modDate.setDate(2);
modDate.setHours(3);
modDate.setMinutes(3);
modDate.setSeconds(4);

console.log(modDate); //2024-01-01T21:33:04.783Z
console.log(`${modDate}`); //Tue Jan 02 2024 03:03:04 GMT+0530 (India Standard Time)



// Compare two dates
const dt1 = new Date("2024-12-31");
const dt2 = new Date("2025-01-01");
console.log(dt1 < dt2 ? `dt2: ${dt2}` : `dt1: ${dt1}`); //dt2