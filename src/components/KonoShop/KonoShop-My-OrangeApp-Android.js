import React from 'react';

function KonoShopMyOrangeAppAndroid() {

    const downloadLocation = "Kono Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "8.645165523969375, -10.971248831137022"
    const timestamp = new Date().toISOString();

    fetch("http://localhost:7900/api/myOrange-for-konoshop/Android", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ downloadLocation, appDownloaded, coordinate, timestamp }),
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

export default KonoShopMyOrangeAppAndroid;
