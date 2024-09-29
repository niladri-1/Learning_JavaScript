// For loops = repeart some code a LIMIT number of times

for (let i = 0; i <= 2; i++) {
    console.log(i); // 0 1 2
}


for (i = 1; i < 20; i++) {
    if (i == 13) {
        continue;
    }
    else {
        console.log(i); // 1 2 3 4 5 6 7 8 9 10 11 12
    }
}