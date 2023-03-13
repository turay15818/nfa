import React from 'react';

function LungiShopOrangeMoneyAfricaAndroid() {

  const downloadLocation = "Lungi Shop";
  const appDownloaded = "Orange Money Africa Android";
  const coordinate = "7.966290383215581, -11.739795058541828"
  const timestamp = new Date().toISOString();

  fetch("http://localhost:7900/api/orangeMoneyAfrica-for-lungishop/Android", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ downloadLocation, appDownloaded, coordinate, timestamp }),
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

export default LungiShopOrangeMoneyAfricaAndroid;
