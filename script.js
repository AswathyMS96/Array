var express = [14, 45, 89, 12, 78, 36, 95];

function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return null; 

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

function showLargestNumber() {
    const largestNumber = findLargestNumber(express);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `The largest number is: ${largestNumber}`;
}

function displayArray() {
    const arrayDisplay = document.getElementById('arrayDisplay');
    arrayDisplay.innerHTML = `Array: ${express.join(', ')}`;
}

document.getElementById('findLargestButton').addEventListener('click', showLargestNumber);

window.onload = displayArray;
}
