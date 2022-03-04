---
title: Leitfaden DeFi Wallet Desktop-App
type: article
long_title: Eine schrittweise Anleitung zur Verwendung und Installation der DeFi Wallet Desktop-App
cta_to: Read
meta:
  description: Eine schrittweise Anleitung zur Verwendung und Installation der DeFiChain App "Defi Wallet"
  og:
    title: Leitfaden DeFi Wallet Desktop-App
    description: Eine schrittweise Anleitung zur Verwendung und Installation der DeFi Wallet Desktop-App
    site_name: DeFiChain
    image: /img/og/ogimage_en.png
    image_type: image/png
    locale: de
content:
  sections:
    hero:
      name: hero
      headline: Leitfaden DeFi Wallet Desktop-App
      subhead: Schritt-für-Schritt-Anleitung
---

## Die App herunterladen

Lade die neueste App-Version von der Seite [Downloads](/downloads) herunter.

## Mindestanforderungen

| Anforderung | Mindestens erforderlich |
|-|-|
| Arbeitsspeicher | 4GB |
| Betriebssystem | macOS 10.14, Windows 10, Ubuntu LTS 18 oder höher |

## Installation unter macOS

### Schritt 1: Installation

Öffne das heruntergeladene Image **DeFi-Wallet-<Version>.dmg**. Ziehe im Finder-Fenster, das sich öffnet, die DeFi Wallet auf der linken Seite auf die Verknüpfung mit dem Verzeichnis Applications auf der rechten Seite.

<p><img src="/img/guides/installing-defi-app/drag-to-install.png" srcset="/img/guides/installing-defi-app/drag-to-install.png 1x, /img/guides/installing-defi-app/drag-to-install@2x.png 2x"></p>

### Schritt 2: Umgang mit der macOS-Sicherheitsabfrage beim Öffnen der App

Öffne die App. Wenn du die DeFi Wallet zum ersten Mal öffnest, wird dir eine Sicherheitsabfrage angezeigt. Klicke OK, um sie zu ignorieren.

<p><img src="/img/guides/installing-defi-app/macos-security-prompt.png" srcset="/img/guides/installing-defi-app/macos-security-prompt.png 1x, /img/guides/installing-defi-app/macos-security-prompt@2x.png 2x"></p>

\**Diese Sicherheitsabfrage erscheint bei frühen, nicht signierten Versionen der App. In zukünftigen Versionen, die von Apple signiert sind, wire du keine Sicherheitsabfragen mehr zu sehen sein. Falls noch nötig, bitte Schritt 3 für ausführen.*

### Schritt 3: Ausführung der App zulassen

