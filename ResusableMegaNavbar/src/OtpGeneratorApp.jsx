import { useState, useEffect} from 'react';

export const OTPGenerator = () => {
    const [isAvailable,setAvaliable] = useState(false)
    const [hasExpired,setExpired] = useState(false)
    const [otp,setOtp] = useState(null)
    const [scnds,setScnds] = useState(5)
    
    
    const generateOtp=()=>{
        setAvaliable(true)
        setOtp(Math.floor(Math.random()*(999999 - 100000 +1)) + 100000)
        setScnds(5)
    } 

    useEffect(()=>{
        if(!isAvailable){
            return
        }
        const interval = setInterval(()=>{
            setScnds(prev => {
                const newScnds = prev - 1
                if(newScnds === 0){
                    setAvaliable(false)
                    setExpired(true)
                    setOtp(null)
                }
                return newScnds
            })
        },1000)
    
        return ()=> clearInterval(interval)
    },[isAvailable])




    return (<div className="container">
        <h1 id="otp-title">OTP Generator</h1>
        <h2 id="otp-display">{isAvailable? otp : "Click 'Generate OTP' to get a code"}</h2>
        <p id="otp-timer" aria-live="polite" >{isAvailable ? `Expires in: ${scnds} seconds` : hasExpired ? "OTP expired. Click the button to generate a new OTP.":'' }</p>
        <button onClick={generateOtp} disabled={isAvailable} id="generate-otp-button">Generate OTP</button>
    </div>)
};