# Instrukce pro AI agenta k tvorbě webu

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
- CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- Dbej na bezpečnost webu (CSP hlavička a nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
- Nedávej do souboru .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vlož favicon ve formátu svg (pokud ho nemáš dodaný, vytvoř ho)
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu

**Základní SEO**
- Strukturuj nadpisy H1-H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
- Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
- Urči kanonickou url
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

**Optimalizace obrázků**
- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
- Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

**Vizuální hierarchie a čitelnost**
- Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
- Čitelné fonty s českou diakritikou
- Správné řádkování (line-height 1.5-1.8 pro odstavce)
- Nikdy nezarovnávej text do bloku
- Optimální šířka řádku pro text (max 70 % obrazovky)

**Layout**
- Šířku celého webu dej na 90 % obrazovky
- Jasné oddělení sekcí a obsahových celků
- Vyvážené použití bílého prostoru (white space)
- Intuitivní navigace - logo vlevo, hamburger menu na mobilu vpravo
- Dej si záležet na patičce webu
- Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
- Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
- Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka – tu vytvoř v designu hero sekce webu a napiš tam: Tato URL bohužel neexistuje. Pod to přidej tlačítko, které povede zpátky na hlavní stranu a vedle toho druhé v odlišném designu, které ale bude pořád ladit s webem rovnou s proklikem na telefon.
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie
- Stíny karet pouze velmi jemné
- Jednotný projev značky (brand voice)
- Konzistentní použití barev napříč celým webem
- Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**

Vizuální styl webu je inspirovaný moderním skandinávským designem. Web musí působit velmi světlým, čistým a vzdušným dojmem. Dominantní je bílá plocha, minimum barev a velké množství white space.

Používej barvy následovně:

- Primární barva: #FCFCFB – hlavní pozadí většiny webu.
- Sekundární barva: #F3F4F5 – střídání sekcí, jemná pozadí bloků a karet.
- Akcentní barva: #6E8D98 – tlačítka, odkazy, aktivní prvky, ikonky a drobné zvýraznění.
- Text: #38464F – veškeré nadpisy i běžný text.
- Doplňková barva: #F8F2F1 – používej pouze výjimečně pro jemné zvýraznění některých sekcí nebo detailů.

Zásady používání barev

- Web má působit z více než 90 % světlými tóny.
- Barevné plochy používej střídmě. Vyhýbej se velkým tmavým blokům.
- Akcentní modrou používej pouze tam, kde je potřeba přitáhnout pozornost uživatele.
- Nevytvářej výrazné barevné přechody ani kontrastní barevné kombinace.
- Nepoužívej čistě černou ani čistě bílou (#FFFFFF), vždy pracuj s uvedenými odstíny.
- Celkový dojem má být klidný, elegantní, čistý a nadčasový.

**Fonty**
- Nadpisový font: Cabinet Grotesk
- Obsahový font: Satoshi
- Jejich soubory najdeš ve složce.

**Struktura**

1. Hero sekce

Velká úvodní sekce přes celou šířku stránky.

Levá část:
- hlavní nadpis (H1),
- krátký podnadpis,
- dvě CTA tlačítka (objednejte se s proklikem na telefon a přehled služeb),
- pod tlačítky horizontální trust bar s hlavními čísly (např. 16+ let praxe, 12+ certifikací, 5 let ortodoncie, 1000+ spokojených pacientů).

Pravá část:
- velká portrétní fotografie dentální hygienistky,
- fotografie zasahuje téměř přes celou výšku hero sekce,
- fotografie není uzavřena do karty ani rámečku.

Hero musí působit velmi vzdušně, prémiově a elegantně.

---

2. Informační bar

Úzký kontrastní horizontální pruh přes celou šířku stránky.

Obsahuje:
- jednoduchou ikonku z obou stran textu,
- krátkou důležitou informaci (pro tuto chvíli: Přijímáme nové pacienty).

Tento prvek slouží jako výrazný vizuální předěl mezi hero sekcí a zbytkem stránky.

---

3. Benefity ordinace

Nadpis sekce.

Pod nadpisem čtyři jednoduché benefitové bloky.

Každý blok obsahuje:
- stejnou jednoduchou lineární ikonku zubu,
- krátký nadpis vystihující benefit (krátké čekací termíny, moderní vybavení, vstřícný přístup k pacientům, ..ještě čtvrtý? můžeš vymyslet zatím)

Bez výrazných karet a bez stínů. Jednotlivé položky oddělují pouze jemné vertikální linky.

---

4. O mně

Dvousloupcová sekce.

Levý sloupec
- portrétní fotografie hygienistky.

Pravý sloupec
- malý nadpis sekce,
- hlavní nadpis,
- několik odstavců textu,
- CTA tlačítko.

Trust bar se zde již neopakuje.

Velký prostor mezi oběma sloupci.

---

5. Služby

Asymetrická dvousloupcová sekce.

Levý sloupec
- nadpis sekce,
- krátký úvodní text,
- odkaz na kompletní ceník.

Pravý sloupec
- přehled služeb rozdělený do dvou sloupců,
- každá služba obsahuje:
  - jednoduchou ikonku zubu,
  - název služby,
- jednotlivé položky jsou odděleny pouze jemnou linkou nebo mezerou.

Nepoužívat klasické karty. Sekce má připomínat elegantní editorialový seznam.

---

6. Rezervační systém

Celá sekce má kontrastní tmavé pozadí.

Rozdělení do dvou asymetrických částí:

Levá (menší) část
- nadpis,
- krátký text,
- CTA tlačítko.

Pravá část
- zatím placeholder pro kalendář (iframe doplníme)

Jedná se o hlavní konverzní sekci celé stránky.

---

7. Nejčastější dotazy

Světlá sekce.

Obsahuje:
- nadpis,
- jednoduchý seznam FAQ formou accordionů, ikony při zavřeném akordeonu šipka dolů, při otevřeném šipka nahoru.

Bez další grafiky a bez zbytečných dekorací.

---

8. Kontakt

Pět sloupců - asymetricky podle potřeby obsahu

1. malý nadpis, hlavní nadpis Kontakt
2. telefon s vhodnou ikonkou
3. ordinační doba
4. adresa s nějakou vhodnou ikonou
5. mapa

---

9. Patička

Nižší tmavá patička.

Obsahuje:
- logo,
- název ordinace
- jméno hygienistky
- kontaktní údaje,
- ještě jednou telefon
- odkazy na sociální sítě,
- copyright,
- odkaz na zásady ochrany osobních údajů
- webdesign: michaelabachri.cz (s prolinkem do nového okna).

Patička má být jednoduchá, přehledná a vizuálně nenápadná.

**Design**
Design hero webu vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg.
Na hero sekci webu použij hero_nikolamourkova_kompr.jpg. Kde spolu máme domluvenou nějakou další fotku, tam zatím nechej placeholder.

**Texty**
Texty zatím nemáme připravené, můžeš do struktury zatím doplnit nějaké vlastní.
