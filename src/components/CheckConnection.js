import React from 'react'
import { Detector } from "react-detect-offline"
import SignalWifiOffIcon from '@mui/icons-material/SignalWifiOff';

const CheckConnection = (props) => {
  return (
   <>
   <Detector   
    render = {({ online}) => (
        online ? props.children:
        <div style={{paddingTop: "10px", textAlign: "center"}}>
      <SignalWifiOffIcon/>
      <h1 style = {{marginBottom: "5px"}}>No Connection</h1>
      <h4 style={{margin: "0"}}>Please Check your connection</h4>

    </div>
    )}
    />
   
   </>
  )
}

export default CheckConnection