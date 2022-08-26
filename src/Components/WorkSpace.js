import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function WorkSpace() {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        wsname: "",
        wsurl: "",
        number:2
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
        navigate("/use")
    }
    return (
        <div className="wsparent">
            <p>Let's setup a home for all your work</p>
            <p>You can always create another workspace later</p>
            <form method="post" action="" className="wsform" onSubmit={handleSubmit}>
                <label> Workspace Name </label><br />
                <input type="text" name="wsname" value={data.wsname} required onChange={handlechange} /><br />
                <label> Workspace URL (optional)</label><br />
                <input type="text" name="wsurl" value={data.wsurl} onChange={handlechange} /><br />
                <button type="submit">Create Workspace</button>
            </form>
        </div>
    )
}
export default WorkSpace;