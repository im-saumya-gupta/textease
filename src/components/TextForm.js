import React,{useState} from 'react';
export default function TextForm(props) {
  
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted in uppercase!','success')
    }

    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted in lowercase!','success')
    }
    const handleClearClick=()=>{
        let newText = "";
        setText(newText);
        props.showAlert('Text cleared!','success')
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert('Copy to clipboard!','success')
    }

    const removeExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed!','success')
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState('');
  return (
   <div className='container'>
        <div className='container my-2'>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} id="text-form" onChange={handleOnChange} value={text} rows="8" style={{backgroundColor:props.mode==='dark'?'#1614145c':'white'}}></textarea>
            </div>
            <button className='btn btn-primary mx-3 my-3' onClick={handleUpClick}>Convet to Uppercase</button>
            <button className='btn btn-primary mx-3 my-3' onClick={handleLowClick}>Convet to Lowercase</button>
            <button className='btn btn-primary mx-3 my-3' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-3 my-3' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-3 my-3' onClick={removeExtraSpace}>Remove Extra Space</button>
        </div>
        <div className='my-3'>
        <h3>Your Text Summary</h3>
            <p>Words:{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Characters: {text.length} </p>
            <h4>Time: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</h4>
        </div>
        <div className='preview'>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
   </div>
  )
}
