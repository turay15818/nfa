import React from 'react';


function ShopAOrangeMoneyAfricaIphone() {

  const downloadLocation = "Regent Road";
  const appDownloaded = "Orange Money Africa Iphone";
  const timestamp = new Date().toISOString();

  fetch("https://heruku-app.herokuapp.com/api/orangeMoneyAfrica-for-shop-A/Iphone", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, timestamp }),
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

export default ShopAOrangeMoneyAfricaIphone;
