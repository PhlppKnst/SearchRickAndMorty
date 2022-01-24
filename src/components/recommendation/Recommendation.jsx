import './Recommendation.css';

function Recommendation({text,clickCb}) {
    /*
    Recommendation shows a string and can handle a click event which calls a callback with the string
    text: text to show in the component
    clickCb: callback is executed on mouse click with the text as argument
    */
    return(
        <div className="Recommendation" onClick={()=>{clickCb(text)}}>{text}</div>
    )

}

export default Recommendation