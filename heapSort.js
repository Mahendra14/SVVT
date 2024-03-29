// reference : https://reginafurness.medium.com/implementing-heap-sort-in-javascript-e52683b54935



function heapSort(array) {
    //handle empty array condition
    if (array.length === 0) {
        return [];
    }
    // max heapify the array
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length);
    }

    // work backwards, moving max elements to the end of the array
    for (let i = array.length - 1; i > 0; i--) {
        // max element of unsorted section of array is at index 0, swap with element at last index in unsorted array
        swap(array, 0, i);

        // re-heapify array, from beginning to the end of the unsorted section
        heapify(array, 0, i);
    }

    return array;
}




function heapify(array, index, length = array.length) {
    let largest = index,
        left = index * 2 + 1,
        right = index * 2 + 2;

    const compare = (a, b) => a - b;

    if (left < length && compare(array[left], array[largest]) > 0) {
        largest = left;
    }
    if (right < length && compare(array[right], array[largest]) > 0) {
        largest = right;
    }

    if (largest !== index) {
        swap(array, index, largest);

        heapify(array, largest, length);
    }

    return array;
}


function swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
}


// console.log(heapSort([4, 2, 8, 1, 6]));

module.exports = {heapSort, swap, heapify};