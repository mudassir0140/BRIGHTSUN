function showElement() {
    let addBtn = document.getElementById('addbtn');
    let removeBtn = document.getElementById('removebtn');
    let returnDiv = document.getElementById('hidee'); // container for return date

    let isMultiCity = document.getElementById('Multicity').checked;
    let isOneWay = document.getElementById('OneWay').checked;
    let isRoundTrip = document.getElementById('Return').checked;

    if (isMultiCity) {
        // Multicity: Show add/remove buttons, hide return date
        addBtn.classList.remove('d-none');
        removeBtn.classList.remove('d-none');
        returnDiv.style.display = 'none';
    } else if (isRoundTrip) {
        // Return trip: Show return date, hide add/remove buttons
        addBtn.classList.add('d-none');
        removeBtn.classList.add('d-none');
        returnDiv.style.display = 'block';
    } else if (isOneWay) {
        // One way: Hide both return date and add/remove buttons
        addBtn.classList.add('d-none');
        removeBtn.classList.add('d-none');
        returnDiv.style.display = 'none';
    }
}
