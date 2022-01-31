---
title: Livre blanc
type: article
long_title: DeFiChain livre blanc 
cta_to: Read
theme:
  subscribe: white
menu:
  footer:
    weight: 1100
meta:
  description: DeFiChain livre blanc (traduit de l'original en anglais)
  og:
    title: Livre blanc
    description: DeFiChain livre blanc (traduit de l'original en anglais)
    site_name: DeFiChain
    image: /img/og/ogimage_en.png
    image_type: image/png
    locale: en_US
content:
  sections:
    hero:
      name: hero
      headline: Livre blanc
      subhead: Everything about DeFiChain.
    white_paper:
      headline: White Paper Public Draft
      subhead: Our white paper is ready for public review. We are also enlisting comments from our community and the public. Follow the Google Drive link to read or comment on the paper.
      cta:
        url: https://docs.google.com/document/d/1XYUtdsf9AJrfDXgwZbC0o96WYOwzf1JmGNLje5mpusM/edit?usp=sharing
        label: Read the white paper

    #subscribe in /
    #closer_look in /
---

**Synthèse**: La Fondation DeFiChain développe DeFiChain, une blockchain spécifiquement dédiée aux applications financières décentralisées. En se concentrant sur la fonctionnalité de la blockchain et en la dédiant spécifiquement à la finance décentralisée, DeFiChain fournit un débit de transaction élevé et inégalé, une réduction du risque d'erreurs et un développement spécifique de fonctionnalités intelligentes pour l'accomplissement de services financiers sur la blockchain.

**Ce document n'est pas prospectif**

Le présent document ne constitue ni n'implique de prospection d'aucune sorte. Aucun contenu de ce document ne doit être interprété comme une sollicitation d'investissement. Par conséquent, ce livre blanc ne se rapporte en aucune façon à une offre de titres dans quelque juridiction du monde que ce soit. Ce livre blanc constitue plutôt une description technique de la fonctionnalité des produits, du développement et de la distribution de DeFiChain.

**Ce document n'est pas une spécification technique finale**

Ce document ne constitue pas une spécification technique finale de DeFiChain. Les informations présentées dans ce livre blanc, qu'elles soient techniques ou autres, ont pour but de donner une idée générale de DeFiChain, de sa conception et de ses cas d'utilisation et peuvent être modifiées avec ou sans préavis. Pour connaître les dernières spécifications techniques, consultez les mises à jour et les documentations sur le site officiel. [https://defichain.com](https://defichain.com).

## Résumé

Le secteur des crypto-monnaies repose sur un postulat simple : les gens devraient avoir le contrôle total de leurs finances. Bien que cela semble être une déclaration simple et évidente, les systèmes actuels sont loin de fournir des services financiers qui sont vraiment sous le contrôle des personnes qui les utilisent. La mission de DeFiChain est de donner aux gens (et dans le futur, aux machines et aux appareils) un accès transparent aux services financiers décentralisés.

À cette fin, nous introduisons DeFiChain, une blockchain dédiée spécifiquement pour la finance décentralisée (DeFi) [https://defichain.com](https://defichain.com).

En dédiant la fonctionnalité d'une blockchain spécifiquement à la finance décentralisée, DeFiChain offre un débit de transaction élevé, un risque d'erreur réduit et un développement intelligent de fonctionnalités spécifiquement pour la réalisation de l'intention originale de Satoshi : créer une forme alternative fiable de services financiers construite sur le Bitcoin.

Le bitcoin, tel qu'il est décrit dans le livre blanc original de Satoshi, est conçu comme une forme d'argent numérique, un moyen de stocker et d'échanger de la valeur. L'évolution vers Ethereum et les contrats intelligents a permis de créer un grand nombre de nouvelles fonctionnalités à partir d'une blockchain, mais ce développement a eu un coût. Le concept d'un système d'exploitation global pour tout a créé un système qui nécessite une base de code complexe pour les contrats intelligents, un débit lent, et des difficultés autour de la gouvernance du système.

DeFiChain aborde la finance décentralisée comme un segment spécifique et critique de la communauté blockchain. DeFiChain est une blockchain dédiée qui est optimisée spécifiquement pour les applications DeFi. DeFiChain est intentionnellement non-Turing-complète et ne supporte aucune fonction autres que celles nécessaires pour la finance décentralisée, résultant en une blockchain qui fournit un débit plus élevé et une meilleure fonctionnalité spécifiquement pour les dApps liées à la finance. L'avantage d'un ensemble de commandes non-Turing-complètes est qu'il y a beaucoup moins de risques d'erreurs de codage du type de celles qui ont affecté les smart contracts d'Ethereum, comme le hack DAO ou le blocage des fonds. S'il est important que certains langages de smart contracts soient Turing-complets, dans le domaine de la finance, il convient de restreindre les capacités du langage en faveur d'un système plus sûr dont les vecteurs d'attaque sont considérablement réduits.

### Le problème

Aujourd'hui, presque tous les services financiers sont gérés par des banques. Les investissements, par exemple, sont, par définition, l'utilisation du capital pour gagner plus de capital. Les investisseurs font appel à une banque pour placer leur argent dans des actifs générant des intérêts ou des dividendes afin d'accroître leur patrimoine. Les problèmes liés aux services financiers sont de plus en plus évidents pour tout le monde : coûts des intermédiaires, lenteur des transactions, retards pour les transactions transfrontalières et inaccessibilité pour de nombreux secteurs de la population. Une myriade de solutions fintech ont été apportées pour améliorer le système, mais fondamentalement, le système bancaire sous-jacent est toujours sous contrôle, de sorte que la fintech n'a apporté que des améliorations limitées.

Les crypto-monnaies et la finance décentralisée (DeFi) offrent un moyen de commencer avec un nouveau système, en contournant les difficultés rencontrées pour changer le secteur de la finance. Alors que les crypto-monnaies ont attiré des milliards d'investissements, les services financiers décentralisés sont à la traîne. Lorsqu'il s'agit d'investir dans les crypto-monnaies, les investisseurs en crypto peuvent acheter et vendre, mais c'est tout. La crypto-monnaie elle-même ne peut pas être investie de la même manière que la monnaie fiduciaire. Les premières tentatives de création de prêts entre pairs et de tokenisation des actifs se sont jusqu'à présent révélées partielles et peu fiables, de sorte que les investisseurs ont des options extrêmement limitées lorsqu'il s'agit d'investir leurs crypto-actifs. Le potentiel est énorme pour fournir des services financiers en crypto, de la même manière qu'ils sont offerts en monnaie fiduciaire.

### La solution

DeFiChain est conçue pour les investisseurs sur le marché des crypto-monnaies qui cherchent à faire travailler leur crypto-monnaie comme toute autre forme de capital, de sorte qu'ils puissent assurer un retour sur investissement sur n'importe quel marché. DeFiChain est une blockchain non-Turing-complète dédiée, conçue spécifiquement pour la finance décentralisée (DeFi). La DeFi fournit une fonctionnalité complète pour ce segment spécifique de la communauté DLT, en sacrifiant d'autres types de fonctionnalité pour la simplicité, le débit rapide et la sécurité.

L'ensemble des fonctions comprend entre autres :

- Le prêt décentralisé
- Encapsulation (wrapping) décentralisé de token (wrapped BTC, wrapped ETH...)
- Oracles de prix décentralisés
- Le trading décentralisé
- Dettes et créances transférables
- Dettes non collatéralisées décentralisées
- Tokenisation d'actifs
- Distribution de dividendes

### Echéancier

![Roadmap](/img/white-paper/roadmap.png)

---

## Contexte/marché

### Les promesses et les défis de la DeFi

La finance décentralisée promet de fournir une variété d'instruments financiers sans avoir besoin d'intermédiaires pour garantir la fiabilité des services. Selon l'OCDE, les services financiers représentent généralement 20 à 30% du revenu total du marché des services et [environ 20% du produit intérieur brut total](https://www.investopedia.com/terms/g/gdp.asp) dans les [économies développées](https://www.investopedia.com/terms/d/developed-economy.asp)[^1]. Il s'agit d'une énorme industrie qui se consacre à une seule chose : s'assurer que les transactions financières sont fiables. Avec l'avènement de la blockchain, les systèmes sans confiance et les smart contracts peuvent être utilisés pour remplacer une grande partie des fonctionnalités de ce secteur, augmentant considérablement le retour sur investissement pour l'investisseur individuel.

Aujourd'hui, les services financiers fournissent un service important, mais à un coût très élevé, et malgré de nombreux développements au sein de la fintech, les problèmes sous-jacents suivants persistent :

- Des coûts de transaction élevés. En raison des exigences réglementaires, des systèmes existants présentant des problèmes d'interopérabilité complexes et du contrôle exercé par les grandes institutions, les frais de transaction sont élevés pour l'utilisateur moyen des services bancaires et financiers. Les services qui nécessitent un courtier sont encore plus chers, car des agents et d'autres intermédiaires sont impliqués.
- Lenteur des transactions, en particulier pour les transactions internationales. Bien qu'en théorie, les ordinateurs ne devraient prendre que quelques minutes pour effectuer une transaction, le transfert d'argent d'une institution à une autre peut prendre des heures dans un même pays, et des jours entre les pays.
- Manque de transparence et avantages injustes pour les grands acteurs. Les instruments financiers sont complexes et la plupart des gens n'ont pas accès aux informations qui leur permettraient de prendre des décisions optimales. Le manque de transparence est l'un des principaux facteurs qui ont conduit à la crise financière de 2008 et, à court terme, il désavantage toujours les petits investisseurs (le citoyen moyen) par rapport aux investisseurs institutionnels.
- Inaccessibilité et/ou coût plus élevé pour les personnes à faibles revenus. Les services financiers ne sont tout simplement pas disponibles dans de nombreuses régions et, lorsqu'ils le sont, les personnes à faibles revenus doivent payer des frais encore plus élevés (en pourcentage) que la moyenne. 
- Malgré la législation visant à réduire le blanchiment d'argent et les crimes connexes, il n'existe pratiquement aucune preuve que le système actuel ou la LBC réduisent effectivement le blanchiment d'argent.

[^1]: https://www.investopedia.com/ask/answers/030515/what-percentage-global-economy-comprised-financial-services-sector.asp

La Fintech a tenté de résoudre ces problèmes, avec un certain succès. Les solutions Fintech telles que les services en ligne de virement à l'international, les applications d'épargne et d'investissement, et l'argent sur mobile pour les marchés mal desservis ont commencé à améliorer la situation. Toutefois, le changement est progressif et repose toujours sur un système qui nécessite fondamentalement l'intervention d'agents de confiance. S'il est possible de réduire certains coûts, la fintech ne peut fondamentalement pas résoudre les problèmes sous-jacents de manque de transparence, car elle utilise les mêmes instruments financiers et passe par les mêmes grandes institutions que la finance traditionnelle.

![2019: DeFi](/img/white-paper/2019-defi.png)

C'est pourquoi de nombreux investisseurs ont commencé à transférer une partie de leurs investissements dans les crypto-monnaies. Par définition, les crypto-monnaies offrent une transparence totale que les systèmes traditionnels ne peuvent tout simplement pas offrir. En outre, la quantité d'administration et de bureaucratie requise est minimale. La plupart des activités qui étaient effectuées par des agents peuvent être inscrites dans le code informatique des systèmes financiers décentralisés. Bien sûr, la création et la maintenance du code, ainsi que la maintenance des réseaux, entraînent encore des frais généraux, mais la bureaucratie est minime, ce qui élimine une grande partie du coût des transactions sur ces systèmes.

Malgré les promesses de la finance décentralisée, la technologie en est encore à ses débuts et il existe de nombreuses possibilités de créer un environnement financier décentralisé plus riche et plus robuste. À ce jour, les investisseurs en crypto-monnaies ont des options d'investissement extrêmement limitées. Les promesses de plateformes de prêts entre particuliers, de tokenisation des actifs et d'autres types de blockchains n'ont pas tenu leurs promesses, ont été piratées ou ont donné une version réduite de la promesse initiale.

Aujourd'hui, presque universellement, les investisseurs en crypto-monnaies n'ont qu'un seul moyen de gagner de l'argent sur leur capital : la hausse de l'actif en crypto-monnaies. Si, à court terme, cela peut constituer un bon investissement, ce n'est pas ainsi que la monnaie est censée fonctionner. L'investissement de capitaux doit fournir un retour sur investissement, et les crypto-monnaies sont conçues pour être comme toute autre forme de monnaie. Les investisseurs d'aujourd'hui veulent avoir la possibilité de prêter, d'investir et de recevoir des retours sur leurs investissements en crypto-monnaies. Des plateformes DeFi bien conçues devraient permettre le développement d'une variété d'instruments financiers sûrs et sécurisés pour l'investissement en crypto-monnaies.

![Sois ta propre banque](/img/white-paper/be-your-own-bank.png)

### Etat des lieux de la DeFi

La finance décentralisée (DeFi) est peuplée de blockchains à usage général, dont la plupart fournissent des ensembles de commandes Turing-complètes pour le développement de contrats intelligents (smart contract) sur la chaîne. Bien qu'elle soit appropriée pour de nombreux langages de programmation, cette recherche dogmatique de langages de contrats intelligents Turing-complets a entraîné divers problèmes en matière d'évolutivité, de sécurité et de robustesse des blockchains.

- Le nombre considérable de dApps sur des réseaux tels qu'Ethereum, EOS et TRON a un impact potentiel (ou avéré) sur les autres dApps du réseau. L'exemple le plus évident est celui de CryptoKitties, qui a pratiquement paralysé le réseau Ethereum. Bien que certains des réseaux à débit plus rapide affirment que cela ne peut pas se produire, il faudra un certain temps avant qu'un autre réseau atteigne la masse critique d'applications sur Ethereum pour que nous puissions prouver si c'est le cas ou non.
- Pour les dApps sérieuses de type financier, il est important de savoir que le réseau est maintenu et géré de manière responsable et sécurisée. Le fait qu'une blockchain soit submergée par des jeux, des paris et d'autres types d'applications moins "critiques" finira par influencer le développement et la direction des blockchains. Avec des modèles de gouvernance qui attribuent le pouvoir aux masternodes, aux groupes de développement et aux détenteurs de jetons, l'équipe de développement sera finalement influencée par les plus grands acteurs. Les applications financières décentralisées ne peuvent pas se permettre les conséquences potentielles du partage d'une blockchain avec quiconque choisit d'utiliser ce système d'exploitation. 
- L'utilisation de commandes Turing-complètes oblige les programmeurs à créer des programmes complexes pour développer tout type d'application. Par exemple, pour créer un contrat de prêt de pair à pair sur MakerDAO, un programmeur a besoin d'environ 2000 lignes de code. Tout bug dans ce code peut entraîner la perte des fonds, ou toute autre conséquence. Le maintien d'un code aussi important signifie intrinsèquement une plus grande probabilité d'erreurs et un angle d'attaque plus important, même pour les applications simples. 

Les limites des blockchains à usage général pour les applications DeFi ont ouvert une opportunité pour servir ce marché. Alors que la dynamique des crypto-monnaies a continué de croître, la plupart des applications actuelles sont encore sur Ethereum. Les préoccupations concernant le réseau ont déjà conduit certains des principaux projets à envisager un portage ou à travailler avec des blockchains alternatives ou supplémentaires.

### Les problèmes actuels de la DeFi

- Les dApps financières ont besoin de fiabilité et ne veulent pas être associées à des blockchains qui hébergent des apps telles que des paris, des divertissements ou d'autres apps qui peuvent ternir la réputation de la blockchain à tout moment.
- L'augmentation soudaine du volume d'une dApp sur une blockchain peut potentiellement avoir un impact sur toutes les autres dApps de cette blockchain, que ce soit en termes de débit, de prix des transactions ou autres impacts, comme on l'a vu avec CryptoKitties sur Ethereum.
- Les blockchains généralistes nécessitent une grande quantité de codage pour fournir des services financiers, ce qui augmente le risque de piratage ou de bogues dans le code. Les fonctionnalités qui sont des exigences de base pour les services financiers, comme le multisig, sont souvent difficiles à mettre en œuvre ou absentes des blockchains généralistes.
- La maintenance d'une blockchain Turing-complète signifie que les ressources ne sont pas concentrées sur les domaines appréciés par les applications DeFi.
- Les modèles de gouvernance de la plupart des blockchains actuelles sont immatures et montrent des signes de politisation, de centralisation et d'incertitude. Sans structure de gouvernance formelle, l'avenir de ces blockchains est incertain. Les récentes discussions sur les mises à niveau et les forks à la fois dans Ethereum et Bitcoin ont révélé l'immaturité de ces systèmes, et même le leader de la gouvernance, Aragon, a montré la vulnérabilité de son système de gouvernance lors du vote de l'été 2019, où un grand détenteur de jetons (une "baleine") a changé le résultat de plusieurs votes de propositions à la dernière minute. De telles vulnérabilités sont inacceptables sur les blockchains traitant de la finance.
- Des normes réglementaires et des organismes de réglementation qui répondent de manière appropriée aux besoins des monnaies et des instruments financiers transfrontaliers par nature. La réglementation basée sur les juridictions et sur les technologies existantes ne répond pas aux besoins du secteur de la DeFi. Il est clair qu'un nouveau cadre juridique et réglementaire est nécessaire pour protéger les droits des personnes utilisant ces systèmes. 
- L'industrie de la blockchain elle-même n'a pas fait preuve de la maturité nécessaire pour mettre en place ses propres organismes de normalisation qui fourniront les meilleures pratiques ou une autorégulation démontrant sa fiabilité pour les applications financières décentralisées. À ce jour, les tentatives de création d'interopérabilité ou d'autorégulation ont été immatures et n'ont pas abouti à un leadership ou à des normes qui pourraient être adoptées par des organismes internationaux ou des régulateurs sérieux. L'absence d'autorégulation rend le secteur encore plus vulnérable à une réglementation extérieure, ce qui rend l'environnement risqué pour les investisseurs sérieux.

### Conséquences sur le secteur de la DeFi

- Les portefeuilles multi-sig sont ce que l'industrie a de mieux à offrir en matière de gestion conjointe des fonds, et les solutions pour le multi-sig sont, dans une certaine mesure, des maladresses. Le multi-sig a tendance à être spécifique à un fournisseur et n'est pas flexible aux différents scénarios. Par exemple, dans la finance traditionnelle, les comptes multi-signatures peuvent attribuer aux signataires différents niveaux d'autorité, ou exiger différentes signatures pour différents types et niveaux de transaction. Les différentes chaînes adoptent des approches différentes pour ajouter des capacités multisig à leurs blockchains existantes.
  - La BIP 11 : M-of-N Standard Transactions est une proposition d'amélioration du bitcoin (BIP) conçue pour ajouter un support multisig à la blockchain Bitcoin.
  - Ethereum fournit un ensemble de commandes Turing-complètes pour le développement de multisig sur la chaîne, ce qui conduit à de multiples entités fournissant des contrats intelligents multisig. Des bogues tels que ceux du multisig Parity (abordés ci-dessous) ont entraîné des pertes de fonds considérables.
- En raison de la complexité du code requis pour le multisig, en 2017, plus de 150 000 ETH ont été perdus à cause d'un piratage du portefeuille multisig de Parity, dû à une erreur dans le code[^2]. L'article référencé note les moyens par lesquels ce bug de code aurait pu être évité, mais il souligne le fait que ces complexités dans le codage provoquent de nombreux vecteurs d'attaque différents. Un marché entier s'est développé autour de l'audit des contrats intelligents, car c'est un domaine très vulnérable.
- Dans le plus grand piratage (ou bug ? !) de l'industrie, le DAO a été vidé de 3,6 millions de ETH en raison d'une erreur de codage dans le contrat intelligent détenant tous les fonds du DAO.

L'une des nombreuses conséquences est que le haut-niveau de risque est pris en compte dans les contrats sous-jacents, ce qui entraîne des surcoûts importants pour les utilisateurs, comme on peut le voir en comparant le taux des exemples DeFi et non DeFi. (Par exemple, 8 % avec DAI décentralisé contre 1,75 % avec USDC centralisé (daté de début octobre 2019) : https://deficompare.com/) Les deux tokens représentent 1 USD mais la version décentralisée est 6,25 % plus chère en raison du risque intégré dans le contrat Ethereum.

Les points décrits ci-dessus sont tout simplement inacceptables pour tout type de transaction financière ou tout profil d'investisseur. Pour cette raison, il est important de construire des services dédiés qui empêcheront de telles violations, réduiront les risques et donc les coûts. Dans le monde de la blockchain, le fait d'avoir des règles de programmation adéquates et de réduire les vecteurs d'attaque permet d'éviter ce type d'attaque.

[^2]: [https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7](https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7)

---

## Comparaison des alternatives DeFi existantes

### Bitcoin : pourquoi pas ?

Étant donné notre optimisme à l'égard de Bitcoin, la première question que l'on peut se poser est de savoir pourquoi ne pas développer DeFiChain en utilisant la blockchain Bitcoin. Bien que Bitcoin ne permette que des contrats intelligents basique, certains projets ont commencé à développer des solutions de contournement. Cependant, les coûts de transaction sont restrictifs sur la chaîne Bitcoin, et nous ne pensons pas qu'elle sera adaptée à la vitesse requise pour les transactions financières. La chaîne Bitcoin fonctionne actuellement comme prévu en tant que réserve de valeur. À notre avis, s'en tenir à cet objectif unique est la meilleure utilisation de la chaîne et cela a été prouvé au cours de la dernière décennie. L'ajout de services financiers dans la chaîne principale ajoute une complexité inutile et peut entraîner des effets secondaires indésirables à la fois pour la DeFi et pour Bitcoin. De plus, nous ne pensons pas que la gouvernance de Bitcoin soit prête à gérer cette situation, et à un moment donné, si les exigences de DeFiChain différaient de celles des mineurs ou des développeurs de la chaîne Bitcoin, nous serions soumis à leurs décisions.

### Solutions Turing-complètes : Ethereum, EOS, Tron... {#turing-complete-solutions}

À ce jour, un certain nombre d'applications DeFi ont été construites sur Ethereum, Tron, EOS et de nombreuses autres chaînes Turing-complètes. Comme Ethereum a été la plus largement adoptée, elle a permis de faire apparaître le plus rapidement les problèmes liés à l'utilisation d'une blockchain Turing-complète pour les applications DeFi. Le piratage de DAO a été l'une des premières et plus dramatiques expositions de la vulnérabilité de l'utilisation d'un langage aussi complexe. Quiconque émet un jeton sur le réseau sait à quel point c'est difficile. Le simple fait de créer et d'émettre un jeton ERC20 peut facilement coûter plus de 100 000 USD, si l'on tient compte du coût de l'audit des contrats intelligents devenu nécessaire pour les solutions innovantes. Le simple fait qu'il existe un secteur entier construit autour des "audits de contrats intelligents" devrait suffire à illustrer le problème. Malgré le fait que ERC20 soit le standard du marché, il est toujours facile à pirater, au point qu'il est impossible d'émettre ne serait-ce qu'un simple jeton sans faire appel à un auditeur professionnel très coûteux, et à un programmeur. 

Une étude de 2018 a réussi à analyser un million de contrats intelligents et a trouvé plus de 34 000 contrats intelligents piratables[^3]. Il est impensable que 3,4 % des transactions financières soient vulnérables. Si, pour l'instant, ce problème semble être principalement centré sur Ethereum, nous pensons que la plupart des autres chaînes Turing-complètes connaîtront les mêmes problèmes une fois que davantage de cas d'utilisation auront été adoptés sur leurs bases.

Le deuxième problème réside principalement au sein d'Ethereum, à savoir que l'utilisation du réseau est déjà proche de sa capacité maximale. Il ne semble tout simplement pas possible d'utiliser le réseau pour toutes les applications financières décentralisées. La capitalisation boursière d'Ethereum représente un dixième de celle de Bitcoin. Si le système est déjà proche de sa capacité nominale, il est difficile de voir comment il peut gérer la capacité de devenir un véritable réseau DeFi pour le reste de l'écosystème, ce que Vitalik Buterin a reconnu dans une interview :  https://beincrypto.com/ethereum-founders-admit-never-designed-scalability/.

[^3]: https://arxiv.org/pdf/1802.06038.pdf

![Sois ta propre banque](/img/white-paper/graph.png)

---

## La solution DeFiChain

### Rester dans l'écosystème Bitcoin

Le marché des crypto-monnaies dans son ensemble est difficile à prévoir. La plupart des tokens sont devenues sans valeur, et il reste à voir comment le système se maintiendra après l'épuisement de l'argent de plusieurs des principales ICO.

Malgré cela, nos perspectives sur le bitcoin en particulier sont extrêmement optimistes. Au cours de l'année dernière, malgré la volatilité des marchés, y compris l'instabilité des marchés financiers traditionnels, le bitcoin a conservé sa valeur, démontré son imperméabilité aux attaques et aux pirates, et gagné le respect des acteurs financiers traditionnels. 

Le bitcoin est de plus en plus considéré comme une réserve de valeur, et il est perçu comme la norme par rapport à laquelle les autres crypto-monnaies sont mesurées. Bien que les portefeuilles des particuliers varient considérablement, le bitcoin reste la monnaie standard que presque tous les investisseurs en crypto-monnaies détiennent comme une partie importante de leurs avoirs. La formidable communauté et l'écosystème qui entourent le bitcoin sont de bon augure pour sa viabilité à long terme en tant que réserve de valeur.

Pour cette raison, la création de services financiers décentralisés autour de Bitcoin représente une opportunité formidable qui n'a pas encore été exploitée, en partie à cause de la difficulté de créer des contrats intelligents qui fonctionnent avec le réseau Bitcoin, et en partie à cause de l"éclatement de la communauté de développement vers de nombreux projets secondaires. Nous pensons que cette tendance de la communauté de développement à se jeter sur les développements les plus récents fait oublier l'essentiel : Bitcoin est là pour rester. 
Ainsi, nous pensons que la construction d'une blockchain DeFiChain au-dessus de Bitcoin apporterait le meilleur des deux mondes : la stabilité et l'immutabilité de Bitcoin et l'évolutivité et l'utilitié de la DeFi.

### Construire sur le bitcoin

Un des défis majeurs des nouvelles blockchains est de créer une immutabilité robuste disponible après qu'une masse critique d'utilisateurs et de blocs sécurise la chaîne. Afin de fournir une sécurité immédiate et une immutabilité de la blockchain, DeFiChain s'ancrera à la blockchain bitcoin. Sur une fréquence de l'ordre de quelques minutes, DeFiChain sauvegarde son arbre de Merkle le plus récent sur la blockchain Bitcoin, de façon similaire à la façon dont Rootstock (contrats intelligents Turing-complets sécurisés par Bitcoin https://www.rsk.co/) prévoit de se connecter à Bitcoin. De cette façon, la chaîne la plus récente est toujours entièrement sécurisée et immuable, et peut être vérifiée par rapport à l'enregistrement le plus récent ancré à Bitcoin. Au fil du temps, DeFiChain espacera les ancrages à des intervalles plus grands. Ce mécanisme d'ancrage assure des enregistrements prouvés immutables dès le premier jour et protège contre les attaques, les pirates et les vulnérabilités qui peuvent causer des problèmes dans les chaînes émergentes.

En parallèle, DeFiChain garde son propre mécanisme de consensus et son propre ensemble de fonctions, permettant toutes les caractéristiques que Bitcoin n'a pas intrinsèquement. Ceci est réalisé par DeFiChain qui est une blockchain non-Turing-complète dédiée, conçue spécifiquement pour le secteur de la finance décentralisée (DeFi), construite au-dessus de Bitcoin. DeFiChain fournit une fonctionnalité complète pour ce segment spécifique de la communauté DLT, en abandonnant d'autres fonctionnalité pour assurer la simplicité, le débit rapide et la sécurité.
DeFiChain utilise un mécanisme de preuve d'enjeu complètement décentralisé permettant :

- un consensus global, évolutif et économe en énergie ;
- des transactions rapides et une haute sécurité ;
- la capacité de créer une variété d'applications DeFi basées sur une chaîne, rapidement et avec un angle d'attaque très restreint ;
- le support de plusieurs tokens sur une seule chaîne grâce à la technologie des wrapped tokens décentralisés ;
- gouvernance décentralisée ;
- indépendance vis-à-vis des autres systèmes financiers et instruments financiers ;
- des investissements entièrement liquides, sans taille minimale d'investissement, ni période minimale de blocage.

Contrairement à Ethereum ou bien à certaines blockchains Turing-complètes, DeFiChain n'est pas une blockchain à usage général, et les commandes en-dehors de l'ensemble des fonctions de base ne sont pas autorisées. Limiter à dessein les commandes autorisées fournit un angle d'attaque considérablement réduit pour les contrats intelligents, éliminant les failles évidentes qui sont rendues possibles lorsque les programmeurs doivent concevoir un codage complexe pour ces fonctions. Les détails de celles-ci seront décrits dans la section suivante.

### Avantages de DeFiChain : résumé

- Développement d'une variété d'opérations et de vecteurs financiers pour l'économie des crypto-monnaies ;
- Haut débit pour toutes les transactions ;
- Blockchain plus sûre, plus sécurisée, spécifiquement pour la finance décentralisée ;
- Développement rapide de dApps pour la finance décentralisée ;
- Tranquillité d'esprit : la blockchain n'est pas utilisée pour d'autres types d'applications non financières. Les décisions de la Fondation et des principaux développeurs sont donc axées à 100 % sur les cas d'utilisation financiers décentralisés et rien d'autre ;
- Développement rapide des dApps avec des appels dédiés spécifiquement aux applications financières ;
- Angle minimal d'attaque des contrats intelligents financiers développés sur la plateforme ;
- Gouvernance fiable (hors chaîne et sur la chaîne) ;
- Hautement immutable - par ancrage périodique à la blockchain Bitcoin.

### Jeux d'applications initiales

- L'ensemble initial des fonctions comprend :
- Le prêt décentralisé
- Encapsulation décentralisée de jetons
- Oracles de prix décentralisés
- L'echange décentralisée
- Dettes et créances transférables
- Dettes non collatéralisées décentralisées
- Tokenisation d'actifs
- Distribution de dividendes

Ce chapitre donne une vue d'ensemble de chacune de ces fonctions et le chapitre suivant couvre les détails techniques de leur réalisation.

### Prêts décentralisés

Le prêt décentralisé permet aux individus et aux groupes d'emprunter et de prêter sans l'intervention d'une banque. Grâce à des systèmes de garantie, les prêts décentralisés sur Ethereum ont atteint plus d'un quart de milliard de dollars en 2018.

Tous ces systèmes sont basés sur Ethereum, ce qui signifie qu'ils ne s'adressent qu'à 15 % du marché, d'après sa capitalisation boursière. La plateforme DeFiChain s'adressera à 100 % du marché en traitant avec Bitcoin, mais aussi en incluant l'ensemble du marché par l'encapsulation et le pooling, comme décrit ci-dessous.

Les principales plateformes de prêt décentralisées (Compound, Dharma, dYdX et Maker) proposent des prêts à des taux allant de 0,5 % à 6 %. Comme tout est géré par des contrats intelligents, les frais bancaires sont éliminés, et les plateformes sont en mesure de fournir des taux bien meilleurs que ceux des banques. Au fur et à mesure que ces services de prêt décentralisés deviennent plus sûrs, on peut s'attendre à ce que le marché voit également une augmentation des possibilités de prêt de pair à pair par le biais d'applications dédiées.

La puissance du prêt décentralisé réside dans les gains d'efficacité du marché obtenus en éliminant les intermédiaires et l'administration impliqués dans le prêt. De plus, les investisseurs étant préoccupés par les taux d'intérêt minimaux, voire négatifs, le prêt décentralisé les protège de cette éventualité, en fournissant des intérêts au taux du marché tout en offrant aux emprunteurs de meilleurs taux que ceux qu'ils peuvent obtenir sur les marchés financiers existants. Compte tenu de l'ampleur du crédit et du rôle qu'il joue dans l'ensemble de l'économie, le prêt décentralisé offre la possibilité à beaucoup plus d'initiatives d'emprunter de l'argent sur la base de marchés ouverts et de conditions favorables. Un accès plus facile au crédit se traduit par une croissance plus rapide de l'économie.

Les premiers déploiement de prêts décentralisés sont entièrement collatéralisés, et en raison de la volatilité des crypto-monnaies, la plupart des plateformes exigent une garantie du double ou plus sur les prêts. Cela permet aux gens de contracter des prêts sur la base des crypto-monnaies qu'ils détiennent. Ils peuvent ainsi gérer leurs problèmes de trésorerie sans avoir à vendre leurs crypto-monnaies, tout en bénéficiant de conditions de prêt favorables. 

### Wrapping décentralisé des jetons

Une question importante pour la DeFi est la capacité de travailler avec l'ensemble des crypto-monnaies, nativement, sur la blockchain. Alors que la transaction sur la blockchain se fait via le token natif $DFI, DeFiChain peut utiliser Bitcoin, Ethereum, ERC-20, ou toute autre crypto-monnaie grâce au wrapping (encapsulation).

Le wrapping permet l'utilisation de n'importe quel actif numérique de sorte que l'actif sous-jacent est maintenu, mais il peut effectuer des transactions sur une blockchain différente. DeFiChain fournit un mécanisme de wrapping décentralisé qui permet au propriétaire de la crypto-monnaie de maintenir l'ancrage à l'actif et d'utiliser un mécanisme de wrapping qui ne dépend pas d'un tiers comme garant du wrapping ou de l'actif. Les jetons encapsulés peuvent être facilement échangés contre leur valeur originale sur leur blockchain respective. 
La création d'un jeton encapsulé sur DeFiChain est une activité récompensée, de sorte que les détenteurs de crypto-monnaies sont incités à créer des jetons encapsulés sur le réseau DeFiChain comme une forme d'investissement financier décentralisé récompensé.

Le wrapping est une capacité clé de la DeFi en raison du besoin d'interopérabilité de différents types de crypto-monnaies et d'actifs. À ce jour, il n'existe pas de normes d'interopérabilité entre les différentes monnaies, et le seul moyen d'interopérer entre les monnaies est d'utiliser le wrapping ou la collatéralisation, qui doit être fourni par un tiers. Tout l'intérêt de la décentralisation est que les gens n'ont pas besoin de faire confiance à une autorité. Pourtant, aujourd'hui, c'est le principal moyen pour les investisseurs d'interopérer entre Bitcoin et Ethereum sans conversion d'une monnaie à l'autre. Le protocole Polkadot fournit une plateforme pour le développement d'applications interopérables, mais pas spécifiquement pour la DeFi. En tant que nouveau protocole, il reste à voir comment il sera exploité.

Sans wrapping, les détenteurs devraient convertir leur crypto-monnaie en monnaie DeFiChain afin d'utiliser les services offerts. Évidemment, pour la plupart des investisseurs, c'est bloquant. L'investisseur a mis son argent dans le Bitcoin, ou l'Ethereum, ou autre, parce que c'est la monnaie qu'il veut détenir. Le but principal de DeFiChain est de permettre des transactions financières dans n'importe quel type d'actif cryptographique, de sorte que les gens puissent utiliser les actifs et les tokens qu'ils détiennent comme monnaie d'investissement dans d'autres types de produits financiers.
La fonction de wrapping décentralisé est cruciale pour permettre aux gens de détenir n'importe quel actif et d'effectuer des investissements dans une autre monnaie. Ainsi, par exemple, une personne détenant des bitcoins pourrait faire un prêt à une personne souhaitant emprunter des ETH, ou une personne souhaitant se couvrir contre la crypto-monnaie qu'elle détient pourrait le faire en utilisant une fonction d'encapsulation pour utiliser certains de ses actifs afin d'acheter des options dans d'autres types d'actifs.

### Oracles de prix décentralisés

DeFiChain inclura des oracles de prix pour collecter des données issues de blockchains extérieures. Les oracles sont utilisés pour collecter des données telles que le prix d'autres crypto-monnaies[^4]. Les oracles sont un moyen important pour les blockchains de collecter des informations précises à la fois d'autres blockchains et de marchés non cryptographiques[^5].

Participer en tant qu'oracle permet de gagner des tokens en fonction de l'exactitude des oracles. La fonction oracle intégrée permettra aux contrats intelligents de déterminer le nombre d'oracles, le pourcentage de consensus et les paramètres de récompense des oracles pour les données qu'ils fournissent.

Les oracles sont à terme destinés à être décentralisés. Cependant, DeFiChain sera lancée en nommant quelques oracles de confiance qui soumettront périodiquement des données de prix de source fiable sur DeFiChain.

### Échanges décentralisés

La fonction d'échange décentralisé (decentralized exchange) permettra l'échange (swap) de crypto-monnaies en mode pair-à-pair. La fonction d'échange décentralisé met en relation des personnes pour des échanges directs, sans qu'il soit nécessaire d'acheter et de vendre des devises par l'intermédiaire d'une bourse. L'utilisation de d'échange décentralisé réduit les risques associés à l'utilisation des exchanges et garantit que la crypto-monnaie ne s'émancipe pas des détenteurs de tokens. Il élimine également le risque de l'aspect tutellaire de l'exchange lui-même, car le mécanisme est de pair à pair sur la base d'un prix convenu ou du prix du marché au moment de l'échange.

Alors qu'un certain nombre d'échanges décentralisés sont disponibles sur le marché aujourd'hui[^7], la solution de DeFiChain permet l'intégration de capacités d'échange dans des applications tierces en créant un service d'échange décentralisé.

[^4]: https://cointelegraph.com/explained/blockchain-oracles-explained
[^5]: https://hackernoon.com/oracles-help-smart-contracts-resolve-subjective-events-d81639d8291c
[^6]: https://en.wikipedia.org/wiki/Decentralized_exchange
[^7]: https://coinsutra.com/best-decentralized-exchanges-dex/

### Dettes et créances transférables

DeFiChain fera un ensemble d'appels à projets sur les dettes et des créances transférables. Dans le monde de la finance centralisée, les dettes et les créances ne peuvent être gérées que par les institutions financières qui gèrent les prêts. Le manque de transparence de ces dettes transférables a été l'un des facteurs qui ont conduit à la crise financière de 2008.

Pour les petites et moyennes entreprises, cela peut être un outil particulièrement puissant. Par exemple, jane, avec son usine de gadgets, fournit un grand constructeur automobile, mais ce dernier paie ces gadgets à 60 jours. Pendant ce temps, Jane doit payer les matériaux nécessaires à la production des gadgets et, bien sûr, les salaires réguliers de ses ouvriers sur une base mensuelle ou hebdomadaire. Le constructeur automobile paiera la facture, mais pas à temps pour que Jane puisse régler toutes ses dépenses. Sans la DeFi, Jane doit se rendre à la banque et payer les taux d'intérêt qu'elle exige, car elle n'a pas d'autre choix. La fonction de créances transférables permettrait à quiconque de proposer à Jane un prêt basé sur les créances. Étant donné que de nombreuses personnes sont en mesure de constater que le constructeur automobile est un client à faible risque et qu'il paiera ses factures, quiconque le souhaite peut faire une offre à Jane à un meilleur taux que celui de la banque, créant ainsi un marché concurrentiel pour les dettes et les créances sur la base du risque réel et de l'évaluation de ce risque par le marché. Jane peut maintenant obtenir un prêt à des taux très avantageux et les prêteurs, de même, obtiennent d'excellents retours sur leurs prêts, malgré le fait qu'ils ne prêtent l'argent que pour 30 à 60 jours.

La Blockchain ajoute la transparence à l'échange de dettes et de prêts basés sur des créances ou d'autres types de promesses financières. DeFiChain inclura la capacité pour les organisations de créer des contrats intelligents qui permettent un investissement simple dans ces actifs, de sorte que les prêts pair-à-pair peuvent être faits sans la nécessité d'une institution financière pour garantir ces types d'actifs financiers.

### Dette décentralisée non collatéralisée

Dans le futur, il sera possible de fournir des prêts non collatéralisés (sans garantie) basés sur la réputation et d'autres facteurs concernant les emprunteurs. Il sera possible de développer des systèmes non collatéralisés grâce à différentes formes de références vérifiables et d'enregistrements de l'historique d'emprunt et de remboursement d'un individu. De nombreuses solutions d'identité développées aujourd'hui se penchent sur des systèmes anonymes et pseudonymes d'évaluation de la réputation, basés sur un identifiant décentralisé (DID) émis par l'individu, et des justificatifs vérifiables (VC) émis par des autorités connues et réputées pour fournir des informations sur l'historique de crédit de l'individu.

Les systèmes basés sur la réputation et les systèmes d'évaluation des risques devront être mis en place. Bien que cela prenne du temps, peut-être des années, il est prévisible que ce type de système puisse compléter ou remplacer les notes de crédit actuelles.

Une autre application potentielle de cette fonctionnalité serait la possibilité de créer des monnaies stables décentralisées sans garantie. Le succès de DAI et de MakerDAO montre l'intérêt des monnaies stables ancrées, mais le niveau élevé de garantie est un frein à la création d'autres projets de ce type. Il est possible que, grâce aux mécanismes du marché et au staking, des monnaies stables décentralisées et non collatéralisées puissent être créées.

### Tokenisation des actifs

La tokenisation d'actifs est la représentation d'un actif, tel qu'un bien immobilier ou les fonds propres d'une entreprise, en jetons immutables sur la blockchain[^8]. Ce domaine particulier de la finance décentralisée a un potentiel énorme et constitue l'un des domaines d'investissement les plus intéressants pour les détenteurs de crypto-monnaies[^9].

Si plusieurs tentatives de tokenisation d'actifs ont été faites dans l'univers blockchain, la plupart d'entre elles ont pivoté et fournissent désormais des services qui ne sont pas directement liés à la tokenisation d'actifs (LAtoken, Etherparty). Tokeny et Tokenize-IT se présentent comme des plateformes de tokenisation, mais au moment de la rédaction de ce document, leurs processus sont encore assez manuels et dépendent fortement des réglementations locales spécifiques et des exigences réglementaires de ces juridictions. D'autres blockchains, telles que Tezos, ont été mentionnées comme de bonnes plateformes pour la tokenisation d'actifs, mais, comme avec d'autres blockchains multi-usages, l'ensemble de commandes Turing-complet créera des contrats intelligents complexes qui sont inutiles lors de l'utilisation de DeFiChain.
DeFiChain fournira un module spécifiquement conçu pour la tokenisation d'actifs, et sera particulièrement facile à utiliser pour tokeniser des actifs tels que les capitaux propres des entreprises, les biens immobiliers et d'autres avoirs de valeur.

Récemment (octobre 2019), la loi Blockchain du Lichtenstein a créé la base juridique sur laquelle tout actif peut être tokenisé et légalement lié à des jetons ou à des "conteneurs" qui représentent le droit à l'actif. La loi est précise dans sa formulation, décrivant comment un conteneur émis par une partie de confiance peut désormais détenir les droits légaux de disposition sur l'actif. La disposition sur l'actif est distincte de la propriété ou des droits sur l'actif, ou même du contrôle en tant que concept spécifique. La formulation prudente de cette loi est une avancée pour tous les acteurs du monde de la tokenisation des actifs, car elle permettra désormais à quelqu'un de se présenter devant un tribunal avec un token et de s'attendre à avoir une légitimité juridique pour les actifs qui sont tokenisés (tant que l'autorité qui octroie le token est reconnue comme une autorité de confiance pour le faire). Elle ouvre également un espace pour DeFiChain pour demander ce statut de confiance, de sorte que la capacité de tokenisation d'actifs décrite ici peut être offerte comme une capacité décentralisée, légale et autorisée à laquelle les gens peuvent faire confiance, sans avoir à dépendre d'une autorité centralisée.

[^8]: https://www2.deloitte.com/lu/en/pages/technology/articles/tokenization-assets-disrupting-financial-industry.html
[^9]: https://www.forbes.com/sites/laurencoleman/2019/04/25/heres-why-interest-in-tokenizing-assets-is-starting-to-surge/#2ddeec4640a5

Pour plus d'informations sur cette loi, veuillez consulter le site Web du Liechtenstein à l'adresse https://liechtensteinusa.org/article/liechtensteins-parliament-approves-blockchain-act-unanimously 

Exemples d'actifs que les gens peuvent désormais tokeniser à l'aide de la blockchain :

- Les titres, tels que les investissements dans les ETF, les actions et les parts ;
- Actions de sociétés privées ;
- Dispositifs de production d'énergie et de revenus, tels que les éoliennes, les fermes solaires, les satellites ;
- Propriété dans les moyens de production alimentaire (nouvelles formes de fermes coopératives où les non-agriculteurs pourraient être propriétaires de l'approvisionnement alimentaire au lieu de marchandises échangées sur des bourses) ;
- Voitures à conduite autonome, distributeurs automatiques, guichets automatiques et autres types de dispositifs autorégulateurs générateurs de revenus ;
- DAO (Distributed Autonomous Organizations) ;
- Petits investissements immobiliers (multipropriétés, appartements loués à court terme, etc.) ;
- Grands investissements immobiliers (aéroports, parcs d'attractions, complexes d'appartements, parcs d'affaires)

### Distribution de dividendes

Tout actif tokenisé avec retour sur investissement peut utiliser le module de distribution de dividendes pour créer des smart contracts qui versent automatiquement les retours sur investissement. L'utilisation de DeFiChain permettra un saut dans la fonctionnalité de la distribution de dividendes. Il sera possible de mettre en œuvre des modèles similaires à ceux d'aujourd'hui, où les paiements sont effectués sur une base hebdomadaire, mensuelle ou trimestrielle, ou des modèles où les paiements sont effectués sur une base quotidienne, horaire ou même minute par minute.

La distribution de dividendes serait pertinente dans tout type d'actif tokenisé, comme décrit ci-dessus. Par exemple, aujourd'hui, un gouvernement municipal pourrait émettre une obligation pour investir dans une éolienne afin de fournir de l'électricité. Le gouvernement s'occuperait de tout, et rembourserait cette obligation selon le calendrier prévu. Avec la distribution de dividendes, la collectivité pourrait acheter directement l'éolienne, et distribuer les dividendes aux investisseurs de l'éolienne. Au lieu de passer par l'administration requise par l'autorité centralisée (gouvernement), chaque citoyen qui le souhaite pourrait investir dans cette éolienne, et les dividendes seraient payés en fonction de la contribution de chaque personne à cet investissement. L'élimination des frais généraux et la distribution équitable des bénéfices seraient des avantages majeurs pour la communauté propriétaire de l'éolienne. Dans ce cas, l'éolienne est un bien public, mais elle pourrait aussi simplement être un investissement privé.

Tout investissement privé pourrait être géré de cette manière : un jukebox, un taxi à conduite autonome, un investissement immobilier, etc. La distribution automatique des dividendes réduit le besoin d'administration et de frais généraux, tout en éliminant l'incertitude sur les versements et le contrôle par une autorité centralisée.

La nécessité d'investir dans des dividendes communs devient de plus en plus pertinente avec l'IoT. Les capteurs sont capables de créer une valeur considérable. Une voiture à conduite autonome sera en mesure de fournir des services de mobilité. Les distributeurs automatiques, les capteurs, les satellites, etc. sont tous des appareils potentiellement générateurs de revenus que les gens peuvent posséder ensemble et dont ils peuvent partager les bénéfices, mais jusqu'à présent, la complexité juridique et financière de cette démarche était prohibitive. DeFiChain peut simplifier ces processus.

De même, la distribution des bénéfices pour une entreprise privée peut être mise en place. L'une des premières expériences dans ce domaine est une DAO (Distributed Autonomous Organization) appelée dOrg. Une dOrg est un collectif de programmeurs (ainsi qu'une équipe de ventes/opérations) qui sont copropriétaires de leur maison d'édition de logiciels. La distribution des salaires se fait par le biais d'une DAO qui fonctionne comme un multi-sig, de sorte que toutes les deux semaines, l'ensemble de l'organisation soumet ses demandes de paiement pour le travail demandé, et l'équipe vote pour approuver les demandes de salaire des uns et des autres. À l'intérieur de la dOrg, chaque personne détient une "réputation" qui représente le pourcentage de propriété que chaque personne a gagné (ils gagnent la propriété en fonction de la quantité de travail effectué depuis la création de l'entreprise). Mais qu'adviendra-t-il des bénéfices à la fin de l'année ? Vraisemblablement, chaque personne devra soumettre une demande pour son pourcentage de bénéfices, et tout le monde devra voter sur ce point également, car la DAO ne permet pas une distribution automatique des bénéfices. En utilisant DeFiChain, l'équipe pourrait facilement mettre en œuvre une fonction trimestrielle ou annuelle qui distribuerait automatiquement les bénéfices de l'entreprise à chaque personne, en fonction de leurs participations dans l'entreprise. Ce schéma fonctionnerait même pour les personnes qui étaient actives dans le passé, mais qui ne le sont plus, donc qui ne sont plus dans la DAO, mais qui détiennent toujours un pourcentage basé sur leurs contributions passées. Un autre type de contributeur pourrait être un investisseur qui met de l'argent dans l'entreprise, mais ne participe pas.

Les exemples ci-dessus semblent logiques et simples, mais ils sont aujourd'hui extrêmement chronophages et complexes. Les personnes qui veulent investir ensemble dans des sociétés, des biens immobiliers ou d'autres actifs générateurs de revenus font aujourd'hui face à la complexité du calcul et de la distribution de dividendes. Grâce à la fonctionnalité de distribution de dividendes de DeFiChain, il devient non seulement simple, mais aussi automatique pour les entreprises de distribuer des dividendes aux propriétaires d'actions.

---

## Conception de DeFiChain

### Paramètres de conception

En regardant les exigences de marché du chapitre précédent, DeFiChain doit répondre aux exigences suivantes :

1. Robuste et sécurisée : construite sur une blockchain éprouvée et sécurisée ;
2. Rapide et évolutive ;
3. Inclut un mécanisme de consensus décentralisé ;
4. Fournit un support extensible pour les contrats intelligents, sans un jeu d'instructions Turing-complètes ;
5. Aussi immutable que possible (ancrage de blocs actif).

Chacun de ces principes de conception est décrit en détail ci-dessous.

#### 1. Robuste et sécurisée

Le Bitcoin Core est la blockchain la plus robuste et la plus ancienne au monde. Elle fonctionne sans interruption depuis le bloc de genèse en janvier 2009. En outre, du point de vue de la sécurité, Bitcoin Core s'est avéré être la blockchain la plus sûre, sans aucun incident de sécurité, tout en sécurisant l'actif cryptographique dont la valorisation est la plus élevée au monde, à savoir le bitcoin (BTC). Au moment où nous écrivons ces lignes, le Bitcoin Core sécurise avec succès 150 milliards de dollars d'actifs cryptographiques, soit 68 % de la capitalisation du marché des actifs cryptographiques.

La sécurité et la robustesse prouvées du Bitcoin Core en ont fait la blockchain de choix pour la base d'extension de DeFiChain. DeFiChain est construit sur la base d'un fork de Bitcoin Core 0.18, plus précisément v0.18.1.

DeFiChain sera écrite en C++, et le plan est d'utiliser d'autres langages, tels que Rust, à l'avenir.

Bien que DeFiChain soit une nouvelle blockchain, le fait de la baser sur un fork du Bitcoin Core permet d'obtenir une chaîne facile à intégrer pour les échanges et les applications qui supportent Bitcoin.

#### 2. Rapide et évolutive

L'un des inconvénients avérés de la blockchain Bitcoin est la lenteur des transactions sur la chaîne. De plus, l'extensibilité est devenue un problème lorsque le nombre de blocs sur la chaîne augmente.

Afin d'implémenter une blockchain avec la vitesse et l'évolutivité requises, DeFiChain, fork du Bitcoin Core, inclura les améliorations suivantes :

- Temps de bloc : 30 secondes
- Taille des blocs : 16 Mo

Ces améliorations permettent d'obtenir un taux de transaction de plus de 2 200 transactions par seconde (tps) tout en maintenant des exigences de calcul et de bande passante gérables pour permettre les opérations décentralisées de DeFiChain.

Le tableau suivant compare les performances de Bitcoin et de ses forks, ainsi que d'Ethereum, à celles de DeFiChain :

<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Cadence du bloc (s)</th>
        <th scope="col">Taille du bloc (Mo)</th>
        <th scope="col">Volume de Tx (% du bloc)</th>
        <th scope="col">Taille Tx min (octets)</th>
        <th scope="col">Taille Tx moy (octets)</th>
        <th scope="col">Txs dans un bloc (max)</th>
        <th scope="col">Txs dans un bloc (moy)</th>
        <th scope="col">Tx par sec (max)</th>
        <th scope="col">Tx par sec (moy)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Bitcoin Core</th>
        <td>600</td>
        <td>1</td>
        <td>98%</td>
        <td>220</td>
        <td>500</td>
        <td>4,561.45</td>
        <td>20,07.04</td>
        <td>7.6</td>
        <td>3.35</td>
      </tr>
      <tr>
        <th>Bitcoin Cash</th>
        <td>600</td>
        <td>10</td>
        <td>98%</td>
        <td>220</td>
        <td>500</td>
        <td>45,614.55</td>
        <td>20,070.40</td>
        <td>76</td>
        <td>33.45</td>
      </tr>
      <tr>
        <th>Bitcoin SV</th>
        <td>600</td>
        <td>32</td>
        <td>98%</td>
        <td>220</td>
        <td>500</td>
        <td>145,966.55</td>
        <td>64,225.28</td>
        <td>243.28</td>
        <td>107.04</td>
      </tr>
      <tr class="highlight">
        <th>DeFi Chain</th>
        <td>30</td>
        <td>16</td>
        <td>98%</td>
        <td>220</td>
        <td>500</td>
        <td>72,983.27</td>
        <td>32,112.64</td>
        <td>2432.78</td>
        <td>1,070.42</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Cadence du bloc (s)</th>
        <th scope="col">Limite de gas</th>
        <th scope="col">Volume de Tx (% du bloc)</th>
        <th scope="col">Taille Tx min (gas)</th>
        <th scope="col">Taille Tx moy (gas)</th>
        <th scope="col">Txs dans un bloc (max)</th>
        <th scope="col">Txs dans un bloc (moy)</th>
        <th scope="col">Tx par sec (max)</th>
        <th scope="col">Tx par sec (moy)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Ethereum</th>
        <td>13.5</td>
        <td>10m0</td>
        <td>100%</td>
        <td>21k</td>
        <td>60k</td>
        <td>476.19</td>
        <td>166.67</td>
        <td>35.27</td>
        <td>12.35</td>
        </tr>
    </tbody>
  </table>
</div>

#### 3. Mécanisme de consensus décentralisé

Le Bitcoin Core utilise la preuve de travail (Proof-of-Work, ou PoW) comme mécanisme de consensus. DeFiChain exploite les meilleurs aspects de la PoW, c'est-à-dire l'utilisation du hachage de l'ID du nœud de staking pour la création de blocs tout en concentrant la majorité du consensus sur la preuve d'enjeu (Proof-of-Stake, ou PoS). L'amélioration majeure du mécanisme de PoW pour DeFiChain est que les nœuds de staking peuvent fonctionner sans investir dans des serveurs haut de gamme et des connexions à bande passante ultra rapide. Ainsi, DeFiChain crée le potentiel pour une décentralisation plus facile et plus rapide de l'infrastructure.

#### 4. Contrats intelligents non-Turing-complets

Les transactions financières décentralisées sont mises en œuvre par le biais de contrats intelligents (smart contracts). Par exemple, pour s'assurer que les emprunteurs remboursent les prêteurs, les smart contracts mettent en œuvre les conditions de prêt dans le code. Pour le développement de contrats intelligents, DeFiChain ajoutera un support opcode pour les jeux d'instructions financières décentralisées. L'opcode DeFi complète et fonctionne conjointement avec le langage de programmation du protocole Bitcoin Core existant.

Le langage de programmation de DeFiChain est appelé Recipe, ce qui indique le rôle du langage dans la description et l'autorisation des contrats financiers décentralisés.

Les mots d'instruction Bitcoin Script commencent généralement par le préfixe `OP_*`. Les mots d'instruction Recipe portent le préfixe `DF_*`.

#### 5. Immutabilité par l'ancrage des blocs

Alors que le sujet de l'immutabilité est résolument binaire (une blockchain est soit immutable soit non immutable), en fait, l'immutabilité est un curseur. Le niveau d'immutabilité d'une blockchain est lié au coût d'un retour en arrière ou d'un "fork out" de blocs minés, également connu sous le nom d'attaque à 51 %.

Il faut du temps pour amasser un nombre important de mineurs ou de minteurs pour rendre l'attaque à 51 % suffisamment coûteuse pour qu'elle soit généralement considérée comme immutable, ce qui signifie qu'une nouvelle blockchain est automatiquement désavantagée en ce qui concerne l'immutabilité des enregistrements. Certaines blockchains plus récentes ont pris des raccourcis pour augmenter leur niveau d'immutabilité, généralement en faisant des compromis sur la décentralisation. Par exemple, les chaînes peuvent n'autoriser que des acteurs délégués choisis par les fondateurs, ou en gérant des permissions sur la blockchain au lieu de l'avoir en libre accès.

DeFiChain vise à maintenir la qualité de la décentralisation tout en maintenant l'immutabilité. Pour ce faire, DeFiChain ancrera son bloc à la blockchain Bitcoin tous les quelques blocs. Cela renforce encore l'immutabilité de DeFiChain sans compromettre la nature décentralisée de la chaîne.

### Algorithme de consensus

#### Preuve d'enjeu

DeFiChain utilise un algorithme de preuve d'enjeu (PoS) similaire à l'algorithme de minage original de la preuve de travail (PoW) de Bitcoin Core. Bien que DeFiChain choisisse la PoS plutôt que la PoW, la technologie DeFi conserve le meilleur des technologies testées et éprouvées qui ont été développées dans la blockchain Bitcoin Core.

#### Masternodes de staking

Pour faire fonctionner un masternode (nœud de staking), les stakers doivent détenir un montant fixe de DFI, initialement fixé à 20.000. Les masternodes de DeFiChain participent aux validations de transactions actives et aux créations de blocs. Le montant du staking est destiné à être réduit avec la stabilité et la maturité de la blockchain pour encourager une plus grande décentralisation.

Chaque nœud de staking ne peut effectuer qu'un seul hachage par seconde, le nonce de l'algorithme Bitcoin Core PoW étant remplacé par l'ID du masternode du staker.
Un nouveau bloc est miné s'il satisfait à la condition suivante :

`SHA256({UTXO du staker}, {horodatage actuel, en secondes}, {modificateur du staker}) < {cible}`

The stakers check this requirement each second. If the block condition is less than the current target, then the stakers assemble and sign a new block. 
Staker’s UTXO require 20 confirmations before it can be accepted as a stake.

#### Modificateur de staking

Un modificateur de staking est un générateur collectif et aléatoire d'entropie. Sans un modificateur de staking, le futur noyau de PoS serait complètement prévisible. Un bon modificateur de staking doit être ni prévisible, ni influençable par les stakers.

Le modificateur de staking de DeFiChain est défini comme étant `SHA256({modificateur de staking précédent}, {masternode ID})`.

#### Validation des en-têtes futurs et passés

Contrairement à la PoW, la validation des en-têtes de blocs nécessite une table de staking. Les en-têtes sont vérifiés par lots avant que les blocs complets ne soient téléchargés, donc la table de staking est utilisée pour vérifier les stakings futurs.
Pour être en mesure de vérifier les en-têtes futurs, la blockchain doit appliquer une règle supplémentaire, de sorte que toute modification de la base de données des staking est écrite immédiatement, mais ne prend effet qu'après 300 blocs. Par conséquent, n'importe quel nœud sera en mesure de vérifier n'importe quel en-tête de bloc par rapport au staking actuel, si un en-tête de bloc n'est pas plus loin dans le futur (ou dans le passé) que 300 blocs.

#### Protection contre les conflits de staking

Pour les blockchains PoS, il n'y a pas de limite au nombre de blocs conflictuels qu'un staker peut signer. Par conséquent, les stakers peuvent signer pour chaque fork ou branche possible, ce qui affaiblit la finalité d'une blockchain PoS. Ce problème est connu sous le nom de double signature et n'est pas possible dans les blockchains PoW, où un mineur ne peut pas exploiter toutes les branches possibles sans diviser sa capacité d'exploitation. En PoW, cela représente une pénalité économique intrinsèque. Cependant, les blockchains PoS ne peuvent pas appliquer une pénalité économique intrinsèque pour la signature de blocs conflictuels sur différentes branches.

Par conséquent, afin d'améliorer la finalité de DeFiChain, dans la PoS, il est nécessaire de détecter les doubles-signatures et de les pénaliser par un mécanisme explicite.

#### Détection de la double signature

Chaque en-tête de bloc a un numéro de séquence comme un nombre de blocs qu'un staker particulier a créé avant un bloc particulier. Si deux blocs sont créés avec le même numéro de séquence, cela signifie qu'un staker a doublement signé, même si les blocs ont des ancêtres différents, c'est-à-dire à travers les branches

Pendant la génération d'un bloc, un staker a le droit d'inclure les preuves de double signature dans l'en-tête de son bloc en échange de la moitié seulement de la pénalité.

#### Pénalité pour double signature

Pour pouvoir appliquer une pénalité aux personnes qui signent deux fois, DeFiChain doit interdire le retrait immédiat du staking. Ainsi, lorsqu'une transaction de désactivation est confirmée, DeFiChain a besoin de 3000 blocs pour passer. Avec un temps de bloc de 30 secondes, 3000 blocs équivalent à 25 heures.

La pénalité de double signature est de 10 fois les récompenses de bloc, déduites de la collatéralisation. Cette pénalité disqualifie également le staker de tout autre staking immédiatement. Le staker qui veut revenir au staking doit remettre un nouvel UTXO de 1,000,000 DFI. L'exécution du nœud officiel de DeFiChain ne cause aucune double-signature involontaire ou accidentelle. La double-signature ne se produit qu'en cas d'intention malveillante.

#### Attaque de type time-drift (dérive temporelle)

La chaîne utilise une prédiction de bloc futur sur 5 secondes environ pour éviter les attaque de type time-drift (dérive temporelle : des décalages d'horloge trop important entre masternodes, ndlr) où les stakers fixent un temps de bloc trop loin dans le futur, pour ensuite réclamer une récompense indue. DeFiChain se synchronise par NTP pour ajuster les horloges au fur et à mesure.

### Ancrage sur Bitcoin

Les stakers de DeFiChain publient périodiquement les hachages de blocs de la blockchain sur la blockchain Bitcoin, fournissant un audit public et un ancrage de DeFiChain à la blockchain la plus forte et la plus sécurisée au monde.

Tous les 60 blocs (environ 30 minutes), un staker obtient le droit d'écrire la racine de Merkle (Merkle root) du bloc précédent sur la blockchain Bitcoin. Les informations écrites sont, plus précisément, le txid de la transaction Bitcoin, l'en-tête du bloc Bitcoin et la preuve de Merkle contenant la racine de Merkle sur le bloc nouvellement miné. Ce faisant, le staker recevra une récompense de bloc supplémentaire en DFI, ce qui incitera les nœuds à ancrer régulièrement tous les enregistrements sur la blockchain Bitcoin.

![Ancrage sur Bitcoin](/img/white-paper/every-60-blocks.png)

Les nœuds de DeFiChain comprendront un client intégré de vérification simplifiée des paiements (SPV) de Bitcoin. Les clients SPV synchronisent la blockchain Bitcoin en téléchargeant uniquement les en-têtes de bloc, ce qui constitue une information suffisante pour que les nœuds puissent ajouter et valider les ancrages.

## Construction des blocs DeFiChain

Pour atteindre nos objectifs de permettre des transactions financières décentralisées sur DeFiChain, les blocs de construction suivants seront inclus comme composants natifs de base sur DeFiChain.

### Tokenisation sous forme de tokens standards (DST)

La mise en œuvre des fonctionnalités décrites dans ce livre blanc est réalisée à l'aide de jetons standards. (JETON ci-après et dans les applications DiFiChain, appelé TOKEN pour éviter toute confusion avec UXTO, NDT). Ce chapitre décrit les mécanismes des tokens, l'interaction avec d'autres cryptoactifs (tokens), et comment ils sont utilisés dans DeFiChain.

### Mécanique des chaînes croisées

DeFiChain utilise des tokens standards pour introduire des tokens externes dans DeFiChain de manière transparente et permettre des contrats financiers et des échanges transparents de tous les principaux cryptoactifs. Les tokens standards sont similaires à ERC20 sur Ethereum et Omni sur la blockchain Bitcoin. Grâce à cette norme, DeFiChain permet la tokenisation de tous les actifs.

Sur DeFiChain, les tokens standards sont appelés DeFi Standard Token (DST). Les DST sont de deux types différents : DCT, créés par les utilisateurs du système, et DAT, qui sont des tokens adossés à des actifs créés avec le soutien de cryptoactifs.

![Illustration des catégories de DST](/img/white-paper/custom-token.png)

### Tokens personnalisés (DCT)

Les DCTs sont des tokens personnalisés qui peuvent être créés par n'importe quel utilisateur pour représenter n'importe quel projet ou ensemble de smart contracts implémentés sur DeFiChain. Tout utilisateur peut créer un tel DCT. Pour éviter les abus, la création de tout DCT propriétaire exige que l'utilisateur verrouille 1,000 DFI pour le temps que les tokens sont émis. Les DFI sont restitués lorsque les tokens sont révoqués et que le DCT est annulé.

Les tokens DCT ne sont pas soutenus intrinsèquement par DeFiChain. Ils peuvent être soutenus par un mécanisme externe, mais il est essentiel de noter que DeFiChain ne les soutient pas intrinsèquement. Un exemple sur la blockchain Ethereum serait DGX, qui est un jeton ERC20 soutenu par de l'or. Ethereum ne soutient pas DGX, bien que le jeton soit créé par ERC20. La Fondation Digix est responsable de la valeur de ce jeton. De même, les DCT sont à la DeFiChain ce que ERC20 est à l'Ethereum. La création et l'émission de tokens sur DeFiChain est simplifiée et le potentiel d'erreurs dans le contrat intelligent est éliminé, parce que les créateurs de DCT peuvent définir uniquement les paramètres ci-dessous, en utilisant une interface de script facile à utiliser.

#### Paramètres des DCT :

- DCT ID: <UDID> Unique blockchain identifier for the token.
- Name: <Token name> Name of the tokens.
- Symbol: The ticker symbol for the tokens. The DCT protocol will provide a reference for ensuring the choice will be a unique symbol.
- Decimal places: Divisible number of decimal places for the tokens. This cannot be changed once it is set. 
- Total initial supply: Initial issue of tokens during the event generated.
- Initial distribution list: List of addresses for distribution of tokens. 
- Minting support: yes/no
- Final supply limit (optional): Immutable total supply limit. If minting is supporting this will define the ceiling on how many tokens the token owner can mint in total (some may be reserved at this time). If this parameter is left blank, this is an unlimited supply token. This cannot be changed after the initial definition of the token. 
- Tradeability: yes/no. This is a one-way switch allowing the token owner to transfer tokens during initial distribution period and also to decide when a token is tradeable/movable. To ensure the decentralized nature of DCT, once “tradeability” is set to yes, the owner is no longer able to reverse the tradability of a token. Typically, when creating a token, this should be turned to “no” until the initial distribution is confirmed to be accurate.

Using this interface, there is no need to have a smart contract developer, and there is no need for a security audit.

### DeFi Asset Token (DAT)

DeFi Asset Tokens (DATs) are backed in a decentralized manner. DATs on DeFiChain are tokens and crypto assets external of DeFiChain, such as:

- DBTC, backed by BTC
- DETH, backed by ETH
- DXRP, backed by XRP
- DUSDT, backed by USDT
- DBCH, backed by BCH, etc.

New DATs are introduced to the system through voting by masternodes. This ensures that only assets that gather the most interest amongst DeFiChain users get introduced.

### Economic Pegging of DATs

The goal of DAT is to have it represent the native asset on the other blockchains, e.g. 1 DBTC should represent 1 BTC. 

There are two approaches to this:

1. Stablecoin approach
    - For every single issued 1 DBTC, 1 BTC has to be locked up in an address or a smart contract. 
    - While this would help to build a guarantee to DBTC, it introduces some other issues – country-party risks and affect the decentralized nature of DeFi. 

2. Economic pegging
    - By providing a strong guarantee that the DAT representing an asset has its price closely tracking the native asset, i.e. by holding DBTC, one can have a good confidence that the value of DBTC will track that of BTC.


In order for us to achieve economic pegging, the following building blocks are built natively on DeFiChain:

1. Loan Contract
2. Decentralized Exchange (DEX)
3. Cross-chain Exchange (XCX)
4. Pricing Oracles

![DAT overview](/img/white-paper/dat-overview.png)

### Loan Contract

Loan Contract is designed to allow the owner of the contract to take a collateralized loan against collateral locked in the contract. Each loan contract is unique to every owner (address) on DeFiChain. 

Any user can open a loan contract on DeFiChain, free of charge. The user who opens a loan contract owns the specific contract. This ownership, however, is transferable.

Once a loan contract is opened, DFI can be sent to fund the loan collateral. Once a loan contract is funded, it allows the owner to take out a loan by minting DATs up to a certain collateralization ratio. The minimum collateralization ratio can be adjusted by DeFiChain DAO and starts at 150%. In other words, $1,500 worth of collateral (in DFI), allows the loan contract owner to take out a maximum of $1,000 in loans.

Minted DATs are subject to a floating borrowing rate. A loan contract has no expiry date. The owner is able to take out a loan for as long as they desire, as long as the collateralization ratio stays above 150% at all times.

```
Collateralization ratio = Collateral / (Loan + accrued interest)
```

If a loan contract falls below the 150% collateralization ratio at any point in time, its collateral is liquidated via Decentralized Exchange (DEX) to pay off accrued interest. There will be an additional 15% liquidation penalty to discourage loan contracts from having to be liquidated. It is the responsibility of the loan contract owners to monitor the collateralization ratio to prevent an unwanted liquidation. 

If a loan contract is close to minimum collateralization ratio, the owner must take one of the following steps to prevent liquidation and having to incur 15% liquidation penalty:

1. Deposit more DFI into the loan contract, thereby increasing its collateral and collateralization ratio.
2. Pay back some of the loan (or accrued interest), thereby decreasing the loan contract’s loan amount and increasing its collateralization ratio.

Closing a loan contract entitles its owner to get back all 100% of its collateral. To close a loan contract, the owner has to pay back the loan in full, plus the accrued interest in its entity in the DAT (e.g. DBTC). Upon liquidation of the loan, the minted DAT is burned, and the initial minted DAT and the interest will be converted into DFI via the DeFi DEX described in this paper.

While this concept is not new to the DeFi system, what is novel is the possibility to collateralize any asset due to DeFiChain’s nature.

1. Alice opens a loan contract and funds it with 150k DFI.
2. With DFI at $0.10 spot rate, Alice’s loan contract now has $15,000 worth of collateral.
3. At the minimum collateralization ratio of 150% she can take out a maximum of $10,000 worth of DBTC, which is pegged to BTC spot price.
4. Since the DBTC loan via loan contract accrues interest, and DBTC and the DFI price fluctuate, Alice decides to only take out $5,000 worth of DBTC, i.e. 0.5 DBTC, giving her loan contract a collateralization ratio of: 15000/5000 = 300%, well above 150%.
5. Over-collateralization allows for some room for price movements of DBTC. If the BTC price increases to $15,000, Alice’s loan of 0.5 DBTC would now be worth $7,500. Her loan contract now has a collateralization ratio of: 15000/7500 = 200%, still above 150%, so liquidation would not be triggered even in the case of this type of price shift.
6. The interest rate for each DAT loan differs. Assuming the DBTC loan rate is 5% annually, taking out a loan for a year, in order to close her loan contract and to fully redeem her initial 150k DFI, Alice has to pay back 0.5 DBTC * 1.05 = 0.525 DBTC by the end of the year.

![loan contract](/img/white-paper/alice-pdc.png)

### Decentralized Exchange (DEX)

The DeFi internal DEX provides decentralized trading for all DeFi tokens and DFI itself, which means that all tokens: DFI and DCT (DAT and DCT) can be listed on DeFiChain DEX. DEX will initially launch with DFI as the base trading pair, providing markets such as DBTC/DFI, DETH/DFI, DUSDT/DFI, etc. With increasing volume, other base trading pairs can be introduced, subject to a DAO approval, providing markets such as DETH/DBTC, DFI/DUSDT, etc.

DEX on DeFiChain operates without the need to pass custody to any intermediaries. Users are able to trade on their own in a trustless manner. One of the key differentiator about DeFiChain as compared to many other decentralized financial solutions is that DeFiChain is not only a consensus protocol facilitating DeFi, it is also comes with a very simple to use client user interface (UI) that allows users to interact directly on the blockchain without any intermediaries.

### Cross-chain Exchange (XCX)

A user holding DBTC might be interested in holding of actual BTC instead of a DeFi pegged BTC token (DBTC).

The DeFi Cross-chain Exchange (XCX) allows anyone to do exactly that. XCX allows listing of DATs with its native tokens, e.g. DBTC for BTC, DETH for ETH, DXRP for XRP. Actual transaction is carried out through the trustless swap of both tokens commonly known as atomic swap. Atomic swap guarantees that either both parties receive their exchanged coins, or neither transactions go through – providing a strong cryptographic guarantee that no one party is able to cheat the other.

We use the following terms to describe the parties in the XCX:

- Borrower: a person owning a DAT and wanting to get a native coin, e.g, a person who has DBTC and wanting to obtain BTC through the XCX.
- Lender: a person owning BTC and receiving a DAT through the XCX, either temporarily for the duration of the XCX, or permanently, if the XCX expires.

XCX orders contain several parameters that can be freely decided by the market marker (first lister of an order). For selling of DBTC for BTC (i.e. someone who’s interested in receiving actual BTC), the parameters are:

- Amount: Amount of coin/DAT a seller is looking for and how much DAT is locked up.
- Premium: Amount of additional fee a coin seller stands to make from this trade (Premium is listed per unit amount, thus allowing for partial fulfillment of trade orders). Together with expiry, it can also be considered as lending interest to the buyer. The Premium is paid instantly once an XCX is matched, before expiry of the lending contract. Premium can be positive (+) or negative (-) depending on supply and demand.
- Guarantee: An optional additional amount in DBTC and/or DFI that is locked in the XCX that will provide an extra incentive for a lender as it resolves in either of the following  two outcomes:
  a. Released back to the borrower should the BTC amount be paid up before expiry.
  b. Release to the lender should the contract expire without the borrower making a payment thereby constituting an extra incentive.
- Expiry: Time when the contract expires, it can be set as a date in the past for immediate settlement, i.e. no lending, but straight-out swap.
- Native token address: Address to send BTC to for executing the contract.

#### First Example:

Alice has 1 DBTC and wants 1 BTC so she can trade on a centralized exchange.

Bob has 1 BTC that he does not need for 1 month, hoping to generate some lending interest during that period of time.

1. Alice lists the following XCX order:
- Amount: 1 DBTC/BTC
- Premium: 8,000 DFI
- Guarantee: 0.1 DBTC
- Expiry: December 31, 2019 – approx. 1 month.
- Address: Alice lists her BTC deposit address
2. Bob accepts the offer by sending a transaction on DeFiChain.
3. Bob receives a confirmation on DeFiChain that his order is accepted. In case there are multiple order acceptance transactions.
4. Bob sends 1 BTC to Alice’s BTC deposit address as listed in the XCX order and sends a transaction on DeFiChain with the BTC txid as receipt. Bob also specifies a receiving BTC address on the same transaction for Alice to repay the 1 BTC later on. 
5. Multiple DeFiChain stakers with BTC bridges confirm that Bob has indeed sent the amount as agreed and the that the txid is valid.
6. XCX’s premium of 8000 DFI is instantly released to Bob. Bob can do what he wants with the DFI straight away with no strings attached. It is Bob’s to keep for this trade.

Now, Alice has 1 BTC and Bob has 8000 DFI. Alice also has 1 DBTC locked up on XCX order and Bob is the beneficiary of that BTC. Note that the beneficiary of an XCX is transferable, i.e. Bob is able to sell the XCX with Alice to a third party (this allows for decentralized debt selling and tokenization of receivables).

Should Alice wish to redeem her 1 DBTC from the XCX before the time is up, Alice will send Bob the 1 BTC she borrowed earlier to Bob’s address specified in the XCX and send the acknowledgment on DeFiChain. Upon confirmation by stakers with a BTC bridge, the XCX contract now closes and Alice gets her 1 DBTC back, having paid 8,000 DFIs as interest.

Bob gets his 1 BTC back (keeping his 8000 DFI as lending interest).

Should Alice wish not to redeem the XCX before the expiry, Bob gets to keep Alice’s 1 DBTC.

Alice gets to keep the 1 BTC (minus 8000 DFI interest) and Bob now gets 1 DBTC (plus 8000 DFI interest). Additionally Bob received the Guarantee of 0.1 DBTC providing him with an extra 10%.

![XCX](/img/white-paper/alice-bob-xcx.png)

#### Second Example:

In a second scenario Charlie has 1 DBTC and wants 1 BTC. He has no intention of paying it back and getting his DBTC back. He also does not want to include an additional guarantee, so he adds a higher Premium and an immediate Expiry. Charlie would list the following XCX order:

- Amount: 1 DBTC/BTC
- Premium: 12000 DFI
- Guarantee: None
- Expiry: Immediate

Dave, notices the order has no guarantee and an immediate expiry and knows that this XCX order expires instantly. He happily provides the counter-trade to Charlie, giving him 1 BTC and receiving immediately 1 DBTC + 12000 DFI.

A Guarantee is therefore not a must, but a potential incentive for the lender to know whether he/she has to exchange the received funds afterwards or whether he/she will get the original native coins back.

### Pricing Oracles

A Pricing Contract is a smart contract on DeFiChain allowing multiple trusted and appointed parties to submit periodic price feeds of DATs and DFI. 

Multiple Pricing Contract oracles are chosen by the DeFi DAO (explained in the next chapter).

### Use Case Examples

Following are examples of how the technical implementations of DeFiChain can be used. This is just a list of examples. Many other applications can be implemented as well. 

#### Leveraging a Long Position

1. Alice has 100k DFI. She likes the prospects of DFI and wants to leverage her position.
2. Alice opens a loan contract on DeFiChain and takes out a loan in DUSDT.
3. Alice sells DUSDT for more DFI.

Thus Alice can obtain a compounded long position on DFI without putting in extra money.

#### Shorting a Coin

1. Bob wishes to short coin XXX. Bob has DFI.
2. Bob opens a loan contract on DeFiChain, takes out a loan in DXXX.
3. Bob can now either sell DXXX for DFI or DUSDT on DeFi DEX, or convert DXXX via XCX to sell XXX on a non-DeFi-internal exchange.
4. Once Bob wishes to close his short position, Bob buys back XXX (or DXXX) from the market, hopefully at a lower rate, closes his loan contract and thus completes his short of XXX.

#### Getting a Loan (Borrowing)

1. Charlie has DFI, but he needs short-term cashflow of another coin XXX. Charlies does not want to sell DFI for it nor does he want to spend fiat money to buy this coin.
2. Charlie takes a loan via loan contract on DeFiChain for DXXX and converts it to XXX.
3. Once he wishes to settle his loan, Charlie simply purchases XXX/DXXX and close his loan contract.

#### Lending a Coin for Cashflow

1. Dave has BTC that he does not need in the short-term. Dave wishes to generate some interest (cashflow) by lending BTC.
2. Dave lists BTC on XCX specifying his BTC amount, desired premium (interest rate) and expiry (period that he does not need his BTC).
3. Once a counterparty takes up Dave’s listing, Dave receives an instant premium in DFI.
4. Upon expiry, Dave would either receive his BTC back, or receive DFI with an additional Guarantee thereby netting more than his original BTC.

---

## $DFI coin

The $DFI coin will be the integral unit of account in DeFiChain ecosystem.

The DeFiChain Foundation will be issuing the DeFi utility token, DFI, capped at 1,200,000,000 (1.2 billion) for throughout its lifetime. There will only ever be 1.2 billion DFIs created.

DFI is divisible up to 8 decimal places.

### $DFI coin Utility

- DFI is used for fee payment for all transactions and smart contracts on DeFiChain.
  - Fee payment for decentralized exchange transactions
  - Fee payment for token transfers
- Fees payment for DeFi activities:
  - DEX fees
  - XCX fees
  - Lending loan interests payment
  - etc.
- Collateral for borrowing of other cryptoassets on DeFiChain.
- 1,000,000 DFI is required to run a staking node for DeFiChain.
- 1,000 DFI is required to create a DCT. This is refundable upon destruction of the DCT.
- 500 DFI is required to submit a proposal for DFI the community budget. This is non-refundable.

### Fees from DeFi Activities

Fees from DeFi activities on DeFiChain are burned and redistributed through new token minting over a period of time as laid out below. This ensures that DeFi stakers enjoy the benefits of earning rewards from facilitating trustless DeFi trades on DeFiChain in a fair manner.

**Rewards from minting a block on DeFiChain are calculated as**:

1. Underlying block reward schedule (see distribution schedule) +
2. Burned token redistribution schedule

The burned token redistribution schedule is determined automatically every 259,200 blocks (approx. every 90 days) and works as follows:

![Burned token distribution](/img/white-paper/burn.png)

Burned token redistribution for the next 259,200 blocks = 

1. (Total token burned from the last 259,200 blocks [Quarter -1]) / 4 + 
2. (Total token burned from block -518,400th to -259,200th block [Quarter -2]) / 4 + 
3. (Total token burned from block -777,600th to -518,400th block [Quarter -3]) / 4 + 
4. (Total token burned from block -1,036,800th to -777,600th block [Quarter -4]) / 4

### Masternodes

DeFi is a Proof of Stake blockchain. Initially, 1,000,000 DFI allow the owner to own a staking node. The returns for staking will decrease over time, as the volume and number of transactions compensates for the reduction in per-transaction staking rewards.

Nodes are entitled to:

- Periodic staking rewards as described later in this chapter.
- Submission of votes to key decisions that govern DeFiChain in the governance system.
- Submission of votes on how the DFI community budget is being allocated and distributed. 

### Governance

The DeFiChain Foundation is responsible for issuance of tokens and is governed by an independent board. This board will be governed by the DeFi masternodes voting on its members and also by giving directives on key decisions.

The DeFiChain Foundation awards tokens to users and groups to speed up adoption (see the section on initial token distribution and marketing). The Foundation is tasked with boosting the ecosystem, bringing in ecosystem partners, directing the development of the tools for ecosystem partners, and other activities to increase the number of ecosystem partners.

![Governance](/img/white-paper/governance.png)

For clarification and transparency, Cake Pte Ltd is a private company located in Singapore. Cake Pte Ltd is an initial contributor as part of the ecosystem’s partners to creating services on DeFiChain.

### Community Development Fund

The DeFiChain Foundation will create a community development fund with up to 10% of the block rewards under management. This percentage can be updated by submitting a DAO proposal that will be voted on by all masternodes. Community development funds were popularized by DASH[^10] and are used in some selective DAOs today. The community will determine the use of these funds for development, marketing, or research that forwards the DeFi community. DFI masternodes vote for projects they like and the highest voted proposals every month will be funded.

It costs 500 DFI to submit a budget proposal and a proposal can be submitted by anyone. This fee is burned and non-refundable regardless of whether the budget is approved. Budgets are proposals which receive a net total of yes votes equal to or greater than 10% of the total possible votes (for example over 448 out of 4480). Budgets can be nullified at any time if vote totals (cast or re-cast) fall below the approval threshold. Budgets are processed (paid) in order of yes minus no votes. More popular budgets get payment priority. Voting happens on a monthly basis but can be changed by a masternode vote.

For governance decisions, only the Foundation may submit proposals. Proposals are voted in similar way as DAO budget proposals except that decisions will be honored via simple majority vote.

[^10]: https://docs.dash.org/en/stable/governance/understanding.html

### Initial Token Distribution

Of the roughly 1.2 billion $DFI coins 49% will be issued to the DeFiChain Foundation at the start. The rest will be issued to Masternode holders over time.
Of the 49% initially issued $DFI coins, 49% will be kept by the DeFiChain Foundation. The rest may be distributed to accredited investors, large funds and institutions, collectively known as external partners, to fund the initial development of DeFiChain. In order to decentralize the holdings of DFIs as much as possible the DeFiChain Foundation may not keep more than 49% of all initially issued tokens. The use of potential proceedings of the tokens will be decided by the DeFiChain Foundation board but will exclusively be directed towards the adoption and development of DeFiChain.

For any avoidance of doubt, there will NOT be a public ICO.

![Initial Token Distribution](/img/white-paper/initial-token-distribution.png)

Further tokens will only ever be received through staking, which is described in the next chapter.

### Token Issuance Schedule via Staking

DeFiChain is initially launched with a 200 DFI block reward, of which 10% goes to the community fund. The Foundation pledges to guarantee this 200 DFI block reward for at least 1,050,000 blocks since the the first genesis block, so approximately 1 year.

Subsequently, block rewards will be adjusted through governance vote. The Foundation also further pledges that there will never be more than 1,200,000,000 (1.2 billion) DFI in circulation, unless until the DAO governance votes to change this limit. Therefore DFI is a deflationary utility token.

The proposed staking schedule for the first 10 years is according to the following table:

<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th scope="col">
          Year
        </th>
        <th scope="col">
          Start of year token in circulation
        </th>
        <th scope="col">
          % of supply staked
        </th>
        <th scope="col">
          Block reward
        </th>
        <th scope="col">
          Targeted new token %
        </th>
        <th scope="col">
          Targeted new token
        </th>
        <th scope="col">
          Staking return %
        </th>
        <th scope="col">
          Actual new token
        </th>
        <th scope="col">
          End of year token in circulation
        </th>
        <th scope="col">
          % of cap
        </th>
        <th scope="col">
          New token for year
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>490,000,000</td>
        <td>95%</td>
        <td>200</td>
        <td>20.00%</td>
        <td>98,000,000</td>
        <td>42.91%</td>
        <td>210,240,000</td>
        <td>700,240,000</td>
        <td>58.35%</td>
        <td>210,240,000</td>
      </tr>
      <tr>
        <td>2</td>
        <td>700,240,000</td>
        <td>85%</td>
        <td>150</td>
        <td>13.33%</td>
        <td>93,365,333</td>
        <td>22.52%</td>
        <td>157,680,000</td>
        <td>857,920,000</td>
        <td>71.49%</td>
        <td>157,680,000</td>
      </tr>
      <tr>
        <td>3</td>
        <td>857,920,000</td>
        <td>75%</td>
        <td>100</td>
        <td>8.89%</td>
        <td>76,259,556</td>
        <td>12.25%</td>
        <td>105,120,000</td>
        <td>963,040,000</td>
        <td>80.25%</td>
        <td>105,120,000</td>
      </tr>
      <tr>
        <td>4</td>
        <td>963,040,000</td>
        <td>70%</td>
        <td>70</td>
        <td>5.93%</td>
        <td>57,069,037</td>
        <td>7.64%</td>
        <td>73,584,000</td>
        <td>1,036,624,000</td>
        <td>86.39%</td>
        <td>73,584,000</td>
      </tr>
      <tr>
        <td>5</td>
        <td>1,036,624,000</td>
        <td>70%</td>
        <td>50</td>
        <td>3.95%</td>
        <td>40,953,047</td>
        <td>5.07%</td>
        <td>52,560,000</td>
        <td>1,089,184,000</td>
        <td>90.77%</td>
        <td>52,560,000</td>
      </tr>
      <tr>
        <td>6</td>
        <td>1,089,184,000</td>
        <td>70%</td>
        <td>40</td>
        <td>2.63%</td>
        <td>28,686,328</td>
        <td>3.86%</td>
        <td>42,048,000</td>
        <td>1,131,232,000</td>
        <td>94.27%</td>
        <td>42,048,000</td>
      </tr>
      <tr>
        <td>7</td>
        <td>1,131,232,000</td>
        <td>70%</td>
        <td>25</td>
        <td>1.76%</td>
        <td>19,862,510</td>
        <td>2.32%</td>
        <td>26,280,000</td>
        <td>1,157,512,000</td>
        <td>96.46%</td>
        <td>26,280,000</td>
      </tr>
      <tr>
        <td>8</td>
        <td>1,157,512,000</td>
        <td>70%</td>
        <td>20</td>
        <td>1.17%</td>
        <td>13,549,295</td>
        <td>1.82%</td>
        <td>21,024,000</td>
        <td>1,178,536,000</td>
        <td>98.21%</td>
        <td>21,024,000</td>
      </tr>
      <tr>
        <td>9</td>
        <td>1,178,536,000</td>
        <td>70%</td>
        <td>10</td>
        <td>0.78%</td>
        <td>9,196,928</td>
        <td>0.89%</td>
        <td>10,512,000</td>
        <td>1,189,048,000</td>
        <td>99.09%</td>
        <td>10,512,000</td>
      </tr>
      <tr>
        <td>10</td>
        <td>1,189,048,000</td>
        <td>70%</td>
        <td>5</td>
        <td>0.52%</td>
        <td>6,185,973</td>
        <td>0.44%</td>
        <td>5,256,000</td>
        <td>1,194,304,000</td>
        <td>99.53%</td>
        <td>5,256,000</td>
      </tr>
    </tbody>
  </table>
</div>

### Acquiring $DFI coins

$DFI coins will be issued only to the users of DeFiChain or partners with an interest in utilizing and participating in the ecosystem. There will be NO public sale or public token offering. Following are the only ways to get $DFI coins:

- Institutional investors, accredited investors and funds who are interested in the use of DeFiChain can contact the DeFi founders at (partners@defichain.com).
- Over time, DFI will be available on staking platforms (such as www.CakeDeFi.com) and on selected exchanges.
- The DeFiChain Foundation will issue airdrop tokens for users of DeFiChain. (Hodlers and other market makers).
- The DeFiChain Foundation gives grants to developers who are developing functionality for DeFiChain or dApps to run on the blockchain.

---

## DeFiChain Foundation

The DeFiChain Foundation is incorporated as a company limited by guarantee, resembling a foundation structure which holds the DeFiChain Trademarks, Domains and makes sure the DFI foundation funds are used as instructed by the masternodes.

---

## Marketing

### Target Market

Unlike most other DeFi-focused initiatives, DeFiChain being built on top of Bitcoin can harness almost the entire crypto market without being limited to “smaller” chains like Ethereum etc. Thus, as of publication, the target market for DeFiChain are over 60-80 million cryptocurrency owners and we can expect that hundreds of millions of other users will join in the future. This group of investors is investing and holding cryptocurrency due to the returns as well as their belief in the future of the industry. As investors, they have widely done well with the rise in many of the cryptoassets, however, they are not able to use their holdings in order to get better returns. Providing DeFi services will allow these investors to hold the coins they believe in, and increase their holdings over time based on investments that go deeper than just currency trading.

### Go-to-market Strategy

The initial DeFiChain team is made up of some of the top names in the cryptocurrency industry, people who have made a name for themselves not just by delivering on their promises, but by creating a following. The team has built up a variety of marketing channels and has an established following on social media, wide distribution of books in the area of cryptocurrency, and deep contacts within the cryptocurrency industry.

With the experience of building up social media followings of hundreds of thousands of users in the course of just a few years, the team plans to leverage their current followers and bring them onto specific channels that will be the domain of DeFiChain. The team will build up a complete marketing engine and staff, using the same proven competence they displayed in the past.

Unlike other blockchains, DeFiChain will be balanced between marketing and technology expertise. Building the best network is only half of the job. DFI holders can rest assured that the marketing team has the proven experience in building up a marketing engine that is required for product success and that the tech team will be able to deliver on the roadmap.

### Partnerships

The DeFiChain Foundation will be tasked with assessing applications from ecosystem partners and providing foundation grants in the form of $DFI coins to developers and contributors to DeFiChain. Many open source projects and blockchain developers today are looking for the right blockchain project in order to develop their DeFi applications, and the prospect of a dedicated DeFiChain, backed by industry leaders is appealing.

The DeFiChain Foundation will undertake a variety of efforts to choose the best projects for the expansion of DeFiChain:

- Creation of a formal application process so that worthy projects can apply for airdrop or foundation grants for their development
- Approaching developers in the ecosystem who are doing DeFi dApps on other blockchains, and providing grants for them to develop their dApps on DeFi.
- General marketing to get the word out about the availability of DeFiChain Foundation grants to fund worthy projects.

Every project on DeFiChain will naturally bring it its own users and put effort towards marketing of the project, adding users and hodlers to DeFiChain.

[partners@defichain.com](mailto:partners@defichain.com)

---

## Roadmap and Milestones

![Roadmap](/img/white-paper/roadmap.png)

## A Glimpse into the Future

Building on top of DeFiChain will lead to some of the most exciting benefits not only for first-world areas, but moreover also all those that need decentralized finance the most. For example, imagine Anna, who owns a small business in a developing economy, but who doesn’t have a traditional bank account. She uses mobile money and digital currencies to run her business, accepting payments through mobile--which makes perfect sense, because nobody in her province uses cash or credit cards. Anna uses DeFiChain to take out a loan when one of her suppliers pays late, saving her business. In the old days, she would have simply gone out of business, because no bank would loan money to her. Anna also invests wisely. When she is paid by the supplier, she immediately moves the cash into various tokenized assets to avoid the hyperinflation and instability of her national government’s currency, and on top of that, she is able to earn interest.

Anna creates a group of local businesspeople, and together they pool funds to help other entrepreneurs in their village. They purchase office space, solar panels, and a satellite to create a business center. The group uses DeFi to eliminate the overhead of complex legal contracts between them. They receive automatic dividends when the business center profits. Some of them reinvest in a delivery drone which charges for its services, and distributes the income to the investors. Others invest in sensor equipment that test local soil conditions, and sell the data to commodity markets. All of the sensors work independently and charge independently, and the investors simply reap the profits, all calculated automatically on DeFiChain.

Now, 5 years after her initial use of DeFi, Anna is able to take out a loan with no collateral, based on her long-term record of smart investments and returning loans on time, as well as assessment of her industry from trusted oracles. It’s a win-win situation. The lenders come from all over the globe, from people who want to diversify their investment portfolio to developing economies. The lenders don’t have to worry about the complexity of cross-border transactions or legal requirements. They escape the banking systems of their own countries, which moved to zero and negative-interest rates on savings. Now, these regular investors can be assured of returns on investments based on Anna and people like her, who run great businesses and can provide returns on people’s investments.

**This is what DeFiChain is all about - To make the world a better place!**
