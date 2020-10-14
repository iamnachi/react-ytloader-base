import React, { useState, useEffect } from 'react';
import { YtLoader } from 'react-ytloader';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';

function Api() {
    const [startLoader, setStartLoader] = useState(false);
    const [users, setUsers] = useState([]);

    const triggerStart = () => {
      setStartLoader(true);
    }

    const triggerEnd = () => {
      setStartLoader(false);
    }

    const options = { 
      barcolor: '#c40b0a', 
      spincolor: '#c40b0a', 
      transitionSpeed: 200,
      isStart: startLoader,
    }

    const fetchUser = async () => {
      setUsers([])
      triggerStart();
      await fetch("https://jsonplaceholder.typicode.com/users").then( data => data.json()).then(
        json => {
        //console.log(json)
        setTimeout( () => {
          triggerEnd();
        
          setUsers(json) 
        }, 2000) 
        
      }).catch( (err) => {
        triggerEnd();
      })
    };

    return (
      <div className="container">
        <h3>API</h3> <hr></hr>
        <YtLoader settings={options} onEnd={triggerEnd}/>
        <div className="container">
            <p>The demo using fetch api is given below. </p>
            <button disabled={startLoader} className="btn btn-dark" onClick={fetchUser}>Fetch</button>
            {
              (users.length > 0) ? 
                users.map( (user, key) => {
                  return (
                  <div className="card mt-2"  key={user.id}>
                    <div className="card-header">
                    {user.name}
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">{user.name}</h6>
                    </div>
                  </div>);
                }) 
              : (startLoader) ? <p className="mt-2">loading...</p> : <p></p>
            }
            <p></p>
            <h6>Lets modify the code sligtly as shown below. </h6><hr></hr>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`function Component() {\n\nconst [startLoader, setStartLoader] = useState(false);\n\nconst triggerStart = () => {\nsetStartLoader(true);\n}\n\nconst triggerEnd = () => {\nsetStartLoader(false);\n}\n\nconst options = {\nbarcolor: '#000', //set bar color\nspincolor: '#000', //set spinner color\ntransitionSpeed: 200, //set speed\nisStart: true, //load if true\n}\n\nconst fetchUser = async () => {\n setUsers([]);\n triggerStart();\n await fetch("https://jsonplaceholder.typicode.com/users").then( data => data.json()).then(\n  json => {\n   setTimeout( () => {\n    triggerEnd();\n    setUsers(json);\n  }, 2000)\n }).catch( (err) => {\n  triggerEnd();\n })\n};\n\nreturn (\n<YtLoader settings={options} onEnd={triggerEnd}/>\n<button disabled={startLoader} className="btn btn-dark mr-2" onClick={fetchUser}>Fetch</button>\n)\n}`}
            </SyntaxHighlighter>
            
            
        </div>
      </div>
    );
  }
  
  export default Api;
  