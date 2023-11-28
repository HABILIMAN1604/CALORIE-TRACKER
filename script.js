let totalCalories = 0;

function addEntry() {
    const foodItem = document.getElementById('foodItem').value;
    const calories = parseInt(document.getElementById('calories').value);

    if (foodItem && !isNaN(calories)) {
        // Create a new list item
        const entry = document.createElement('li');
        entry.innerHTML = `${foodItem}: ${calories} calories <button class="delete-button" onclick="deleteEntry(this)">Delete</button>`;

        // Append the entry to the list
        document.getElementById('entries').appendChild(entry);

        // Update total calories
        totalCalories += calories;
        document.getElementById('calorieTotal').innerText = totalCalories;

        // Clear input fields
        document.getElementById('foodItem').value = '';
        document.getElementById('calories').value = '';
    }
}

function deleteEntry(button) {
    const entry = button.parentElement;
    const calories = parseInt(entry.innerText.match(/\d+/)[0]);

    // Update total calories
    totalCalories -= calories;
    document.getElementById('calorieTotal').innerText = totalCalories;

    // Remove the entry
    entry.remove();
}

