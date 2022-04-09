
import React, { useEffect ,useState} from 'react';
function Message({  data,status}) {
  const [show, setShow] = useState(true)
const {msg,type}=status;
useEffect(() => {
  const timeId = setTimeout(() => {
    // After 3 seconds set the show value to false
    setShow(false)
  }, 3000)

  return () => {
    clearTimeout(timeId)
  }
}, []);
if (!show) {
  return null;
}

  return (
    <div className='message-div'>
        <h5 className={`message-${type}`}>
     {msg}
        </h5>
    </div>
  )
}

export default Message;



  // On componentDidMount set the timer


  // If show is false the component will return null and stop here
 
  // If show is true this will be returned
