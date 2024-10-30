let question=document.querySelector("input")
let button =document.querySelector("button")
let result =document.querySelector("h1")

button.addEventListener('click',function(){
    console.log(question.value);
    if(question.value=="what is your name?"){
         result.innerHTML="My name is Habiba"
        result.style.color="blue"
        let utterance = new SpeechSynthesisUtterance("My name is Habiba");
        speechSynthesis.speak(utterance);
    
    }
    else if(question.value=="which course you are pursuing? "){
        result.innerHTML="Front End Development "
        result.style.color="blue"
        let utterance = new SpeechSynthesisUtterance("Front End Development");
        speechSynthesis.speak(utterance);

    }
    else if(question.value=="what is your batch number?"){
        result.innerHTML="2406"
        result.style.color="sandybrown"
        let utterance = new SpeechSynthesisUtterance("2406");
        speechSynthesis.speak(utterance);
    }
    else if(question.value=="your mentor's name?"){
        result.innerHTML=" Mr. Al-Amin"
         result.style.color="teal"
         let utterance = new SpeechSynthesisUtterance("Mr. Al-Amin");
         speechSynthesis.speak(utterance);
        
    }
    else if(question.value=="name?"){
        result.innerHTML= "Habiba"
        result.style.color="blue"
        let utterance = new SpeechSynthesisUtterance("Habiba");
        speechSynthesis.speak(utterance);

    }
    else if(question.value=="batch number?"){
        result.innerHTML="FDR-2406"
        result.style.color="sandybrown"
        let utterance = new SpeechSynthesisUtterance("FDR-2406");
        speechSynthesis.speak(utterance);
    }
    else if(question.value=="course name?"){
        result.innerHTML="Front End Development with React "
        result.style.color="blue"
        let utterance = new SpeechSynthesisUtterance("Front End Development with react");
        speechSynthesis.speak(utterance);
    }
    else if(question.value=="who is your mentor?"){
        result.innerHTML=" Mr. Al-Amin "
         result.style.color="teal"
         let utterance = new SpeechSynthesisUtterance("Mr. Al-Amin ");
         speechSynthesis.speak(utterance);
        
    }
    
})
// =================================================================================================
// partical js
$(function(){
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
})