//Navbar Scroll 
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });


  //Search Bar
  function scrollToMatch() {
    const input = document.getElementById('globalSearch').value.toLowerCase();
    if (!input) return;

    const elements = document.querySelectorAll('section, div, p, h1, h2, h3, h4, h5, h6, li, span');
    for (let el of elements) {
      const text = el.textContent.toLowerCase();
      if (text.includes(input)) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.backgroundColor = 'yellow'; 
        setTimeout(() => el.style.backgroundColor = '', 1500); 
        break;
      }
    }
  }


  //Homepage booking submission
  function submitBooking() {
    const location = document.getElementById('location').value;
    const date = document.querySelector('input[name="date"]').value;

    // Store in localStorage
    localStorage.setItem('booking_location', location);
    localStorage.setItem('booking_date', date);

    // Redirect to booking page
    window.location.href = 'booking.html'; // replace with your actual page
  }



  //About Us Modal
  // Custom Modal Controls
function openModal() {
  document.getElementById("customModal").style.display = "block";
}

function closeModal() {
  document.getElementById("customModal").style.display = "none";
}

// Optional: Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById("customModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//Footer Toggle
function toggleColumns() {
  var cols = document.querySelectorAll('.col-sm:nth-child(3), .col-sm:nth-child(4)');
  var button = document.querySelector('.see-more-btn');

  cols.forEach(function(col) {
    
    if (col.style.display === 'none' || col.style.display === '') {
      col.style.display = 'block';
      col.style.opacity = '1';
      button.textContent = 'See Less';
    } else {
      col.style.display = 'none';
      col.style.opacity = '0';
      button.textContent = 'See More'; 
    }
  });
}

// Column reset when screen is resized to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth > 600) {
    var cols = document.querySelectorAll('.col-sm:nth-child(3), .col-sm:nth-child(4)');
    var button = document.querySelector('.see-more-btn');
    
    
    cols.forEach(function(col) {
      col.style.display = 'block';
      col.style.opacity = '1';
    });
    
   
    button.textContent = 'See More';
  }
});



//Animation Effect
document.addEventListener('DOMContentLoaded', function () {
  const faders = document.querySelectorAll('.fade-in-section');

  function handleScroll() {
    faders.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) {
        section.classList.add('fade-in-visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});



//Booking Form Counter
function increaseCount(id) {
  const counter = document.getElementById(id);
  let value = parseInt(counter.innerText);
  counter.innerText = value + 1;

  updateSummary(); // refresh totals
}

function decreaseCount(id) {
  const counter = document.getElementById(id);
  let value = parseInt(counter.innerText);
  if (value > 0) {
    counter.innerText = value - 1;
  }

  updateSummary(); // refresh totals
}


//Booking submit section
/*function handleBooking() {
  const location = document.getElementById('location').value.trim();
  const travelDate = document.getElementById('travel-date').value.trim();
  const packageSelect = document.getElementById('package').value.trim();
  const name = document.querySelector('input[name="name"]').value.trim();
  const contact = document.querySelector('input[name="contact"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();

  if (!location || !travelDate || !packageSelect || !name || !contact || !email) {
    alert("⚠️ Please fill in all required fields before confirming your booking.");
    return;
  }

  showConfirmationPopup();
}*/

//Popup code
function showConfirmationPopup() {
  const popup = document.createElement("div");
  popup.className = "confirmation-popup";
  popup.innerHTML = `
    <div class="popup-content">
      <h4>✅ Booking Confirmed</h4>
      <p>Your details have been submitted.<br>Our team will get in touch with you shortly.</p>
      <button class="btn" style="background:#158484;color:#fff;border:none;border-radius:30px;padding:5px 20px;font-size:13px;">Close</button>
    </div>
  `;
  popup.querySelector("button").addEventListener("click", () => {
    document.body.classList.remove("modal-open");
    popup.remove();
  });
  document.body.appendChild(popup);
  document.body.classList.add("modal-open");
}



/*Booking quote calculator
function changeCount(id, delta) {
  const span = document.getElementById(id);
  let value = parseInt(span.textContent);
  value = Math.max(0, value + delta);
  span.textContent = value;
  updateSummary();
}

function updateSummary() {
  const adultCount = parseInt(document.getElementById('adultCount').textContent);
  const childCount = parseInt(document.getElementById('childCount').textContent);
  
  const packageSelect = document.getElementById('package');
  const selectedOption = packageSelect.options[packageSelect.selectedIndex];
  const packagePrice = parseFloat(selectedOption.getAttribute('data-cost')) || 0;

  const adultTotal = adultCount * packagePrice;
  const childTotal = childCount * (packagePrice * 0.7);
  const subTotal = adultTotal + childTotal;
  const vat = subTotal * 0.15;
  const total = subTotal + vat;

  document.getElementById('packagePrice').textContent = `£${packagePrice.toFixed(2)}`;
  document.getElementById('adultTotal').textContent = `£${adultTotal.toFixed(2)}`;
  document.getElementById('childTotal').textContent = `£${childTotal.toFixed(2)}`;
  document.getElementById('subTotal').textContent = `£${subTotal.toFixed(2)}`;
  document.getElementById('vat').textContent = `£${vat.toFixed(2)}`;
  document.getElementById('total').textContent = `£${total.toFixed(2)}`;
}

// ✅ Ensure summary loads when page is opened with ?package=XYZ
window.onload = updateSummary;*/