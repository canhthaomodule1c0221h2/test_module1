let arr = [1, 2, 3, 4, 5];
let max = arr[0];

function findmax(max) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    document.write("điểm thi lớn nhất là " + max);
}

findmax(max);

