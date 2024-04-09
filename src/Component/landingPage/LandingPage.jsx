/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./landingpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
import { logo, background } from "../../assets/images";
// import { useEffect, useState } from "react";

const LandingPage = () => {
  const [betsNumber, setBetsNumber] = useState(71674500);

  useEffect(() => {
    // Start counting upwards
    const interval = setInterval(() => {
      // Increment the betsNumber
      setBetsNumber((prevNumber) => prevNumber + 1);
    }, 200); // Interval in milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  const formattedBetsNumber = betsNumber.toLocaleString(); // Format number with commas

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        opacity: 0.1,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Set background color to the same as borderColor

        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [10, 5, 25, 39, 50, 61, 46, 45, 30],
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.1,
      },
      {
        label: "Dataset 3",
        data: [29, 69, 55, 61, 46, 45, 30],
        fill: "true",
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.2)",

        tension: 0.1,
      },
    ],
  };

  // Optional configuration options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "white",
          spacing: 20, // Increase the space between horizontal grid lines
        },
      },

      x: {
        grid: {
          display: false, // Disable vertical grid lines
        },
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <div className="text">
          <h1>
            <i>CRYPTO CASINO & CUSTOM GAMES</i>
          </h1>
          <p className="texting">
            Hypeloot will offer all popular Casino game modes and also adds an
            innovative touch by developing brand new game <br />
            modes,
            <b>
              {" "}
              Hypeloot is also one of the only upcoming Crypto casinos having a
              Fiat Payment Gateway.
            </b>
          </p>
        </div>
        <div className="second-text">
          <div>
            <p className="notified">
              Get notified(ABout the Hypeloot Token and Airdrops)
            </p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button className="apply" type="submit">
                apply
              </button>
            </form>
          </div>
          <div className="box">
            <p className="bets">
              Bets placed on hypeloot.com <br /> <b>{formattedBetsNumber} </b>by{" "}
              <b>183,981</b> users
            </p>
          </div>
        </div>
        <div className="chart-side">
          <div className="first-box">
            <h1 className="first-box-heading">$1,068,917</h1>
            <p className="first-box-text">97.17% of minimum goal raised</p>
            <div className="bigger-progress-bar">
              <div className="progress-bar"></div>
            </div>
            <p className="progress-bar-text">$1,100,000</p>
            <div className="participants">
              <p>1895 Participants</p>
            </div>
            <p className="bolder">Listing Price =$0.2</p>
            <div className="line"></div>
            <p className="bolder">1 $HPLT = $0.10125</p>
            <div className="buttons">
              <button className="eth"> ETH</button>
              <button className="bsc">BSC</button>
            </div>
            <div className="buttons-2">
              <button className="ETH">ETH</button>
              <button className="usdt">USDT</button>
              <button className="usdc">USDC</button>
            </div>
            <p className="eth">AMOUNT IN ETH YOU PAY</p>
            <input className="transaction" type="number" />
            <p className="eth">AMOUNT IN $HPLT YOU RECIEVE + RARE NFT</p>
            <input className="transaction" type="number" />
            <p className="last-part">
              In order to buy $HPLT with ETH, please confirm the transcation in
              your wallet. You may need to check the wallet app if you're on
              mobile
            </p>
            <button className="connect-wallet"> CONNECT WALLET</button>
          </div>
          <div className="second-box">
            <div className="graph">
              <h2 className="line-graph">Line Graph Example</h2>
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="big-box">
          <div className="mini-box">
            <div>
              <p>Total Rewards $USDT</p>
              <h2>873,614</h2>
            </div>
            <div>
              <p>Total Rewards $USDT</p>
              <h2>873,614</h2>
            </div>
            <div>
              <p>Total Rewards $USDT</p>
              <h2>873,614</h2>
            </div>
            <div>
              <p>Total Rewards $USDT</p>
              <h2>873,614</h2>
            </div>
            <div>
              <p>Total Rewards $USDT</p>
              <h2>873,614</h2>
            </div>
          </div>
          <div className="big-box-2">
            <div className="mini-box-2">
              <div>
                <p>Total Rewards $USDT</p>
                <h2>873,614</h2>
              </div>
              <div>
                <p>Total Rewards $USDT</p>
                <h2>873,614</h2>
              </div>
            </div>

            <div className="line-2"></div>
            <div className="mini-box-2">
              <div>
                <p>Total Rewards $USDT</p>
                <h2>873,614</h2>
              </div>
              <div>
                <p>Total Rewards $USDT</p>
                <h2>873,614</h2>
              </div>
            </div>
            <div className="line-2"></div>
            <div>
              <p>Total Rewards $USDT</p>
              <h2>873,614</h2>
            </div>
          </div>
        </div>
        <div className="secure">
          <h1>
            {" "}
            <i>100% Secure</i>
          </h1>
        </div>
        <div className="secure-box">
          <div className="secure-box-1">
            <img className="img" src={logo} alt="" />
            <h3>Custom games & Physical delivery</h3>
            <p>
              All of our current games are developed fully by our team, we are
              also one of the only crypto-based casinos offering real item
              deliveries in over 50+ countries.
            </p>
          </div>
          <div className="secure-box-2">
            <img className="img" src={logo} alt="" />
            <h3>Team is KYC Verified</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              tempore atque eligendi.
            </p>
          </div>
          <div className="secure-box-2">
            {" "}
            <img className="img" src={logo} alt="" />
            <h3>Team is KYC Verified</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              tempore atque eligendi.
            </p>
          </div>
        </div>
        <div className="incoporation">
          <h1>
            <i>INCORPORATION</i>
          </h1>
          <p>
            HypeLoot is a brand name of Abacanes LTD, Reg No: HE443277, Having
            its registered <br /> address at Strovolou, 77 STROVOLOS CENTER, 4th
            floor, Office 401 Strovolos, Nicosia, Cyprus
          </p>
          <img src={logo} alt="" />
          <div>
            <button className="certificate">
              CERTIFICATE OF INCORPORATION
            </button>
          </div>
        </div>
        <div className="hype">
          <h1>
            <i>HYPES NFT UNIVERSE</i>
          </h1>
        </div>
        <div className="pep">
          <div className="nfts">
            <div className="invincible"></div>
            <div className="pepe">
              <img src={logo} alt="" />
            </div>
            <h2>Diamond PEPE</h2>
            <p className="diamond">Diamond</p>
            <div className="info">
              <p>Left:3/3</p>
              <p>Supply: 3</p>
            </div>
            <div className="minimum">
              <p>Minimum Presale Contribution: 50,000$</p>
            </div>{" "}
          </div>
          <div className="nfts">
            <div className="invincible"></div>
            <div className="pepe">
              <img src={logo} alt="" />
            </div>
            <h2>Diamond PEPE</h2>
            <p className="diamond">Diamond</p>
            <div className="info">
              <p>Left:3/3</p>
              <p>Supply: 3</p>
            </div>
            <div className="minimum">
              <p>Minimum Presale Contribution: 50,000$</p>
            </div>{" "}
          </div>
          <div className="nfts">
            <div className="invincible"></div>
            <div className="pepe">
              <img src={logo} alt="" />
            </div>
            <h2>Diamond PEPE</h2>
            <p className="diamond">Diamond</p>
            <div className="info">
              <p>Left:3/3</p>
              <p>Supply: 3</p>
            </div>
            <div className="minimum">
              <p>Minimum Presale Contribution: 50,000$</p>
            </div>
          </div>
        </div>
        <button className="show">Show More</button>
      </div>
    </>
  );
};

export default LandingPage;
