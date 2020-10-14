import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const YtLoader = (props) => {

  const [ settings, setSetting ] = useState(props.settings);
  const [ percentage, setPercentage] = useState(-100);
  const [ show, setShow] = useState(false);
  const [ isStart, setStart]  = useState((settings?.isStart) ? settings?.isStart : false);
  const [ barcolor, setBarColor] =  useState((settings?.barcolor) ? settings?.barcolor : '#c40b0a');
  const [ spincolor, setSpinColor] =  useState((settings?.spincolor) ? settings?.spincolor : '#c40b0a');
  const [ transitionSpeed, setSpeed ]  =  useState((settings?.transitionSpeed) ? settings?.transitionSpeed : 200);
  
  useEffect ( () => {
    setSetting(props.settings);
    setStart(props.settings?.isStart);
    setBarColor(props.settings?.barcolor);
    setSpinColor(props.settings?.spincolor);
    //setSpeed(props.settings?.transitionSpeed);
  }, [props.settings]);

  useEffect ( () => {
    //console.log(isStart, show );
    //(settings?.barcolor) ? setBarColor(settings?.barcolor) : setBarColor('#29d')
    //(settings?.spincolor) ? setSpinColor(settings?.spincolor) : setSpinColor('#29d')
    //(settings?.transitionSpeed) ? setSpeed(settings?.transitionSpeed) : setSpeed(3000)
    if(isStart) {
      setPercentage(-100); setShow(true);
    } else {
      setPercentage(0);
      
    }
  }, [isStart])

  useEffect( () => {
    if(percentage === 0) {
      setTimeout(() => {
        setShow(false); props.onEnd(); 
      }, transitionSpeed)
    }
    const interval =  setInterval(() =>  {      
      if(percentage !== 0) setPercentage(parseInt(percentage) + 10); 
    }, transitionSpeed)
    
    return () => clearInterval(interval); 
  }, [percentage])
 
  return (
    <div id={styles.ytloader} className={ (show === false) ? styles.hide : '' }>
      <div className={styles.bar} style={{background: barcolor, transition: `all ${transitionSpeed}ms ease 0s`, transform: `translate3d(${percentage}%, 0px, 0px)`}} role="bar"><div className={styles.peg} style={{ boxShadow: `0 0 10px ${barcolor}, 0 0 5px ${barcolor}`}}></div></div>
      <div className={styles.spinner} role="spinner"><div className={styles.icon} style={{ borderTopColor: spincolor, borderLeftColor: spincolor }}></div></div>
    </div>
  )
  
}

YtLoader.defaultProps  = {
  onEnd: () => {

  }
}

export default YtLoader;