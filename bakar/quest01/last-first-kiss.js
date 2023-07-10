function first(arr) {
    return arr[0]
}

function last(arr) {
    return arr[arr.length-1]
}

function kiss(arr) {
    const new_arr = []
    new_arr.push(first(arr))
    new_arr.push(last(arr))
    return new_arr
}
console.log(kiss("bakar"))