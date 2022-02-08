---
title: Prime aux bogues
type: bug-bounty
long_title: Programme de primes aux bogues de DeFiChain
aliases:
    - /bounty
    - /bounty-program
    - /bug-bounty-program
menu:
  # main:
  #   weight: 45
  footer:
    weight: 1000
meta:
  description: Programme de primes aux bogues de DeFiChain
  og:
    title: Programme de primes aux bogues de DeFiChain
    description: Bounty hunters wanted for wanted bugs
    site_name: DeFiChain
    image: /img/og/ogimage_bounty_en.png
    image_type: image/png
    locale: fr
theme:
  footer: day
content:
  sections:
    hero:
      name: hero
      headline: Programme de primes aux bogues de DeFiChain
      subhead: DeFiChain s'engage avec des experts du domaine de la sécurité ainsi qu'avec la communauté pour traquer les vulnérabilités. Notre programme de primes récompense jusqu'à 50 000 USD.
      cta:
        label: Soumettre la vulnérabilité
      sub_cta:
        label: Comment participer
    leaderboard:
      headline: Tableau des leaders
      subhead: DeFiChain remercie les chasseurs de primes suivants dans leurs efforts pour garder DeFiChain sécurisé.
      hunters:
        - name: Dr. Daniel Cagara
          github: muirglacier
          address: dYY5wLEmiawTAzTp2CP5qfrYyjmCVcwPv4
          bounties:
            - title: Masternode mining efficiency exploit
              value_dfi: 5000
              value_usd: 15000
              txid: 3855e22b35f26cc962d154639d3ce1ac14a40286182b0c897cd5dbe8c0b60503
            - title: 3rd-party masternode fund lockup issue
              value_dfi: 1500
              value_usd: 4500
              txid: f715e5ec45ffccbaade5d0de451d18cf00e386b04f0c3d87d8b7a80278e6b709
            - title: Probabilistic side mining exploit
              value_dfi: 2500
              value_usd: 7500
              txid: e2fa3e133e35458328eded333f32e2c525c66861f37ca0be52f5b7e092c96cde
            - title: Dropping of masternode through transaction malleability
              value_dfi: 4000
              value_usd: 12000
              txid: ee46a62e455f6aad526d9664022afb4a5014b4031e034f00bdf53dee3d5a6070
            - title: Masternode quorum anchor confirmation bug
              value_dfi: 3000
              value_usd: 9000
              txid: 471c0e3e1c6e06375be6eef63eb51cc068ecf765301366f1d3d82c7446b8c0e3
            - title: Masternode boost with infinite timelock
              value_dfi: 4000
              value_usd: 12000
              txid: 3e8bef9fc348183d6f7f685d105ced7693dfa6bc5f94431c3abba7d47271eb08
      total_bounty: Prime totale
    participation:
      headline: Comment participer
      description:
        p1: Il existe de nombreuses façons de commencer à trouver un bougue. Vous pouvez commencer par vous connecter au testnet de DeFiChain en exécutant `defid -testnet`. Alternativement, vous pouvez étudier notre code source à l'adresse suivante [GitHub](https://github.com/defich/ain).
        p2: Si vous trouvez un bogue en interagissant avec notre programme et/ou en étudiant notre code source, nous pouvons offrir une prime de bogue allant jusqu'à _50 000 USD de DFI_, à condition que nous trouvions le bogue significatif et que vous soyez en mesure de fournir des informations utiles concernant la correction ou la reproduction du problème.
        p3: "**Assurez-vous d'étudier le code qui est marqué pour les versions officielles, et non la branche master ou tout autre code qui est encore en cours de développement.**"
    submission:
      headline: Processus de soumission
      description:
        p1: La sécurité étant une question sensible, nous encourageons les utilisateurs à ne pas soumettre de problèmes publics concernant la sécurité de la blockchain. Nous vous encourageons à utiliser votre propre discrétion, si vous pensez que le problème n'est pas quelque chose que le public peut facilement exploiter, alors n'hésitez pas à créer un problème dans le repo à l'adresse suivante [GitHub](https://github.com/defich/ain). Si le problème présente un exploit critique, veuillez plutôt nous envoyer un courriel à l'adresse suivante [security@defichain.com](mailto:security@defichain.com).
        p2: "Dans votre soumission, veuillez inclure :"
        list: 
          - Une description claire du problème
          - Une correction du problème, de préférence sous la forme d'une pull request.
          - Si vous n'êtes pas en mesure de fournir un correctif, veuillez fournir des instructions claires sur la façon de reproduire le problème.
          - Votre adresse e-mail ou d'autres coordonnées pertinentes (par exemple, l'identifiant Telegram)
          - Votre adresse DFI pour recevoir le bounty si votre soumission est approuvée.
---
