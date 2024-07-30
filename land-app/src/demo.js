import getWeb3 from './getWeb3'
import LandRegister from './landregister.json'

export default function Getsellercount(){
    const handlechange = async () =>{
        const web3 = await getWeb3();
          console.log(web3);
          await window.ethereum.enable();
        //   const accounts = await web3.eth.getAccounts();
          const contract = new web3.eth.Contract(
            LandRegister.abi,
            LandRegister.Contractaddress
        );
        const response = await contract.methods.getBuyer().call()
        console.log(response)
        console.log('program executed successfully');
    }
    return (
        <button type='submit' onClick={handlechange}>getSellerCount</button>
    )
}
