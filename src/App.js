import { useState ,useEffect} from "react";
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [btnclr,setbtnclr]=useState('gray')
  const [start,setstart]=useState(true);

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []);
 const automate=(par)=>{
  if(par===true){
    setstart(false);
    console.log(
      "automate function run",start
        )
    
      if ('speechSynthesis' in window) {
        var date =new Date();
        var hours = date.getHours();
        if(hours>12){
          hours=hours-12;
        }
        const minutes = date.getMinutes();
      var timeformate= "hello ji abi time hua hai " + hours +"baj k " + minutes+ "minute";
     
      var utterance = new SpeechSynthesisUtterance(timeformate);
      utterance.rate = 0.8;
      utterance.lang = 'hi-IN';
      window.speechSynthesis.speak(utterance);
    } else {
      console.log('Speech synthesis not supported');
    }
   
    
   }
  }
  
  const handleclick=()=>{
    if(btnclr==='gray')
   {
    setbtnclr('red');
   }
   else
   setbtnclr('gray');
    console.log("onclick is call ")
    if ('speechSynthesis' in window) {
      var date =new Date();
      var hours = date.getHours();
      if(hours>12){
        hours=hours-12;
      }
      const minutes = date.getMinutes();
    // Create a new SpeechSynthesisUtterance object with the text to be spoken
    
    var timeformate= "hello ji  abi time hua hai " + hours +"baj k " + minutes+ "minute";
    console.log(date);
    var utterance = new SpeechSynthesisUtterance(timeformate);
    utterance.rate = 0.8;
    utterance.lang = 'hi-IN';
    // Use the speechSynthesis object to speak the utterance
    window.speechSynthesis.speak(utterance);
} else {
    console.log('Speech synthesis not supported');
}
 }
  return (
    <div className="container">
      <h1 style={{fontSize: "56px", textAlign: "center", color:'orange'}}>Current Time</h1>
      <div style={{ fontSize: "64px", textAlign: "center" ,color:'blue' }}>
      {automate(start)}
        {currentTime.toLocaleTimeString()}
        <div>
          <br></br>
          
          <button onClick={handleclick} style={{width:'2cm', cursor:'pointer',height:'1.5cm',fontSize:'15px' ,border:'solid green 6px', borderRadius:'10px' , backgroundColor:btnclr ,color:'blue'}} > SPEAK</button> 
        </div>
      </div>
    </div>
 
  )
}

export default App;
