// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Centered on the world

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Data for each location (in English)
//to kezia from mac:
//for the awareness, art, and activism sections, replace all quotations on the outside with backtics (`)
//also refer to the code I wrote for myanmar to add links and images for the rest of the places
//and also the formatting
const locations = [
  {
    coords: [31.5, 34.47],
    title: "Gaza Strip",
    awareness: `
    The Gaza conflict intensified in October 2023 when Hamas launched a large-scale attack on Israel, 
    killing over 1,300 Israelis and taking hostages. Israel responded withheavy airstrikes, a 
    ground invasion, and a complete blockade of Gaza, creating a severe humanitarian crisis. 
    The violence has caused extensive casualties and destruction, exacerbating long-standing tensions 
    between Israelis and Palestinians over land, governance, and sovereignty.
    <a href='https://www.rescue.org/article/crisis-gaza-what-you-need-know' target='_blank'>Resource Link 1,</a> 
    <a href='https://www.brookings.edu/articles/the-gaza-strips-deepening-humanitarian-crisis/' target='_blank'>Resource Link 2,</a> 
    <a href='https://www.aljazeera.com/' target='_blank'>Resource Link 3,</a>
    `,
    art: `
    These three artists located in Gaza use their work to reflect the resilience of the people and the impacts of conflict.
    <img src="gazaImage.jpg" alt="artwork" style="width:100%; margin-top:10px;"> by Malaka Abu Owda,
    <a href='https://www.instagram.com/aya.palestina/' target='_blank'>Aya Juha,</a>
    <a href='https://artzonepalestine.net/artists/ahmed-muhanna' target='_blank'>Ahmaed Muhanna</a>
    `,
    activism: `
    How you can help:
    <a href='https://www.rescue.org/' target='_blank'>Donation,</a>
    <a href='https://uscpr.org/take-action/' target='_blank'>Action</a>
    `
  },
  {
    coords: [15.5, 32.55],
    title: "Sudan",
    awareness: `
    The Sudan crisis involves a violent power struggle between the Sudanese Armed Forces (SAF) 
    and the Rapid Support Forces (RSF), ignited in April 2023. This conflict has devastated urban 
    areas, displaced millions, and caused a severe humanitarian crisis marked by famine, insecurity, 
    and attacks on civilians. 
    <a href='https://www.princetonpoliticalreview.org/international-news/sudans-civil-war-explained' target='_blank'>Resource Link 1,</a> 
    <a href='https://www.independent.co.uk/news/world/africa/sudan-what-is-happening-why-fighting-b2331523.html' target='_blank'>Resource Link 2</a> 
    `,
    art: 
    `Sudanese artists create works that capture the struggle for freedom and justice.
    <img src="sudanImage.jpg" alt="artwork" style="width:100%; margin-top:10px;"> by Yassir Ali,
    <a href='https://www.instagram.com/san.nad/' target='_blank'>Sannad Shareef,</a>
    <a href='https://www.instagram.com/adlanyousif/' target='_blank'>Adlan Yousif</a>
    `,
    activism: `
    Activist groups push for stability, democracy, and improved human rights.
    <a href='https://www.rescue.org/country/sudan' target='_blank'>Donation,</a>
    <a href='https://crisisresponse.iom.int/response/sudan-crisis-response-plan-2024-2025' target='_blank'>Donation</a>
    `
  },
  {
    coords: [15.5527, 48.5164],
    title: "Yemen",
    awareness: `
    The Yemen crisis, ongoing since 2014, is a brutal conflict between Houthi rebels and a 
    Saudi-led coalition backing the internationally recognized government. The war has caused severe humanitarian suffering, 
    with millions displaced and facing famine, while foreign powers like Iran and Saudi Arabia have exacerbated tensions
    <a href='https://www.thenewhumanitarian.org/news-feature/2024/01/25/red-sea-crisis-yemen-humanitarian-aid-needs' target='_blank'>Resource Link 1,</a>
    <a href='https://www.cfr.org/backgrounder/yemen-crisis' target='_blank'>Resource Link 2</a>
    `,
    art: `
    Artists highlight the hardships faced by Yemenis, often focusing on loss and hope.
    <img src="yemenImage.jpg" alt="artwork" style="width:100%; margin-top:10px;"> by Murad Subay,
    <a href='https://www.instagram.com/haifasubay/?hl=en' target='_blank'>Haifa Subay,</a>
    <a href='https://www.salwaaleryani.com/' target='_blank'>Salwa Aleryani</a>
    `,
    activism: `
    Organizations worldwide work to provide humanitarian aid and support peace efforts.
    <a href='https://www.msf.org/yemen' target='_blank'>Donation,</a>
    <a href='https://www.oxfam.org.uk/oxfam-in-action/current-emergencies/yemen/' target='_blank'>Donation</a>
    `
  },
  {
    coords: [34.5, 69.2],
    title: "Afghanistan",
    awareness: `
    The crisis in Afghanistan continues to deepen, following the Taliban's return to power in 2021. 
    This has led to widespread human rights violations, including severe restrictions on women and girls' freedoms, 
    with bans on education, work, and public life. The country also faces extreme poverty, 
    rising unemployment, and a humanitarian disaster exacerbated by ongoing political instability.​
    <a href='https://concernusa.org/news/afghanistan-crisis-explained/' target='_blank'>Resource Link 1,</a>
    <a href='https://www.usip.org/publications/2024/09/where-afghanistan-three-years-taliban-rule' target='_blank'>Resource Link 2</a>
    `,
    art: `
    Artists document the resilience and struggles of Afghan communities through various forms.
    <img src="afghanImage.jpeg" alt="artwork" style="width:100%; margin-top:10px;"> by Sara Rahmani,
    <a href='https://www.shamsiahassani.net/' target='_blank'>Shamsia Hassani,</a>
    <a href='https://omaidsharifi.com/' target='_blank'>Omaid Sharifi</a>
    `,
    activism: `
    Activists aim to secure basic rights and safety for vulnerable populations.
    <a href='https://womenforafghanwomen.org/' target='_blank'>Donation,</a>
    <a href='https://crisisrelief.un.org/afghanistan-crisis' target='_blank'>Donation</a>
    `
  },
  {
    coords: [9.145, 40.4897],
    title: "Ethiopia",
    awareness: `
    The conflict in Ethiopia, particularly in the Tigray region, escalated in November 2020 when 
    tensions between the Tigray People's Liberation Front (TPLF) and the federal government erupted 
    into armed clashes. The war involved Ethiopian, Eritrean, and regional forces, causing severe humanitarian 
    crises, displacements, and ethnic violence. A peace agreement was signed in 2022, but violence persist.
    <a href='https://www.dw.com/en/is-peace-within-reach-2-years-after-tigray-war/a-70649921' target='_blank'>Resource Link 1,</a>
    <a href='https://www.cfr.org/global-conflict-tracker/conflict/conflict-ethiopia' target='_blank'>Resource Link 2</a>
    `,
    art: `
    Artists use their platforms to raise awareness and call for peace in affected areas.
    <img src="ethiopiaImage.jpg" alt="artwork" style="width:100%; margin-top:10px;"> by Dawit Abebe,
    <a href='https://ashenafemestika.com/' target='_blank'>Ashenafe Mestika,</a>
    <a href='https://www.instagram.com/tigrayartcollective/' target='_blank'>Tigray Art Collective</a>
    `,
    activism: `
    Efforts focus on humanitarian support and peace-building initiatives.
    <a href='https://www.usaid.gov/ethiopia' target='_blank'>Donation,</a>
    <a href='https://ethiopia.iom.int/' target='_blank'>Donation</a>
    `,
  },
  {
    coords: [19.4326, -99.1332],
    title: "Myanmar",
    awareness: `
      The crisis in Myanmar, which began with the 2021 military coup, has escalated into a 
      brutal civil war, with various ethnic resistance groups intensifying their fight against 
      the military junta. The coup ousted the democratically elected government, leading to mass protests 
      and violent crackdowns. Armed resistance has since grown, with widespread civilian displacement. 
      In late 2023, coordinated attacks by resistance groups, such as the Brotherhood Alliance, gained momentum. 
      The military has responded with bombings and heavy repression, threatening the collapse of the state. 
      The situation has sparked significant humanitarian concerns, with increasing civilian casualties and regional instability.
      <a href='https://www.crisisgroup.org/asia/south-east-asia/myanmar' target='_blank'>Resource Link 1,</a>
      <a href='https://www.usip.org/publications/2024/02/three-years-after-coup-myanmars-generals-face-existential-crisis' target='_blank'>Resource Link 2</a>
    `,
    art: `
      Local and international artists document the impact of the conflict on civilians.
     <img src="myanmarImage.jpg" alt="artwork" style="width:100%; margin-top:10px;"> by Zaw Win Pe, 
     <a href='https://www.instagram.com/tamwephoto/' target='_blank'>Ta Mwe,</a>
     <a href='https://emergentartspace.org/artists/5624/' target='_blank'>Sai</a>
    `,
    activism: `Organizations advocate for democracy and provide aid to displaced communities.
    <a href='https://www.undp.org/myanmar/news/more-two-million-lives-empowered-enabling-recovery-and-hope-myanmars-crisis' target='_blank'>Donation,</a>
    <a href='https://www.wfp.org/emergencies/myanmar-emergency' target='_blank'>Donation</a>
    `
  },
  {
    coords: [18.9712, -72.2852],
    title: "Haiti",
    awareness: `
    The crisis in Haiti is marked by extreme political instability, widespread gang violence, 
    and severe poverty. Since 2020, the country has lacked a functioning government, leading to a 
    vacuum of power that gangs have exploited to control up to 60% of the capital, Port-au-Prince. 
    Violent clashes and kidnappings have become daily occurrences, worsening the humanitarian situation. 
    Over 700,000 Haitians have been displaced, and nearly half of the population faces food insecurity. 
    International interventions have failed to curb the 
    violence, and humanitarian aid is hampered by the deteriorating security situation.
    <a href='https://www.rand.org/pubs/commentary/2024/11/haitis-crisis-haitis-solutions-why-the-united-states.html' target='_blank'>Resource Link 1,</a>
    <a href='https://www.amnesty.org/en/latest/news/2024/03/haiti-crisis-requires-international-condemnation-lasting-solutions/' target='_blank'>Resource Link 2</a>
    `,
    art: `
    Artists capture the resilience and rich culture of Haiti amidst hardship.
    <img src="haitiImage.jpg" alt="artwork" style="width:100%; margin-top:10px;"> by Tessa Mars, 
    <a href='https://www.manuelmathieu.com/' target='_blank'>Manuel Mathieu,</a>
    <a href='https://duval-carrie.com/' target='_blank'>Edouard Duval-Carrié</a>
    `,
    activism: `
    Activist groups focus on rebuilding efforts, social justice, and human rights.
    <a href='https://crisisresponse.iom.int/response/haiti-crisis-response-plan-2022-2024' target='_blank'>Donation,</a>
    <a href='https://www.pih.org/country/haiti' target='_blank'>Donation</a>
    `

  }
];

// Add markers to the map
locations.forEach(location => {
  const marker = L.marker(location.coords).addTo(map);
  marker.on('click', () => openPanel(location));
});

// Make the info panel movable
let isDragging = false;
let offsetX, offsetY;

const panel = document.getElementById('info-panel');
panel.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - panel.getBoundingClientRect().left;
  offsetY = e.clientY - panel.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    panel.style.left = `${e.clientX - offsetX}px`;
    panel.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Close panel button functionality
const closePanelButton = document.getElementById('close-panel');
closePanelButton.addEventListener('click', () => panel.classList.add('hidden'));

// Show info panel with data for each location
function openPanel(location) {
  panel.classList.remove('hidden');
  panel.style.left = '70%';
  panel.style.top = '20%';
  document.getElementById('location-title').innerText = location.title;
  document.getElementById('awareness-section').innerHTML = `
  <h3>Awareness</h3>
  ${location.awareness}
  `;
  document.getElementById('art-section').innerHTML = `
  <h3>Art</h3>
  ${location.art}
  `;
  document.getElementById('activism-section').innerHTML = `
  <h3>Activism</h3>
  ${location.activism}
  `;
}
