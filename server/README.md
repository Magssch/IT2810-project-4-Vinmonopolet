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
