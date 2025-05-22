function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

const tours = [
  {
    id: "italy-tour",
    title: "Italy",
    description:
      "Embark on a journey through Italy's timeless beauty – from the romance of Venice to the elegance of Florence and the charm of the Amalfi Coast. Your Italian adventure awaits❗",
    firstLetter: "E",
    image: "./images/tour-page-images/italy.png",
    phones: ["+8801898205571", "+8801898205573"],
    grabText: "Grab Your Offer Just ✈️",
  },
  {
    id: "egypt-tour",
    title: "Egypt",
    description:
      "Unveiling the mysteries of ancient Egypt—where history, culture, and adventure meet at the Pyramids, temples, and the mighty Nile!! 🌄 ✈️",
    firstLetter: "U",
    image: "../images/tour-page-images/egypt.png",
    phones: ["+8801898205571", "+8801898205573"],
    grabText: "Grab Your Offer Now",
  },
  {
    id: "philipines-tour",
    title: "Philippines",
    description:
      "Escape to the Philippines, where turquoise waters meet golden sands, lush jungles whisper adventure, and every sunrise promises a new memory. Your dream getaway is just a flight away – Go and explore paradise like never before❗🍀",
    firstLetter: "E",
    image: "../images/tour-page-images/philipines.png",
    phones: ["+8801898205571", "+8801898205573"],
    grabText: "Grab Your Offer Now",
  },
  {
    id: "MalDives-tour",
    title: "Maldives & ShriLanka",
    description:
      "Double the Paradise! Dive into the turquoise bliss of the Maldives & explore the tropical wonders of Sri Lanka – one unforgettable journey, two breathtaking destinations! ✈️ 🌍 For couples who skip group tours — the perfect getaway with all the comfort, within budget. 💑 ✨",
    firstLetter: "D",
    image: "../images/tour-page-images/maldivs.png",
    phones: ["+8801898205571", "+8801898205573"],
    grabText: "Grab Your Offer Now",
  },
  {
    id: "Kathmandu-tour",
    title: "Kathmandu Pokhara",
    description:
      "গরু কাটা শেষে প্যাকেজ নিয়ে ঘুরে আসুন হিমালয় কন্যা নেপাল থেকে  🐮 ✈️",
    firstLetter: "গ",
    image: "../images/tour-page-images/kathmondu.png",
    phones: ["+8801898205571", "+8801898205573"],
    grabText: "Grab Your Offer Now",
  },
  {
    id: "Shilanka-tour",
    title: "Maldives & Shilanka",
    description: "Do Hurry and grab the chance to join the trip ✈️ 🌍",
    firstLetter: "D",
    image: "../images/tour-page-images/shrinlangka.png",
    phones: ["+8801898205571", "+8801898205573"],
    grabText: "Grab Your Offer Now",
  },
  {
    id: "Indonesia-tour",
    title: "Indonesia",
    description:
      "Eid Offer Discover the magic of Indonesia 🍀– where vibrant cultures, breathtaking landscapes, and unforgettable adventures await at every turn. 🌍",
    firstLetter: "E",
    image: "../images/tour-page-images/indonesia.png",
    phones: ["+8801898205571", "+8801898205573"],
    grabText: "Grab Your offer Just",
  },
  {
    id: "Jordan-tour",
    title: "Jordan",
    description:
      "Discover the charm of Jordaan: where narrow, picturesque canals, quaint boutiques, and cozy cafés create the perfect blend of history, culture, and modern vibrance—an Amsterdam neighborhood that invites every traveler to get lost and find their own slice of magic 🏚️🌍",
    firstLetter: "D",
    image: "../images/tour-page-images/jordan.png",
    phones: ["+8801898205571", "+8801898205573"],
    grabText: "Grab Your offer Just",
  },
];

const tourHeroContainer = document.getElementById("tourHeroContainer");

tours.forEach((tour, index) => {
  const tourHTML = `
    <div class="tour_hero_details" id="${tour.id}">
      <div class="tour_hero_details_left">
        <img src="${tour.image}" alt="${tour.title}" />
      </div>
      <div class="tour_hero_details_right">
        <p class="tour_hero_details_right_title">${tour.title}</p>
        <p class="tour_hero_details__right_description">
          <span>${tour.firstLetter}</span>${tour.description.slice(1)}
        </p>
        <p class="grab">${tour.grabText}</p>
        <div class="tour_numbers">
          ${tour.phones
            .map(
              (phone) => `
            <div class="tour_single_number">
              <img src="./images/tour-page-images/phone.svg" alt="phone" />
              <p>${phone}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
    ${index !== tours.length - 1 ? '<div class="tour_hero_bar"></div>' : ""}
  `;

  tourHeroContainer.innerHTML += tourHTML;
});
