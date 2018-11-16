# Dokumentasjon
#### Magnus Schjølberg, Åsmund Haugse, Viktor Solberg

## Overordnet beskrivelse av prosjektet
Informasjon om Vinmonopolets produkter er fritt tilgjengelig for bruk i egne tjenester.
Vi har i denne oppgaven derfor benyttet oss av deres produktdatabase, hentet ut alle produkter
og lagt disse inn i vår egen database som kjører på NTNU sine servere. Vi har både trimmet bort
datafelter som vi ikke har sett behov for i vår oppgave, samt lagt til ekstra fiktive felter for tilbakemeldinger
i form av "likes" og "dislikes". For å hente ut dataene har vi implentert et REST api som tillater
oss å hente ut data med http-forespørsler. Disse dataene blir både presentert og visualisert via
nettsiden vår. Den består av en logo øverst, deretter et søkefelt samt tre valg for filtrering av data
på volum, land og type(øl, vin, brennevin, etc..). Nederst har siden en tabell som inneholder alle
produkter som blir returnert av søket som sendes til serveren. Den laster inn ti produkter om gangen
og laster inn flere dersom en scroller seg ned til det nederste produktet. Ved å klikke på de
øverste kolonnene (Varenavn, Varetype, Volum, Pris, Land, Alkohol/krone) vil tabellen sorteres
etter den respektive kolonnen som blir klikket. Radene blir da sortert enten alfabetisk eller kronologisk
ved første klikk. Og motsatt-alfabetisk/motsatt-kronologisk ved andre klikk. Brukeren av nettsiden har også
mulighet for å se utdypende informasjon om hvert produkt ved å klikke på produktets rad. Da vil
et nytt vindu dukke opp med utdypende informasjon om produktet som blir klikket. Dette vinduet inneholder
informasjon om smak, lukt, hvilke typer mat produktet passer til, årgang og literpris. Vinduet inneholder
også to grafer som illustrerer henholdsvis smakssammensetning og tilbakemeldinger i form av "likes" og
"dislikes". Merk at for produkter som ikke inneholder data for verken friskhet, bitterhet eller sødme
vil grafen om smakssammensetning være blank.






## Teknologier og komponenter
* React
* Redux
* react-redux
* react-thunk
* axios
* react-chart
* react-responsive-modal


## Backend

Hvordan bruke REST url:
### Generelt
Basert på hvordan du skriver urlen kan du velge hvilket søk du vil gjøre, hva det skal sorteres på og om det skal være ascending eller descending.
	eks: - localhost:3000/product
	Vil returnere de 10 billigste produktenee

### Basert på kategori/navn
Det er fire kategorier å filtrere på: Varenavn, Varetype, Land, Distrikt. Viktig med Uppercase på første bokstav.
Et eksempel med å velge alle produkter fra Frankrike av typen Rødvin:
	eks: - localhost:3000/product?Land=Frankrike&Varetype=Rødvin
	Vil returnere de 10 billigste rødvinene fra frankrike

### Sortering
For å dekke kravet med sortering har vi lagt til to variabler: sorting og order. Disse er lowercase.
sorting kan være alle mulige kategorier, men anbefaler å bruke de som faktisk kan sorteres korrekt basert på int:
Pris, Literpris, Volum, Varenummer, Alkohol, APK, Liker og Misliker
I utgangspunktet er sorting satt til å være Pris.
Order kan være enten -1 eller 1: Descending eller Ascending.
I utgangspunktet er sorting satt til å være 1: Ascending
	eks: - localhost:3000/product?Land=Frankrike&Varetype=Rødvin&sorting=APK&order=-1
	Vil returnere de 10 rødvinene fra frankrike som gir deg mest alkohol per krone.

### Paginating
For å løse problemet med dynamisk lasting har vi brukt noe som heter paginate. Dette deler rett og slett resultatet
opp i "pages". Variablen page sier hvilken "side" man er på. Denne kan være en av alle tilgjengelige pages.
Her har vi også en variabel limit som sier hvor mange resultater per side.
	eks: - localhost:3000/product?page=1&limit=20
	Vil returnere de 20 billigste produktene.
I frontend delen vil det dermed være naturlig å holde styr på hvilke pages man har lastet inn. Når man skal laste neste side med
resultater gjør man en ny get med page=page+1



## Frontend

### Visualisering av data

### react-responsive-modal

### react-chart

### Redux
Prosjektet bruker Redux for state management, i henhold til kravet. Redux lar oss ha en såkalt "single source of truth" i Redux Storen, hvor state/tilstanden til samtlige komponenter lagres.
Tilstandene kan gjøres tilgjengelig for de komponentene som trenger det, og vi slipper dermed å sende så mye props via render-funksjonene. I tillegg sørger Redux storen for at vi ikke
lagrer tilstand to steder samtidig, noe som potensielt kan føre til desynkroniserte og uforutsigbar komponentfunksjonalitet.

For å gjøre en endring i Redux storen benytter man seg av såkalte "action"-objekter og "action creators" som lager disse. Disse rapporterer en payload til en reducer, som igjen tar seg av å endre innholdet i state.
For å gjøre tilstand tilgjengelig til de forskjellige komponentene pakker man App.js inn i en provider som er koblet til Redux storen. Deretter kan man ta inn innhold fra store som props inn i App.js eller andre komponenter.

#### Redux Thunk
Redux Thunk er en såkalt "middleware" som lar "action creators" returnere funksjoner i stedet for objekter. Dette er nyttig for å gjøre asynkrone spørringer, som når vi henter fra databasen via REST og axios. 
Ved å returnere en funksjon i stedet for et objekt kan vi kort fortalt tillate forsinkelse i innhenting av verdiene som skal settes til state.

### Semantic UI
Som UI-bibliotek har vi valgt React-implementasjonen av Semantic UI.


### evt andre ting


## Testing

### Cypress
For å gjøre automatisert end-to-end testing har vi i vårt prosjekt benyttet oss av Cypress.
Dette er et verktøy som lar oss skrive automatiserte tester som interagerer med siden på samme måte som et menneske ville gjort.
For å vise grunnleggende ferdigheter i denne typen testing har vi derfor laget to tester som til sammen tester det meste av funksjonalitet på siden.
Du kan kjøre cypress ved å først `cd client` og deretter skrive `npm run cypress`. Du vil da finne to tester, `navigation_spec.js` og `search_query_spec.js` som henholdsvis tester navigering på siden og søking i databasen.
Disse kan du kjøre ved å trykke deg inn på de og du skal deretter få opp et nettleser-vindu hvor disse testene kjøres.
Cypress gir også en tidslinje for testingen i venstre sidebar, du kan trykke på de forskjellige hendelsene for å se hva testen så og søkte etter i det tidspunktet.

### Jest

### Mocha

### Chai


## Kilder

* React Semantic UI:
https://react.semantic-ui.com/

* Vinmonopolet produktdatabase:
https://www.vinmonopolet.no/datadeling

* Visualisering av data - react-chart.js:
https://github.com/jerairrest/react-chartjs-2

* Visualisering av data - react-responsive-modal:
https://www.npmjs.com/package/react-responsive-modal



