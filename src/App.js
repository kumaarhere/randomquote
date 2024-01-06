import './App.css';

import logo from './raise-hand-removebg-preview.png';
       function generateRandomQuote()
      {
        fetch(`https://api.quotable.io/random`)
        .then((res)=>res.json())
        .then((data)=>{
         document.querySelector("#quote").innerHTML =data.content;
         document.querySelector(".author").innerHTML ="-"+data.author;
        });
      };
      function Talk(){
        const speakBtn=document.querySelector(".fa-volume-high");
        const quote=document.getElementById("quote");
        const authors=document.querySelector(".author");
        speakBtn.addEventListener("click",function(){
              const talk=new SpeechSynthesisUtterance(quote.textContent+" by "+authors.textContent);
              speechSynthesis.speak(talk); 
        });
        };
        const quote=()=>{
        const data=document.getElementById("quote");
        const authors=document.querySelector(".author");
        navigator.clipboard.writeText(data.textContent+" by "+authors.textContent);
      }
      function Copy(){
        const clip=document.getElementById("text");
        clip.addEventListener("click",()=>{
          quote();
        })

      }
     

function App() {
  return (
    <div className="whole">
      <div className='logo'>
        <a href="https://github.com/kumaarhere"><img src={logo}alt="together" title="together" id='logo'></img></a>
      </div>
      <div className="container">
        <div className="quote-area">
        <i class="fa-solid fa-quote-left"></i>
          <h3 id="quote">It is not truth that matters, but victory.</h3>
          <i class="fa-solid fa-quote-right"></i>
          <p className="author">-Kumar</p>
        </div>
        <div className="activities">
          <div className="info">
            
              <li><i class="fa-solid fa-volume-high" onClick={Talk}></i></li>
              <li><i class="fas fa-copy" title="copy" id="text" onClick={Copy}></i></li>
              <li><i class="fab fa-twitter"></i></li>
          </div>
          <div className="random">
            <button className="btn" onClick={generateRandomQuote}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
