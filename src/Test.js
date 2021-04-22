import React,{useEffect,useState} from 'react';
import axios from 'axios';

let nowday = new Date();  
let nowtoday=nowday.getFullYear()+"-"+((nowday.getMonth()+1)>10?(nowday.getMonth()+1):"0"+(nowday.getMonth()+1))+"-"+nowday.getDate();
console.log(nowtoday);


const Test = () => {

const [team,setTeam]=useState([]);

function today(day){
    return day.substr(0,10);
}

useEffect(()=>{
    axios.get('https://www.scorebat.com/video-api/v1/').then((Response)=>{
            setTeam(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
},[])

    return (
        <div>
            <h1>오늘의 축구 경기</h1>
            {team.map(soc =>{
    return (
        <>
        <div key={soc.title}>
                {soc.title} :({soc.competition.name}):{today(soc.date)}
        </div>
       
       </>
   )
})}

</div>
    );
};

export default Test;

{/* <div>
<h1>어제의 축구 경기</h1>
{team.filter(soc =>{
   return ((soc.date).includes(nowtoday)===true)}).map(function(soc){(
       <>
       <div>{soc.thumbnail}</div>
       <div key={soc.title}>
            {soc.title} :({soc.competition.name}):{soc.date}
       </div>
       </>
   )
})}

</div> */}



{/* <div>
<h1>오늘의 축구 경기</h1>
{team.map(soc =>{
   return (
       <>
       <div key={soc.title}>
            {soc.title} :({soc.competition.name}):{today(soc.date)}
       </div>
       
       </>
   )
})}

</div> */}


{/* <div>
        <h1>오늘의 축구 경기</h1>
        {team.filter(soc =>{ 
            (soc.date).includes(nowtoday)}).map(soc=>{
           return (
               <>
               <div key={soc.title}>
                    {soc.title} :({soc.competition.name}): {today(soc.date)}
               </div>
               
               </>
           )
        })}
        
        </div> */}