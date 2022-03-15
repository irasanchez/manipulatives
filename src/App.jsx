import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function App () {

  const demos = ["for loop", "while loop", "while loop evolves into for loop"]

  const [ currentDemo, setCurrentDemo ] = useState(0)

   const [activeSection, setActiveSection] = useState(0)

  const [ isPlaying, togglePlaying ] = useState(false)
  
 return (<div className="App">
   <select>{demos.map(demo => <option>{demo}</option>)}</select> 
        <div><button onClick={() => setActiveSection(activeSection !== 0 ? activeSection - 1 : 0 )} >⬅️</button><button onClick={() => togglePlaying(!isPlaying)} >⏯</button><button onClick={() => setActiveSection(activeSection === 2 ? 0 : activeSection + 1 )} >➡️</button></div>
   
   { demos[currentDemo] === "for loop" && <ForLoop isPlaying={isPlaying} activeSection={activeSection} setActiveSection={setActiveSection}/> }</div>)
}

function ForLoop ({activeSection, setActiveSection, isPlaying}) {
console.log(activeSection, typeof activeSection)
  
    return (
      
       <> <KeyWord style={{marginRight: "5px", border: activeSection === 0 ? "3px solid orange" : "", padding:"0 2px"}} word="for"/> <Expression isActive={activeSection === 1} activeSection={activeSection} delimiter=";" style={{border: activeSection === 1 ? "3px solid orange" : "", padding:"0 2px"  }} content={["let i = ", "i < ", "i ++"]}/> <CodeBlock lines={3} lineContents={["console.log(count)"]}  style={{border: activeSection === 2 ? "3px solid orange" : "", padding:"0 2px"}}/>
       </>
    )
}

function KeyWord({word, style}){
  return <span style={style}>{word}</span>
}


function Expression ({ delimiter, style, content, isActive}) {
  
  const [subActiveSection, setSubActiveSection] = useState(0)

  const generateExpression = () => {
    let expressionsJSX = []
    expressionsJSX.push(<span style={{marginRight: "5px"}} >(</span>)
    for (let i = 0; i < content.length; i++){
     expressionsJSX.push(<span style={{backgroundColor: isActive && subActiveSection === i ? "cyan" : ""}}>{content[i]} { !content[i].includes("++") && <NumberInput value={0} />}</span>)
      if(i < content.length - 1){
        expressionsJSX.push(<span style={{marginRight: "5px"}}>{delimiter}</span>)
      }
    }
    expressionsJSX.push(<span style={{margin: "0 5px"}} >{")"}</span>)
    return expressionsJSX
  }
  
 
  
  return <span style={style}>{generateExpression()}</span>
}


function CodeBlock({lines, lineContents, style}){
  return (<span style={style}><span>{"{"}</span><br />{lineContents.map(line =><><span style={{marginLeft: "30px"}}>{line}</span><br /></>)}<span>{"}"}</span></span>)
}

function NumberInput({value}){
  return <input type="number" value={value} style={{width: "35px"}} />
}

export default App;