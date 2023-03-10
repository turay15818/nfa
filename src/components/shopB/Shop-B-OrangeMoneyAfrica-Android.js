import React from 'react';

function ShopBOrangeMoneyAfricaAndroid() {

  const downloadLocation = "Wilkenson Road";
  const appDownloaded = "Orange Money Africa Android";
  const timestamp = new Date().toISOString();

  fetch("https://heruku-app.herokuapp.com/api/orangeMoneyAfrica-for-shop-B/Android", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, timestamp }),
  })
    .then(() => {
      window.location.href = "https://play.google.com/store/apps/details?id=com.orange.orangemoneyafrique";
    })
    .catch((error) => {
      console.error("Error saving visitor location:", error);
    });

  return (
    <div className="App">

    </div>
  );
}

export default ShopBOrangeMoneyAfricaAndroid;
