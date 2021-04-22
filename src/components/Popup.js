import "./Popup.css"

const Popup = (props) => {
    return (props.trigger)?( 
        <div className="popup">
            <div className="popup-inner">
                <div className='invalidtext'>{props.children}</div>
                <div ><button className="close-btn" onClick={()=>props.setTrigger(false)}>Close</button></div>
            </div>
        </div>
     ):'';
}
 
export default Popup;