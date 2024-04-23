

const tokenList = [
   {
      tokenid:
         "1a281053ba8601a658368594da034c2e99a0fb951b86498d05e76aedfe666800",
      contractid: "25ywM8iGxKpZWuGA5z6DXKGcZCXtPBmnbQyJEsjvjjWTy",
      symbol: "AYIN",
      decimals: 18,
      //url_dashboard: "https://status.notrustverify.ch/d-solo/e2aa92a7-e89d-425f-98a0-c730bf3be1dd/ayin?orgId=1&refresh=5m&theme=light&panelId=1"
   },
   {
      tokenid:
         "66da610efb5129c062e88e5fd65fe810f31efd1597021b2edf887a4360fa0800",
      contractid: "22PUN5TpytzGRXZnzkHViRaWioiGNzdufJH1CxFyQF5Sf",
      symbol: "ALF",
      supply: 161_803,
      decimals: 9,
      //url_dashboard: "https://status.notrustverify.ch/d-solo/e2aa92a7-e89d-425f-98a0-c730bf3be1dd/ayin?orgId=1&refresh=5m&theme=light&panelId=9"
   },
   {
      tokenid:
         "556d9582463fe44fbd108aedc9f409f69086dc78d994b88ea6c9e65f8bf98e00",
      contractid: "2A5R8KZQ3rhKYrW7bAS4JTjY9FCFLJg6HjQpqSFZBqACX",
      symbol: "USDT",
      decimals: 6
   },
   {
      tokenid:
         "b522184377a33e376e997a950288fa76c1f48e97bc29cd10779adc7cfb673200",
      contractid: "w5ZU1rV34YJryDCXCXJBXA77Wbx5L4DCmunDG3Pn5GWb",
      symbol: "BERRY",
      decimals: 0,
      supply: 10_000,
      //url_dashboard: "https://status.notrustverify.ch/d-solo/e2aa92a7-e89d-425f-98a0-c730bf3be1dd/ayin?orgId=1&refresh=5m&theme=light&panelId=13"
   },
   {
      tokenid:
         "7da28936499f56ffed497fe7eba856aa85eeb943bab2478e36f7020d89cd2400",
      contractid: "28kZejt34N8nDWT76bDTo3w7j2PZrPrnPMcsMGh6KsTDH",
      symbol: "VLAD",
      decimals: 9,
      circulating_supply_address: "1GDegYLQDXFwDBwMnjTzZXGXW4vYoxxwPKEHNAf8smquV",
      supply: 999999,
      //url_dashboard: "https://status.notrustverify.ch/d-solo/e2aa92a7-e89d-425f-98a0-c730bf3be1dd/ayin?orgId=1&refresh=5m&theme=light&panelId=10"
   },

   {
      tokenid:
         "b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002",
      contractid: "27wpryy3RtEYLnkuF2xgPKQfcYAxWY4mFxaM8XHpXndfD",
      symbol: "PACA",
      decimals: 0,
      //url_dashboard: "https://status.notrustverify.ch/d-solo/e2aa92a7-e89d-425f-98a0-c730bf3be1dd/ayin?orgId=1&refresh=5m&theme=light&panelId=11"
      supply: 11000000,
      circulating_supply_address: "9wgsavEg4KTAd4bEreii3rEc7Dc5VY76yznzj9j8fyXPQJyEZkNfA8ESsBHnBeyzGBZsygr3Lvm3NrTTPWgJ3oLaHKWX6tYSzPXmKN6n25t7Zx5BYgLeuSTB9gMtrjPXjKeZT38NCnQ4Q3U5kw8fMSKNvCVfuK3qE1tepuMAdDxFprrWpr"
   },
   {
      tokenid:
         "1516c410b54470d667e1315ce2faa81870c76c5c7a491e3e86eeec8366495502",
      contractid: "tx1Uck1idLzfyjAbyqrFkNWrxz1MfKCV5FELnJdtbVUs",
      symbol: "TAIL",
      decimals: 0,
      supply: 200000,
      //url_dashboard: "https://status.notrustverify.ch/d-solo/e2aa92a7-e89d-425f-98a0-c730bf3be1dd/ayin?orgId=1&refresh=5m&theme=light&panelId=12"
      //supply: 69_000_000,
      //circulating_supply_address: "19TUu8oE8dfDzH3RuJhACdBFh3Wndez7xZ8Fqjb13GiKd"
   },
   {
      tokenid:
         "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200",
      contractid: "21nj6sBTtQfTwCErYAHF3CNBaDRAc1E1Q3aUCcbsuG8mu",
      symbol: "NGU",
      decimals: 7,
      supply: 7777777,
      //url_dashboard: "https://status.notrustverify.ch/d-solo/e2aa92a7-e89d-425f-98a0-c730bf3be1dd/ayin?orgId=1&refresh=5m&theme=light&panelId=12"
      //supply: 69_000_000,
      //circulating_supply_address: "19TUu8oE8dfDzH3RuJhACdBFh3Wndez7xZ8Fqjb13GiKd"
   },
   {
      tokenid:
         "3f0139e1b0aa2cf0a9400ccdb73d00750bcfc8c7be0e858052d794491c8a5900",
      contractid: "23hGMBJv83y1r9fEvzYYzi6y2Eofg4wd7VWJ1fPRNwDYB",
      symbol: "SHIN",
      decimals: 5,
      circulating_supply_address: "1pyEwJ576wnMh2acyednFq4p8f16QqWK5TJ5zsDCYLQp",
      supply: 100000000,
   },
   {
      tokenid:
         "c1aeea313e36454f35beaf40130c9219faa40ba645aff93e16429146039f8202",
      contractid: "uReV154fNdL1fNbvw8qghk67ERGbuPkLToNMCwYjiaXh",
      symbol: "WANG",
      decimals: 5,
      circulating_supply_address: "1GKH3r2ZG9M8R1TRFFxrf5gq6Ww7MgdrLYt7cptiG4Vrx",
      supply: 1500000,
   },
   {
      tokenid:
         "4e0eb20afb173cd534ae29acd013861115482c1e3d8ed626294bbe1008a3f900",
      contractid: "xXzsxzdwx2vWvA5opvfnzjBCZRgHk1rP4sq4RjExZGNK",
      symbol: "MIX",
      decimals: 8,
      circulating_supply_address: "X2Wp1VoypFSASzqhUoockvTPt6vcNaEyi7KKSetUHq6TZ21DaXP8dKAsirwH7YBjBba2pCkd2khaMfWUjrDQgvWFvjwC5oSi3xJBCkWpnHLQNwngSAnmS6RmT9Qad9SD1V2aJW",
      supply: 10000000,
   },
   {
      tokenid:
         "b49031320af0ff6fd2764ec7176687257efe1d491eff1baf315db21f10412c00",
      contractid: "24N2ytovpgBtVwiqLjd89c2fvFe2qD7HzhnLY6RrivAbH",
      symbol: "MIRA",
      decimals: 9,
      circulating_supply_address: "1AxpRjnEpXgbbqKLeH4ZxU14gzzW6Jr87TZKPR5Nmmran",
      supply: 100000000,
   },
   {
      tokenid: "e565d11d6d5194dc2a65c7d67c324d341bc55f1e7131a9ef5577e8e75e199000",
      contractid: "2AzrpxxrPTirUseiTUkkQUzMbwMPBpUcSG7B21rnb5uaP",
      symbol: "SQRL",
      decimals: 4,
      circulating_supply_address: "1G81TCNxBcvte5V1MUv7Ne1Mrq17yPC78kSzP7i3ieGTn",
      supply: 1000000000,
    },
   {
      tokenid: "b3e354fb095fffe3d5fe0431ef6209604323f9d3db069e008d9e8aeacaa30800",
      contractid: "vDrTMDnkZNNMnR2wgr68RUQSJBqBejtQiB1We2QPtyWP",
      symbol: "Noodz",
      decimals: 0,
      circulating_supply_address: "17LG6JZa42HXUAeouX3xAEJUeTTX4SpZMDT1AMKUJBFvp",
      supply: 69420000000,
   },
   {
      tokenid: "f79530d767a13ff4baef0870f18adfd17c7b418edd214f89b53ce24df62acf00",
      contractid: "xqCJD9o3iVeiBDvUQuJ2hSqZne7HPL15Sztrbh5fC4Xq",
      symbol: "GRAPE",
      decimals: 9,
      circulating_supply_address: "16kdv1Mw9RqaS62mPnArvcFzXXrzQBqEzwGSpVae1zJ1E",
      supply: 21000000
   },
   {
      tokenid: "d5a72d57b7fbbac2189da5f26914109dcdd39dd743ae4c4008e79a505c8a9800",
      contractid: "uqMwHD5wjqZDTa53eddzsji6Tm9fc2pox97qQ3Qrvsrf",
      symbol: "PUTAN",
      decimals: 18,
      circulating_supply_address: "1DdAqRrecvRgTtiwqBjB8wqmNF4a6q2QWXiSS4RBeYTAJ",
      supply: 1000000000000
   },
   {
      tokenid: "11bf07230f5607f626773044414a196d0471d79ba9abc26f148b57b40d983a00",
      contractid: "26hqVwuNQ7DUEMobdySHyDiW1beoDhQHpNaoXGjoHvK2w",
      symbol: "TOP",
      decimals: 6,
      circulating_supply_address: "19f8QMDYmsQ1QnmTQuKakhTZ3UV2wVWwJ16YTSfiXDR5h",
      supply: 100000000
   }
];
