'use strict';

(() => {
  const parts = [
    { name: 'Loopvlak', clue: 'Contact met de weg', text: 'Het loopvlak is het deel van de band dat op de weg rolt. Het profiel helpt water af te voeren. Hier controleer je onder andere de profieldiepte en slijtage.', tip: 'Loopvlak = het deel dat loopt.', position: [40, 12] },
    { name: 'Schouder', clue: 'Tussen loopvlak en wang', text: 'De schouder is de overgang van het loopvlak naar de wang. Bekijk bij de controle ook of de schouders gelijkmatig afslijten.', tip: 'Schouder = de hoek tussen bovenkant en zijkant.', position: [62, 24] },
    { name: 'Wang', clue: 'De zijkant van de band', text: 'De wang is de zijkant van de band. Hier vind je de bandenmaat en andere opschriften. Controleer deze zijkant op beschadigingen, scheuren en vervorming.', tip: 'Wang = zijkant. Een wang is geen loopvlak.', position: [69, 45] },
    { name: 'Hiel', clue: 'Aansluiting op de velg', text: 'De hiel is het deel waarmee de band op de velg aansluit. Tijdens het monteren en demonteren moet je de hiel beschermen tegen beschadiging.', tip: 'Hiel = aansluiting. Hieldraad = versteviging daarin.', position: [47, 84] },
    { name: 'Hieldraad', clue: 'Versteviging in de hiel', text: 'De hieldraad, ook hielkern genoemd, is de versteviging in de hiel. Deze helpt de band stevig op de velg te houden.', tip: 'Het woord draad helpt je de versteviging te onthouden.', position: [16, 74] },
    { name: 'Karkas', clue: 'De dragende structuur', text: 'Het karkas is de dragende structuur van de band. Het geeft de band sterkte en vorm. Het is iets anders dan het profiel aan de buitenkant.', tip: 'Karkas = de structuur die de band draagt.', position: [7.5, 44] }
  ];

  const codes = [
    { value: '205', label: 'Breedte', heading: '205 millimeter breed', text: '205 is de nominale bandbreedte in millimeters. Het is geen profieldiepte en geen bandenspanning.' },
    { value: '/65', label: 'Hoogte', heading: '65% van de breedte', text: '65 is de verhouding tussen de bandhoogte en de bandbreedte. In dit voorbeeld: 205 × 0,65 = 133,25 mm. Het getal betekent dus niet 65 millimeter.' },
    { value: 'R', label: 'Constructie', heading: 'Radiale constructie', text: 'R staat voor radiaal: de constructie van de band. Het betekent niet radius of rechts monteren.' },
    { value: '15', label: 'Velgmaat', heading: '15 inch velgdiameter', text: '15 is de nominale diameter van de bijpassende velg, gemeten bij de hielzitting. Dit is geen breedte in centimeters.' },
    { value: '94', label: 'Draaggetal', heading: 'Draagvermogen: tabelwaarde', text: '94 is een draaggetal, geen aantal kilogrammen. In de tabel op pagina 28 hoort bij 94 een draagvermogen van 670 kg per band, onder de voorgeschreven gebruiksomstandigheden.' },
    { value: 'T', label: 'Snelheid', heading: 'Snelheidscategorie T', text: 'T is een snelheidssymbool. In de tabel op pagina 28 hoort daarbij 190 km/h onder de voorgeschreven omstandigheden. Dit is geen advies of toestemming om zo hard te rijden.' }
  ];

  const groups = [
    { id: 'onderdelen', number: '01', title: 'Onderdelen herkennen', text: 'Wang, schouder, hiel en de rest. Leer de naam én de functie.', label: 'Banden · onderdelen', topic: 4 },
    { id: 'bandencode', number: '02', title: 'Bandencodes & rekenen', text: 'Lees een bandenmaat en bereken de hoogte van de wang.', label: 'Banden · codes en rekenen', topic: 4 },
    { id: 'controle', number: '03', title: 'Controle & slijtage', text: 'Profieldiepte, spanning en beschadigingen beoordelen.', label: 'Banden · controle', topic: 4 },
    { id: 'werkplaats', number: '04', title: 'Montage & balanceren', text: 'Begrijp de onderdelen, voorbereiding en meetresultaten.', label: 'Banden · werkplaats', topic: 5 }
  ];
  const questions = [];
  const add = (group, topic, page, prompt, answer, wrong, explanation) => questions.push({
    id: 'band-extra-' + String(questions.length + 1).padStart(2, '0'),
    group, topic, page, prompt, answer, choices: [answer, ...wrong], explanation,
    kind: groups.find(g => g.id === group).title, image: null, target: null
  });

  add('onderdelen', 4, 29, 'Welk deel van de band rolt rechtstreeks over het wegdek?', 'Het loopvlak', ['De wang', 'De hiel', 'De hieldraad'], 'Het loopvlak maakt contact met de weg. De wang is de zijkant; de hiel sluit aan op de velg.');
  add('onderdelen', 4, 29, 'Je volgt de band van het loopvlak naar de zijkant. Hoe heet de overgang?', 'De schouder', ['De hiel', 'De hieldraad', 'Het ventiel'], 'De schouder is de overgang tussen het loopvlak en de wang.');
  add('onderdelen', 4, 29, 'Op welk deel zoek je meestal de bandenmaat, zoals 205/65 R15?', 'Op de wang', ['Op de hieldraad', 'In het diepbed', 'Op het loopvlak'], 'De bandenmaat en andere opschriften staan op de wang: de zijkant van de band.');
  add('onderdelen', 4, 29, 'Welk deel van de band sluit aan op de velg?', 'De hiel', ['De schouder', 'Het loopvlak', 'De profielgroef'], 'De hiel vormt de aansluiting tussen band en velg. Bescherm dit deel tijdens montage en demontage.');
  add('onderdelen', 4, 29, 'Welke versteviging zit in de hiel van de band?', 'De hieldraad', ['De slijtindicator', 'Het loopvlak', 'Het ventiel'], 'De hieldraad of hielkern verstevigt de hiel en helpt de band op de velg te houden.');
  add('onderdelen', 4, 29, 'Welk onderdeel geeft de band als dragende structuur sterkte en vorm?', 'Het karkas', ['De profielgroef', 'De ventieldop', 'Het balanceergewicht'], 'Het karkas is de dragende structuur. Het profiel is het patroon aan de buitenkant van het loopvlak.');
  add('onderdelen', 4, 29, 'Wat is het verschil tussen de wang en de schouder?', 'De wang is de zijkant; de schouder is de overgang naar het loopvlak', ['De wang zit in de velg; de schouder is het ventiel', 'De wang is het profiel; de schouder is de hielkern', 'Er is geen verschil: het zijn twee namen voor hetzelfde deel'], 'Wang en schouder zijn verschillende delen. Onthoud: loopvlak → schouder → wang.');
  add('onderdelen', 4, 29, 'Welke combinatie van onderdeel en functie klopt?', 'Hiel — aansluiting op de velg', ['Wang — het gewone contactvlak met de weg', 'Loopvlak — de versteviging in de hiel', 'Hieldraad — het patroon van de profielgroeven'], 'De hiel sluit aan op de velg. De hieldraad is de versteviging ín die hiel.');
  add('onderdelen', 4, 29, 'Waarom betekenen hiel en hieldraad niet hetzelfde?', 'De hieldraad is de versteviging in de hiel', ['De hieldraad zit los op het loopvlak', 'De hiel is een onderdeel van het ventiel', 'Hiel is alleen een andere naam voor karkas'], 'De hiel is een deel van de band; de hieldraad of hielkern is een versteviging binnen dat deel.');
  add('onderdelen', 4, 29, 'Je controleert de zijkant op scheuren. Welk deel bekijk je?', 'De wang', ['Het diepbed', 'De velgdiameter', 'De profielgroef'], 'De wang is de zijkant van de band. Het diepbed hoort bij de velg, niet bij de wang.');
  add('onderdelen', 4, 29, 'Wat is het verschil tussen het karkas en het loopvlak?', 'Het karkas draagt de band; het loopvlak raakt de weg', ['Het karkas is alleen een opschrift; het loopvlak is de velg', 'Het karkas is het ventiel; het loopvlak is het diepbed', 'Beide woorden betekenen de hielkern'], 'Het karkas geeft de band sterkte en vorm. Het loopvlak is het buitenste gedeelte dat op de weg rolt.');
  add('onderdelen', 4, 29, 'Welke volgorde klopt vanaf het midden van het contactvlak naar de zijkant?', 'Loopvlak → schouder → wang', ['Wang → hiel → loopvlak', 'Hieldraad → loopvlak → ventiel', 'Schouder → karkas → profielgroef'], 'Het loopvlak gaat via de schouder over in de wang. Dit helpt de drie namen uit elkaar te houden.');

  add('bandencode', 4, 28, 'Bij 205/65 R15 94 T: welk getal geeft de breedte in millimeters aan?', '205', ['65', '15', '94'], '205 is de nominale breedte in mm. 65 is een percentage, 15 de velgdiameter in inch en 94 het draaggetal.');
  add('bandencode', 4, 28, 'Een leerling zegt: “De 65 in 205/65 R15 betekent 65 mm hoog.” Wat klopt?', '65 betekent 65% van de bandbreedte', ['65 betekent 65 inch hoog', '65 betekent 65 bar spanning', '65 betekent een draagvermogen van 65 kg'], 'De hoogte-breedteverhouding is een percentage. Je vermenigvuldigt de breedte met 65/100 om de nominale hoogte te berekenen.');
  add('bandencode', 4, 28, 'Wat betekenen R en 15 in de code 205/65 R15?', 'Radiale constructie en 15 inch velgdiameter', ['Rechts monteren en 15 mm profieldiepte', 'Radius en 15 bar bandenspanning', 'Radiale constructie en 15 cm bandbreedte'], 'R betekent radiaal. 15 verwijst naar de nominale velgdiameter in inch, niet naar bandenspanning of profiel.');
  add('bandencode', 4, 32, 'Bereken de nominale bandhoogte bij 205/65 R15.', '133,25 mm', ['65 mm', '31,54 mm', '205 mm'], 'Bandhoogte = breedte × percentage / 100. Dus 205 × 65 / 100 = 133,25 mm.');
  add('bandencode', 4, 32, 'Bereken de nominale bandhoogte bij 195/55 R15.', '107,25 mm', ['97,5 mm', '55 mm', '140 mm'], '195 × 55 / 100 = 107,25 mm. Vermenigvuldig de breedte met 0,55.');
  add('bandencode', 4, 32, 'Twee banden zijn 195 mm breed: de ene heeft hoogteverhouding 55, de andere 50. Wat klopt?', 'De 55-band heeft een 9,75 mm hogere nominale wang', ['De 50-band heeft een 9,75 mm hogere nominale wang', 'De twee wangen zijn even hoog', 'De 55-band is precies 5 mm hoger'], '195 × 0,55 = 107,25 mm en 195 × 0,50 = 97,5 mm. Het verschil is 9,75 mm. Dit is een rekenoefening, geen advies om bandenmaten te verwisselen.');
  add('bandencode', 4, 28, 'Wat lees je bij draaggetal 94 in de tabel van het werkboek?', '670 kg per band', ['94 kg per band', '190 kg per band', '670 kg voor alle vier banden samen'], 'Draaggetal 94 hoort bij 670 kg per band onder de voorgeschreven omstandigheden. Het draaggetal moet je in een tabel opzoeken.');
  add('bandencode', 4, 28, 'Welk tabelgegeven hoort bij snelheidssymbool T?', '190 km/h', ['180 km/h', '240 km/h', '94 km/h'], 'In de tabel staat T voor 190 km/h onder de voorgeschreven omstandigheden. Dit is geen toegestane rijsnelheid voor de weg.');

  add('controle', 4, 34, 'Waar zoek je de voorgeschreven bandenspanning voor de auto?', 'Bij de voertuigfabrikant: sticker of instructieboek', ['Je gebruikt altijd dezelfde druk voor iedere auto', 'Je kiest de druk alleen op basis van de kleur van het ventiel', 'Je gebruikt het draaggetal direct als druk in bar'], 'Gebruik de voertuiginformatie, bijvoorbeeld de sticker bij de deur of tankklep, of het instructieboek. Er is geen universele juiste druk voor alle auto’s.');
  add('controle', 4, 34, 'De sticker toont verschillende waarden voor normaal en zwaar beladen. Wat doe je?', 'De juiste waarde kiezen voor belading en as', ['Altijd de laagste waarde kiezen', 'Voor- en achterbanden willekeurig dezelfde druk geven', 'De waarden bij elkaar optellen'], 'Let op de belading, bandenmaat en waarden voor de voor- en achteras in de voertuiginformatie.');
  add('controle', 4, 30, 'Waarom meet je het profiel op meerdere plaatsen?', 'Slijtage kan ongelijk zijn; één gunstige meting is niet genoeg', ['Om altijd de hoogste waarde te kunnen noteren', 'Omdat alle metingen verplicht hetzelfde getal moeten geven', 'Omdat profieldiepte per definitie een gemiddelde is'], 'Controleer de relevante hoofdgroeven op meerdere plaatsen. De laagste relevante meting mag niet worden verborgen door een gemiddelde.');
  add('controle', 4, 30, 'Welke minimale profieldiepte in de hoofdgroeven geldt voor personenautobanden volgens de RDW-regel?', '1,6 mm', ['0,6 mm', '6 mm', '16 mm'], 'De hoofdgroeven moeten over de gehele omtrek ten minste 1,6 mm diep zijn. De wettelijke ondergrens zegt niet dat de band op alle andere punten goed is.');
  add('controle', 4, 30, 'Wat geeft de TWI in het profiel aan?', 'Een slijtage-indicator bij ongeveer 1,6 mm', ['De aanbevolen bandenspanning', 'De velgdiameter in inch', 'Het toegestane aantal balanceergewichten'], 'TWI betekent Tread Wear Indicator. Deze slijtage-indicator helpt slijtage te herkennen; controleer de profieldiepte zorgvuldig met de juiste meter.');
  add('controle', 4, 35, 'Eén schouder is duidelijk sterker versleten. Wat is een goede conclusie?', 'De slijtage is ongelijk en moet verder worden onderzocht', ['Alleen deze slijtage bewijst exact welk onderdeel defect is', 'Dit is altijd normaal en hoeft niet te worden gemeld', 'Een balanceergewicht herstelt het versleten rubber'], 'Noteer de ongelijke slijtage en laat de oorzaak beoordelen. Uit één slijtagebeeld kun je niet zonder verdere controle één zekere oorzaak aanwijzen.');
  add('controle', 4, 35, 'Het profiel is diep genoeg, maar de wang is beschadigd. Is de controle klaar?', 'Nee, ook de beschadiging moet worden beoordeeld', ['Ja, alleen profieldiepte telt', 'Ja, de wang is geen onderdeel van de band', 'Ja, voldoende spanning herstelt iedere beschadiging'], 'Bandencontrole gaat ook over scheuren, vervorming en andere schade. Een goede profieldiepte maakt een beschadigde band niet vanzelf veilig.');
  add('controle', 4, 36, 'Je moet de bandencontrole in je werkboek invullen. Welke waarden noteer je?', 'De werkelijk gemeten waarden en waargenomen bijzonderheden', ['De waarden van een andere auto', 'Alleen de hoogste meting zodat het goed lijkt', 'Een vaste standaardwaarde zonder te meten'], 'Het werkboek moet jouw uitgevoerde controle weergeven. Noteer wat je echt meet en ziet; verzin geen meetwaarden.');

  add('werkplaats', 5, 37, 'Wat betekent een band demonteren in deze opdracht?', 'De band van de velg halen', ['Het complete wiel alleen van de auto halen', 'Alleen de ventieldop verwijderen', 'Een balanceergewicht bijplaatsen'], 'Een band demonteren is de band van de velg halen. Dat is iets anders dan het complete wiel van de auto verwijderen.');
  add('werkplaats', 5, 37, 'Waarom gebruik je het diepbed bij montage of demontage?', 'Het geeft de hiel ruimte om over de velgrand te gaan', ['Het meet de bandenspanning automatisch', 'Het bepaalt de snelheidscategorie', 'Het vervangt de hieldraad in de band'], 'Het diepbed is het lager gelegen gedeelte van de velg. Door de hiel daar juist te positioneren ontstaat ruimte. Volg de werkwijze van je docent en de gebruikte machine.');
  add('werkplaats', 5, 39, 'Wat moet gebeuren voordat je de hiel met de bandenmachine losdrukt?', 'De band volgens de veilige procedure volledig drukloos maken', ['De band eerst extra hard oppompen', 'De band onder druk laten om tijd te besparen', 'Alleen de ventieldop terugplaatsen'], 'Maak de band eerst volledig drukloos volgens de machine-instructies. Montage en demontage oefen je onder toezicht; deze quiz vervangt die instructies niet.');
  add('werkplaats', 5, 38, 'Wat controleer je aan ROTATION en INSIDE/OUTSIDE bij de montage?', 'De draairichting en/of de juiste binnen- en buitenzijde', ['Alleen de kleur van de letters', 'Of het draaggetal gelijk is aan de bandbreedte', 'Of iedere band per definitie een draairichting heeft'], 'Volg de markeringen die op de betreffende band staan. ROTATION en INSIDE/OUTSIDE hebben verschillende betekenissen; niet iedere band draagt beide.');
  add('werkplaats', 6, 43, 'Wat probeer je bij het balanceren van een wiel te corrigeren?', 'Een ongelijke massaverdeling van wiel en band', ['Een te kleine wettelijke profieldiepte', 'Een scheur in de wang', 'Een verkeerde bandenmaat op de auto'], 'Balanceren corrigeert onbalans: een ongelijke massaverdeling. Het repareert geen schade of afgesleten profiel.');
  add('werkplaats', 6, 44, 'Wat is belangrijk vóór je een wiel op de balanceermachine meet?', 'Het wiel controleren, reinigen en correct centreren', ['Stenen in het profiel laten zitten', 'Het wiel bewust scheef opspannen', 'Velggegevens van een willekeurig ander wiel gebruiken'], 'Vuil, steentjes en onjuist centreren kunnen de meting beïnvloeden. Verwijder oude gewichten volgens de werkwijze en gebruik de juiste wielgegevens.');
  add('werkplaats', 6, 46, 'De machine vraagt 15 gram op een aangewezen plaats. Hoeveel segmenten van 5 gram is dat?', '3 segmenten', ['2 segmenten', '5 segmenten', '15 segmenten'], '15 / 5 = 3. Gebruik het juiste type gewicht en de door de machine aangegeven positie volgens de instructies.');
  add('werkplaats', 6, 47, 'Wat doe je na het correct aanbrengen van balanceergewichten?', 'Opnieuw meten om het resultaat te controleren', ['Zonder controle aannemen dat het goed is', 'De oorspronkelijke velggegevens willekeurig wijzigen', 'Een wangbeschadiging als gerepareerd aftekenen'], 'Een controlemeting laat zien of de correctie voldoende is. Volg de grenswaarden en instructies van de machine en je docent.');

  function renderModule({ render, start, esc, source, allQuestions, shuffle }) {
    render(`
      <div class="module-heading"><div><span class="eyebrow muted">Werkplaatskennis · Banden</span><h1>Ken je band.<br><span>Van wang tot karkas.</span></h1><p>Bekijk de onderdelen en oefen daarna de namen, codes en controles.</p></div><button class="btn" id="band-quick">Oefen 12 gemengde vragen <span aria-hidden="true">↗</span></button></div>
      <section class="anatomy-panel" aria-labelledby="anatomy-title">
        <div class="anatomy-visual"><div class="panel-kicker"><span class="eyebrow">01 / Onderdelen</span><span class="mini-tag">Klik & leer</span></div><h2 id="anatomy-title">De band van binnenuit</h2><div class="anatomy-image"><img src="assets/band-delen.png" width="893" height="778" alt="Doorsnede van een band met loopvlak, schouder, wang, hiel, hieldraad en karkas"><span id="part-highlight" class="part-highlight" aria-hidden="true"></span></div><p class="image-note">Dezelfde onderdelen als in je werkboek. ${source(29)}</p></div>
        <div class="anatomy-controls"><div class="part-buttons" role="group" aria-label="Kies een bandonderdeel">${parts.map((p, i) => `<button class="part-button" data-part="${i}" aria-pressed="${i === 2}" aria-controls="part-detail"><span class="part-number">0${i + 1}</span><span><b>${esc(p.name)}</b><small>${esc(p.clue)}</small></span><span class="part-arrow" aria-hidden="true">↗</span></button>`).join('')}</div><div id="part-detail" class="part-detail" role="status" aria-live="polite"></div></div>
      </section>
      <section class="band-exercises" aria-labelledby="band-exercises-title"><div class="section-head"><div><span class="eyebrow muted">Jouw volgende ronde</span><h2 id="band-exercises-title">Kies wat je wilt oefenen</h2></div><span>${questions.length} extra vragen · uitleg bij ieder antwoord</span></div><div class="exercise-grid">${groups.map(g => `<article class="exercise-card"><div class="exercise-top"><span class="exercise-number">${g.number}</span><span class="mini-tag">${questions.filter(q => q.group === g.id).length} vragen</span></div><h3>${esc(g.title)}</h3><p>${esc(g.text)}</p><button class="btn secondary" data-band-group="${g.id}">Oefenen <span aria-hidden="true">↗</span></button></article>`).join('')}</div><button class="quiet" id="band-all">Alle bandenvragen uit het werkboek + extra vragen oefenen →</button></section>
      <section class="code-panel" aria-labelledby="code-title"><div class="code-intro"><span class="eyebrow muted">02 / Opschriften</span><h2 id="code-title">Wat staat er op de wang?</h2><p>Kies een stukje van de bandencode.</p></div><div><div class="code-buttons" role="group" aria-label="Delen van bandencode 205/65 R15 94 T">${codes.map((c, i) => `<button data-code="${i}" class="code-button" aria-pressed="${i === 0}" aria-controls="code-detail"><b>${esc(c.value)}</b><small>${esc(c.label)}</small></button>`).join('')}</div><div class="code-detail" id="code-detail" role="status" aria-live="polite"></div>${source(28)}</div></section>
      <aside class="workshop-note"><span class="note-icon" aria-hidden="true">i</span><div><h3>Eerst begrijpen. Dan samen uitvoeren.</h3><p>Deze oefeningen helpen je voorbereiden. Werk aan banden en machines voer je uit met je docent, de juiste beschermingsmiddelen en de instructies van voertuig- en machinefabrikant.</p><details><summary>Werkboek en controlebronnen</summary><p>Extra oefenvragen bij werkboek p. 27–47; geen officiële toetsvragen. Bandencontrole: <a href="https://apk-handboek.rdw.nl/personenautos/ophanging/banden" target="_blank" rel="noopener noreferrer">RDW APK-handboek</a>. Bandopbouw: <a href="https://www.continental-tires.com/tire-knowledge/tire-components/" target="_blank" rel="noopener noreferrer">Continental: onderdelen van een band</a>.</p></details></div></aside>
    `, 'banden');

    function selectPart(i) {
      if (!Number.isInteger(i) || !parts[i]) return;
      const p = parts[i];
      document.querySelectorAll('[data-part]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.part) === i)));
      document.querySelector('#part-detail').innerHTML = `<span class="eyebrow">Onthouden</span><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p><p class="memory-tip">${esc(p.tip)}</p>`;
      const marker = document.querySelector('#part-highlight');
      marker.style.left = p.position[0] + '%';
      marker.style.top = p.position[1] + '%';
    }
    function selectCode(i) {
      if (!Number.isInteger(i) || !codes[i]) return;
      const c = codes[i];
      document.querySelectorAll('[data-code]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.code) === i)));
      document.querySelector('#code-detail').innerHTML = `<h3>${esc(c.heading)}</h3><p>${esc(c.text)}</p>`;
    }
    document.querySelectorAll('[data-part]').forEach(b => b.onclick = () => selectPart(Number(b.dataset.part)));
    document.querySelectorAll('[data-code]').forEach(b => b.onclick = () => selectCode(Number(b.dataset.code)));
    document.querySelectorAll('[data-band-group]').forEach(b => b.onclick = () => {
      const g = groups.find(g => g.id === b.dataset.bandGroup);
      if (g) start(questions.filter(q => q.group === g.id), g.label, false, 'banden');
    });
    document.querySelector('#band-quick').onclick = () => start(shuffle(questions).slice(0, 12), 'Banden · korte ronde', false, 'banden');
    document.querySelector('#band-all').onclick = () => start(allQuestions.filter(q => q.topic >= 4), 'Banden · alle vragen', false, 'banden');
    selectPart(2);
    selectCode(0);
  }

  window.BandenModule = Object.freeze({ questions, render: renderModule });
})();
