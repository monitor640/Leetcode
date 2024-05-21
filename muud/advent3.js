var sum = function () {
    var fs = require('fs');
    var textByLine = fs.readFileSync('numbrid.txt').toString().split("\n");
    //split the lines into arrays
    for (var i = 0; i < textByLine.length; i++) {
        textByLine[i] = textByLine[i].split("");
    }

}

var first = function () {
    var fs = require('fs');
    var textByLine = fs.readFileSync('advent1.txt').toString().split("\n");
    //replace one with 1 and two with 2, and so on
    for (var i = 0; i < textByLine.length; i++) {
        textByLine[i] = textByLine[i].replaceAll("one", "1");
        textByLine[i] = textByLine[i].replaceAll("two", "2");
        textByLine[i] = textByLine[i].replaceAll("three", "3");
        textByLine[i] = textByLine[i].replaceAll("four", "4");
        textByLine[i] = textByLine[i].replaceAll("five", "5");
        textByLine[i] = textByLine[i].replaceAll("six", "6");
        textByLine[i] = textByLine[i].replaceAll("seven", "7");
        textByLine[i] = textByLine[i].replaceAll("eight", "8");
        textByLine[i] = textByLine[i].replaceAll("nine", "9");
    }
    //split the lines into arrays
    for (var i = 0; i < textByLine.length; i++) {
        textByLine[i] = textByLine[i].split("");
    }
    sum = 0;
    for (var i = 0; i < textByLine.length; i++) {
        let first = -1;
        let last = 0;
        for (let j = 0; j < textByLine[i].length; j++) {
            if (is_numeric_char(textByLine[i][j]) && first === -1) {
                first = textByLine[i][j];
                last = textByLine[i][j];
            }
            else if (is_numeric_char(textByLine[i][j])) {
                last = textByLine[i][j];
            }
        }

        //make a number from the first and last in the form of ab where a is the first and b is the last
        let num = parseInt(first.toString() + last.toString());
        console.log(num);
        sum += num;
    }
    console.log(sum);

}
function is_numeric_char(c) { return /\d/.test(c); }
first();