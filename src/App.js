import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';


import Dashboard from './components/Dashboard';

// Shop A 
import ShopAMyOrangeAppAndroid from './components/shopA/Shop-A-My-OrangeApp-Android';
import ShopAOrangeMoneyAfricaAndroid from './components/shopA/Shop-A-OrangeMoneyAfrica-Android';
import ShopAOrangeMoneyAfricaIphone from './components/shopA/Shop-A-OrangeMoneyAfrica-Iphone';
import ShopAMyOrangeAppIphone from './components/shopA/Shop-A-My-OrangeApp-Iphone';

// Shop B
import ShopBMyOrangeAppAndroid from './components/shopB/Shop-B-My-OrangeApp-Android';
import ShopBOrangeMoneyAfricaAndroid from './components/shopB/Shop-B-OrangeMoneyAfrica-Android';
import ShopBOrangeMoneyAfricaIphone from './components/shopB/Shop-B-OrangeMoneyAfrica-Iphone';
import ShopBMyOrangeAppIphone from './components/shopB/Shop-B-My-OrangeApp-Iphone';



// Shop C
import ShopCMyOrangeAppAndroid from './components/shopC/Shop-C-My-OrangeApp-Android';
import ShopCOrangeMoneyAfricaAndroid from './components/shopC/Shop-C-OrangeMoneyAfrica-Android';
import ShopCOrangeMoneyAfricaIphone from './components/shopC/Shop-C-OrangeMoneyAfrica-Iphone';
import ShopCMyOrangeAppIphone from './components/shopC/Shop-C-My-OrangeApp-Iphone';

// Shop D
import ShopDMyOrangeAppAndroid from './components/shopD/Shop-D-My-OrangeApp-Android';
import ShopDOrangeMoneyAfricaAndroid from './components/shopD/Shop-D-OrangeMoneyAfrica-Android';
import ShopDOrangeMoneyAfricaIphone from './components/shopD/Shop-D-OrangeMoneyAfrica-Iphone';
import ShopDMyOrangeAppIphone from './components/shopD/Shop-D-My-OrangeApp-Iphone';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Shop A */}
          <Route path="/" element={<Dashboard />} />

          <Route path="my-orangeApp-shop-A-Android" element={<ShopAMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-shop-A-Android" element={<ShopAOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-shop-A-iphone" element={<ShopAOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-shop-A-iphone" element={<ShopAMyOrangeAppIphone />} />


          {/* Shop B */}
          <Route path="my-orangeApp-shop-B-Android" element={<ShopBMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-shop-B-Android" element={<ShopBOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-shop-B-iphone" element={<ShopBOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-shop-B-iphone" element={<ShopBMyOrangeAppIphone />} />


          {/* Shop C */}
          <Route path="my-orangeApp-shop-C-Android" element={<ShopCMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-shop-C-Android" element={<ShopCOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-shop-C-iphone" element={<ShopCOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-shop-C-iphone" element={<ShopCMyOrangeAppIphone />} />

          {/* Shop C */}
          <Route path="my-orangeApp-shop-D-Android" element={<ShopDMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-shop-D-Android" element={<ShopDOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-shop-D-iphone" element={<ShopDOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-shop-D-iphone" element={<ShopDMyOrangeAppIphone />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
