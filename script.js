gsap.registerPlugin(TextPlugin);

const getHire = document.getElementById("btnHire");
const getEmail = document.getElementById("btnEmail");
const getPhone = document.getElementById("btnPhone");
const getWrapperbtnhire = document.getElementById("wrapperBtnhire");

//function Progress Bar
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelectorAll(".progress-bar");
  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    progressBar.forEach((el, i) => {
      const elBounding = el.getBoundingClientRect().top;

      if (elBounding < windowHeight - 5) {
        el.classList.add("myAniprogress");
      } else {
        el.classList.remove("myAniprogress");
      }
    });
  });
});

// function link to email
getEmail.addEventListener("click", () => {
  window.open(
    "mailto:frenata.ap@gmail.com?subject=Vacancy Offers&body=Dear Frenata,",
    "_blank"
  );
});

// function link to whatsapp
getPhone.addEventListener("click", () => {
  alert(
    "Sorry, Under Maintenance. If you are a recruiter, please contact me by email, thank you. "
  );
  // window.location.href =
  //   "https://wa.me/6285000000?text=Hello%20Frenata.%0AI'm%20Interested%20in%20hiring%20you%20in%20our%20company";
});

// function hide and seek button email and phone

getHire.addEventListener("click", () => {
  getWrapperbtnhire.classList.toggle("mySeekOF");
});

// GSAP
gsap.from(".img-fluid", {
  duration: 2,
  opacity: 0,
});

gsap.to(".tGsappone", {
  duration: 2,
  text: `" Every step you take, destiny is determined "`,
});
