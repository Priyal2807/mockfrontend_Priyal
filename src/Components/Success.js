import { useSelector } from "react-redux";

function Success() {
    const data = useSelector(state => state.data)
    return (
        <div className="sparent">
            <div className="imageContainer">
                <img src={require("../Images/success.png")} alt="Logo" height="50" />
            </div>
            <p>Congratulations, {data[0].label.fullname}</p>
            <p>You have completed onboarding, you can start using {data[1].label.wsname}</p>
            <button type="submit">Launch Eden</button>
            
        </div>
    )
}
export default Success;