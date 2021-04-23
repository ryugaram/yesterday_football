import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './Css/Test.css'

// 어제의 날짜 만들기
let nowday = new Date();  
let nowtoday=nowday.getFullYear()+"-"+((nowday.getMonth()+1)>10?(nowday.getMonth()+1):"0"+(nowday.getMonth()+1))+"-"+(nowday.getDate()-1);
console.log(nowtoday);

//api 데이터 날짜 함수처리
// function today(day){
//     return day.substr(0,10);
// }

// 사이트 이동 함수
function href(name){
    return "https://www.scorebat.com/live-stream/"+name
}

//스코어 및 하이라이트
function good(d, s, id) {
     let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
       js = d.createElement(s); 
       js.id = id; 
       js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; 
       fjs.parentNode.insertBefore(js, fjs);
    }
    good(document, 'script', 'scorebat-jssdk');


const Test = () => {

    //넘어오는 데이터 담을 useState
const [team,setTeam]=useState([]);


useEffect(()=>{
    axios.get('https://www.scorebat.com/video-api/v1/').then((Response)=>{
            setTeam(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
},[])

    return (
        <>
        <h1>어제 경기 하이라이트 <br/>
            {nowtoday}
        </h1>
        <div className="content">
            <iframe src="https://www.scorebat.com/embed/"  class="_scorebatEmbeddedPlayer_"></iframe>
            {team.map(soc =>{
                if((soc.date).includes(nowtoday)){
                    return ( 
    <>
        <div className="container">
            <div className="itmes">
                <div className="homeawaycon">
                    <a href={href(soc.side1.name)}><h2>홈팀 전적 🔍 </h2></a>
                    <a href={href(soc.side2.name)}><h2>어웨이팀 전적 🔍</h2></a>
                </div>
                <div className="eachflex">
                    <h3 className="eachitems" key={soc.title}>
                            {soc.title} ({soc.competition.name}) 
                    </h3>
                </div>
                <img src={soc.thumbnail}/>
        </div>
       </div>
    </>
   )}
   
})}

</div>
</>
    );
    
};

export default Test;
