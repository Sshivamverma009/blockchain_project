import { useState } from "react";
import getWeb3 from './getWeb3'
import "./LandInspector.css";
import LandRegister from './landregister.json'

export default function LandInspector() {
  const [Name, setName] = useState("")
  const [age, setage] = useState("") 
  const [designation, setdesignation] = useState("")


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
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
      console.log(Name, age, designation);
      const response = await contract.methods
        .addLandInspector(
         Name,
         age,
         designation
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
    <div className="addlandinspector">
      <form>
        <h3>Add Lands</h3>
        <input
          type="text"
          placeholder="Name"
          className="input"
          name="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Age"
          className="input"
          name="age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Designation"
          className="input"
          name="designation"
          value={designation}
          onChange={(e) => setdesignation(e.target.value)}
        />
        <br />
        <div className="button">
          <button onClick={handleSubmit}>ADD</button>
        </div>
      </form>
    </div>
  );
}
