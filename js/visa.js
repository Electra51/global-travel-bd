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
    country_details:
      "Singapore is a shining example of how a small nation can blend cutting-edge innovation with deep cultural heritage. This city-state is known for its clean streets, futuristic skyline, and multicultural charm. Visitors are drawn to the architectural wonders of Marina Bay Sands, the lush Gardens by the Bay, and the awe-inspiring Jewel Changi Airport, which itself feels like a tourist attraction. Yet beyond the high-tech marvels, Singapore offers pockets of cultural richness—Little India bursts with colors and spices, Chinatown holds centuries of heritage, and Kampong Glam celebrates Malay-Muslim traditions.\nThe food scene here is legendary, with hawker centers offering dishes like laksa, satay, and Hainanese chicken rice at unbeatable prices. Singapore’s efficient public transport, world-class safety, and family-friendly attractions make it an ideal destination for all kinds of travelers. Whether you're looking to shop on Orchard Road, enjoy nightlife at Clarke Quay, or relax by the waterfront at Sentosa Island, Singapore delivers a seamless, vibrant experience.",
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
    country_details:
      "Thailand is a land where spirituality, natural beauty, and vibrant street life blend into a truly unique travel experience. In Bangkok, ancient temples like Wat Phra Kaew and Wat Arun stand proudly amidst a skyline of skyscrapers and skytrains. The city's markets—whether floating or on land—are full of life, offering delicious street food, clothes, and souvenirs. In the north, Chiang Mai is a serene haven of Buddhist monasteries, mountain trekking, and ethical elephant sanctuaries.\nDown south, Thailand becomes a tropical dream: pristine beaches in Krabi and Phuket, the iconic limestone cliffs of Railay, and the laid-back islands of Koh Samui and Koh Lanta. Thai cuisine is one of the most celebrated in the world, from fiery curries to delicate desserts like mango sticky rice. Thailand’s welcoming people, known for their warm “Land of Smiles” hospitality, make every journey more personal. Cultural festivals like Songkran and Loi Krathong showcase the nation’s deep-rooted traditions in joyful, colorful ways.",
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
    country_details:
      "Malaysia offers an extraordinary mix of cultures, landscapes, and flavors that captivate every traveler. Kuala Lumpur, its capital, is a bustling metropolis where the iconic Petronas Towers rise above colorful street markets and Islamic-inspired architecture. But Malaysia is more than a modern city—it’s a country of rich diversity, with Malay, Chinese, Indian, and indigenous influences shaping its language, festivals, and daily life.\nHead to Penang for vibrant street art, colonial heritage, and some of the best food in Asia. Melaka’s historical core tells stories of Portuguese, Dutch, and British rule, while the tea-scented hills of the Cameron Highlands offer a cool, scenic retreat. For nature lovers, the rainforests of Borneo provide incredible biodiversity, including orangutans and rare bird species. Malaysia’s beaches and islands, such as Langkawi and Tioman, are serene escapes with turquoise waters and lush backdrops. Every meal is a flavor journey—think nasi lemak, roti canai, and char kway teow.",
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
    country_details:
      "China is an expansive nation where ancient wisdom meets modern might. With over 5,000 years of history, it is home to some of the world’s most iconic landmarks—like the Great Wall, the Forbidden City, and the Terracotta Army. In cities like Beijing, Shanghai, and Xi’an, the past and future coexist, offering travelers a unique view into China's transformation. Each region reveals a different character: the dramatic karst mountains of Guilin, the Tibetan plateau’s spiritual solitude, the deserts of Xinjiang, and the lush tea fields of Hangzhou.\nCulturally, China is a rich tapestry of philosophies, festivals, and customs. Confucianism, Taoism, and Buddhism have deeply influenced Chinese society, while its cuisine—from spicy Sichuan hotpots to delicate Cantonese dim sum—reflects regional diversity and culinary mastery. Visitors can witness traditional arts like calligraphy and shadow puppetry, or marvel at ultra-modern tech hubs and infrastructure. Whether you’re walking ancient city walls or riding high-speed trains, China offers an unforgettable journey through time and culture.",
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
    country_details:
      "India is a continent within a country—vivid, vast, and endlessly fascinating. Every state feels like its own world, with distinct languages, cuisines, attire, and traditions. North India stuns with its regal architecture—the Taj Mahal in Agra, the palaces of Rajasthan, and the sacred Ganges flowing through Varanasi. In the south, explore ancient Dravidian temples in Tamil Nadu, lush backwaters in Kerala, and the tech-savvy cities of Bangalore and Hyderabad. The Himalayas offer trekking adventures and spiritual retreats, while Goa promises beaches, music, and Portuguese flair.\nIndia is both deeply spiritual and wildly dynamic. Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism all thrive here, and their festivals light up the calendar—Holi’s riot of colors, Diwali’s flickering lamps, and Eid’s generous feasts. Indian cuisine varies from fiery curries in the north to coconut-rich dishes in the south, street chaats in the west to steamed delicacies in the east. The country's diversity isn’t just geographical—it’s emotional, sensory, and deeply personal. Traveling through India challenges and changes you, offering moments of awe, introspection, and joy at every turn.",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Bank statement last 6 months",
      "Trade License if businessman\nOC +Job ID for (job holder)",
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
    country_details:
      "Sri Lanka is a compact island that offers a kaleidoscope of experiences—from sacred cities to serene beaches, lush tea hills to wildlife safaris. Begin your journey at the ancient rock fortress of Sigiriya, climb its lion-shaped stairway and take in panoramic views of the island’s heartland. In the Cultural Triangle, discover the temples and ruins of Anuradhapura, Polonnaruwa, and Dambulla, rich with Buddhist heritage. Head south to the colonial town of Galle with its charming Dutch fort, or relax on the golden beaches of Mirissa and Unawatuna.\nSri Lanka’s hill country is a lush paradise of tea plantations, waterfalls, and cool mountain air—especially around Nuwara Eliya and Ella. The country is also a haven for wildlife lovers, offering national parks like Yala and Udawalawe where you can spot elephants, leopards, and exotic birds. Sri Lankan cuisine is a burst of spices—curries, coconut sambol, and hoppers are must-tries. The warmth of the people, the rhythm of traditional dance, and the scent of Ceylon tea make Sri Lanka a deeply soulful destination.",
    country_img: "../images/visa-requirement-images/shrilangka.png",
    checklist: [
      "All Passport + Recent Passport with minimum 1 year validity",
      "Bank statement last 6 months",
      "Trade License if businessman\nOC + Job ID for job holder",
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
    country_details:
      "Saudi Arabia is a land where ancient spirituality meets modern transformation. For millions of Muslims, it is the heart of faith and devotion—home to the <strong>holy cities of Makkah and Madinah</strong>, where the <strong>Umrah pilgrimage</strong> offers a deeply moving spiritual experience. Performing <strong>Tawaf</strong> around the <strong>Kaaba</strong>, praying at the <strong>Masjid al-Haram</strong>, and visiting the <strong>Prophet's Mosque</strong> in Madinah are unforgettable acts of worship and reflection.\nBeyond its religious significance, Saudi Arabia is now opening up its treasures to global travelers. The capital <strong>Riyadh</strong> blends heritage and innovation, with landmarks like the <strong>Kingdom Centre Tower, National Museum</strong>, and restored <strong>Diriyah</strong>—the birthplace of the Saudi state.\nIn the northwest, <strong>AlUla</strong> unveils breathtaking desert landscapes and ancient Nabatean tombs at <strong>Hegra (Madain Saleh)</strong>, a UNESCO World Heritage Site akin to Petra. The <strong>Edge of the World</strong>, near Riyadh, offers dramatic cliff views over endless desert plains.\nThe port city of <strong>Jeddah</strong> charms with its Red Sea Corniche, coral architecture in <strong>Al-Balad (Old Town)</strong>, and modern art scene. Adventurers can explore the <strong>Asir Mountains</strong>, dive in the <strong>Red Sea’s coral reefs</strong>, or relax in the beach resorts of the <strong>Eastern Province</strong> like <strong>Al Khobar</strong> and <strong>Dammam</strong>.\nSaudi hospitality is heartfelt and rooted in Islamic tradition—guests are honored with Arabic coffee, dates, and genuine warmth. Traditional souks, camel festivals, and cultural events like <strong>Riyadh Season</strong> offer a glimpse into a rich heritage stretching back thousands of years.\nWhether you're visiting for Umrah or exploring its natural and historical wonders, Saudi Arabia invites you to witness a land of <strong>deep faith, ancient civilizations, and modern ambition.</strong>",
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
    country_details:
      "Dubai is a city of extremes—where the world’s tallest skyscraper meets vast desert dunes, and futuristic architecture coexists with traditional souks. Home to the iconic Burj Khalifa and the luxurious Burj Al Arab, Dubai dazzles with ambition and glamour. But there’s more than just glitz; explore the winding lanes of Al Fahidi Historical District, cross the Dubai Creek in an abra boat, and shop for gold and spices in bustling traditional markets. The city’s blend of Emirati culture with global diversity creates a unique, cosmopolitan atmosphere.\nVenture into the desert for an unforgettable evening of dune bashing, camel rides, and Arabic entertainment under the stars. Dubai’s malls are not just for shopping—they host aquariums, ski slopes, and art galleries. For a cultural contrast, visit the Grand Mosque in nearby Abu Dhabi or discover the heritage of the Bedouin people through local museums. With year-round sunshine, exceptional infrastructure, and family-friendly attractions like Dubai Parks and the Atlantis waterpark, Dubai is a playground for both luxury lovers and cultural explorers.",
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
    country_details:
      "Hong Kong is a dazzling blend of East and West, where ancient temples sit beneath glass skyscrapers and lush mountains frame a neon-lit skyline. This compact yet energetic city offers panoramic views from Victoria Peak, peaceful moments at Man Mo Temple, and shopping galore in Causeway Bay and Mong Kok. The iconic Star Ferry still glides between Hong Kong Island and Kowloon, reminding visitors of the city’s rich maritime past.\nDim sum brunches, egg tarts, and bustling dai pai dong street stalls make Hong Kong a food lover’s dream. But beyond the urban hustle, there's serenity—hike the Dragon’s Back trail, explore fishing villages like Tai O, or take a ferry to Lantau Island to see the Tian Tan Buddha. With its fusion of Cantonese traditions, British colonial influence, and modern Chinese energy, Hong Kong is layered with stories. Its cultural festivals, such as Chinese New Year and the Mid-Autumn Festival, turn the city into a vibrant canvas of lights, rituals, and joy.",
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
    country_details:
      "New Zealand is a paradise for nature lovers, thrill-seekers, and anyone craving fresh air and freedom. With landscapes ranging from snow-capped mountains to crystal-clear lakes, rolling farmlands to dramatic coastlines, the country feels like a giant movie set—unsurprising, since it famously doubled as Middle Earth in The Lord of the Rings. In the North Island, explore geothermal wonders in Rotorua, immerse yourself in Maori culture, or visit the vibrant cities of Auckland and Wellington.\nThe South Island is a haven of adventure, with Queenstown offering bungee jumping, skydiving, and skiing, while places like Fiordland and Mount Cook inspire awe with their untouched beauty. New Zealanders—or 'Kiwis'—are famously friendly and laid-back, with a deep respect for the land and indigenous traditions. Maori heritage adds richness to everything from the haka dance to storytelling. The country’s wine, seafood, and fresh farm-to-table cuisine round out a destination that’s as nourishing as it is exciting.",
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
    country_details:
      "Qatar is a rising star in the Gulf, where ultramodern ambition is infused with deep Islamic tradition. Doha, its capital, showcases this contrast beautifully with glittering skyscrapers alongside traditional dhow boats on the Corniche. The Museum of Islamic Art and the new National Museum of Qatar offer stunning architecture and rich insight into the country’s history and identity. Wander through Souq Waqif, a lively market where perfumes, spices, and falcons are traded in a timeless atmosphere.\nOutside the city, Qatar’s desert stretches into golden silence—perfect for dune bashing, sandboarding, or camping under the stars in Bedouin-style tents. Cultural events like camel races, falconry contests, and local festivals help preserve the nation’s heritage even as it prepares for the future. Qatar made global headlines hosting the 2022 FIFA World Cup, and its world-class infrastructure, museums, and hospitality continue to impress visitors. A small country with a strong sense of pride, Qatar offers a unique Gulf experience that's authentic, elegant, and rapidly evolving.",
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
    country_details:
      "Kenya is Africa’s premier safari destination, offering a rich tapestry of wildlife, landscapes, and indigenous cultures. The Maasai Mara is world-famous for the Great Migration, where millions of wildebeest and zebras cross the plains in a dramatic display of nature. Amboseli National Park, with its herds of elephants and views of Mount Kilimanjaro, is another iconic highlight. Nairobi, the capital, is a dynamic city where you can visit the Giraffe Centre, Karen Blixen Museum, and vibrant craft markets.\nBeyond wildlife, Kenya has beautiful coastlines—Mombasa, Diani Beach, and Lamu Island offer white sands, Swahili heritage, and turquoise waters. The Great Rift Valley and Lake Nakuru showcase stunning geological wonders and flamingo-filled lakes. Kenya’s diverse ethnic groups, including the Maasai, Kikuyu, and Luo, enrich the country’s traditions through music, dress, and community life. The country’s cuisine features flavors like nyama choma (grilled meat), ugali, and coastal curries infused with coconut and spice.",
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
    country_img: "../images/visa-requirement-images/egypt.png",
    country_details:
      "Egypt is a land of ancient wonders and timeless beauty, where the past stands proudly in the present. The Pyramids of Giza, the Sphinx, and the Valley of the Kings are awe-inspiring symbols of one of the world’s oldest civilizations. Cairo pulses with history and life—its Islamic architecture, bustling bazaars like Khan el-Khalili, and the Grand Egyptian Museum hold priceless treasures.\nAlong the Nile River, you can cruise between Luxor and Aswan, visiting majestic temples like Karnak and Philae. In the north, Alexandria echoes its Greco-Roman legacy by the Mediterranean Sea. Egypt also surprises with serene oases, colorful Nubian villages, and world-class diving in the Red Sea resort of Sharm El Sheikh. Egyptian culture is rooted in hospitality, strong family ties, and traditions passed down over millennia. The cuisine—featuring dishes like koshari, ful medames, and stuffed vine leaves—is hearty, flavorful, and soulful.",
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
    country_details:
      "Ethiopia stands apart as one of the most unique and ancient countries in Africa. It is the only African nation that was never colonized and is home to a civilization that dates back thousands of years. In Lalibela, you’ll find remarkable rock-hewn churches carved into the mountains—UNESCO sites that remain active places of worship. The ancient city of Axum, once the heart of a powerful empire, is shrouded in mystery and legend.\nEthiopia is also the source of the Blue Nile and the cradle of coffee culture. Its landscapes range from the Simien Mountains to the otherworldly Danakil Depression. Addis Ababa, the capital, is the hub of African diplomacy and culture, with excellent museums and vibrant nightlife. Ethiopia’s Orthodox Christian traditions, elaborate religious festivals like Timket, and native script (Ge'ez) set it apart from the rest of the continent. Ethiopian cuisine, centered on injera (a sour flatbread) and spicy stews, is a communal, flavorful experience.",
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
    country_details:
      "Indonesia is an immense archipelago of over 17,000 islands, each offering something different—from jungle-clad volcanoes to ancient temples, idyllic beaches to vibrant cities. Bali, its most famous island, draws travelers with its rice terraces, surfing spots, Hindu temples, and spiritual retreats. Java, the heart of the nation, boasts the cultural hub of Yogyakarta, majestic Borobudur and Prambanan temples, and the energetic capital, Jakarta.\nKomodo National Park offers encounters with the legendary Komodo dragon, while Sumatra and Kalimantan provide deep jungle adventures and rare wildlife like orangutans and tigers. The island of Sulawesi holds unique tribal cultures and surreal landscapes. Indonesia’s population is incredibly diverse, with hundreds of ethnic groups, languages, and customs unified under a national motto of “Unity in Diversity.” The country’s cuisine reflects this variety—spicy sambals, satay, rendang, nasi goreng—all infused with bold, complex flavors. Indonesia is a sensory journey across cultures, religions, and landscapes.",
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
    country_details:
      "Brunei is a small but wealthy nation on the island of Borneo, known for its Islamic heritage, lush rainforests, and tranquil pace of life. The capital, Bandar Seri Begawan, is home to opulent landmarks such as the Sultan Omar Ali Saifuddien Mosque and the modern Jame' Asr Hassanil Bolkiah Mosque, both architectural masterpieces that reflect the country’s devotion to Islam.\nDespite its small size, Brunei is rich in biodiversity—thanks to protected rainforests like Ulu Temburong National Park, a pristine haven accessible only by boat. The country is ruled by a monarchy, and its social systems reflect a blend of traditional values and modern development. Kampong Ayer, the world’s largest water village, showcases Brunei’s unique way of life, where people live in stilt houses above the river. Bruneian cuisine includes Malay, Chinese, and Indian influences, with dishes like nasi katok, ambuyat, and grilled seafood reflecting the country’s cultural blend.",
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
    country_details:
      "Russia, the largest country on Earth, offers a staggering range of history, architecture, and natural beauty. From the grandeur of Moscow’s Red Square and the Kremlin to the imperial elegance of Saint Petersburg’s palaces and cathedrals, Russian cities are showcases of art, power, and culture. The Trans-Siberian Railway offers an epic journey across diverse landscapes—from European cities to remote Siberian wilderness.\nRussia’s cultural heritage is immense: the works of Tolstoy and Dostoevsky, the ballet of the Bolshoi and Mariinsky, and the icons and frescoes of Orthodox Christianity are globally revered. Beyond cities, you’ll find fairy-tale villages, onion-domed churches, and dramatic scenery such as Lake Baikal, the Caucasus mountains, and Kamchatka’s volcanoes. Russian hospitality is heartfelt, and traditions like banya (steam baths), folk music, and long toasts over vodka are integral to the experience. The cuisine includes hearty dishes like borscht, pelmeni, and blini, blending Slavic roots with Central Asian and Caucasian influences.",
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
    country_details:
      "South Korea is where deep-rooted traditions meet cutting-edge technology, creating a dynamic and inspiring travel experience. Seoul is a city of contrasts—Buddhist temples and palaces like Gyeongbokgung sit alongside neon-lit skyscrapers and stylish K-pop culture hubs. The country has become a global trendsetter in fashion, music, skincare, and food, yet its cultural identity remains strong and deeply respected.\nIn the countryside, places like Gyeongju preserve the ancient heritage of the Silla dynasty, while Jeonju celebrates traditional hanok houses and Korea’s famous cuisine. Nature lovers can hike in Seoraksan National Park, relax on Jeju Island’s beaches, or enjoy cherry blossoms in spring. Korean cuisine is flavorful and diverse, featuring dishes like kimchi, bibimbap, bulgogi, and a rich culture of side dishes (banchan). Respect for elders, Confucian values, and ceremonial tea practices are still observed, making South Korea a land of grace, energy, and innovation.",
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
    country_details:
      "Morocco enchants visitors with its mix of Berber, Arab, and French influences, its colorful medinas, and its stunning diversity of landscapes. In cities like Marrakech and Fes, ancient souks, ornate palaces, and mosaic-covered courtyards invite endless exploration. The blue-washed town of Chefchaouen offers a serene contrast, nestled in the Rif Mountains, while Casablanca and Rabat add modern flair.\nBeyond the cities, Morocco’s scenery is breathtaking: the golden dunes of the Sahara, the Atlas Mountains dotted with kasbahs, and the Atlantic coastline offering surf and fresh seafood. Moroccan culture is steeped in hospitality, storytelling, and rich artistic traditions—seen in carpets, ceramics, and intricate metalwork. The cuisine is a highlight: tagines, couscous, mint tea, and an array of sweet and savory pastries reflect centuries of cultural fusion. Morocco is a sensory tapestry—colorful, aromatic, and full of soul.",
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
    country_details:
      "Turkey is where continents, empires, and cultures collide. Bridging Europe and Asia, it offers a unique fusion of East and West. Istanbul alone is worth the journey, with its skyline of minarets and domes, bustling bazaars like the Grand Bazaar, and historical treasures like Hagia Sophia and the Blue Mosque. The Bosphorus Strait adds natural beauty and connects two worlds—literally.\nTurkey’s ancient heritage stretches from the ruins of Ephesus and Troy to the rock formations of Cappadocia and the travertine terraces of Pamukkale. Coastal towns along the Aegean and Mediterranean Seas, like Antalya and Bodrum, provide sun-drenched relaxation and turquoise waters. Turkish cuisine is rich and varied—kebabs, mezes, baklava, and Turkish tea or coffee are everyday delights. The country’s people are proud of their hospitality, and traditions like hammams (bathhouses), call to prayer, and whirling dervishes keep its rich culture alive.",
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
    country_details:
      "The <strong>Schengen Area</strong> is one of the most exciting travel zones in the world. It allows <strong>passport-free movement across 29 European countries</strong>—meaning you can travel from France to Germany, or from Italy to the Netherlands, without border checks. For tourists, this means exploring the best of Europe with <strong>just one visa</strong>.\nAs of 2025, the <strong>29 Schengen countries</strong> are:\n<strong>Austria, Belgium, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland, Bulgaria, and Romania.</strong> (Note: Bulgaria and Romania fully joined the Schengen Area for air and sea travel in 2024.)\nFrom the <strong>Eiffel Tower in Paris</strong> to the <strong>canals of Amsterdam</strong>, the <strong>fjords of Norway</strong> to the <strong>historic castles of Germany</strong>, and the <strong>sunny beaches of Spain</strong> to the <strong>snowy Alps in Switzerland</strong>—the Schengen Area offers an endless variety of landscapes, cultures, languages, and cuisines.\nWhat makes the Schengen Zone unique is the ease of movement:<li><strong>One visa</strong> lets you travel across all 29 countries</li><li><strong>No internal borders</strong> for land, air, or sea (some exceptions for security reasons)</li><li>Ideal for <strong>backpackers, students, families, and business travelers</strong></li><li>Rich cultural diversity—from Western European capitals to Eastern European gems</li>The <strong>Schengen Visa</strong> is usually valid for <strong>short stays up to 90 days within any 180-day period</strong>, whether for tourism, visiting friends, or business.In addition to world-famous landmarks, the Schengen countries offer charming small towns, local festivals, UNESCO heritage sites, world-class museums, alpine adventures, Mediterranean coastlines, and more.\nWhether you're dreaming of a gondola ride in <strong>Venice</strong>, hiking in the <strong>Swiss Alps</strong>, chasing the <strong>Northern Lights in Finland</strong>, exploring medieval towns in <strong>Poland</strong>, or enjoying tapas in <strong>Spain</strong>—the Schengen Area is your gateway to the <strong>best of Europe in one incredible journey</strong>.",
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
    country_details:
      "Japan is a country of exquisite balance—between tradition and innovation, serenity and energy. Tokyo dazzles with futuristic architecture, high-speed trains, anime culture, and Michelin-starred cuisine, while Kyoto preserves Japan’s spiritual heart through Zen gardens, wooden teahouses, and centuries-old temples. The country’s attention to detail and aesthetics is found everywhere—from art and clothing to food presentation and public behavior.\nMount Fuji’s iconic silhouette, the cherry blossoms of spring, and the autumn foliage are natural highlights. Japan’s regional diversity is rich—Hokkaido offers winter sports and untouched nature, while Okinawa brings tropical vibes and unique cultural heritage. Japanese cuisine is among the world’s most refined, from sushi and ramen to kaiseki multi-course meals and street snacks like takoyaki. Deep respect for nature, elders, and rituals permeate daily life, making travel here both enriching and peaceful.",
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
    country_img: "../images/visa-requirement-images/Canada.png",
    country_details:
      "Canada is a vast land of natural splendor and multicultural harmony. From the dramatic Rocky Mountains of Alberta to the vibrant city life in Toronto, Montreal, and Vancouver, the country offers endless variety. Niagara Falls stuns with its power, while Banff and Jasper enchant with turquoise lakes and glacier-carved peaks. Quebec City and Montreal bring French charm, historic architecture, and European-style cafes.\nCanada's cultural identity is shaped by its Indigenous roots, British and French influences, and welcoming immigration policy. Festivals like Canada Day, Winterlude, and Caribana showcase its diversity. Whether you’re canoeing in Algonquin Park, spotting polar bears in Churchill, or savoring maple syrup pancakes in a cozy lodge, Canada delivers a serene, respectful, and expansive travel experience. Its people are famously polite, its spaces wide and clean, and its spirit deeply connected to both land and community.",
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
    country_details:
      "Australia is a sun-soaked wonderland of laid-back cities, stunning coastlines, and extraordinary wildlife. Sydney, with its iconic Opera House and Harbour Bridge, is a cosmopolitan gem, while Melbourne charms with street art, coffee culture, and artsy laneways. The Great Barrier Reef offers world-class diving, and Uluru rises like a sacred monument in the heart of the Outback.\nAustralia is a country where kangaroos hop past wineries and Aboriginal stories echo through ancient rock formations. Surf the Gold Coast, trek in Tasmania, or relax on Whitsunday beaches. Aussie culture celebrates mateship, sports, and outdoor life, with BBQs and beach cricket as weekend rituals. From coral reefs to desert plains, rainforests to bustling cities, Australia is a land of contrasts, energy, and warm-hearted people.",
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
    country_details:
      "The USA is a mosaic of regions, each with its own identity, story, and appeal. New York dazzles with skyscrapers and culture, from Broadway shows to Central Park. California brings the glam of Hollywood, the tech buzz of Silicon Valley, and natural wonders like Yosemite and Big Sur. In the south, New Orleans beats to the rhythm of jazz and soul food, while the Grand Canyon and Yellowstone reflect nature's raw power.\nThe US is a leader in innovation, media, and entertainment, but also holds deep cultural roots in places like Boston, Philadelphia, and the Native American reservations of the Southwest. Road trips, national parks, and fast-paced cities are core to the American travel dream. Whether you're watching a Broadway show, hiking a desert trail, or catching a baseball game, America is bold, diverse, and unforgettable.",
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
    country_img: "../images/visa-requirement-images/uk.png",
    country_details:
      "The UK is where history whispers from every castle, and culture flows from every street corner. In London, world-class museums, royal palaces, and cutting-edge theatre define the cityscape. Edinburgh brings Gothic charm and ancient storytelling, while Liverpool and Manchester pulse with music and football glory. Oxford and Cambridge impress with scholarly legacy, and the Lake District and Scottish Highlands stir the soul with wild beauty.\nBritish culture is steeped in literature, monarchy, and dry wit. Traditional afternoon tea meets multicultural cuisine, and centuries-old pubs share space with modern art galleries. From Stonehenge and Shakespeare’s Stratford to the cliffs of Dover and the Giant’s Causeway, the UK offers timeless appeal, layered heritage, and a unique blend of old-world grace and modern vibrance.",
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
    country_img: "../images/visa-requirement-images/philippines.png",
    country_details:
      "The Philippines is a tropical paradise made up of over 7,000 islands, each blessed with natural charm and warm smiles. White-sand beaches in Palawan and Boracay are among the best in the world, while the Chocolate Hills of Bohol and Banaue Rice Terraces offer spectacular inland beauty. Manila mixes colonial history with modern bustle, and Cebu and Davao shine with cultural pride and nature.\nFilipino hospitality is legendary—guests are treated like family, and festivals like Sinulog and Ati-Atihan burst with color, dance, and joy. English is widely spoken, and the people’s warmth is matched only by their love of karaoke and good food. Try adobo, lechon, or halo-halo for a real taste of Pinoy life. Whether island-hopping, diving coral reefs, or exploring volcanoes, the Philippines promises sun, culture, and a whole lot of heart.",
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
    country_img: "../images/visa-requirement-images/vietnum.png",
    country_details:
      "Vietnam is a land of breathtaking contrasts—from rice paddies and limestone peaks to busy markets and ancient temples. Hanoi charms with colonial streets and traditional puppet shows, while Ho Chi Minh City (Saigon) hums with energy and progress. Halong Bay’s karst formations are otherworldly, and towns like Hoi An and Hue preserve imperial and cultural heritage.\nVietnamese cuisine is a national treasure—pho, banh mi, fresh spring rolls, and strong drip coffee are daily delights. The country's culture values harmony, family, and respect, often expressed in temple visits, ancestor altars, and Tet (Lunar New Year) celebrations. Whether you're cruising the Mekong Delta, climbing terraced hills in Sapa, or biking through villages, Vietnam offers both peace and a rich sensory journey through history and life.",
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
    country_img: "../images/visa-requirement-images/uzbekistan.png",
    country_details:
      "Uzbekistan is a Silk Road treasure—an ancient land of blue-domed cities, desert fortresses, and warm-hearted people. Samarkand, Bukhara, and Khiva glow with intricate mosaics, grand madrasahs, and minarets that recall the height of Islamic culture and trade. Tashkent, the capital, blends Soviet legacy with Central Asian modernity, offering museums, parks, and diverse cuisine.\nUzbek culture is deeply rooted in hospitality—tea is always offered, and meals are feasts of plov, kebabs, and fresh bread. Traditional music, colorful textiles, and bustling bazaars fill the senses with energy. Whether you're tracing the footsteps of ancient caravans or marveling at architectural marvels, Uzbekistan provides a timeless, welcoming, and culturally rich experience at the heart of Asia.",
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
    country_details:
      "Cambodia is a soulful destination where ancient ruins and resilient spirit leave lasting impressions. The Angkor Wat temple complex is the country's crown jewel—a vast archaeological wonder that draws travelers from around the world. Nearby, Siem Reap offers lively markets, traditional dance shows, and friendly hospitality. Phnom Penh, the capital, balances royal palaces with sobering sites like the Killing Fields and S-21 Museum.\nCambodian culture reflects Buddhist calm, Khmer pride, and a deep connection to the land. Local villages and floating communities on the Tonle Sap Lake offer glimpses into traditional life. Khmer cuisine is flavorful and underrated—try amok curry or kuy teav noodles. Despite its turbulent past, Cambodia shines with resilience, kindness, and cultural beauty that touches the heart of every visitor.",
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
  // First letter alada kore span a rakha
  const firstLetter = country.country_details.charAt(0);
  const remainingText = country.country_details.slice(1);
  const formattedDetails = remainingText.replace(/\n/g, "<br>");
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
  <span>${firstLetter}</span>${formattedDetails}
</p>
</div>
        </div>
      </div>
      <div class="requirement_main_content">
        <p class="why_choose">Visa Checklist</p>
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
