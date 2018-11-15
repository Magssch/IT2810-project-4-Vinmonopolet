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



I denne oppgaven er utfordringen å designe og implementere en søkbar
"katalog" hvor objektene kan være hva som helst (musikk, film, salgsobjekter,
steder i verden etc.). I oppgaven inngår å sette opp en database og implementere et
REST api på server (alternativt bruk av graphQL) , og implementere en klientapplikasjon
som har søk, filtrering og sortering og viser bruk av state managment.



##Teknologier og komponenter
* React
* Redux
* react-redux
* react-thunk
* axios
* react-chart
* react-responsive-modal


##Backend


##Frontend


##Testing



##Kilder

* React Semantic UI:
https://react.semantic-ui.com/

* Vinmonopolet produktdatabase:
https://www.vinmonopolet.no/datadeling

* Visualisering av data - react-chart.js:
https://github.com/jerairrest/react-chartjs-2

* Visualisering av data - react-responsive-modal:
https://www.npmjs.com/package/react-responsive-modal




