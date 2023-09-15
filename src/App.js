import "./App.css";
import {
  Navbar,
  Homepage,
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  News,
} from "./components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Layout, Space } from "antd";
import {Typography} from "antd";
 

const App = () => {

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
        <br/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

              <Route path="/exchanges" element={<Exchanges />} />

              <Route path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

      <div className="footer" level={1} style={{color:"white", textAlign:"center"}}>
        <Typography.Title style={{color:"white",fontSize:"20px"}}>
          Cryptoreverse <br/>
          All rights reserved
          </Typography.Title>
          <Space >
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
      
      </div>
      </div>
    </div>
  );
};

export default App;
