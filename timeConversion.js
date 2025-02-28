function timeConversion(s) {
  
    // Write your code here  
    const ampm = s.slice(-2);
    const time = s.slice(0,-2).split(":");
    // console.log(time);
    let hour = parseInt(time[0]);
    const min = time[1] ;
    const sec = time[2] 
    // console.log(hour)
    if (ampm === "AM" && hour === 12){
      hour = 0
    }
    else if(ampm ==="PM" && hour !==12 ){
     hour = hour+12 
    
    }
    const result = (`${String(hour).padStart(2, "0")}:${min}:${sec}`);
    
    return result;
    
    }
    console.log(timeConversion("12:40:22AM"));
    console.log(timeConversion("12:00:00PM"));
    