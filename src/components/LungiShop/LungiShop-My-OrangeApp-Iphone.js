import React from 'react';


function LungiShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Lungi Shop";
    const coordinate = "7.966290383215581, -11.739795058541828"
    const timestamp = new Date().toISOString();

    fetch("http://localhost:7900/api/myOrange-for-lungishop/Iphone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appDownloaded, downloadLocation, coordinate, timestamp }),
    })
        .then(() => {
            window.location.href = "https://itunes.apple.com/fr/app/id6443607903";
        })
        .catch((error) => {
            console.error("Error saving visitor location:", error);
        });

    return (
        <div className="App">

        </div>
    );
}

export default LungiShopMyOrangeAppIphone;
