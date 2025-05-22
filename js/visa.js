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
    name: "Singapore",
    seeMore: "singapur-visa",
    country_img: "../images/visa-requirement-images/singapur.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder, salary statement",
      "Bank statement 6 Months (Minimum balance 2,50,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Thailand",
    seeMore: "thailand-visa",
    country_img: "../images/visa-requirement-images/thailand.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder, salary statement",
      "Bank statement 6 Months (Minimum balance 85,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Malaysia",
    seeMore: "malaysia-visa",
    country_img: "../images/visa-requirement-images/malaysia.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/50 size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder, salary statement",
      "Bank statement 6 Months (Minimum balance 85,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "China",
    seeMore: "china-visa",
    country_img: "../images/visa-requirement-images/china.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Recent 33cm x 48cm size photo with white background (2 Copy)",
      "Visiting Card & National ID Card",
      "N.O.C/G.O/Trade License Notarized Copy with Translate in English",
      "Company Letterhead Pad",
      "Original Bank statement for last six months. Minimum Balance Taka 300,000/-",
      "Bank solvency Certificate",
      "TIN Certificate",
      "Vaccine Certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "India",
    seeMore: "india-visa",
    country_img: "../images/visa-requirement-images/india.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Bank statement last 6 months",
      "Trade License if businessman/NOC +Job ID for (job holder)",
      "Visiting Card",
      "2/2 photo size",
      "National ID card /Birth certificate",
      "Utility Bill copy",
      "India last visit visa copy",
      "Medical purpose",
      "Indian Medical Appointment",
      "Bangladeshi Dr. Documents",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Sri Lanka",
    seeMore: "sri-lanka-visa",
    country_img: "../images/visa-requirement-images/shrilangka.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Bank statement last 6 months",
      "Trade License if businessman/NOC + Job ID for job holder",
      "Visiting Card",
      "Photo Size 35/45",
      "National ID card /Birth certificate",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Saudi Arabia (Umrah)",
    seeMore: "soudi-visa",
    country_img: "../images/visa-requirement-images/soudi.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo",
      "NID",
      "Visiting Card",
      "Self Biometric",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Dubai",
    seeMore: "dubai-visa",
    country_img: "../images/visa-requirement-images/dubai.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo",
      "Visiting Card",
      "Previous Travel Visa Copy",
      "Bank statement last 6 months",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Hong Kong",
    seeMore: "hong-kong-visa",
    country_img: "../images/visa-requirement-images/hongkong.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2 inch size 2 copy",
      "Visiting Card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate +pay slip if job holder",
      "Salary statement",
      "Bank statement last 6 Months (Minimum balance 3,00,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Hotel/Accommodation Booking",
      "Air Ticket Booking",
      "Tour Plan",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "New Zealand",
    seeMore: "new-zeland-visa",
    country_img: "../images/visa-requirement-images/newzeland.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 Matt (White Background)",
      "Trade License (English Notary)",
      "Tin Certificate",
      "Tax Return (2 Years)",
      "Business Membership Certificates",
      "Previous All Travel Visa And Entry Exit Scan Copy",
      "Family Information (Parents+child's+siblings)",
      "Financial Support Documents (Bank Statement + FDR + Assets)",
      "Marriage Certificate",
      "Purpose of Travel (Cover Letter)",
      "Company Pad And Seal (Minimum 2 Copy)",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Qatar",
    seeMore: "qatar-visa",
    country_img: "../images/visa-requirement-images/qatar.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (3.5mm*4.5mm)",
      "Office ID card",
      "TIN certificate",
      "Air Ticket",
      "Hotel reservation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Kenya",
    seeMore: "kenya-visa",
    country_img: "../images/visa-requirement-images/kenia.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (3.5mm*4.5mm)",
      "Office ID card",
      "Company memorandum",
      "Bank solvency",
      "Bank statement",
      "TIN certificate",
      "Air Ticket",
      "Hotel reservation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Egypt",
    seeMore: "egypt-visa",
    country_img: "../images/visa-requirement-images/Canada.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2 size 2 Copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate+pay slip if job holder",
      "Salary statement",
      "Bank statement last 6 Months (Minimum balance 85,000 pererson",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Ethiopia",
    seeMore: "ethiopia-visa",
    country_img: "../images/visa-requirement-images/ethiopia.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (3.5mm*4.5mm)",
      "Office ID card",
      "Company memorandum",
      "Bank solvency",
      "Bank statement",
      "TIN certificate",
      "Air Ticket",
      "Hotel reservation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Indonesia",
    seeMore: "indonesia-visa",
    country_img: "../images/visa-requirement-images/indoneshia.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo size 4/6",
      "Visiting Card",
      "Trade License With English notary / NoC for job holder, ID card & Salary Certificate",
      "Company Pad",
      "Health Insurance",
      "Bank statement (Minimum 2,50,000 balance last 4 month)",
      "Bank Solvency",
      "Vaccine Certificate",
      "NID",
      "Tin",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Brunei",
    seeMore: "brunei-visa",
    country_img: "../images/visa-requirement-images/brunel.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC ,Salary certificate+pay slip if job holder",
      "Salary statement",
      "Bank statement last 6 Months (Minimum balance 85,000 per person",
      "Bank solvency Certificate",
      "For students school, College, University ID card",
      "Marriage Certificate (English Notary)",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Russia",
    seeMore: "russia-visa",
    country_img: "../images/visa-requirement-images/russia.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",

      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "South Korea",
    seeMore: "south-korea-visa",
    country_img: "../images/visa-requirement-images/south-korea.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45 size 2 copy",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary &  valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Morocco",
    seeMore: "morocco-visa",
    country_img: "../images/visa-requirement-images/morocco.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers + Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement + Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary &  valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Turkey",
    seeMore: "turkey-visa",
    country_img: "../images/visa-requirement-images/turkey.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers + Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement + Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary &  valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Schengen (27 Country)",
    seeMore: "schengen-visa",
    country_img: "../images/visa-requirement-images/Schengen.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers + Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement + Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary &  valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Japan",
    seeMore: "japan-visa",
    country_img: "../images/visa-requirement-images/japan.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 48/33",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Canada",
    seeMore: "canada-visa",
    country_img: "../images/visa-requirement-images/canada.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Yearly Income",
      "Total Savings Amount",
      "Monthly Expenses",
      "Educational info",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Australia",
    seeMore: "australia-visa",
    country_img: "../images/visa-requirement-images/australia.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Yearly Income",
      "Total Savings Amount",
      "Monthly Expenses",
      "Educational info",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "USA",
    seeMore: "usa-visa",
    country_img: "../images/visa-requirement-images/usa.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Yearly Income",
      "Total Savings Amount",
      "Monthly Expenses",
      "Educational info",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "UK",
    seeMore: "uk-visa",
    country_img: "../images/visa-requirement-images/usa.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 35/45",
      "National Identity or Birth Certificate",
      "Parents & Spouse NID+Siblings NID",
      "Trade License (Business Start Date)",
      "Membership Certificates",
      "Business Card (Two numbers +Email Address + Business Address)",
      "Company Letter head pad (4 to 5 copy)",
      "TIN and Tax Documents",
      "NOC+ Salary Certificate + Job ID Card",
      "Student ID + NOC (For Student)",
      "Bank Statement+Bank Solvency Certificate",
      "Assets Documents (Land+House+Flat+FDR +Sanchoy Patro+Investment) with notary & valuation",
      "Yearly Income",
      "Total Savings Amount",
      "Monthly Expenses",
      "Educational info",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Philippines",
    seeMore: "philippines-visa",
    country_img: "../images/visa-requirement-images/kenia.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photo 2/2 inch size 2 copy",
      "Visiting card",
      "Trade License if business with Notary",
      "Company official pad",
      "Job ID+NOC salary certificate + pay slip if job holder,salary statement",
      "Bank statement last 6 Months (Minimum balance 3,00,000 per person)",
      "Bank solvency Certificate",
      "For students school, College, University ID card,NOC",
      "Marriage Certificate (English Notary)",
      "NID Card + Birth Certificate",
      "Hotel/Accommodation Booking",
      "Air Ticket Booking",
      "Tour Plan",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Vietnam",
    seeMore: "vietnam-visa",
    country_img: "../images/visa-requirement-images/china.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (3.5*4.5 mm) size",
      "Bank statement",
      "Bank solvency",
      "Office ID card",
      "Trade Licence",
      "Office Pad",
      "Visiting Card",
      "TIN Certificate",
      "Noc + Job ID + Salary Certificate",
      "Student ID Card, NOC",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Uzbekistan",
    seeMore: "uzbekistan-visa",
    country_img: "../images/visa-requirement-images/usa.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Photograph (35*45 mm) size",
      "Visiting Card",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
  {
    name: "Cambodia",
    seeMore: "cambodia-visa",
    country_img: "../images/visa-requirement-images/Canada.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "2 Copy 3.5mm*4.5mm size photo",
      "Office ID Card for Job Holder",
      "Travel Date",
      "Hotel/Accommodation Booking",
      "Air Ticket Booking",
      "Processing time: Depends on Embassy rules. See More",
    ],
  },
];

