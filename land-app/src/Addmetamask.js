// import react from 'react'
import './Addmetamask.css'

export default function Addmetamask(){
    return (
        <div className="container">
        <div className="icon">
        <img src={`/image5.png`} alt="" />
        </div>
        <div className="input">
            <input type="text" placeholder="Enter your private key here" className="input-bar"/>
            <button>Connect</button>
        </div>
        <div className="metamask">
            <img src={`/image.png`} alt=""/>
            <a href="/" id="anchor">METAMASK</a>
        </div>
    </div>
    )
}