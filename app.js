console.log("palindrom app");

//if you do getelem by id then you have to give id not class got it
let btn = document.getElementById("btn");

btn.addEventListener("click", function myFunction() {
  console.log("btn click");
  let input = document.getElementById("inpt").value;
  //   console.log(input);
  check(input);
});

function check(text) {
  console.log(text);

  let newText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let len = newText.length;
  console.log(len);
  let halfLen = Math.floor(len / 2);
  console.log(halfLen);
  i = 0;
  //it is looping on index of array and calculating on based of it.
  for (let i = 0; i < halfLen; index++) {
    if (newText[i] !== newText[len - 1 - i]) {
      let result = document.getElementById("result");
      result.textContent = `${text} is Not palindrom`;
      return;
    }
    result.textContent = `${text} is palindrom`;
  }
}
