import React from 'react';


function ShopCMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Kenema";
    const timestamp = new Date().toISOString();

    fetch("https://heruku-app.herokuapp.com/api/myOrange-for-shop-C/Iphone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appDownloaded, downloadLocation, timestamp }),
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

export default ShopCMyOrangeAppIphone;
