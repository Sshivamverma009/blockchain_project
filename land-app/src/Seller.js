import { useState } from "react";
import "./Seller.css";
import getWeb3 from "./getWeb3";
import LandRegister from "./landregister.json";

export default function SellerForm() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const [aadharnumber, setaadharnumber] = useState("");
  const [pannumber, setpannumber] = useState("");
  // const [email, setemail] = useState("");
  const [landowned, setlandowned] = useState("");
  const [document, setDocument] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log(formData); // Handle form submission (e.g., send data to server)
  //   try {
  //     const web3 = await getWeb3();
  //     console.log(web3);
  //     await window.ethereum.request({ method: "eth_requestAccounts" });
  //     const accounts = await web3.eth.getAccounts();
  //     const contract = new web3.eth.Contract(
  //       LandRegister.abi,
  //       LandRegister.Contractaddress
  //     );
  //     contract.handleRevert = true;
  //     const response = await contract.methods
  //     .registerSeller(
  //       name,
  //       age,
  //       city,
  //       aadharnumber,
  //       pannumber,
  //       landowned,
  //       document
  //     )
  //     .send({ from: accounts[0], gasPrice: 300000 });
  //     console.log("code is working");
  //     console.log(response);
  //   } catch (error) {
  //     console.log("something went wrong", error);
  //   }
  // };

  const handleSubmit = async (e) => {
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
      contract.handleRevert = true;
      console.log(name, age, city, aadharnumber, pannumber, landowned, document);
      const response = await contract.methods
        .registerSeller(
          name,
          age,
          city,
          aadharnumber,
          pannumber,
          landowned,
          document
        )
        .send({
          from: defaultAccount,
          gas: 1000000,
          gasPrice: "10000000000",
        });
      console.log("code is working properly");
      console.log("Transaction Hash: " + response.transactionHash);
    } catch (error) {
      console.error("Error registering buyer:", error);
    }
  };

  return (
    <div className="form">
      <form>
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
          placeholder="city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="aadharnumber"
          placeholder="AadharNumber"
          value={aadharnumber}
          onChange={(e) => setaadharnumber(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="pannumber"
          placeholder="PAN number"
          value={pannumber}
          onChange={(e) => setpannumber(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="landowned"
          placeholder="landowned"
          value={landowned}
          onChange={(e) => setlandowned(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="input"
          name="document"
          placeholder="document"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
        />
        <br />
        <div className="button">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}
