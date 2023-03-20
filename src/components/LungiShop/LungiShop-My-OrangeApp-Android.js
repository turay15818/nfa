import React from 'react';

function LungiShopMyOrangeAppAndroid() {

    const downloadLocation = "Lungi Shop";
    const appDownloaded = "My Orange App For Android";
    const coordinate = "8.614998, -13.200568"
    const timestamp = new Date().toISOString();

    fetch("https://heruku-app.herokuapp.com/api/myOrange-for-lungishop/Android", {
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

export default LungiShopMyOrangeAppAndroid;
