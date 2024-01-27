import * as React from 'react'

export const Timer = () => {
    const [days, setDays] = React.useState(0)
    const [hours, setHours] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)
  
    const deadline = "January, 28, 2024";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
  
    }
  
    React.useEffect(()=>{
      const interval = setInterval(() => getTime(deadline), 1000)
  
      return () => clearInterval(interval)
    }, [])
  
    return(
      <React.Fragment>
      {` ${days}: ${hours}: ${minutes}: ${seconds} `}
      </React.Fragment>
    )
  }
  
