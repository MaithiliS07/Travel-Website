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

//Booking Section Submit Form
function handleBooking(event) {
  if (event) event.preventDefault(); // stop form reload

  // Get form values
  const name = document.querySelector('input[name="name"]');
  const contact = document.querySelector('input[name="contact"]');
  const email = document.querySelector('input[name="email"]');
  const location = document.getElementById("location");
  const packageSelect = document.getElementById("package");

  // Simple validation
  if (!name.value.trim() || !contact.value.trim() || !email.value.trim() || !location.value || !packageSelect.value) {
    alert("⚠️ Please fill in all required fields before submitting.");
    return;
  }

  // If all good → show confirmation popup
  showConfirmationPopup();
}

function showConfirmationPopup() {
  const popup = document.createElement("div");
  popup.className = "confirmation-popup";
  popup.innerHTML = `
    <div class="popup-content">
      <h4>✅ Booking Confirmed</h4>
      <p>Your details have been submitted.<br>Our team will get in touch with you shortly.</p>
      <button id="closePopupBtn" class="btn" style="background:#158484;color:#fff;border:none;border-radius:30px;padding:5px 20px;font-size:13px;">Close</button>
    </div>
  `;

  document.body.appendChild(popup);
  document.body.classList.add("modal-open");

  // Close button handler
  document.getElementById("closePopupBtn").addEventListener("click", () => {
    document.body.classList.remove("modal-open");
    popup.remove();
    resetBookingForm(); // 🔹 reset after closing popup
  });
}

function resetBookingForm() {
  // Reset form inputs
  document.getElementById("bookingForm").reset();

  // Reset counters
  document.getElementById("adultCount").textContent = "1";
  document.getElementById("childCount").textContent = "1";

  // Reset summary values
  document.getElementById("packageName").textContent = "—";
  document.getElementById("packagePrice").textContent = "0";
  document.getElementById("adultTotal").textContent = "0";
  document.getElementById("childTotal").textContent = "0";
  document.getElementById("subTotal").textContent = "0";
  document.getElementById("vat").textContent = "0";
  document.getElementById("total").textContent = "0";
}