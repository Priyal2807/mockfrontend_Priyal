import { useSelector } from "react-redux";
function Scroll() {
 
    const data = useSelector(state => state.data)
    console.log(data);
    return (
        <div className="scrolldivparent">
            <div className="scrolldiv">
                <span>1</span><div></div>
                <span>2</span><div></div>
                <span>3</span><div></div>
                <span>4</span>
            </div>
        </div>
   )
}

export default Scroll