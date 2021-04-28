import React from 'react';
import '../Css/Home.css'
import {nowtoday} from './ContentBasic'



// 스코어 및 하이라이트
function good(d, s, id) {
     let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
       js = d.createElement(s); 
       js.id = id; 
       js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; 
       fjs.parentNode.insertBefore(js, fjs);
    }
    good(document, 'script', 'scorebat-jssdk');



const Home = () => {
    return (
        <div>
            
             <h1> summarize 
            ({nowtoday})
            </h1>
            <iframe src="https://www.scorebat.com/embed/"  className="_scorebatEmbeddedPlayer_"></iframe> 
        </div>
    );
};

export default Home;