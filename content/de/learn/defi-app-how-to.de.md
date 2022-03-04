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

\**Du wirst diese Sicherheitsabfrage bei frühen, nicht signierten Versionen der App sehen. In zukünftigen Versionen, die von Apple signiert sind, wirst du keine Sicherheitsabfragen mehr sehen. Vorerst befolgst du bitte Schritt 3 für eine Lösung.*

### Schritt 3: Ausführung der App zulassen

\**Öffne die App nur auf diese Weise, wenn du sicher bist, dass du die DeFi-App von einer offiziellen Quelle heruntergeladen hast. Die DeFi Wallet ist derzeit nur auf [official website](/) und [DeFiChain’s GitHub](https://github.com/DeFiCh/app/releases) verfügbar.*

Gehe zu **Systemeinstellungen** und klicke auf **Sicherheit & Datenschutz**..

<p><img src="/img/guides/installing-defi-app/system-preferences.png" srcset="/img/guides/installing-defi-app/system-preferences.png 1x, /img/guides/installing-defi-app/system-preferences@2x.png 2x"></p>

Dann klicke auf **Dennoch öffnen**.

<p><img src="/img/guides/installing-defi-app/open-anyway-a.png" srcset="/img/guides/installing-defi-app/open-anyway-a.png 1x, /img/guides/installing-defi-app/open-anyway-a@2x.png 2x"></p>

Klicke auf **Öffnen** im Bestätigungs-Pop-up.

<p><img src="/img/guides/installing-defi-app/open-anyway-b.png" srcset="/img/guides/installing-defi-app/open-anyway-b.png 1x, /img/guides/installing-defi-app/open-anyway-b@2x.png 2x"></p>

Die DeFi Wallet wird automatisch gestartet, wenn die Installation abgeschlossen ist.

## Installing on Windows

### Step 1: Installation

Double click on the downloaded file.

### Step 2: Windows security prompt

If this is the first time you are installing the DeFi app, the installer may present you with a security prompt as shown. Click **More info**.

\**Microsoft Windows SmartScreen may flag newly uploaded files that have not built up a long enough history.*

![Image](https://i.imgur.com/CUmfPMS.png)

### Step 3: Bypass Windows security prompt

Click **Run anyway** to begin installation.

![Image](https://i.imgur.com/S7SFwms.png)

DeFi app will launch automatically when the installation is complete.

## Installing on Linux using AppImage

Please ensure you have enabled the **Allow executing file as program** option for the download file.

![Image](https://i.imgur.com/TU3ggCU.png)

You can now open DeFi app.

## Installing on Linux using Debian

You can choose to either install DeFi app as a GUI tool or command line tool.

### Using Software Center

The simplest method is to use Software Center in Ubuntu. Simply navigate to the folder (usually *Downloads* folder)  containing the downloaded **.deb** file and open it.

### Install .deb files in command line using dpkg

If you want to install **deb** packages using the command line, you can use either the `apt` command or the `dpkg` command.

```
sudo apt install PATH_TO_DEB_FILE
```

or

```
sudo dpkg -i PATH_TO_DEB_FILE
```


You can now open DeFi app.

---

## Using the wallet

### The wallet interface

<p><img src="/img/guides/installing-defi-app/wallets.png" srcset="/img/guides/installing-defi-app/wallets.png 1x, /img/guides/installing-defi-app/wallets@2x.png 2x"></p>

#### Sidebar main navigation

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
