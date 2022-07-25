import React,{useState} from 'react'

export default function TextBox(props){
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const handleUpclick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(": Convert to upper Case","success")
    }
    const handleLoclick = ()=>{
        let newerText = text.toLowerCase();
        setText(newerText);
        props.showAlert(": Convert to lower Case","success")
    }
    const handleclearclick = ()=>{
        let newerText = "";
        setText(newerText);
        props.showAlert(": Clear","success")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert(": text copied","success")
    }
    const handleExtraSpace = ()=>{
        let newerText = text.split(/[ ]+/);
        setText(newerText.join(" "));
        props.showAlert(": Remove spaces","success")
    }
    const handleFirstCap = ()=>{
        let newerText = text.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1));
        setText(newerText.join(" "));
        props.showAlert(": Convert to sentence Case","success")
    }
    const[text,setText] = useState("Enter your text here");
    return(
        <>
            <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#031530',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleUpclick}>Upper-Case</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleLoclick}>Lower-Case</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleclearclick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy-Text</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleExtraSpace}>Remove-Space</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleFirstCap}>1st-letter-Capital</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
                <h2>Your text summary</h2>
                <p><b>{text.split(/\s+/).filter(ele =>{return ele.length !==0;}).length}</b> words and <b>{text.trim().length}</b> charcters</p>
                
                <p><b>{0.008 * text.split(" ").filter(ele =>{return ele.length !==0;}).length}</b> mins to read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : 'Nothing to preview!'}</p>
            </div>
      </>
    )
}