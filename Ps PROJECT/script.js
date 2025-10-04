document.addEventListener("DOMContentLoaded", () => {
  // Booking modal
  const modal = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("closeModal");
  const packageInput = document.getElementById("packageInput");

  function openModal(pkg) {
    packageInput.value = pkg;
    modal.style.display = "flex";
  }
  function closeModal() {
    modal.style.display = "none";
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

  document.querySelectorAll("[data-package]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.package));
  });

  // Booking form
  document.getElementById("bookingForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    alert(`Thanks ${form.name.value}! Your booking for ${form.package.value} is received.`);
    form.reset();
    closeModal();
  });

  // Contact form
  document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! We'll contact you soon.");
    e.target.reset();
  });

  // Search
  document.getElementById("searchBtn").addEventListener("click", () => {
    const q = document.getElementById("searchInput").value.trim();
    if (!q) return alert("Type a destination to search");
    alert("Search for: " + q);
  });
});

// Helper for Details button
function previewPackage(name) {
  alert(`${name}\n\nThis package includes hotels, transfers and tours. Contact us for full itinerary.`);
}
