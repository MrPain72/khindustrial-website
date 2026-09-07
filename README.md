# KH INDUSTRIAL - verkkosivusto

Staattinen, responsiivinen verkkosivusto osoitteelle `khindustrial.com`.

## Sisältö
- `/` – KH INDUSTRIAL etusivu
- `/palvelut/` – palvelut
- `/kh-disc-golf/` – KH DISC GOLF – FAMILY & FRIENDS
- `/kh-disc-golf/privacy/` – sovelluksen tietosuojaseloste
- `robots.txt`
- `sitemap.xml`
- `CNAME` – GitHub Pages -yhteensopiva custom domain -tiedosto

## Yritystiedot
Sivustoon on lisätty julkisesta KH INDUSTRIAL -yritysprofiilista:
- Y-tunnus 1871772-0
- Tammikatu 4, 74130 Iisalmi
- +358 45 78737374
- kimmo@khindustrial.com

## DNS
Nykyisiä Namecheap Private Email / DKIM / MX / SPF -tietueita ei pidä poistaa.

Kun hosting-palvelu on valittu, muuta vain verkkosivun tarvitsemat `@`- ja `www`-tietueet
hosting-palvelun antamien ohjeiden mukaan.

## Google Search Console
Kun sivusto on verkossa:
1. Lisää `khindustrial.com` Domain propertyksi Google Search Consoleen.
2. Lisää Googlen antama TXT-tietue Namecheap Advanced DNS -näkymään.
3. Älä poista olemassa olevia sähköpostin TXT/MX-tietueita.
4. Lähetä `https://khindustrial.com/sitemap.xml` Search Consoleen.

## Google Play
Tietosuojaselosteen URL:
`https://khindustrial.com/kh-disc-golf/privacy/`

Sovellussivu:
`https://khindustrial.com/kh-disc-golf/`

## KH Disc Golf -versiohistorian päivittäminen

Kun uusi release on hyväksytty Samsungilla, commitoitu, versionostettu ja tagattu:

1. Luo tarkistettava luonnos komennolla `./scripts/update-disc-golf-release.ps1 -Tag v0.5.4`.
2. Varmista käyttäjälle näkyvät muutokset mobiilirepon Git-diffistä ja dokumentaatiosta.
3. Lisää tarkistettu julkaisu tiedoston `assets/disc-golf-releases.js` tietolähteeseen ja siirrä `current`-merkintä uusimpaan versioon.
4. Tarkista sivu desktopissa ja noin 412 px leveässä mobiilinäkymässä.
5. Tee website-commit ja push vasta sisällön hyväksynnän jälkeen.

Skripti ei julkaise tai kirjoita markkinointitekstiä automaattisesti, vaan tuottaa käsin tarkistettavan luonnoksen.
