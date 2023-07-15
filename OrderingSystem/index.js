document.getElementById('bikeForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  var isChecked = false;

  var isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  if (!isChecked) {
    event.preventDefault();
    alert('Please select atleast one bike.')
    return;
  }


  var totalPrice = 0;
  var itemSummary = document.getElementById('item-summary');

  itemSummary.innerHTML = "";

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      totalPrice += Number(checkboxes[i].dataset.price);

      var li = document.createElement('li');
      li.className = "list-group-item";
      li.innerHTML = checkboxes[i].nextElementSibling.innerText + " - $" + checkboxes[i].dataset.price;
      itemSummary.appendChild(li);
    }
  }

  var summaryCard = document.getElementById('summary-card');
  summaryCard.classList.remove('d-none');

  document.getElementById('total-price').innerText = "Total Price: $" + totalPrice;
});

