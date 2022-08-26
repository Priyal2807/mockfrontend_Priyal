import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        fullname: "",
        displayname: "",
        number:1
    })

    const handlechange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value,number:1 })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type:'ADD',
            payload: {
                label: data,
                id:Math.ceil(Math.random()*100)
            }
        })

        navigate("/workspace");
    }
    return (
        <div className="mainparent">
            <p>Welcome! First Things first...</p>
            <p>You can always change them later</p>
            <form method="post" action="" className="mainpageForm" onSubmit={handleSubmit}>
                <label> Full Name </label><br />
                <input type="text" name="fullname" value={data.fullname} required onChange={handlechange} /><br />
                <label> Display Name </label><br />
                <input type="text" name="displayname" value={data.displayname} required onChange={handlechange} /><br />
                <button type="submit">Create Workspace</button>
            </form>
        </div>
    )
}
export default MainPage;