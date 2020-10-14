import React, { useState, useEffect } from 'react';
import { YtLoader } from 'react-ytloader';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';

function Settings() {
    const [startLoader, setStartLoader] = useState(false);
    
    const triggerStart = () => {
      setStartLoader(true);
    }

    const triggerEnd = () => {
      setStartLoader(false);
    }

    const options = { 
      barcolor: '#000', 
      spincolor: '#000', 
      transitionSpeed: 500,
      isStart: startLoader,
    }

    return (
      <div className="container">
        <h3>Settings</h3> <hr></hr>
        
        <YtLoader settings={options} onEnd={triggerEnd}/>
        <div className="container">
            <p>The demo with the options and buttons to control the loader is given below.</p>
            <button disabled={startLoader} className="btn btn-dark mr-2" onClick={triggerStart}>Start</button> 
            <button disabled={!startLoader} className="btn btn-dark" onClick={triggerEnd}>End</button>
            <br /><br />
            <p>We can change the color, speed of our loader. it can be done through four simple steps.</p>
            <h6>1 : Import the module and CSS</h6><hr></hr>
            <SyntaxHighlighter language="javascript" style={docco}>
              {
                `import { YtLoader } from 'react-ytloader';\nimport 'react-ytloader/dist/index.css';`
              }
            </SyntaxHighlighter>
            <h6>2: Create a state and add trigger methods for it</h6><hr></hr>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`const [startLoader, setStartLoader] = useState(false);\n\nconst triggerStart = () => {\nsetStartLoader(true);\n}\n\nconst triggerEnd = () => {\nsetStartLoader(false);\n}`}
            </SyntaxHighlighter>
            <h6>3: We can configure options for the loader </h6><hr></hr>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`const options = {\nbarcolor: '#000', //set bar color\nspincolor: '#000', //set spinner color\ntransitionSpeed: 200, //set speed\nisStart: true, //load if true\n}`}
            </SyntaxHighlighter>
            <h6>4: Give the loader with config and method </h6><hr></hr>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`return (<YtLoader settings={options} onEnd={triggerEnd}/>)`}
            </SyntaxHighlighter>

            <h5>Lets put all in one code </h5><hr></hr>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`function Component() {\n\nconst [startLoader, setStartLoader] = useState(false);\n\nconst triggerStart = () => {\nsetStartLoader(true);\n}\n\nconst triggerEnd = () => {\nsetStartLoader(false);\n}\n\nconst options = {\nbarcolor: '#000', //set bar color\nspincolor: '#000', //set spinner color\ntransitionSpeed: 200, //set speed\nisStart: true, //load if true\n}\n\nreturn (\n<YtLoader settings={options} onEnd={triggerEnd}/>\n<button disabled={startLoader} className="btn btn-dark mr-2" onClick={triggerStart}>Start</button>\n<button disabled={!startLoader} className="btn btn-dark" onClick={triggerEnd}>End</button>\n)\n}`}
            </SyntaxHighlighter>
            <p>For fetching api, we can see the <Link to="/api">example</Link>.</p>
        </div>
      </div>
    );
  }
  
  export default Settings;
  