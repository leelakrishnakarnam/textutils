import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!", "success")
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!", "success")
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "New value"; // Wrongway to change value
    // setText("New value"); // Correct way to change value
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white':'grey', color: props.mode === 'dark' ? 'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container" my-2 style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview here :)"}</p>
            </div>
        </>
    )
}
