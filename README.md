# KH INDUSTRIAL - verkkosivusto

Staattinen, responsiivinen GitHub Pages -sivusto osoitteelle `khindustrial.com`.

Sivusto esittelee KH INDUSTRIALin harraste- ja kehityspohjaisia ohjelmistoprojekteja. Tärkein nykyinen projekti on KH DISC GOLF – FAMILY & FRIENDS. Varsinaista kaupallista yritystoimintaa ei ole vielä aloitettu.

## Julkinen rakenne

- `/` – ohjelmistoprojektien etusivu
- `/kh-disc-golf/` – KH DISC GOLF – FAMILY & FRIENDS
- `/kh-disc-golf/updates/` – päivitykset ja versiohistoria
- `/kh-disc-golf/privacy/` – sovelluksen tietosuojaseloste
- `/palvelut/` – vanhan osoitteen ohjaus etusivulle, `noindex`
- `robots.txt`
- `sitemap.xml`
- `CNAME` – GitHub Pages -custom domain

## Yhteys

Sovelluspalaute ja tuki: `kimmo@khindustrial.com`

## DNS

Nykyisiä Namecheap Private Email / DKIM / MX / SPF -tietueita ei pidä poistaa. Verkkosivun julkaisu ei muuta sähköpostiasetuksia.

## Google Play

Tietosuojaselosteen URL: `https://khindustrial.com/kh-disc-golf/privacy/`

Sovellussivu: `https://khindustrial.com/kh-disc-golf/`

Päivitykset: `https://khindustrial.com/kh-disc-golf/updates/`

## KH Disc Golf -versiohistorian päivittäminen

Kun uusi release on hyväksytty Samsungilla, commitoitu, versionostettu ja tagattu:

1. Luo tarkistettava luonnos komennolla `./scripts/update-disc-golf-release.ps1 -Tag v0.5.4`.
2. Varmista käyttäjälle näkyvät muutokset mobiilirepon Git-diffistä ja dokumentaatiosta.
3. Lisää tarkistettu julkaisu tiedoston `assets/disc-golf-versions.js` tietolähteeseen ja siirrä `current`-merkintä uusimpaan versioon.
4. Tarkista päivityssivu desktopissa ja noin 412 px leveässä mobiilinäkymässä.
5. Tee website-commit ja push vasta sisällön hyväksynnän jälkeen.

Skripti ei julkaise tai kirjoita markkinointitekstiä automaattisesti, vaan tuottaa käsin tarkistettavan luonnoksen.
