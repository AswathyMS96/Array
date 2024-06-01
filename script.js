var express = [14, 45, 89, 12, 78, 36, 95];

// Function to find the largest number in an array
function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return null; // or you can throw an error if you prefer
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

// Function to handle button click and display the result
function showLargestNumber() {
    const largestNumber = findLargestNumber(express);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `The largest number is: ${largestNumber}`;
}

// Function to display the array
function displayArray() {
    const arrayDisplay = document.getElementById('arrayDisplay');
    arrayDisplay.innerHTML = `Array: ${express.join(', ')}`;
}

// Add event listener to the button
document.getElementById('findLargestButton').addEventListener('click', showLargestNumber);

// Display the array when the page loads
window.onload = displayArray;
