function selectPayment(method) {
    let paymentDetails = document.getElementById('selected-method');

    switch (method) {
        case 'UPI':
            paymentDetails.innerHTML = `
              <h3>UPI Payment</h3>
              <p>Enter your UPI ID:</p>
              <input type="text" placeholder="example@upi">
              <a href="thanks.html"><button type="submit">Pay Now</button></a>
          `;
            break;
        case 'Paytm':
            paymentDetails.innerHTML = `
              <h3>Paytm Payment</h3>
              <p>Enter your Paytm number:</p>
              <input type="text" placeholder="Mobile Number">
            <a href="thanks.html"><button type="submit">Pay Now</button></a>
          `;
            break;
        case 'Google Pay':
            paymentDetails.innerHTML = `
              <h3>Google Pay</h3>
              <p>Enter your Google Pay number:</p>
              <input type="text" placeholder="Mobile Number">
            <a href="thanks.html"><button type="submit">Pay Now</button></a>
          `;
            break;
        case 'Card':
            paymentDetails.innerHTML = `
              <div class="payment-box">
                  <h3>Card Payment</h3>

                  <form action="#" method="POST">
                      <label for="name">Full Name:</label>
                      <input type="text" id="name" name="name" required>

                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" required>

                      <label for="card">Card Number:</label>
                      <input type="text" id="card" name="card" required>

                      <label for="expiry">Expiry Date:</label>
                      <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required>

                      <label for="cvv">CVV:</label>
                      <input type="text" id="cvv" name="cvv" required>
            <a href="thanks.html"><button type="submit">Pay Now</button></a>
                  </form>
              </div>
          `;
            break;
        default:
            paymentDetails.innerHTML = `<p>Select a payment method to proceed.</p>`;
    }
}


var input = document.querySelector(".input-b");
var selectedText = document.querySelector(".selected-text");

input.onclick = function () {
    this.classList.toggle("open");
    let list = this.nextElementSibling;
    if (list.style.maxHeight) {
        list.style.maxHeight = null;
        list.style.boxShadow = null;
    } else {
        list.style.maxHeight = list.scrollHeight + "px";
        list.style.boxShadow =
            "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
    }
};

var rad = document.querySelectorAll(".radio");
rad.forEach((item) => {
    item.addEventListener("change", () => {
        selectedText.innerHTML = item.nextElementSibling.querySelector(".name").innerHTML;
        input.click();
    });
});