const container = document.getElementById("visa-requirements-container");

countries.forEach((country) => {
  const countrySection = document.createElement("div");
  countrySection.className = "contry_section";
  countrySection.id = country.seeMore;

  countrySection.innerHTML = `
      <div class="requirement_hero">
        <div class="requirement_hero_details">
          <div class="requirement_hero_details_left">
       <img src=${country?.country_img} alt=${country.name} />
          </div>
          <div class="requirement_hero_details_right">
            <p class="requirement_hero_details_right_headText">${
              country.name
            }</p>
            <p class="requirement_hero_details_right_title">
              Your Gateway to ${country.name} Starts Here
            </p>
            <p class="requirement_hero_details_right_para">
              <span>A</span>t Global Travel Bangladesh, we believe that the
              world is meant to be explored — and we’re here to make that
              journey easier, safer, and more exciting for Bangladeshi
              travelers. Whether you dream of studying in Europe, attending
              a business conference in the USA, or simply exploring the
              scenic beauty of Southeast Asia, we are your reliable travel
              and visa partner.
            </p>
            <div class="requirement-hero-btn">
              <a href="./contact.html" style="text-decoration: none">
                <button class="contact_btn">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="requirement_main_content">
        <p class="why_choose">Why Choose Global Travel Bangladesh?</p>
        <ul class="why_choose_content">
          ${country.checklist.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;

  // Append section and divider
  container.appendChild(countrySection);

  const divider = document.createElement("div");
  divider.className = "requirement_bar";
  container.appendChild(divider);
});
