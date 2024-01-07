var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let FirstName = document.getElementById("FirstName").value;
  console.log(FirstName);
  let LastName = document.getElementById("LastName").value;
  console.log(LastName);
  let Email = document.getElementById("Email").value;
  console.log(Email);
  let JobeRole = document.getElementById("jobrole").value;
  console.log(JobeRole);
  let Address = document.getElementById("Address").value;
  console.log(Address);
  let City = document.getElementById("City").value;
  console.log(City);
  let Pincode = document.getElementById("Pincode").value;
  console.log(Pincode);
  let Date = document.getElementById("Date").value;
  console.log(Date);
  let Upload = document.getElementById("Upload").value;
  console.log(Upload);
});
document.addEventListener("DOMContentLoaded", function () {
  let popup = document.getElementById("pop-up");
  let openPopup = document.getElementById("open-popup");
  openPopup.addEventListener("click", function () {
    if (myformsubmitted) {
      popup.style.display = "block";
      popup.style.position = "absolute";
      popup.style.top = "50%";
      popup.style.left = "40%";
      //you can add multiple class in onetime with the help of csstext
    }
  });

  let closePopup = document.getElementById("closepopup");
  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });

  let myform = document.getElementById("form");
  myform.addEventListener("submit", function (event) {
    event.preventDefault();
    myformsubmitted = "true";
  });
});
