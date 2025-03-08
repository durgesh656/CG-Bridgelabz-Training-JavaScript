function findTriplets(arr) {
    let n = arr.length;
    let found = false;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(arr[i], arr[j], arr[k]);
                    found = true;
                }
            }
        }
    }

    if (!found) {
        console.log("No triplets found.");
    }
}

let arr = [4,-2,2,-2,-1,-1,1,0,1,-4];

findTriplets(arr);