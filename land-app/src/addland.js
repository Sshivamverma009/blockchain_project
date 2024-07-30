import { useState } from "react";
import getWeb3 from './getWeb3'
import LandRegister from './landregister.json'
import "./addland.css";
export default function AddLand() {
  
const [area, setarea] = useState('')
const [city, setcity] = useState('')
const [state, setstate] = useState('')
const [landPrice, setlandPrice] = useState('')
const [propertyPID, setpropertyPID] = useState('') 
const [survey, setsurvey] = useState('')
const [document, setdocument] = useState('')



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

      console.log("code is working properly");
      const response = await contract.methods
        .addLand(
         area,
         city, 
         state,
         landPrice,
         propertyPID,
         survey,
         document
        )
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
    <div className="addland">
      <form action="">
        <h3>Add Lands</h3>
        <input 
        type="text" 
        placeholder="Area" 
        className="input" 
        name="area" 
        value={area}
        onChange={(e) => setarea(e.target.value)}
        />
        <br />
        <input 
        type="text" 
        placeholder="City" 
        className="input" 
        name="city" 
        value={city}
        onChange={(e) => setcity(e.target.value)}
        />
        <br />
        <input 
        type="text" 
        placeholder="State" 
        className="input" 
        name="state" 
        value={state}
        onChange={(e) => setstate(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Land Price"
          className="input"
          name="landprice"
          value={landPrice}
          onChange={(e) => setlandPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="PropertyPID"
          className="input"
          name="propertyPID"
          value={propertyPID}
          onChange={(e) => setpropertyPID(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Survey No."
          className="input"
          name="surveyno"
          value={survey}
          onChange={(e) => setsurvey(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Document"
          className="input"
          name="document"
          value={document}
          onChange={(e) => setdocument(e.target.value)}
        />
        <br />
        <label for="file" className="upload">
          Upload File
        </label>
        <input type="file" id="file" />
        <br />
        <div className="button">
          <button type="submit" onClick={handleSubmit}>ADD</button>
        </div>
      </form>
    </div>
  );
}
