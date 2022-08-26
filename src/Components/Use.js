import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Use() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        formyself: "",
        forteam: "",
        number:3
    })
    const handlechange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD',
            payload: {
                label: data,
                id: Math.ceil(Math.random() * 100)
            }
        })

        navigate("/success")
    }
    return (
        <div className="uparent">
            <p>How are you planning to use Eden</p>
            <p>We'll streamline your setup experience accordingly</p>
            <form method="post" action="" className="uform" onSubmit={handleSubmit}>
                <div className="typeofspace">
                    <span>
                        <input type="radio" value="myself" name="formyself" id="myself" onChange={handlechange} />
                        <label>
                            <img src={require("../Images/myself.png")} alt="Logo" height="110"/>
                        </label>
                    </span>
                    <span>
                        <input type="radio" value="team" name="forteam" id="team" onChange={handlechange} />
                        <label>
                            <img src={require("../Images/team.png")} alt="Logo" height="110" />
                        </label>
                    </span>
                </div>
                <button type="submit">Create Workspace</button>
            </form>
        </div>
    )
}
export default Use;