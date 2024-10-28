import './Homescreen.css';
import image from './coglogo.jpg';
function Homescreen(){
    const lcontent=[
        {
            image:"",
            title:"How it began",
            info:"Covenant of Grace a place where champions are made was planted in April/29/2008 by the RCCG it was planted under the City of David as it parish ",
        },
        {
            title:"Progress",
            info:"Since Covenant of Grace was planted we have been able to accomplished a lot. We have been able to plant more than 4 church authorized be the RCCG and still planting ",
        },
        {
            title:"Vision",
            info:"We covenant of Grace are proud christens and our vision are in accordance with the RCCG visions",
        },
    ]
    const service=[
        {
            title:"Sunday Services",
            infoo:"From the hours of 8:00AM to 11:30AM, this consisiting of the sunday school class and the redemers services",
        },
        {
            title:"Wednesday services",
            Comment:"From the hours of 6:00PM to 8:00PM it is a joint services featuring both Bible study & Faith clinic",
        },
        {
            title:"House Fellowship",
            Comment:"House ferllowship holds every sunday except on first sunday",
            info:"1. Love House",
            infoo:"@Ekwulobia street, lion power area",
            
        },
        {
            info:"2. Peace House",
            infoo:"@The church auditorium"
        },
    ]

    return(
        <div className="homescreen">
            <div classNmae="top">
                <div className="logo-holder">
                    <img src={image}/>
                </div>
                <div className="flexsible">
                    <div className="left-coloum">
                    {lcontent.map((item,index)=>(
                        <div key={index} className="left-coloum-holder">
                        <div className="image"></div>
                        <div className="content">
                            <h2>{item.title}</h2>
                            <p>{item.info}</p>
                        </div>
                    </div>
                    ))}
                    </div>
                    <div className="right-coloum">
                            <div className="service"><h2>Services</h2></div>
                            {service.map((item,index)=>(
                            <div key={index} className="info">
                                <ul>
                                    <li><h3>{item.title}</h3><h4>{item.Comment}</h4><h4>{item.info}</h4><p>{item.infoo}</p></li>
                                </ul>
                            </div>
                            ))}
                            <div className="bottom">
                                <div className="location">
                                    <h3>Location</h3>
                                    <p> Orimerunmu Mowe/Ibafo axis Ogun-State, Tiawo street Off Lion-power .</p>
                                </div>
                                <div className="contact">
                                    <h3>Contact</h3>
                                    <a href='www.facebook.com@Covenant of Grace'><p>facebook</p></a>
                                    <h4>Copyright@</h4>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Homescreen;