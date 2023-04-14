import './Time.css'

function Time(props){
    const monthArray = ["January" , "febraury" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "octobar" , "november" 
, "december"]
    const month = monthArray[props.time.getMonth()-1];
    const year = props.time.getFullYear();
    const date = props.time.getDate();
    return (
       <div className='months'>
          <div className='mon'>{month}</div>
          <div className='year'>{year}</div>
          <div className='din'>{date}</div>
       </div>
    );
}

export default Time;