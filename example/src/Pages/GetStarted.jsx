import React from 'react';
import { YtLoader } from 'react-ytloader';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';

function GetStarted() {
    return (
      <div className="container">
        <h3>Getting started</h3> <hr></hr>
        <p>Lets start using react youtube loader in your application. It can be done in two simple steps.</p>
        <YtLoader settings={{isStart: true}} /> 
        
        <div className="container">
            <h6>1 : Import the module and CSS</h6><hr></hr>
            <SyntaxHighlighter language="javascript" style={docco}>
              {
                `import { YtLoader } from 'react-ytloader';\nimport 'react-ytloader/dist/index.css';`
              }
            </SyntaxHighlighter>
            <h6>2 : Include the loader in your component</h6><hr></hr>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`function Component() {\n return (<YtLoader  />)\n}`}
            </SyntaxHighlighter>
            <p>When this page refresh, loader will load. we can also <Link to="/settings">customize</Link> it.</p>
        </div>
      </div>
    );
  }
  
  export default GetStarted;
  