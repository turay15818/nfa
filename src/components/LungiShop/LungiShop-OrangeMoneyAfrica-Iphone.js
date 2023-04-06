import React from 'react';


function LungiShopOrangeMoneyAfricaIphone() {

  const downloadLocation = "Lungi Shop";
  const appDownloaded = "Orange Money Africa Iphone";
  const coordinate = "8.614998, - 13.200568"
  const timestamp = new Date().toISOString();

  fetch("https://heruku-app.herokuapp.com/api/orangeMoneyAfrica-for-lungishop/Iphone", {
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

export default LungiShopOrangeMoneyAfricaIphone;
