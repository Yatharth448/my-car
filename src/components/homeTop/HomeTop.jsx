import "./homeTop.css"
import DateTime from "../datetime/DateTime"
export default function HomeTop() {
    return (
        <div className="homeTopContainer">
            <div className="textContainer">
                <h1 className="textOne">The perfect car for your next trip is just around the corner</h1>
                <h3 className="textTwo">Book your ride now!</h3>
            </div>

            <div className="searchContainer">
                <div className="searchLeft">

                </div>
                <div className="searchCenter">
                </div>
                <div className="searchRight">
                <span className="searchBtnText">GET CAR</span>
                </div>
                    <DateTime />
            </div>

        </div>
    )
}
