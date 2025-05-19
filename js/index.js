//mobile menu on off
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

const countries = [
  {
    name: "Canada",
    seeMore: "./canada.html",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Brazil",
    seeMore: "./brazil.html",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Japan",
    seeMore: "./japan.html",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Germany",
    seeMore: "./germany.html",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Australia",
    seeMore: "./australia.html",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "France",
    seeMore: "./france.html",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Mexico",
    seeMore: "./maxico.html",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "South Korea",
    seeMore: "./south-korea.html",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
];

const accordion = document.getElementById("accordionExample");

countries.forEach((country, index) => {
  const collapseId = `collapse${index}`;
  const headingId = `heading${index}`;
  const checklistItems = country.checklist
    .map((item, i, arr) => {
      if (i === arr.length - 1 && item.includes("See More")) {
        const [before, after] = item.split("See More");
        return `<li>${before}<a href="${country.seeMore}" style="color: #ea6724; cursor: pointer;">See More</a></li>`;
      }
      return `<li>${item}</li>`;
    })
    .join("");

  const item = `
      <div class="accordion-item">
        <h2 class="accordion-header" id="${headingId}">
         <p class="country-list-li" ${
           index !== 0 ? "collapsed" : ""
         }" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${
    index === 0
  }" aria-controls="${collapseId}">
            ${country.name}<span id="arrow" class="arrow-icon"
                  ><svg
                    width="22"
                    height="22"
                    viewBox="0
              0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.293 0.960703C10.6591 0.594587 11.2381 0.571993 11.6309 0.892344L11.707 0.960703L21.04 10.2937C21.0449 10.2986 21.0489 10.3044 21.0537 10.3093C21.0675 10.3236 21.0809 10.3382 21.0938 10.3533C21.1014 10.3623 21.1089 10.3714 21.1162 10.3806C21.1496 10.4227 21.1797 10.4673 21.2061 10.5144C21.2117 10.5245 21.2174 10.5345 21.2227 10.5447C21.293 10.6815 21.3339 10.8363 21.334 11.0007C21.334 11.2743 21.2221 11.5213 21.0439 11.7019C21.0423 11.7035 21.0417 11.7062 21.04 11.7078L11.707 21.0418C11.3166 21.432 10.6834 21.432 10.293 21.0418C9.90251 20.6513 9.90265 20.0182 10.293 19.6277L17.9189 12.0007H1.66699C1.11471 12.0007 0.666992 11.553 0.666992 11.0007C0.667206 10.4486 1.11484 10.0007 1.66699 10.0007H17.9189L10.293 2.37477L10.2246 2.29859C9.90427 1.90584 9.9269 1.32682 10.293 0.960703Z"
                      fill="#002D72" />
                  </svg>
                </span>
          </p>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p class="collaspe-headline">${country.name} Visa Checklist</p>
            <ul
            class="collapse-ul">
              ${checklistItems}
            </ul>
          </div>
        </div>
      </div>
    `;

  accordion.innerHTML += item;
});

document.querySelectorAll(".accordion-item").forEach((item) => {
  const button = item.querySelector(".country-list-li");
  const collapseElement = item.querySelector(".accordion-collapse");
  const arrowIcon = item.querySelector(".arrow-icon");

  collapseElement.addEventListener("show.bs.collapse", () => {
    arrowIcon.classList.add("rotate-icon");
  });

  collapseElement.addEventListener("hide.bs.collapse", () => {
    arrowIcon.classList.remove("rotate-icon");
  });
});
