---
title: 漏洞悬赏
type: bug-bounty
long_title: 递飞链漏洞悬赏计画
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
  description: 递飞链漏洞悬赏计画
  og:
    title: 递飞链漏洞悬赏计画
    description: Bounty hunters wanted for wanted bugs
    site_name: DeFiChain
    image: /img/og/ogimage_bounty_en.png
    image_type: image/png
    locale: zh_Hans
theme:
  footer: day
content:
  sections:
    hero:
      name: hero
      headline: 递飞链漏洞悬赏计画
      subhead: 递飞链正与安全专家以及社区合作寻找漏洞。赏金计画奖励高达五万美元。
      cta:
        label: 提交漏洞
      sub_cta:
        label: 如何参与
    leaderboard:
      headline: 排行榜
      subhead: 递飞链感谢以下的赏金猎人们努力保持将递飞链更安全。
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
      total_bounty: 赏金总额
    participation:
      headline: 如何参与
      description:
        p1: 有很多方法可以开始寻找漏洞悬赏。您可以通过运行defid-testnet连接到递飞链测试网开始。或者，您可以在[GitHub](https://github.com/defich/ain)学习初始程式码。
        p2: 如果您通过与程式互动或研究初始程式码发现一个漏洞，递飞链可以提供高达 _五万美元DFI_ 的漏洞赏金，前提是要发现缺陷的严重性，和您能够提供关于修复或复制等有用的资讯。
        p3: "**请注意要研究和确认标记的是正式发布的程式码，而不是主分支或其他仍在开发中的程式码。**"
    submission:
      headline: 提交过程
      description:
        p1: 基于安全有一定的敏感性，我们鼓励抓漏洞者不要公开提交有关区块链安全性等议题。递飞链鼓励您自行决定，如果您觉得这个问题不是公众可以轻易利用的，那么可以在[GitHub](https://github.com/defich/ain)的回购中创建议题。如果议题有可能会被他人利用并是个关键，那么请给我们发邮件[security@defichain.com](mailto:security@defichain.com)。
        p2: "在您提交的文件中，请包含："
        list: 
          - 对于问题的清楚描述。
          - 对于问题的修复，最好是以请求代码合并。
          - 如果无法提供修复程式，请提供有关如何重现问题的明确说明。
          - "您的邮件地址或其他相关联系方式（如: 电报群 ID)。"
          - 如果您的申请获得批准，您的DFI地址将用于接收赏金。
---
