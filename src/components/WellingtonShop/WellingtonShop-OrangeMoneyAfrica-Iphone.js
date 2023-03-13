import React from 'react';


function WellingtonShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Wellington Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "7.880783487922352, -11.190103268601433"
  const timestamp = new Date().toISOString();

  fetch("http://localhost:7900/api/orangeMoneyAfrica-for-wellingtonshop/Iphone", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, coordinate, timestamp }),
  })
    .then(() => {
      window.location.href = "https://apps.apple.com/fr/app/orange-money-afrique/id1313536959";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default WellingtonShopOrangeMoneyAfricaIphone;
