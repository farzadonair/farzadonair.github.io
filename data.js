const toolData = [
['Ringsteeksleutel','Bouten en moeren met een passende zeskant draaien','Je wilt een moer draaien met één sleutel die een open en een gesloten kant heeft.','Eén uiteinde is open en het andere uiteinde is een ring.'],
['Ratel','Een dop aandrijven zonder de handgreep telkens helemaal rond te draaien','Je werkt met een dop op een plek waar je weinig ruimte hebt om rond te draaien.','Het mechanisme drijft in één richting aan en loopt in de andere richting vrij.'],
['Kruiskopschroevendraaier','Schroeven met een passend kruisprofiel draaien','Je ziet een PH-kruiskop in een schroef en zoekt passend handgereedschap.','De punt heeft een kruisvorm; kies ook de juiste maat en het juiste profiel.'],
['Platte schroevendraaier','Schroeven met een rechte sleuf draaien','Je moet een schroef met één rechte sleuf losdraaien.','De punt is plat en moet goed in de sleuf passen.'],
['Combinatietang','Materiaal vastgrijpen en geschikt draad knippen','Je zoekt één tang waarmee je zowel kunt grijpen als geschikt draad kunt knippen.','De bek heeft een grijpgedeelte en snijkanten.'],
['Punttang','Kleine onderdelen op moeilijk bereikbare plaatsen vastpakken','Je wilt een klein onderdeel met lange, smalle tangbekken vastpakken op een moeilijk bereikbare plek.','De lange smalle bek bereikt kleine ruimtes.'],
['Zijsnijtang','Geschikt draad doorknippen','Je zoekt een kniptang zonder grijpgedeelte, met snijkanten aan de zijkant, om geschikt draad af te knippen.','De snijkanten zitten aan de zijkant van de kop.'],
['Waterpomptang','Buizen en andere geschikte ronde onderdelen vastgrijpen','Je zoekt een tang met verstelbare bek voor het vasthouden van een buis.','De bekopening is verstelbaar en de bekken zijn getand.'],
['Inbussleutel','Schroeven met een binnenzeskant draaien','Een bout heeft een zeshoekige uitsparing in de kop.','Een veelvoorkomende uitvoering is een L-vormige zeskantstaaf.'],
['Verstelbare moersleutel','Verschillende maten zeskantmoeren draaien door de bek aan te passen','Je zoekt een sleutel met een bek die met een stelwieltje groter of kleiner wordt.','Eén bek is beweegbaar; stel hem nauwsluitend af.'],
['Rubberen hamer','Een onderdeel met zachtere tikken positioneren','Je wilt een onderdeel voorzichtig aantikken met een zachte hamerkop.','De rubberen kop is zachter dan een stalen hamerkop.'],
['Bolhamer','Metaal vormen en op geschikt slagmateriaal slaan','Je zoekt een metalen hamer met een vlakke en een bolle slagzijde.','De kop heeft aan één kant een bol uiteinde.'],
['Dop','Een passende boutkop of moer omsluiten om deze te draaien','Je hebt een ratel en zoekt het losse onderdeel dat over de zeskantmoer past.','De dop heeft een moerprofiel en een aansluiting voor een aandrijfvierkant.'],
['Momentsleutel','Een bout of moer met een voorgeschreven aanhaalmoment vastzetten','Een montagevoorschrift geeft een aanhaalmoment in Nm.','Het ingestelde aanhaalmoment wordt aangegeven, bijvoorbeeld met een klik.'],
['Schuifmaat','Buitenmaten, binnenmaten en dieptes meten','Je wilt de buitendiameter van een klein onderdeel nauwkeurig meten.','De schuivende bekken en schaalverdeling maken maatmetingen mogelijk.'],
['Staalborstel','Losse roest en vuil van een geschikt oppervlak verwijderen','Je moet losse roest van een geschikt metalen werkstuk borstelen.','De borstelharen zijn van metaal.'],
['Torxsleutel','Schroeven met een passend Torx-profiel draaien','Een schroef heeft een zespuntige stervormige uitsparing.','Het profiel is een zespuntige ster, geen binnenzeskant.'],
['Verlengstuk','Het bereik tussen een ratel en een dop vergroten','De moer zit dieper dan je dop en ratel samen kunnen bereiken.','Het verbindt het aandrijfvierkant van de ratel met de dop.'],
['Bougiesleutel','Passende bougies los- en vastdraaien','Je zoekt een speciale diepe dop voor een bougie.','De bougiedop is lang en kan een rubberen of magnetische houder hebben.'],
['Voelermaat','Een kleine spleet met dunne meetbladen controleren','Je moet een kleine speling controleren met bladen van bekende dikte.','Een set bestaat uit dunne bladen met verschillende diktes.'],
['Bandenspanningsmeter','De luchtdruk in een band meten','Je wilt controleren hoeveel druk er in een autoband zit.','Je sluit de meter aan op het ventiel van de band.'],
['Profielmeter','De diepte van het bandenprofiel meten','Je wilt de diepte van een groef in het loopvlak meten.','De meetpen gaat in de profielgroef.'],
['Trechter','Vloeistof gecontroleerd in een kleine vulopening gieten','Je moet geschikte vloeistof via een smalle opening bijvullen zonder te morsen.','De brede bovenkant loopt over in een smalle uitloop.'],
['Magneetpen','Een bereikbaar stalen onderdeel met een magneet oppakken','Een stalen bout is op een krappe plek gevallen en kan magnetisch worden opgepakt.','De magnetische punt trekt geschikte ijzerhoudende onderdelen aan.'],
['Borgringtang','Geschikte borgringen monteren of verwijderen','Je moet een borgring met twee kleine gaatjes losmaken met de juiste tang.','De smalle punten passen in de gaatjes; kies de juiste binnen- of buitenvariant.']
];
const shuffle = a => {a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
// Related tools can share valid uses. Keep them out of each other's distractors.
const overlapGroups = [[0,1,9,12,13,17,18],[4,5,6,7,24],[2,3,8,16],[10,11],[14,19,20,21],[5,23,24]];
const alternatives = i => toolData.filter((_,j) => j !== i && !overlapGroups.some(group => group.includes(i) && group.includes(j)));
const questions=toolData.flatMap((t,i)=>[
{id:i*4,type:'Herkennen',image:i<16?i:null,prompt:i<16?'Hoe heet dit gereedschap?':`Welk gereedschap past bij deze beschrijving? ${t[3]}`,answer:t[0],choices:shuffle([t[0],...shuffle(alternatives(i)).slice(0,3).map(x=>x[0])]),explanation:`${t[0]}: ${t[3]}`},
{id:i*4+1,type:'Gebruik',image:i<16?i:null,prompt:`Waarvoor gebruik je een ${t[0].toLowerCase()}?`,answer:t[1],choices:shuffle([t[1],...shuffle(alternatives(i)).slice(0,3).map(x=>x[1])]),explanation:`Met een ${t[0].toLowerCase()} kun je: ${t[1].toLowerCase()}.`},
{id:i*4+2,type:'In de werkplaats',image:null,prompt:`${t[2]} Welk gereedschap kies je?`,answer:t[0],choices:shuffle([t[0],...shuffle(alternatives(i)).slice(0,3).map(x=>x[0])]),explanation:`Je kiest een ${t[0].toLowerCase()}. ${t[3]}`},
{id:i*4+3,type:'Kenmerken',image:i<16?i:null,prompt:`Wat is een kenmerk van een ${t[0].toLowerCase()}?`,answer:t[3],choices:shuffle([t[3],...shuffle(alternatives(i)).slice(0,3).map(x=>x[3])]),explanation:t[3]}
]);
