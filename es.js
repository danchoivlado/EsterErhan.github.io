function channelSplit(elem) {
    if (elem) {
       const inner = elem.innerHTML;
       elem.innerHTML = "";
       
       const spanHidden = document.createElement("span");
       spanHidden.classList.add("channel-split-static");
       spanHidden.innerHTML = inner;
       elem.appendChild(spanHidden);
       
       ["red", "green", "blue"].forEach(x => {
          const span = document.createElement("span");
          span.classList.add("channel-split");
          span.classList.add(`channel-split-${x}`);
          span.innerHTML = inner;
          elem.appendChild(span);
       });
    }
 }
 
 channelSplit(document.getElementById("text"));
 
 document.getElementById('ester-form').addEventListener('submit', checkAnswer)

 document.getElementById('ester-a').addEventListener('click', checkAnswer)

 function checkAnswer(e){
   e.preventDefault();

const text = document.getElementById('ester-type').value;
if(text === "Nebet tepe"){
   window.location.replace("https://danchoivlado.github.io/ester.github.io/main.html");
}
 }
