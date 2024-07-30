import { useState } from "react";
import getWeb3 from "./getWeb3";
import "./Seller.css";
import LandRegister from "./landregister.json";

export default function BuyerForm() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const [aadharnumber, setaadharnumber] = useState("");
  const [pannumber, setpannumber] = useState("");
  const [document, setDocument] = useState("");
  const [email, setemail] = useState("");
  // const [landowned, setlandowned] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const web3 = await getWeb3();
  //     console.log(web3);

  //     await window.ethereum.request({ method: "eth_requestAccounts" });
  //     const accounts = await web3.eth.getAccounts();
  //     const defaultAccount = accounts[0];

  //     const contract = new web3.eth.Contract(
  //       LandRegister.abi,
  //       LandRegister.Contractaddress// Ensure this matches the JSON property name
  //     );
  //     contract.handleRevert = true;

  //     console.log("code is working properly");
  //     const response = await contract.methods
  //       .registerBuyer(
  //         name,
  //         age,
  //         city,
  //         aadharnumber,
  //         pannumber,
  //         document,
  //         email
  //       )
  //       .send({
  //         from: defaultAccount,
  //         gas: 3000000,
  //         gasPrice: "3000000",
  //       })
  //       .catch((e) => console.log(e))
  //       ;
  //     console.log("Transaction Hash: " + response.transactionHash);
  //   } catch (error) {
  //     console.error("Error registering buyer:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const web3 = await getWeb3();
      console.log(web3);

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];

      const contract = new web3.eth.Contract(
        LandRegister.abi,
        LandRegister.Contractaddress // Ensure this matches the JSON property name
      );
      contract.handleRevert = true;

      console.log('code is working properly');
      const response = await contract.methods
        .registerBuyer(name, age, city, aadharnumber, pannumber, document, email)
        .send({
          from: defaultAccount,
          gas: 1000000,
          gasPrice: "10000000000",
        });
      console.log("Transaction Hash: " + response.transactionHash);

    } catch (error) {
      console.error("Error registering buyer:", error);
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          className="input"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="aadharnumber"
          placeholder="Aadhar Number"
          value={aadharnumber}
          onChange={(e) => setaadharnumber(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="pannumber"
          placeholder="PAN Number"
          value={pannumber}
          onChange={(e) => setpannumber(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="document"
          placeholder="Document"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
