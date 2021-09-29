import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Head from './Head'
import Left from './Left'
import Center from './Center'
import Right from './Right'

ReactDOM.render(
  <React.StrictMode>
    <div className="display">
      <App />
      <Head one="CURICUUM VITAE" two="ALI MONIS"/>
      <div className="body">
      <Left one="PROFILE" two="An internship/job or research opportunity 
      that will allow me to utilize my problem solving skills and attention
       to detail to further develop my abilities in the field of Computer Science." three="CONTACT"
       four="0333-2192649" five="Flat # 20/A, 6th Floor, Society App P.E.C.H.S block 02, Kashmir Road, Karachi."
        six="Monisali1@hotmail.com" seven="HOBBIES" eight="Reading" nine="Travel" ten="Coding" eleven="Writing"/>
      <Center/>
      <Right one="EDUCATION" two="  Graduation : BSCS from ILMA University
       (4st  year in process)." three="  Intermediate : Commerce Private
        from Karachi Board." four="  Matriculation : Computer Science from Karachi Board" five="SKILLS" 
        six=" HTML" seven=" CSS" eight=" JavaScript" nine=" Photoshop"
        ten=" Illustrator" eleven=" MS-word" onee="EXPERIANCE" twoo="  Created OLX clone website using HTML and CSS only."
         threee="  Created UPWORK clone website using HTML and CSS only." 
         fourr="  Created web calculator using HTML, CSS and JavaScript." 
         fivee="  Created web Timer using HTML, CSS and JavaScript."/>
   
      </div>
     
   </div>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

