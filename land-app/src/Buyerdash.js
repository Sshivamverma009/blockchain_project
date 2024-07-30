
import './sellerdash.css'
import getWeb3 from './getWeb3';
import { useState } from 'react';


const [Name, setname] =  useState('');
const [age, setage] = useState('');
const [city,setcity] = useState('');
const [aadharnumber, setaadhar] = useState('');
const [pannumber, setpannumber] = useState('');
const [document, setdocument] = useState('');
const [email, setemail] = useState('');



const Payment = async (e) => {
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
      const response = await contract.methods.payment(receiver_add, landID)
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
  const requestLand = async (e) => {
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
      const response = await contract.methods.requestLand(sellerID, landID)
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
  const updateBuyer = async (e) => {
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
      const response = await contract.methods.updateBuyer(
        Name,
        age,
        city,
        aadharnumber,
        pannumber,
        document,
        email
      )
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



export default function Buyerdash(){
    return (
        <div className="cont">
        <div className="dashboard">
            <section>
                {/* <div className="icon">
                    <div className="img"><img src="" alt=""/></div>
                    <h3>User</h3>
                </div> */}
                <div className="links">
                    <a href="Payment" onClick={payment}>Payment</a>
                    <a href="RequestLand"onClick={requestLand}>request land</a>
                    <a href="updateLayer" onClick={updateBuyer}>update Buyer</a>
                    {/* <a href="GetSeller">get Seller </a>
                    <a href="GetlandOwner">get land owner</a>
                    <a href="GetDocument">get Documents</a>
                    <a href="GetPrice">get price</a>
                    <a href="GetPFD">get PID</a> */}
                </div>
            </section>
            <div className="form">
                {/* <img src="image3.png" alt=""> */}
            </div>
        </div>
    </div>
    );
}