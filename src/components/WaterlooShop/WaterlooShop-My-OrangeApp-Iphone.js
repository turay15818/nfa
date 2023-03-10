import React from 'react';


function WaterlooShopMyOrangeAppIphone() {

    const appDownloaded = "My Orange App For Iphone";
    const downloadLocation = "Waterloo Shop";
    const coordinate = "7.880783487922352, -11.190103268601433"
    const timestamp = new Date().toISOString();

    fetch("https://heruku-app.herokuapp.com/api/myOrange-for-waterlooshop/Iphone", {
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

export default WaterlooShopMyOrangeAppIphone;
