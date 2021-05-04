let arr = [1, 2, 5, 4, 6, 5, 11, 12];

function tryRemoveFromArray() {
    let x = parseInt(prompt("Enter a number: "));
    while (arr.indexOf(x) > -1) {
        arr.splice(arr.indexOf(x), 1);
    }
    document.write(arr);
}

tryRemoveFromArray();