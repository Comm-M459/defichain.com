---
title: Comment utiliser l'application DeFiChain
type: article
long_title: Un guide étape par étape pour utiliser et installer l'application DeFiChain.
cta_to: Read
meta:
  description: Un guide étape par étape pour utiliser et installer l'application DeFiChain.
  og:
    title: Comment utiliser l'application DeFiChain
    description: Un guide étape par étape pour utiliser et installer l'application DeFiChain.
    site_name: DeFiChain
    image: /img/og/ogimage_en.png
    image_type: image/png
    locale: fr
content:
  sections:
    hero:
      name: hero
      headline: Comment utiliser l'application DeFiChain.
      subhead: Un guide étape par étape.
---

## Télécharger l'application

Téléchargez la dernière application depuis la page [downloads](/downloads).

## Exigences minimales

| Exigences | Minimum requis |
|-|-|
| Mémoire | 4Go |
| OS | macOS 10.14, Windows 10, Ubuntu LTS 18 et supérieur |

## Installation sur macOS

### Étape 1 : Installation

Ouvrez l'image téléchargée **DeFi-Wallet-<version>.dmg**. Dans la fenêtre du Finder qui s'ouvre, faites glisser le DeFi Wallet sur la gauche, sur le raccourci du répertoire Applications sur la droite.

<p><img src="/img/guides/installing-defi-app/drag-to-install.png" srcset="/img/guides/installing-defi-app/drag-to-install.png 1x, /img/guides/installing-defi-app/drag-to-install@2x.png 2x"></p>

### Étape 2 : Gérer l'invite de sécurité de macOS lors de l'ouverture de l'application

Ouvrez l'application. La première fois que vous ouvrez l'application DeFi, une invite de sécurité vous sera présentée. Appuyez sur OK pour la rejeter.

<p><img src="/img/guides/installing-defi-app/macos-security-prompt.png" srcset="/img/guides/installing-defi-app/macos-security-prompt.png 1x, /img/guides/installing-defi-app/macos-security-prompt@2x.png 2x"></p>

\**Vous verrez cette invite de sécurité dans les premières versions non signées de l'application. Dans les versions futures signées par Apple, vous ne verrez pas d'invite de sécurité. Pour l'instant, veuillez suivre l'étape 3 pour une solution de contournement.*

### Étape 3 : Autoriser l'exécution de l'application

\**N'ouvrez l'application de cette façon que si vous êtes sûr d'avoir téléchargé l'application DeFi depuis une source officielle. L'application DeFi est actuellement disponible uniquement sur [official website](/) et [DeFiChain’s GitHub](https://github.com/DeFiCh/app/releases).*

Aller à **Préférences système** et cliquer sur **Sécurité et confidentialité**.

<p><img src="/img/guides/installing-defi-app/system-preferences.png" srcset="/img/guides/installing-defi-app/system-preferences.png 1x, /img/guides/installing-defi-app/system-preferences@2x.png 2x"></p>

Cliquez ensuite sur le **Ouvrir quand même**.

<p><img src="/img/guides/installing-defi-app/open-anyway-a.png" srcset="/img/guides/installing-defi-app/open-anyway-a.png 1x, /img/guides/installing-defi-app/open-anyway-a@2x.png 2x"></p>

Cliquez sur **Ouvrir** dans la fenêtre de confirmation.

<p><img src="/img/guides/installing-defi-app/open-anyway-b.png" srcset="/img/guides/installing-defi-app/open-anyway-b.png 1x, /img/guides/installing-defi-app/open-anyway-b@2x.png 2x"></p>

L'application DeFi se lancera automatiquement lorsque l'installation sera terminée.

## Installation sur Windows

### Step 1: Installation

Double-cliquez sur le fichier téléchargé.

### Étape 2 : Invite de sécurité de Windows

Si c'est la première fois que vous installez l'application DeFi, le programme d'installation peut vous présenter une invite de sécurité comme indiqué. Cliquez sur **Plus d'infos**.

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
