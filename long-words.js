let longWords = arr => arr.every(word => word.length >= 5 && typeof word === "string");
console.log(longWords(["aaaaa", "bbbb"]));

let oneLongWord = arr => arr.some(word => word.length >= 10);
console.log(oneLongWord(["aaaaaa", "dddddddddddddddd"]))

let noLongWords = arr => arr.every(word => word.length < 7);