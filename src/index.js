var btn = document.querySelector("button");
var field = document.querySelector("input");
btn.addEventListener("click", hlpr); //om clicking start counter
function hlpr() {
  console.log(field.value); // to get the input field data
  var curval = field.value; //setting it as current value
  var inp = field.value + "";
  console.log(inp);
  /*Making the inp string value a proper 5 digit number with starting
  zeros if needed to do so.
  */
  if (inp.length > 5) alert("ENTER NUMBER WITHIN THE RANGE SPECIFIED!");
  else {
    if (inp.length == 1) inp = "0000" + inp;
    else if (inp.length == 2) inp = "000" + inp;
    else if (inp.length == 3) inp = "00" + inp;
    else if (inp.length == 4) inp = "0" + inp;
    //done making a 5 digit number as "00001" if input was 1
    console.log(inp);
    var t_bool = [
      true,
      true,
      true,
      true,
      true
    ]; /*
    Setting all invidual top boolean check as true as 
    we start with entering data into .tops class p tag[LINE 28]
    */
    var tops = document.querySelectorAll(".top");
    var lower = document.querySelectorAll(".lower");
    for (var i = 0; i < tops.length; i++) tops[i].innerText = inp[i];
    var id = setInterval(function () {
      let newval = curval - 1;
      if (newval <= 0) clearInterval(id); //terminate when value hits 0
      let newboxval = newval + "";
      if (newboxval.length == 1) newboxval = "0000" + newboxval;
      else if (newboxval.length == 2) newboxval = "000" + newboxval;
      else if (newboxval.length == 3) newboxval = "00" + newboxval;
      else if (newboxval.length == 4) newboxval = "0" + newboxval;
      //similar as line 16-18 read comment 20
      for (var i = 0; i < 5; i++) {
        if (newboxval[i] != inp[i]) {
          if (t_bool[i] == true) {
            t_bool[i] = false; //setting t_bool as false as next entry should be in top
            lower[i].innerText = newboxval[i];
            //insert the animate class
            lower[i].classList.add("animate"); //adding class animate into lower
          } else {
            t_bool[i] = true;
            tops[i].innerText = newboxval[i];
            //remove animate class;
            lower[i].classList.remove("animate"); //removing class animate for lower
          }
        }
      }
      inp = newboxval;
      curval = newval;
    }, 1000);
  }
}
