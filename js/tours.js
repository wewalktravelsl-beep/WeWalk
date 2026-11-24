const cities = {
      'Colombo':      { x: 170, y: 1040 },
      'Negombo':      { x: 170, y: 930 },
      'Kandy':        { x: 420, y: 930 },
      'Nuwara Eliya': { x: 450, y: 990 },
      'Ella':         { x: 520, y: 1030 },
      'Sigiriya':     { x: 470, y: 650 },
      'Habarana':     { x: 460, y: 620 },
      'Trincomalee':  { x: 640, y: 450 },
      'Galle':        { x: 300, y: 1350 },
      'Mirissa':      { x: 380, y: 1370 },
      'Weligama':     { x: 360, y: 1360 },
      'Yala':         { x: 800, y: 1170 },
      'Anuradhapura': { x: 340, y: 550 },
      'Jaffna':       { x: 230, y: 80 },
      'Arugam Bay':   { x: 820, y: 1050 },
      'Bentota':      { x: 200, y: 1200 },
      'Dambulla':     { x: 440, y: 680 }
    };

    const distances = {
      'Colombo-Kandy': '115 km, ~3h', 'Kandy-Nuwara Eliya': '75 km, ~2.5h', 'Nuwara Eliya-Ella': '60 km, ~2.5h',
      'Ella-Yala': '100 km, ~3h', 'Yala-Mirissa': '100 km, ~2.5h', 'Mirissa-Galle': '35 km, ~1h',
      'Galle-Colombo': '125 km, ~2.5h', 'Colombo-Negombo': '40 km, ~1h', 'Negombo-Kandy': '115 km, ~3h',
      'Kandy-Sigiriya': '90 km, ~2.5h', 'Sigiriya-Habarana': '15 km, ~30m', 'Habarana-Trincomalee': '95 km, ~2.5h',
      'Sigiriya-Anuradhapura': '75 km, ~2h', 'Anuradhapura-Jaffna': '200 km, ~4.5h', 'Ella-Arugam Bay': '120 km, ~3h',
      'Colombo-Sigiriya': '175 km, ~4h', 'Kandy-Ella': '140 km, ~4h', 'Trincomalee-Arugam Bay': '110 km, ~3h',
      'Colombo-Mirissa': '150 km, ~2.5h', 'Colombo-Weligama': '140 km, ~2.5h', 'Weligama-Mirissa': '10 km, ~20m',
      'Mirissa-Galle': '35 km, ~1h', 'Galle-Weligama': '25 km, ~45m', 'Colombo-Bentota': '80 km, ~1.5h',
      'Bentota-Galle': '60 km, ~1.5h', 'Sigiriya-Dambulla': '20 km, ~30m', 'Dambulla-Kandy': '70 km, ~2h'
    };

    let selected = [];

    const cityListEl = document.getElementById('cityList');
    Object.keys(cities).forEach(name => {
      const b = document.createElement('button');
      b.className = 'city-btn w-full text-left text-sm font-semibold px-3 py-2 rounded-lg border-2 border-forest text-forest bg-white hover:bg-forest hover:text-white transition';
      b.textContent = name;
      b.id = 'b-' + name.replace(/\s/g, '');
      b.onclick = () => addCity(name);
      cityListEl.appendChild(b);
    });

    const dotsGroup = document.getElementById('dots');
    Object.keys(cities).forEach(name => {
      const { x, y } = cities[name];
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', x); dot.setAttribute('cy', y); dot.setAttribute('r', 10);
      dot.setAttribute('fill', '#2F5D3A'); dot.setAttribute('class', 'city-dot');
      dot.setAttribute('id', 'd-' + name.replace(/\s/g, ''));
      dot.addEventListener('click', () => addCity(name));
      dotsGroup.appendChild(dot);

      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', x + 15); label.setAttribute('y', y + 5);
      label.setAttribute('class', 'city-label'); label.textContent = name;
      dotsGroup.appendChild(label);
    });

    function addCity(name) { if (selected.includes(name)) return; selected.push(name); render(); }
    function removeCity(name) { selected = selected.filter(c => c !== name); render(); }
    function moveCity(i, dir) {
      if (dir === 'up' && i > 0) [selected[i-1], selected[i]] = [selected[i], selected[i-1]];
      else if (dir === 'down' && i < selected.length - 1) [selected[i+1], selected[i]] = [selected[i], selected[i+1]];
      render();
    }
    function clearRoute() { selected = []; render(); }
    function getDistance(a, b) { return distances[`${a}-${b}`] || distances[`${b}-${a}`] || null; }

    function render() {
      Object.keys(cities).forEach(name => {
        const key = name.replace(/\s/g, '');
        const btn = document.getElementById('b-' + key);
        const dot = document.getElementById('d-' + key);
        const on = selected.includes(name);
        if(btn) { btn.classList.toggle('bg-forest', on); btn.classList.toggle('text-white', on); btn.classList.toggle('opacity-50', on); }
        if(dot) dot.classList.toggle('active', on);
      });

      const listEl = document.getElementById('selectedList');
      if (selected.length === 0) { listEl.innerHTML = 'No destinations yet.'; listEl.classList.add('italic', 'text-ink/60'); }
      else {
        listEl.classList.remove('italic', 'text-ink/60');
        listEl.innerHTML = selected.map((city, i) => {
          let leg = '';
          if (i > 0) {
            const d = getDistance(selected[i-1], city);
            leg = `<div class="text-xs ${d ? 'text-ink/60' : 'text-amber-700'} mt-1 border-t border-dashed border-ink/15 pt-1">↓ ${d || 'Distance unknown'}</div>`;
          }
          return `<div class="bg-white rounded-lg p-2 mb-2 shadow-sm">
            <div class="flex justify-between items-center">
              <span class="font-bold text-forest text-sm">${i+1}. ${city}</span>
              <div class="flex gap-1">
                <button onclick="moveCity(${i},'up')" class="text-xs bg-gray-100 hover:bg-gray-200 rounded px-1.5 py-0.5" ${i===0?'disabled style="opacity:.3"':''}>↑</button>
                <button onclick="moveCity(${i},'down')" class="text-xs bg-gray-100 hover:bg-gray-200 rounded px-1.5 py-0.5" ${i===selected.length-1?'disabled style="opacity:.3"':''}>↓</button>
                <button onclick="removeCity('${city}')" class="text-xs bg-red-100 text-red-700 hover:bg-red-200 rounded px-1.5 py-0.5">×</button>
              </div>
            </div>
            ${leg}
          </div>`;
        }).join('');
      }

      const linesGroup = document.getElementById('lines');
      linesGroup.innerHTML = '';
      for (let i = 0; i < selected.length - 1; i++) {
        const a = cities[selected[i]], b = cities[selected[i+1]];
        const midX = (a.x + b.x) / 2, midY = (a.y + b.y) / 2;
        const dx = b.x - a.x, dy = b.y - a.y;
        const len = Math.sqrt(dx*dx + dy*dy) || 1;
        const ctrlX = midX - (dy/len)*15, ctrlY = midY + (dx/len)*15;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${a.x} ${a.y} Q ${ctrlX} ${ctrlY} ${b.x} ${b.y}`);
        path.setAttribute('class', 'route-line');
        linesGroup.appendChild(path);
      }
    }

    function buildMessage() {
      const name = document.getElementById('qName').value.trim();
      const contact = document.getElementById('qContact').value.trim();
      const dates = document.getElementById('qDates').value.trim();
      const people = document.getElementById('qPeople').value.trim();
      const notes = document.getElementById('qNotes').value.trim();

      if (selected.length === 0) { alert('Please pick at least one city first.'); return null; }
      if (!name || !contact) { alert('Please add your name and a way to contact you.'); return null; }

      const route = selected.map((c, i) => `${i+1}. ${c}`).join('\n');
      const legs = selected.slice(1).map((c, i) => `${selected[i]} → ${c}: ${getDistance(selected[i], c) || 'unknown'}`).join('\n');

      return `Hi WeWalk! I'd like a quote for a custom tour.\n\nName: ${name}\nContact: ${contact}\nDates: ${dates || '—'}\nTravelers: ${people || '—'}\n\nRoute:\n${route}\n\nLegs:\n${legs}\n\nNotes: ${notes || '—'}`;
    }

    function sendWhatsApp() {
      const msg = buildMessage(); if (!msg) return;
      window.open(`https://wa.me/94716528873?text=${encodeURIComponent(msg)}`, '_blank');
      const m = document.getElementById('sendMsg'); m.textContent = 'Opening WhatsApp…'; m.classList.remove('hidden');
    }
    function sendEmail() {
      const msg = buildMessage(); if (!msg) return;
      window.location.href = `mailto:wewalktravelsl@gmail.com?subject=Custom%20Tour%20Quote&body=${encodeURIComponent(msg)}`;
      const m = document.getElementById('sendMsg'); m.textContent = 'Opening email…'; m.classList.remove('hidden');
    }

    render();
