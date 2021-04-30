import React from 'react';
import '../Css/ContentBasic.css'
import {useParams} from 'react-router-dom'

//영국 리그 페이지
const ENGLAND='ENGLAND'

// 어제의 날짜 만들기
let nowday = new Date();  
export let nowtoday=nowday.getFullYear()+"-"+((nowday.getMonth()+1)>10?(nowday.getMonth()+1):"0"+(nowday.getMonth()+1))+"-"+(nowday.getDate()-1);

// 사이트 이동 함수
function href(name){
    name=name.replace(" ","-")
    name=name.toLowerCase()
    // console.log(name)
    return "https://www.scorebat.com/live-stream/"+name
}


const ContentBasic = ({team}) => {
    
    // 나라별 리스트 
    let {nation}=useParams();
    // console.log(nation);

    return (
        <>
        <h1> Soccer-1 ⚽ 
        </h1>
            ({nowtoday})
        <div className="content">
            {team.map(soc =>{
                if((soc.date).includes(nowtoday)&&(soc.competition.name).includes(nation))
                {                  
                        return ( 
    <>
        <div className="container">
            <div className="itmes">
                <div className="homeawaycon">
                    <a href={href(soc.side1.name)}><h2>홈팀 정보 🔍 </h2></a>
                    <a href={href(soc.side2.name)}><h2>어웨이팀 정보 🔍</h2></a>
                </div>
                <div className="eachflex">
                    <h3 className="eachitems" key={soc.title}>
                            {soc.title} ({soc.competition.name}) 
                    </h3>
                
                </div>
                <h4> 하이라이트 보기 📺 </h4>
                {/* <img src={soc.thumbnail}></img> */}
                <div className="videoflex">
                    <div className="video" dangerouslySetInnerHTML={{__html:soc.embed}}></div>  
                </div>
       </div>
       </div>
    </>
   )}
   
})}

</div>
</>  
    );
};

export default ContentBasic;