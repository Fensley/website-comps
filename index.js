const createpara = document.getElementById("create");
const btn1 = document.getElementById("btn1");
const details = document.querySelector(".special1");
const start = document.querySelector(".special");
const special = document.getElementById("special");
const all = document.querySelectorAll(".first");

var bool = false;

btn1.addEventListener("click", () => {
  if (bool) {
    bool = !true;
    createpara.innerHTML =
      "Create an account and start sending invoices. You can also contact us to desgin a custom package to your business";
    btn1.innerHTML = "show details";
  } else {
    bool = true;
    createpara.innerHTML =
      "after you spend $8,000 on purchases on your new Card in your first 6 months of Card Membership This invite-only Amex Centurion ";
    btn1.innerHTML = "hide details";
  }
});

details.addEventListener("click", () => {
  start.classList.remove("special");
  details.classList.add("special");
  special.innerHTML = `The invite-only Amex Centurion "Black Card" has a $10,000 initiation fee and a $5,000 annual fee.
  Amex Platinum Card and Amex Business Platinum Card cardholders get many of the same travel benefits.
  `;
});
start.addEventListener("click", () => {
  details.classList.remove("special");
  start.classList.add("special");
  special.innerHTML = ` Special treatment is reserved for Centurion Members at a selection of exceptional hotels and resorts around the world. 
  Cardholders include celebrities who enjoy complimentary elite status, concierge access, and more.
  `;
});

all.forEach((each) => {
  each.addEventListener("click", () => {
    each.classList.toggle("first2");
  });
});
