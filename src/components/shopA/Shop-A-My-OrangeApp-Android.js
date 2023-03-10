import React from 'react';

function ShopAMyOrangeAppAndroid() {

    const downloadLocation = "Regent Road";
    const appDownloaded = "My Orange App For Android";
    const timestamp = new Date().toISOString();

    fetch("https://heruku-app.herokuapp.com/api/myOrange-for-shop-A/Android", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ downloadLocation, appDownloaded, timestamp }),
    })
        .then(() => {
            window.location.href = "https://play.google.com/store/apps/details?id=com.orange.myorange.osl";
        })
        .catch((error) => {
            console.error("Error saving visitor location:", error);
        });

    return (
        <div className="App">

        </div>
    );
}

export default ShopAMyOrangeAppAndroid;