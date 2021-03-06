import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import YtLoader  from 'react-ytloader';

function Introduction() {
    const [ start, setStart ] = useState(false);

    const changeStart = () => {
      setStart(true);
    }

    return (
      <div className="container">
        <h3>React Youtube Loader</h3> <hr></hr>
        <p>Lets install the npm module for <b>react youtube loader</b>.</p>
        <div className="container">
          <YtLoader settings={{isStart: start}} /> 
          <SyntaxHighlighter language="powershell" style={docco}>
              {
                `npm install react-ytloader --save`
              }
          </SyntaxHighlighter>
          <p>
            The code base was maintained in the <a href="https://github.com/iamnachi/react-ytloader-base" target="_blank">github</a>.
          </p>
          <button className="btn btn-dark"  onClick={changeStart}>Click me to see it</button>
          <p></p>
          <p>  
            After installation lets <Link to="/react-ytloader/getstarted">get started</Link> now.
          </p>
          <p> 
            If you have any queries <a href="mailto:nachisinbox@gmail.com">contact me</a>.
          </p>
          
        </div>
      </div>
    );
}
  
  export default Introduction;
  