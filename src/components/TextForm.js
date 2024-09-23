import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    props.showAlert("Your text has been converted to upper case.", "success")
    setText(newText)
    
  };
  const lowerUppercase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Your text has been converted to lower case.", "success")

  };
  const removeExtraSpaces = ()=>{
    let newText = text.replace(/\s+/g,' ').trim();
    setText(newText);
    props.showAlert("Extra spaces from text has been removed.", "success")
  }
  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied on clipboard.", "success")
  }
  const clearText = ()=>{
    setText('')
    props.showAlert("Text has been cleared", "success")
  }

  const onChangeHandle = (event) => {
    setText(event.target.value)
  };

  const onClickReplaceBtn = () => {
    const searchWord = document.getElementById("searchWord").value
    const replaceWord = document.getElementById("replaceWord").value
    const textareaValue = document.getElementById("exampleFormControlTextarea1").value;

    let result = textareaValue.replaceAll(searchWord,replaceWord)
    setText(result)
    //console.log(searchWord,replaceWord)
    props.showAlert("Text has been replaced", "success")

  }

  let totalWords = text.split(" ")
  let uniqueWords = new Set(totalWords);

  let Char1 =  text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
  let charCount = Char1.replace(/\s/g, '').length

  return (
    <>
    <div className="mb-3" style = {{color: props.mode === "light"? "black" : "grey"}}>
      <h1 className="mb-3">{props.heading}</h1>
      <textarea
        value={text}
        onChange={onChangeHandle}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        placeholder="Enter your text here."
      ></textarea>

      <div className="m-2 mt-4">
      <h2 className="mb-3">Search Word</h2>
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input id="searchWord" type="text" class="form-control" placeholder="search word?" />
        </div>
        <h2>Replaced With</h2>
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input id="replaceWord" type="text" class="form-control" placeholder="enter  word to replace!" />
        </div>

        <button className="btn btn-outline-primary" onClick={onClickReplaceBtn}>Replace</button>
      </div>

      <h2 className="mt-4">Play With The Text</h2>
      <button className="btn btn-primary my-3 mx-1" onClick={handleUppercase}>Convert to UpperCase</button>
      <button className="btn btn-danger my-3 mx-1" onClick={lowerUppercase}>Convert to LowerCase</button>
      <button className="btn btn-warning my-3 mx-1" onClick={removeExtraSpaces}>Remove extra Spaces</button>
      <button className="btn btn-success my-3 mx-1" onClick={copyToClipboard}>Copy to clipboard</button>
      <button className="btn btn-info my-3 mx-1" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3 " style = {{color: props.mode === "light"? "black" : "grey"}}>
    <h1>Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes takes to read</p>
    <h2>Analyzing Section</h2>
    <div className="my-3 bg-secondary rounded p-3">
      <h2>Word Count Section</h2>
      <div className="">
        <div className="w-50">
          <p>Total word Count: <span className="text-warning">{totalWords.length-1}</span></p>
          <p>Unique Word Count: <span className="text-warning">{uniqueWords.size-1}</span></p>
        </div>
        
          <p className="display-7">Words are : </p>
          
            <span className="text-danger"> --:  </span>{totalWords.map(eachword => {
              return <span className="text-warning">{(eachword) + " "}</span>
            })}
          
        
      </div>
    </div>
    <div className="my-3 bg-secondary rounded p-3">
      <h2>Character Count Section</h2>
      <div className="">
          <p>Character Count: <span className="text-warning">{charCount}</span></p>
          <p>Character Count With Spaces and punctuation: <span className="text-warning">{text.length}</span></p>
      </div>
    </div>
    <h2>Preview</h2>
    <h5>{text.length>0 ? text : "Enter text in the above textbox to preview here"}</h5>
    </div>
    </>
  );
}
