param([Parameter(Mandatory=$true)][ValidatePattern('^v\d+\.\d+\.\d+$')][string]$Tag,[string]$MobileRepo='..\..\KH Frisbee Family Friend\mobile-app',[string]$OutputPath='.\release-draft.md')
$ErrorActionPreference='Stop'
$repo=(Resolve-Path -LiteralPath $MobileRepo).Path
git -C $repo rev-parse --verify "$Tag^{commit}" | Out-Null
$tags=@(git -C $repo tag --list 'v[0-9]*' --sort=-version:refname)
$i=[Array]::IndexOf($tags,$Tag)
if($i -lt 0){throw "Tagia $Tag ei löytynyt."}
if($i+1 -ge $tags.Count){throw 'Edellistä release-tagia ei löytynyt.'}
$previous=$tags[$i+1]
$date=git -C $repo show -s --format=%cs "$Tag^{commit}"
$commits=git -C $repo log --no-merges --format='- %s' "$previous..$Tag"
$files=git -C $repo diff --name-only "$previous..$Tag"
$draft=@"
# KH Disc Golf -julkaisuluonnos
- Versio: $($Tag.TrimStart('v'))
- Päivä: $date
- Vertailu: $previous..$Tag

## Käyttäjälle näkyvien muutosten luonnos
Muokkaa tekniset commit-viestit käyttäjälle ymmärrettäviksi. Jätä pois testit, refaktoroinnit, build-polut, SHA-tarkisteet ja migraationumerot.

### Commitit
$($commits -join "`n")

### Muuttuneet tiedostot
$($files|ForEach-Object{"- $_"}|Out-String)

## Tarkistus
- [ ] Sisältö varmennettu Git-diffistä ja dokumentaatiosta.
- [ ] Teksti tarkistettu käsin.
- [ ] Uusi versio lisätty assets/disc-golf-releases.js-tiedostoon ja current-merkintä siirretty.
- [ ] Desktop- ja mobiilinäkymä tarkistettu.
"@
Set-Content -LiteralPath $OutputPath -Value $draft -Encoding utf8
Write-Host "Luonnos luotu: $OutputPath"
