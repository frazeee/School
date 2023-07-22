let totalPrice = 0

function showItemSummary(){
    event.preventDefault()
    const itemSummarydiv = document.getElementById('item-summaryDiv')

    const bookSelect = document.getElementById('bookSelect')
    const selectedBook = bookSelect.options[bookSelect.selectedIndex].text
    const bookValue = bookSelect.value
    const quantityInput = document.getElementById('quantityInput')
    const bookQuantity = quantityInput.value

    console.log(selectedBook)
    console.log(bookValue)

    totalPrice += (parseInt(bookValue) * bookQuantity)

    const itemList = document.getElementById('item-summary')
    
    var li = document.createElement('li')
    li.className = "list-group-item transparent-bg fs-5"
    li.innerHTML = `Book: ${selectedBook}, Quantity: ${bookQuantity}`
    itemList.appendChild(li)

    bookSelect.selectedIndex = 0
    quantityInput.value = ""
    

    const totalPriceText = document.getElementById('totalPrice')
    totalPriceText.innerHTML = `Total Price: ₱ ${totalPrice}`


    itemSummarydiv.classList.remove('d-none');
}

const cartForm = document.getElementById('cartForm')
cartForm.addEventListener("submit", showItemSummary)


    function submitOrder() {
        const itemSummarydiv = document.getElementById('item-summaryDiv')
        const bookSelect = document.getElementById('bookSelect')
        const quantityInput = document.getElementById('quantityInput')
        const itemList = document.getElementById('item-summary')
        const totalPriceText = document.getElementById('totalPrice')
        totalPrice = 0;

        itemSummarydiv.classList.add('d-none')
        bookSelect.selectedIndex = 0
        quantityInput.value = ""
        itemList.innerHTML = ""
        totalPriceText.innerHTML = ""
        alert("Your order has been submitted.")
    }

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitOrder);

