const chunk = (arr, size) => {
    let new_array = []
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (temp.length < size) {
            temp.push(arr[i])
        } else {
            new_array.push(temp)
            temp = [arr[i]]
        }
    }
    if (temp.length > 0) {
        new_array.push(temp)
    }
    return new_array
}

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(chunk(a, 2))