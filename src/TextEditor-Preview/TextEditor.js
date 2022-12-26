import {marked} from "marked"
import React from "react";
import "./Text.css"
export default function TextEditor() {
  let ref1=React.useRef(null);
  let ref2=React.useRef(null);
  let ref3=React.useRef(null)
  let ref5=React.useRef(null)
  let ref6=React.useRef(null)
  let ref4=React.useRef(null)
  const initialState=`
 # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
\/\/ this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  ![google](https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
`;
  
  console.log(marked.parse(initialState))
  let [input,setInput]=React.useState(initialState);

let  marktext=marked.parse(input,{breaks:true})
  function handleChange(e)
  {
  setInput(e.target.value)
  }
    
  function handleMinimise(e)
  {
   ref1.current.style.display="none";
   ref2.current.style.display="inline-block";
   ref3.current.style.height="200px";
   
  }
  function handleMaximise(e)
  {
    ref2.current.style.display="none";
   ref1.current.style.display="inline-block";

  let m=ref3.current.scrollHeight+'px';
  console.log(m)
  ref3.current.style.height = m;
  }
  function handleMinimisePre(e)
  {
   ref4.current.style.display="none";
   ref5.current.style.display="inline-block";
   ref6.current.style.height="300px";
   
  }
  function handleMaximisePre(e)
  {
    ref5.current.style.display="none";
   ref4.current.style.display="inline-block";

  let m=ref6.current.scrollHeight+'px';
  console.log(m)
  ref6.current.style.height = m;
  }
  // const markdown=input?marked(input):"";
    return (
    <div>
        <div className='editor-window'>
            <div className='editor-title'>
                <span className='editor-title-left'><i className="fab fa-free-code-camp pe-1" ></i>Editor</span>
                    <div onClick={handleMinimise} ref={ref1} style={{display:"none"}}><i className="fa fa-compress compress-icon"></i></div>
                    <div onClick={handleMaximise} ref={ref2} > <i className="fa fa-arrows-alt compress-icon"></i></div>
            </div>
            <div>
                <textarea rows="10" id="editor" onChange={handleChange} ref={ref3} contentEditable="true" value={input} />
            </div>
        </div>
        <div id="preview-wrapper">
            <div className='editor-title'>
                 <span className='editor-title-left'><i className="fab fa-free-code-camp pe-1" ></i>Editor</span>
                <div onClick={handleMinimisePre} ref={ref4} style={{display:"none"}}><i className="fa fa-compress compress-icon"></i></div>
                <div onClick={handleMaximisePre} ref={ref5} > <i className="fa fa-arrows-alt compress-icon"></i></div>
            </div>
            <div>
             <div id="preview" ref={ref6} dangerouslySetInnerHTML={{__html:marktext}}   />
            </div>
        </div>
    </div>
  )
}

