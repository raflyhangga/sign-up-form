document
    .getElementById("buttonSubmit")
    .addEventListener("click", () => {
        document.getElementById("testForm").className="submitted";
    });

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm-password').value) {
      document.querySelector(".input-label span").style.color = 'green';
      document.querySelector(".input-label span").innerHTML = 'Password match';
    } else {
      document.querySelector(".input-label span").style.color = 'red';
      document.querySelector(".input-label span").innerHTML = 'Password not match';
    }
  }