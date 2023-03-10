import React from 'react';


function ShopDOrangeMoneyAfricaIphone() {

  const downloadLocation = "Kailahun";
  const appDownloaded = "Orange Money Africa Iphone";
  const timestamp = new Date().toISOString();

  fetch("https://heruku-app.herokuapp.com/api/orangeMoneyAfrica-for-shop-D/Iphone", {
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

export default ShopDOrangeMoneyAfricaIphone;
