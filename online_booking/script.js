// script.js
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const ticketType = document.getElementById('ticketType').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
  
    // Ticket prices
    const ticketPrices = {
      standard: 50,
      vip: 100
    };
  
    // Calculate total price
    const totalPrice = ticketPrices[ticketType] * quantity;
  
    // Display booking result
    const resultDiv = document.getElementById('bookingResult');
    resultDiv.innerHTML = `
      <p>Thank you, <strong>${name}</strong> to <strong>${country}</strong>! Your booking is confirmed.</p>
      <p>Email: <strong>${email}</strong></p>
      <p>Ticket Type: <strong>${ticketType.charAt(0).toUpperCase() + ticketType.slice(1)}</strong></p>
      <p>Quantity: <strong>${quantity}</strong></p>
      <p>Total Price: <strong>$${totalPrice}</strong></p>
    `;
  });
  
  