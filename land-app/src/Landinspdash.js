import './Landinspdash.css'

export default function Landinspdash(){
    return(
        <div className="cont">
        <div className="nav">
            <h2>Land Inspector Dashboard</h2>
        </div>
        <div className="dashboard">
            <section>
                <div className="icon">
                    <div className="img"><img src="image2.png" alt=""/></div>
                    <h3>Land Inspector</h3>
                </div>
                <div className="links">
                    <a href="#">Dashboard</a>
                    <a href="">Verify User</a>
                    <a href="">Verify Land</a>
                    <a href="">Transfer Ownership</a>
                    <a href="">Log Out</a>
                </div>
            </section>
            <div className="form">
                <img src="image3.png" alt=""/>
            </div>
        </div>
    </div>
    );
}