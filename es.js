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

function checkAnswer(e) {
   e.preventDefault();

   const text = document.getElementById('ester-type').value;
   let right;

   switch (text) {
      case "Джамбаз тепе":
         right = true;
         break;
      case "Djambaz tepe":
         right = true;
         break;
      case "djambaz tepe":
         right = true;
         break;
      case "джамбаз тепе":
         right = true;
         break;
      case "Джамбаз Тепе":
         right = true;
         break;
      case "Djambaz Tepe":
         right = true;
         break;
      case "djambaz Tepe":
         right = true;
         break;
      case "джамбаз Тепе":
         right = true;
         break;
      default:
         right = false;
         break;
   }

   if (right) {
      window.location.href = "https://danchoivlado.github.io/EsterErhan.github.io/main.html";
   }
}
