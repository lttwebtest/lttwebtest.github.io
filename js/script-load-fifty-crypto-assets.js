(()=>{var t,e=document.getElementById("crypto_assets-env").value,s="https://ledger-ecom-cdn-".concat(e,".s3-eu-west-1.amazonaws.com/website/assets/cryptoAssetsShortlist.json");t=function(t){return sessionStorage.setItem("first_fifty_cryptos",JSON.stringify(t))},fetch(s).then((function(t){return t.json()})).then((function(e){e&&t(e)}))})();