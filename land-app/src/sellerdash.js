import React from 'react';
import { useNavigate } from 'react-router-dom';
import getWeb3 from './getWeb3';
import LandRegister from './landregister.json';
import './sellerdash.css';


export default function Sellerdash() {
  const navigate = useNavigate();

  const handleAddLandClick = async (e) => {
    e.preventDefault();

    try {
      const web3 = await getWeb3();
      console.log(web3);

      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];

      const contract = new web3.eth.Contract(
        LandRegister.abi,
        LandRegister.Contractaddress // Ensure this matches the JSON property name
      );
      const response = await contract.methods.isSeller(defaultAccount)
      .send({
          from: defaultAccount,
          gas: 1000000,
          gasPrice: "10000000000",
        });
        console.log('code is working here')
      if (response === true) {
        navigate('/addland');
      } else {
        console.log("User is not a seller");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="cont">
      <div className="dashboard">
        <section>
          {/* <div className="icon">
            <div className="img"><img src={`./image2.png`} alt=""/></div>
            <h3>User</h3>
          </div> */}
          <div className="links">
            <a href="/">Dashboard</a>
            <a href="/addland" onClick={() => navigate('/addland')}>Add Lands</a>
            <a href="/">My Lands</a>
            <a href="/">Land Gallery</a>
            <a href="/">My Received Request</a>
            <a href="/">Log Out</a>
          </div>
        </section>
        <div className="form">
          {/* <img src="image3.png" alt=""> */}
        </div>
      </div>
    </div>
  );
}

