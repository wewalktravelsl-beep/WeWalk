const attractionsData = {
      'colombo': {
        title: 'Colombo', location: 'West Coast', emoji: '🏙️',
        tab: 'hero-colombo.jpeg',
        hero: 'hero-colombo.jpeg',
        tagline: 'Where old Ceylon meets new skyline.',
        desc: 'Sri Lanka\'s capital is a city of contrasts — colonial-era streets and glass towers, street food and rooftop bars. Climb the Lotus Tower for sunset, wander Galle Face Green with the locals, or explore the boutiques at Port City.',
        miss: ['Lotus Tower', 'One Galle Face', 'Gangaramaya Temple', 'Pettah Markets', 'Street Food', 'Go-Karting']
      },
      'negombo': {
        title: 'Negombo', location: 'West Coast', emoji: '⛵',
        tab: 'hero-negombo.jpeg',
        hero: 'hero-negombo.jpeg',
        tagline: 'Soft sand, fresh fish, and the sea.',
        desc: 'A laid-back coastal town just north of Colombo — famous for its lagoon, its fish market, and some of the best seafood on the island.',
        miss: ['Lagoon Boat Ride', 'Fish Market', 'St. Mary\'s Church', 'Negombo Beach', 'Sunset Cruise']
      },
      'mirissa': {
        title: 'Mirissa', location: 'South Coast', emoji: '🐋',
        tab: 'hero-mirissa.jpeg',
        hero: 'hero-mirissa.jpeg',
        tagline: 'Crescent beach. Blue whales. Golden evenings.',
        desc: 'The ultimate Sri Lankan beach town. Whale watching (Nov–Apr), a beach-party scene, and a crescent beach that catches the softest sunsets.',
        miss: ['Whale Watching', 'Surfing', 'Beach Parties', 'Coconut Hill', 'Sunset Point']
      },
      'weligama': {
        title: 'Weligama', location: 'South Coast', emoji: '🏄',
        tab: 'hero-weligama.jpeg',
        hero: 'hero-weligama.jpeg',
        tagline: 'Learn to surf in the gentlest bay.',
        desc: 'A curved bay of soft sandy breaks, surf schools on every corner, and stilt fishermen at dusk.',
        miss: ['Surf Lessons', 'Stilt Fishing', 'Beach Days', 'Seafood Dining']
      },
      'bentota': {
        title: 'Bentota', location: 'South Coast', emoji: '🚤',
        tab: 'hero-bentota.jpeg',
        hero: 'hero-bentota.jpeg',
        tagline: 'River, beach, and a little bit of speed.',
        desc: 'Where the Bentota River meets the sea — calm water, golden sand, and water sports on every shore.',
        miss: ['Jet Skis', 'Banana Boat Rides', 'Turtle Hatchery', 'River Safari', 'Beach Dining']
      },
      'galle': {
        title: 'Galle Fort', location: 'South Coast', emoji: '🏰',
        tab: 'hero-galle.jpeg',
        hero: 'hero-galle.jpeg',
        tagline: 'A Dutch fort town, still walking on water.',
        desc: 'A UNESCO World Heritage site — cobblestone streets, boutique cafes, and ramparts that watch the sun drop into the Indian Ocean.',
        miss: ['Fort Ramparts', 'Lighthouse', 'Boutique Shopping', 'Cafes', 'Sunset Walk']
      },
      'arugambay': {
        title: 'Arugam Bay', location: 'East Coast', emoji: '🌊',
        tab: 'hero-arugam-bay.jpg',
        hero: 'hero-arugam-bay.jpg',
        tagline: 'The surf capital of Sri Lanka.',
        desc: 'World-famous surf points — Main Point, Whiskey Point — and a bohemian, barefoot feel. Best from July to September.',
        miss: ['Main Point Surf', 'Lagoon Safari', 'Beach Parties', 'Crocodile Rock']
      },
      'dambulla': {
        title: 'Dambulla', location: 'Cultural Triangle', emoji: '🕳️',
        tab: 'hero-dambulla.jpg',
        hero: 'hero-dambulla.jpg',
        tagline: 'Five caves full of gold and stories.',
        desc: 'The largest and best-preserved cave temple complex in Sri Lanka — over 150 Buddha statues and painted ceilings from centuries past.',
        miss: ['Cave Temple', 'Golden Temple', 'Spice Garden', 'Sigiriya Day Trip']
      },
      'habarana': {
        title: 'Habarana', location: 'Cultural Triangle', emoji: '🐘',
        tab: 'hero-habarana.jpg',
        hero: 'hero-habarana.jpg',
        tagline: 'Village mornings, elephant afternoons.',
        desc: 'A quiet jungle village that feels like the Sri Lanka of another time. Come for the safaris at Minneriya, stay for the canoe rides and home-cooked curry.',
        miss: ['Minneriya Safari', 'Village Tour', 'Canoe Ride', 'Elephant Gathering']
      },
      'kandy': {
        title: 'Kandy', location: 'Hill Country', emoji: '🛕',
        tab: 'hero-kandy.jpg',
        hero: 'hero-kandy.jpg',
        tagline: 'The last royal capital, wrapped in hills.',
        desc: 'Home to the Temple of the Sacred Tooth Relic, a tranquil lake, and the sound of drums in the evening. Kandy is where Sri Lanka\'s culture lives on.',
        miss: ['Temple of the Tooth', 'Cultural Dance Show', 'Kandy Lake', 'Tea Museum', 'Royal Botanical Gardens']
      },
      'nuwaraeliya': {
        title: 'Nuwara Eliya', location: 'Hill Country', emoji: '🍃',
        tab: 'hero-nuwara-eliya.jpeg',
        hero: 'hero-nuwara-eliya.jpeg',
        tagline: 'Little England, high in the tea country.',
        desc: 'Cool air, colonial bungalows, and endless green tea estates. This is where you sip the world\'s best cup of tea where it\'s grown.',
        miss: ['Tea Factory Tour', 'Gregory Lake', 'Strawberry Farms', 'Horton Plains', 'Colonial Bungalows']
      },
      'ella': {
        title: 'Ella', location: 'Hill Country', emoji: '⛰️',
        tab: 'hero-ella.jpeg',
        hero: 'hero-ella.jpeg',
        tagline: 'Where the train slows down for the view.',
        desc: 'The most scenic destination on the famous Nanu Oya train. Hikers come for the Nine Arches Bridge and Little Adam\'s Peak — everyone stays for the mist.',
        miss: ['Nine Arches Bridge', 'Little Adam\'s Peak', 'Zipline', 'Ella Rock', 'Train Journey']
      },
      'yala': {
        title: 'Yala National Park', location: 'Deep South', emoji: '🐆',
        tab: 'hero-yala.jpeg',
        hero: 'hero-yala.jpeg',
        tagline: 'Dawn in the bush. Leopards on the wind.',
        desc: 'The highest density of leopards in the world — plus elephants, sloth bears, and dramatic dry-zone landscapes.',
        miss: ['Dawn Safari', 'Leopard Spotting', 'Bird Watching', 'Coastal Safari']
      },
      'trincomalee': {
        title: 'Trincomalee', location: 'East Coast', emoji: '🌴',
        tab: 'hero-trinco.jpeg',
        hero: 'hero-trinco.jpeg',
        tagline: 'East coast calm, temple on the cliff.',
        desc: 'One of the best natural harbours in the world — and home to Koneswaram Temple perched on a cliff over the sea.',
        miss: ['Koneswaram Temple', 'Snorkelling', 'Pigeon Island', 'Beach Relaxation']
      },
      'anuradhapura': {
        title: 'Anuradhapura', location: 'North Central', emoji: '🏛️',
        tab: 'hero-anu.jpeg',
        hero: 'hero-anu.jpeg',
        tagline: 'The first capital. Older than memory.',
        desc: 'A sacred city and UNESCO World Heritage site — vast stupas, monasteries, and the sacred Bo Tree, here for over 2,000 years.',
        miss: ['Cycle Tour', 'Sacred Bo Tree', 'Mihintale', 'Ancient Stupas']
      },
      'jaffna': {
        title: 'Jaffna', location: 'Northern Peninsula', emoji: '🪔',
        tab: 'hero-jaffna.jpeg',
        hero: 'hero-jaffna.jpeg',
        tagline: 'A different Sri Lanka — quiet, distinct, unforgettable.',
        desc: 'The north has its own rhythm: Hindu temples, palmyra palms, and the raw beauty of Delft Island. The food alone is worth the drive.',
        miss: ['Nallur Temple', 'Jaffna Fort', 'Delft Island', 'Northern Cuisine']
      }
    };

    const tabs = document.getElementById('attr-tabs');
    Object.keys(attractionsData).forEach((key, i) => {
      const d = attractionsData[key];
      const btn = document.createElement('button');
      btn.className = 'attr-btn snap-start shrink-0 flex flex-col items-center gap-2 group';
      btn.innerHTML = `
        <div class="attr-ring">
          <img src="${d.tab}" alt="${d.title}" class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
        </div>
        <span class="attr-name text-xs font-semibold text-ink/70 text-center w-20 leading-tight transition">${d.title.replace(' National Park',' NP').replace(' Fort','')}</span>
      `;
      btn.onclick = () => showAttraction(key, btn);
      if (i === 0) btn.classList.add('active');
      tabs.appendChild(btn);
    });

    function showAttraction(key, btn) {
      const d = attractionsData[key];
      if (!d) return;
      document.querySelectorAll('.attr-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');

      const panel = document.getElementById('attraction-panel');
      panel.innerHTML = `
        <div class="fade-in">
          <!-- Split layout: image left, text right (mobile: stacked) -->
          <div class="grid md:grid-cols-5">
            <div class="md:col-span-2 relative h-56 md:h-auto min-h-[220px] md:min-h-[260px]">
              <img src="${d.hero}" alt="${d.title}" class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold text-forest tracking-wide uppercase">${d.location}</div>
            </div>
            <div class="md:col-span-3 p-6 md:p-10 flex flex-col justify-center bg-cream">
              <h3 class="font-heading font-bold text-2xl md:text-4xl text-forest leading-tight mb-2">${d.emoji} ${d.title}</h3>
              <p class="text-amber italic font-semibold text-sm md:text-base mb-4">"${d.tagline}"</p>
              <p class="text-ink/75 leading-relaxed text-sm md:text-base mb-6">${d.desc}</p>

              <!-- Don't Miss: text-only chips -->
              <div class="border-t border-forest/10 pt-4">
                <h4 class="font-bold text-forest mb-3 text-[11px] uppercase tracking-widest">Don't miss</h4>
                <div class="flex flex-wrap gap-2">
                  ${d.miss.map(m => `<span class="miss-chip">${m}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    window.addEventListener('DOMContentLoaded', () => {
      const firstBtn = document.querySelector('.attr-btn');
      showAttraction('colombo', firstBtn);
    });

    document.getElementById('menuBtn').addEventListener('click', () => document.getElementById('mobileMenu').classList.toggle('hidden'));
