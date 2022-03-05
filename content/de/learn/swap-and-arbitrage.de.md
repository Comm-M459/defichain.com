---
title: Tausch- und Arbitragegeschäfte
type: article
long_title: Eine Schritt-für-Schritt-Anleitung für Tausch- und Arbitragegeschäfte auf der DEX
cta_to: Read
meta:
  description: Eine Schritt-für-Schritt-Anleitung für Tausch- und Arbitragegeschäfte auf der DEX
  og:
    title: Tausch- und Arbitragegeschäfte
    description: Eine Schritt-für-Schritt-Anleitung für Tausch- und Arbitragegeschäfte auf der DEX
    site_name: DeFiChain
    image: /img/og/ogimage_en.png
    image_type: image/png
    locale: de
content:
  sections:
    hero:
      name: hero
      headline: Tausch und Arbitrage
      subhead: Eine Schritt-für-Schritt-Anleitung
---

## Tauschen mittels der DEX

Der Tausch von Token auf der DeFiChain DEX (Dezentrale Börse) ist einfach. Zum Zeitpunkt der Erstellung dieses Artikels bietet die DEX den Tausch für die folgenden Paare an:

1. Ethereum–DeFiChain (dETH–DFI)
2. Bitcoin–DeFiChain (dBTC–DFI)
3. Tether–DeFiChain (dUSDT–DFI)

Die DeFiChain DEX leidet nicht unter den hohen Gasgebühren, die bei Ethereum-basierten DEX aufgrund von Netzwerküberlastungen anfallen können. Da es sich bei Ethereum um eine Allzweck-Blockchain handelt, ist sie nicht speziell für dezentrale Finanzgeschäfte konzipiert. DeFiChain hingegen wurde für DeFi und nur für DeFi entwickelt.

### Schritt 1: Starte die DeFi Wallet App

Du hast die App noch nicht installiert? [Klicke hier und finde eine Schritt-für-Schritt-Anleitung, wie du sie installieren kannst.](https://defichain.com/learn/defi-app-how-to/?utm_source=defichain&utm_medium=dex-guide&utm_campaign=dex-launch)

### Schritt 2: Stelle sicher, dass du DFI auf deiner Wallet hast

Nachdem du die DeFi Wallet App geöffnet hast, klicke in der Seitenleiste auf **Guthaben**. Vergewissere dich, dass du Guthaben (DFI) auf deiner Wallet hast, denn für die Transaktionsgebühren werden DFI benötigt. Wenn du noch keine DFI hast, [hier findest du eine Schritt-für-Schritt-Anleitung, wie und wo du DFI kaufen kannst].(https://defichain.ghost.io/where-and-how-to-buy-dfi-defichain/)

<img src="/img/guides/installing-defi-app/wallets-choose.png" srcset="/img/guides/installing-defi-app/wallets-choose.png 1x, /img/guides/installing-defi-app/wallets-choose@2x.png 2x">

### Schritt 3: Navigiere zur DEX (Dezentrale Börse)

Klicke auf **DEX** in der Seitenleiste, um die dezentrale Börse aufzurufen.

<img src="/img/guides/obtaining-tokens/go-to-dex.png" srcset="/img/guides/obtaining-tokens/go-to-dex.png 1x, /img/guides/obtaining-tokens/go-to-dex@2x.png 2x">

### Schritt 4: Einen Tausch durchführen

Der DEX bietet dir eine Möglichkeit, einen Token gegen einen anderen zu tauschen. In diesem Fall wählst du DFI im linken Feld **Von** aus.

<img src="/img/guides/obtaining-tokens/dex-from.png" srcset="/img/guides/obtaining-tokens/dex-from.png 1x, /img/guides/obtaining-tokens/dex-from@2x.png 2x">

Wähle dann den Token, den du kaufen möchtest, im rechten Feld **In** aus.

<img src="/img/guides/obtaining-tokens/dex-to.png" srcset="/img/guides/obtaining-tokens/dex-to.png 1x, /img/guides/obtaining-tokens/dex-to@2x.png 2x">

Du kannst entweder im Feld **Von** angeben, wie viel DFI du verkaufen möchtest, oder im Feld **In**, wie viel des anderen Tokens du kaufen möchtest. Du kannst auch auf die Schaltfläche **MAX** klicken, um den maximalen Betrag an DFI einzugeben.

Klicke auf **Weiter**, wenn du bereit bist zu tauschen.

<img src="/img/guides/obtaining-tokens/ready-to-swap.png" srcset="/img/guides/obtaining-tokens/ready-to-swap.png 1x, /img/guides/obtaining-tokens/ready-to-swap@2x.png 2x">

Überprüfe die Transaktionsbeträge und Gebühren. Klicke dann zur Bestätigung auf **Tauschen**.

<img src="/img/guides/obtaining-tokens/dex-verify.png" srcset="/img/guides/obtaining-tokens/dex-verify.png 1x, /img/guides/obtaining-tokens/dex-verify@2x.png 2x">

---

## Willst du ein Arbitrageur sein?

Wenn Liquidität von einer DEX (Dezentralen Börse) gewechselt wird, gerät das Verhältnis der Token in einem der Liquiditätspoolpaare aus dem Gleichgewicht. Da der Preis der Token in einem Liquiditätspool nicht von den Marktpreisen abhängt wie bei CEXs (zentralisierten Börsen), die auf dem Orderbuchmodell basieren, kann einer der Token in einem Paar billiger oder teurer werden als die externen Preise an zentralisierten Börsen. Du kannst entweder niedrig auf DeFiChain kaufen und hoch auf einer CEX verkaufen, oder niedrig auf einer CEX kaufen und hoch auf DeFiChain verkaufen). Das ist es, was wir _Arbitrage-Möglichkeiten_ nennen.

Hier ein Beispiel:

Achte auf Preisunterschiede zwischen der DEX und den CEXs. Zum Beispiel liegt der BTC-Preis für DFI an einer Börse wie [Bittrex](https://global.bittrex.com/Market/Index?MarketName=BTC-DFI) zum Zeitpunkt der Erstellung dieses Artikels bei `0.00002643 BTC pro DFI`. Im Vergleich zu Bittrex liegt der Preis für BTC auf der DEX bei `0.00002522 BTC per DFI`. BTC ist auf der DEX teurer als auf Bittrex.

### DFI gegen BTC tauschen

Alles, was wir tun müssen, ist 1 BTC bei Bittrex zu kaufen mit `38,587.61607637 DFI`.

<img src="/img/guides/arbitrage/arbitrage-cex.png" srcset="/img/guides/arbitrage/arbitrage-cex.png 1x, /img/guides/arbitrage/arbitrage-cex@2x.png 2x">

Dann müssen wir den `1 BTC` für `39,355.98845598 DFI` auf der DEX verkaufen, was einem Gewinn von `768.37237961 DFI` entspricht - etwa 2% an einem einzigen Tag. Wenn die Preise stärker schwanken, können die Arbitragemöglichkeiten viel größer werden.

<img src="/img/guides/arbitrage/arbitrage1.png" srcset="/img/guides/arbitrage/arbitrage1.png 1x, /img/guides/arbitrage/arbitrage1@2x.png 2x">

[Lade die DeFi Wallet Desktop App](/downloads) herunter, die für macOS, Windows und Linux verfügbar ist, um die DEX zu nutzen. Auch du kannst ein Arbitrageur sein.
