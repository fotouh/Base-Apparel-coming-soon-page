let reg = /\w+@\w+.\w{3}/i;

let btn = document.getElementById("ValidMail").nextElementSibling;
// console.log(btn);
// console.log(reg.test("fotouhmohamed2002@gmail.com"));
btn.addEventListener("click", function () {
  let inp = document.getElementById("ValidMail");
  let InpValue = document.getElementById("ValidMail").value;
  let NewEr = document.createElement("span");
  let errTex = document.createElement("p");
  let par = btn.parentElement;

  console.log(reg.test(InpValue));
  if (reg.test(InpValue)) {
    inp.value = "";
    document.getElementById("ValidMail").style.border =
      "1px solid hsl(0, 36%, 70%)";
    Swal.fire({
      title: "Thank You",
      text: "We Will Contact You ASAP",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    if (btn.previousElementSibling.id === "Error") {
      btn.previousElementSibling.remove();
      btn.nextElementSibling.remove();
    }
  } else {
    if (par.lastElementChild !== document.getElementById("ErrorText")) {
      document.getElementById("ValidMail").style.border = "3px solid red";
      console.log("er");
      NewEr.setAttribute("id", "Error");
      btn.before(NewEr);
      errTex.innerHTML = "Please provide avalid Email";
      errTex.setAttribute("id", "ErrorText");
      btn.after(errTex);
      NewEr.style.backgroundImage = "../images/icon-error.svg";
    }
  }
});
