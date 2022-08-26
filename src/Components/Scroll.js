import { useSelector } from "react-redux";
function Scroll() {
 
    const data = useSelector(state => state.data)
    console.log(data);
    let num = 0;
    if (data === undefined)
        num = 0;
    for (let i = 0; i < 4; i++) {
        if (data[i] !== undefined)
            num = data[i].label.number
    }
    const mystyle = { backgroundColor: "#5F73F1", color: "white"}
    return (
        <div className="scrolldivparent">
            {num === 0 ?
                <div className="scrolldiv">
                    <span>1</span><div></div><span>2</span><div></div><span>3</span><div></div><span>4</span>
                </div>
                : num === 1 ?
                    <div className="scrolldiv">
                        <span>1</span><div></div><span style={mystyle}>2</span><div></div><span>3</span><div></div><span>4</span>
                    </div>
                    : num === 2 ?
                        <div className="scrolldiv">
                            <span>1</span><div></div><span style={mystyle}>2</span><div></div><span style={mystyle}>3</span><div></div><span>4</span>
                        </div>
                        : <div className="scrolldiv">
                            <span>1</span><div></div><span style={mystyle}>2</span><div></div><span style={mystyle}>3</span><div></div><span style={mystyle}>4</span>
                        </div>
            }
        </div>

   )
}

export default Scroll