\**Öffne die App nur auf diese Weise, wenn du sicher bist, dass du die DeFi-App von einer offiziellen Quelle heruntergeladen hast. Die DeFi Wallet ist derzeit nur auf [official website](/) und [DeFiChain’s GitHub](https://github.com/DeFiCh/app/releases) verfügbar.*

Gehe zu **Systemeinstellungen** und klicke auf **Sicherheit & Datenschutz**..

<p><img src="/img/guides/installing-defi-app/system-preferences.png" srcset="/img/guides/installing-defi-app/system-preferences.png 1x, /img/guides/installing-defi-app/system-preferences@2x.png 2x"></p>

Dann klicke auf **Dennoch öffnen**.

<p><img src="/img/guides/installing-defi-app/open-anyway-a.png" srcset="/img/guides/installing-defi-app/open-anyway-a.png 1x, /img/guides/installing-defi-app/open-anyway-a@2x.png 2x"></p>

Klicke auf **Öffnen** im Bestätigungs-Pop-up.

<p><img src="/img/guides/installing-defi-app/open-anyway-b.png" srcset="/img/guides/installing-defi-app/open-anyway-b.png 1x, /img/guides/installing-defi-app/open-anyway-b@2x.png 2x"></p>

Die DeFi Wallet wird automatisch gestartet, wenn die Installation abgeschlossen ist.

## Installation unter Windows

### Schritt 1: Installation

Ein Doppelklick auf die heruntergeladene Datei

### Schritt 2: Windows-Sicherheitsabfrage

Wenn du die DeFi-App zum ersten Mal installierst, kann es sein, dass das Installationsprogramm eine Sicherheitsabfrage anzeigt. Klicke auf **Mehr Info**.

\**Microsoft Windows SmartScreen kann neu hochgeladene Dateien markieren, die noch nicht lange genug in der Vergangenheit liegen.*

![Image](https://i.imgur.com/CUmfPMS.png)

### Schritt 3: Umgehen der Windows-Sicherheitsabfrage

Klicke auf **Dennoch ausführen**, um die Installation zu starten.

![Image](https://i.imgur.com/S7SFwms.png)

Die DeFi Wallet wird automatisch gestartet, wenn die Installation abgeschlossen ist.

## Installieren unter Linux mit AppImage

Bitte stelle sicher, dass du die Option **Ausführen der Datei als Programm erlauben** für die Download-Datei aktiviert hast.

![Image](https://i.imgur.com/TU3ggCU.png)

Du kannst jetzt die DeFi Wallet öffnen.

## Installieren unter Linux mit Debian

Du kannst die DeFi Wallet entweder als GUI-Tool oder als Befehlszeilen-Tool installieren.

### Software Center verwenden

Die einfachste Methode ist, das Software Center in Ubuntu zu verwenden. Navigiere einfach zu dem Ordner (normalerweise der Ordner *Downloads*), der die heruntergeladene **.deb** Datei enthält (normalerweise der Ordner *Downloads*), und öffne sie.

### Installiere .deb-Dateien in der Befehlszeile mit dpkg

Wenn du **deb** Pakete über die Befehlszeile installieren willst, kannst du entweder den Befehl `apt` oder den Befehl `dpkg` verwenden.

```
sudo apt install PATH_TO_DEB_FILE
```

or

```
sudo dpkg -i PATH_TO_DEB_FILE
```


Du kannst jetzt die DeFi Wallet öffnen.

---

## Verwendung der Wallet

### Die Wallet-Oberfläche

<p><img src="/img/guides/installing-defi-app/wallets.png" srcset="/img/guides/installing-defi-app/wallets.png 1x, /img/guides/installing-defi-app/wallets@2x.png 2x"></p>

#### Hauptnavigation in der Seitenleiste

- **Wallets** tab: Send and receive funds, and view transactions
- **Liquidity** tab: Add and remove liquidity, and viewing APR of your liquidity
- **DEX** tab: Swap between wrapped BTC/ETH/USDT and DFI
- **Tokens** tab: View community-verified DST (DeFi Standard tokens) and create your own
- **Blockchain** tab: A built-in mini block explorer to examine the blockchain
- **Masternodes** tab: View a list of masternodes and create your own

#### Sidebar sub navigation

- **Console**: Run DeFiChain CLI commands
- **Help**: Help options
- **Settings**: Switch between Main and Test net, language and other settings

### Opening a wallet

Switch to the **Wallets** tab, choose a wallet e.g. DFI.

<p><img src="/img/guides/installing-defi-app/wallets-choose.png" srcset="/img/guides/installing-defi-app/wallets-choose.png 1x, /img/guides/installing-defi-app/wallets-choose@2x.png 2x"></p>

### Sending funds

#### Step 1

Within a wallet, click on **Send**.

<p><img src="/img/guides/installing-defi-app/wallet-send.png" srcset="/img/guides/installing-defi-app/wallet-send.png 1x, /img/guides/installing-defi-app/wallet-send@2x.png 2x"></p>

#### Step 2

Enter the **Amount** and, the **To address** to send to. Yu can also enter an address using QR code scanner feature next to the address field. Press **CONTINUE** when you are ready.

<p><img src="/img/guides/installing-defi-app/wallet-send1.png" srcset="/img/guides/installing-defi-app/wallet-send1.png 1x, /img/guides/installing-defi-app/wallet-send1@2x.png 2x"></p>

#### Step 3

Review the **Amount** and **To address** and verify they are correct. The **COMPLETE SEND** button is disabled for a few seconds to protect you from accidental sending.

<p><img src="/img/guides/installing-defi-app/wallet-send2.png" srcset="/img/guides/installing-defi-app/wallet-send2.png 1x, /img/guides/installing-defi-app/wallet-send2@2x.png 2x"></p>

Click **COMPLETE SEND** to confirm sending.

<p><img src="/img/guides/installing-defi-app/wallet-send3.png" srcset="/img/guides/installing-defi-app/wallet-send3.png 1x, /img/guides/installing-defi-app/wallet-send3@2x.png 2x"></p>

#### Step 4

After the transaction is complete, press **BACK TO WALLET** to return to the wallet.

<p><img src="/img/guides/installing-defi-app/wallet-send4.png" srcset="/img/guides/installing-defi-app/wallet-send4.png 1x, /img/guides/installing-defi-app/wallet-send4@2x.png 2x"></p>

You should see your latest transaction in the list of **Transactions** in your wallet.

---

### Receiving funds

#### Step 1

Within a selected wallet, click **RECEIVE**.

<img src="/img/guides/installing-defi-app/wallet-receive.png" srcset="/img/guides/installing-defi-app/wallet-receive.png 1x, /img/guides/installing-defi-app/wallet-receive@2x.png 2x">

Then click **NEW ADDRESS** to create a new receiving address.

<img src="/img/guides/installing-defi-app/wallet-receive1.png" srcset="/img/guides/installing-defi-app/wallet-receive1.png 1x, /img/guides/installing-defi-app/wallet-receive1@2x.png 2x">

#### Step 2

Fill out the information and give your address a meaningful label. Then click **CREATE**.

<img src="/img/guides/installing-defi-app/wallet-receive2.png" srcset="/img/guides/installing-defi-app/wallet-receive2.png 1x, /img/guides/installing-defi-app/wallet-receive2@2x.png 2x">

#### Step 3

The new receive address you have just created will appear in your list of receive addresses.

<img src="/img/guides/installing-defi-app/wallet-receive3.png" srcset="/img/guides/installing-defi-app/wallet-receive3.png 1x, /img/guides/installing-defi-app/wallet-receive3@2x.png 2x">

Click the **QR code** button to bring up a QR code of the address.

<img src="/img/guides/installing-defi-app/wallet-receive4.png" srcset="/img/guides/installing-defi-app/wallet-receive4.png 1x, /img/guides/installing-defi-app/wallet-receive4@2x.png 2x">

Click the **copy address** button to copy the address to your system clipboard.

<img src="/img/guides/installing-defi-app/wallet-receive5.png" srcset="/img/guides/installing-defi-app/wallet-receive5.png 1x, /img/guides/installing-defi-app/wallet-receive5@2x.png 2x">
