function coinFlip() {
  let x = Math.random();
  if (x >= 0.5) {
    console.log("Heads");
    document.getElementById("coin").innerHTML = "Heads";
  } else {
    console.log("Tails");
    document.getElementById("coin").innerHTML = "Tails";
  }
}

function diceroll() {
  let x = document.getElementById("dicenumber");
  document.getElementById("roll").innerHTML = (Math.floor(x.options[x.selectedIndex].value * Math.random())) + 1;
}

function shopping() {
  var qty = clean(document.getElementById("qty").value);
  var item = clean(document.getElementById("item").value);
  var ul = document.getElementById("shoppinglist");
  var li = document.createElement("li");
  if (qty == 0 || item == 0) {
    alert("You need to put something into both Qty and Item text box!");
  } else {
    li.appendChild(document.createTextNode(qty + " x " + item));
    ul.appendChild(li);
    li.addEventListener("click", crossout);
  }

}

function crossout() {
  this.classList.toggle("cross");
}

function clearFields() {
  document.getElementById("qty").value = "";
  document.getElementById("item").value = "";
}

function compatabilityCheck() {
  let job = clean(document.getElementById("jobdescription").value);
  var matches = job.match(/HTML|CSS|JS|Javascript|Python|STEM|Bootstrap/gi);
  document.getElementById("matches").innerHTML = "Matches: " + matches;
  if (job.length == 0) {
    alert("You need to put something into the job description text box!");
  } else if (matches == null) {
    document.getElementById("jobcomment").innerHTML = "This job is not for you...";
  } else if (0 < matches.length && matches.length <= 2) {
    document.getElementById("jobcomment").innerHTML = "Not a bad match might want to apply for this one.";
    console.log(job);
  } else {
    document.getElementById("jobcomment").innerHTML = "Apply for this one right now!";
  }
}
//Protection against injection.
function clean(string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}
//jquery
// var script = document.createElement('script');
// script.src = 'jquery-3.6.0.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
$(document).ready(function(){
  $("#hide").click(function(){
    $("#hidden").toggle();
  });
});

// $(window).scroll(function() {
//   parallax();
// })
//
// function parallax() {
//   var yScroll = $(window).scrollTop();
//   console.log(hello);
//   $('.parallax').css('background-position', 'center ' + (yScroll*0.1) + 'px');
// }
//
// $(window).scroll(function() {
//   parallax();
// })
