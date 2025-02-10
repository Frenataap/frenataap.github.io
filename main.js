const getMenuhome = document.getElementById("menuhome");
const getMenuskills = document.getElementById("menuskills");
const getMenuproject = document.getElementById("menuproject");
const getMenusocial = document.getElementById("menusocial");

const getMyhome = document.getElementById("myhome");
const getMyskills = document.getElementById("myskills");
const getMyproject = document.getElementById("myproject");
const getMysocial = document.getElementById("mysocial");

getMenuhome.addEventListener("click", () => {
  getMyhome.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

getMenuskills.addEventListener("click", () => {
  getMyskills.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

getMenuproject.addEventListener("click", () => {
  getMyproject.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

getMenusocial.addEventListener("click", () => {
  getMysocial.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

const getTextchange = document.getElementById("textchange");
const arrayTextchange = [
  "WEB DEVELOPER",
  "PROGRAMMER",
  "FULLSTACK",
  "FREELANCER",
];
const elementParent = document.getElementById("elementParent");
const arrayDataskills = [
  {
    skills: "HTML",
    rate: 5,
  },
  {
    skills: "CSS",
    rate: 5,
  },

  {
    skills: "JavaScript",
    rate: 4,
  },
  {
    skills: "PHP",
    rate: 4,
  },
  {
    skills: "Dart",
    rate: 2,
  },
  {
    skills: "Bootstrap",
    rate: 4,
  },
  {
    skills: "Tailwind",
    rate: 3,
  },
  {
    skills: "CodeIgniter",
    rate: 4,
  },
  {
    skills: "Laravel",
    rate: 4,
  },

  {
    skills: "React",
    rate: 3,
  },

  {
    skills: "Nodejs",
    rate: 2,
  },
  {
    skills: "Flutter",
    rate: 2,
  },
  {
    skills: "Instalation Computer",
    rate: 4,
  },
  {
    skills: "Network",
    rate: 4,
  },

  {
    skills: "Ms. Excel",
    rate: 4,
  },
  {
    skills: "Ms. Excel",
    rate: 4,
  },
];

function createComponent(e) {
  for (let i = 0; i < e; i++) {
    const wrapperChild = document.createElement("div");
    wrapperChild.setAttribute("class", "wrapperChild");
    const wrapperChildclass = document.querySelectorAll(".wrapperChild");

    window.addEventListener("scroll", () => {
      if (window.scrollY < 149 || window.scrollY > 1270) {
        wrapperChildclass.forEach((el, i) => {
          el.style.opacity = "0";
        });
      } else if (window.scrollY > 150 && window.scrollY < 1266) {
        wrapperChildclass.forEach((el, i) => {
          el.style.opacity = "1";
        });
      }
    });

    const childSpan = document.createElement("span");
    const childDiv = document.createElement("div");

    elementParent.appendChild(wrapperChild);
    wrapperChild.appendChild(childSpan);
    wrapperChild.appendChild(childDiv);

    for (let j = 0; j < 5; j++) {
      const childRate = document.createElement("div");
      childDiv.appendChild(childRate);

      window.addEventListener("scroll", () => {
        if (window.scrollY > 150 && window.scrollY < 1266) {
          if (arrayDataskills[i].rate > j) {
            setTimeout(() => {
              childRate.style.backgroundColor = "rgb(235, 227, 213)";
            }, 100 * j);
          }
        } else {
          if (arrayDataskills[i].rate > j) {
            childRate.style.backgroundColor = "transparent";
          }
        }
      });
    }

    childSpan.textContent = arrayDataskills[i].skills;
  }
}

createComponent(arrayDataskills.length);

const arrayDataproject = [
  {
    title: "Web-based Orphanage Mapping Application",
    description:
      "This application was created to make it easier to search for orphanages in a city in Indonesia. This application was created using CodeIgniter 4, Leaflet JS, and MySQL.",
    link: "See More",
  },
  {
    title: "Daily Activity Report Application",
    description:
      "This application was created to make it easier to report daily activities. This application was created using Excel and VBA.",
    link: "See More",
  },
  {
    title: "Web-based Point of Sale Application",
    description:
      "This application was created to make it easier to manage sales transactions. This application was created using Laravel and MySQL.",
    link: "See More",
  },
];

const elementParenttwo = document.getElementById("elementParenttwo");

function createComponenttwo(e) {
  for (let i = 0; i < e; i++) {
    const wrapperChild = document.createElement("div");
    const childDescription = document.createElement("div");
    const childWrapperimg = document.createElement("div");
    const childImg = document.createElement("img");
    const childLink = document.createElement("div");

    elementParenttwo.appendChild(wrapperChild);
    wrapperChild.appendChild(childDescription);
    wrapperChild.appendChild(childWrapperimg);
    childWrapperimg.appendChild(childImg);
    wrapperChild.appendChild(childLink);

    childDescription.textContent = arrayDataproject[i].description;
    childImg.src = "img/Icon001.png";
    childLink.textContent = "See More";
    childLink.setAttribute("class", "childLink");
  }
}

createComponenttwo(arrayDataproject.length);
const titleProject = document.getElementById("titleProject");
const getElementslide = document.querySelectorAll("#elementParenttwo > div");

const getChildlink = document.querySelectorAll(".childLink");
getChildlink.forEach((el, i) => {
  el.addEventListener("click", () => {
    alert("Sorry this feature will be available soon");
    // const modalLink = document.createElement("div");
    // const titleModallink = document.createElement("div");
    // const contentModallink = document.createElement("div");
    // const footerModallink = document.createElement("div");
    // const closeBtnmodal = document.createElement("div");

    // titleModallink.appendChild(modalLink);
    // contentModallink.appendChild(modalLink);
    // footerModallink.appendChild(modalLink);
    // closeBtnmodal.appendChild(footerModallink);

    // modalLink.classList.add("displayModal");

    // titleModallink.innerHTML = "Something Wrong !!!";
    // contentModallink.innerHTML = "Sorry this feature will be available soon";
  });
});

let indexSlide = 1;
createSilde(indexSlide);

function getValueslide(e) {
  createSilde((indexSlide += e));
}

function createSilde(e) {
  if (e > getElementslide.length) {
    indexSlide = 1;
  }
  if (e < 1) {
    indexSlide = getElementslide.length;
  }
  for (let i = 0; i < getElementslide.length; i++) {
    getElementslide[i].style.display = "none";
    getElementslide[indexSlide - 1].classList.remove("fade-in");
  }
  getElementslide[indexSlide - 1].style.display = "block";
  getElementslide[indexSlide - 1].classList.add("fade-in");
  titleProject.textContent = arrayDataproject[indexSlide - 1].title;
  titleProject.classList.add("fade-intitle");
  setTimeout(() => {
    titleProject.classList.remove("fade-intitle");
  }, 100);
}

// let index = 0;

// function changeText() {
//   getTextchange.style.opacity = 0;
//   setTimeout(() => {
//     getTextchange.textContent = arrayTextchange[index];
//    getTextchange.style.opacity = 1;
//     index = (index + 1) % arrayTextchange.length;
//   }, 500);
// }

// setInterval(changeText, 3000);

let setIndextext = 0;

setInterval(() => {
  getTextchange.style.opacity = 0;
}, 750);

function changeText() {
  getTextchange.style.opacity = 1;
  if (setIndextext == arrayTextchange.length) {
    setIndextext = 0;
  }
  setIndextext++;
  getTextchange.innerHTML = arrayTextchange[setIndextext - 1];
}

setInterval(changeText, 1500);

const getInstagram = document.getElementById("instagram");
const getLinkedin = document.getElementById("linkedin");
const getGithub = document.getElementById("github");
const getYoutube = document.getElementById("youtube");
const getEmail = document.getElementById("email");

getInstagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/", "_blank");
});

getLinkedin.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/frenata-anggoro-putera-4a8b3124b",
    "_blank"
  );
});

getGithub.addEventListener("click", () => {
  window.open("https://github.com/Frenataap", "_blank");
});

getYoutube.addEventListener("click", () => {
  window.open("https://www.youtube.com/@InformationCenterMe", "_blank");
});

getEmail.addEventListener("click", () => {
  window.open(
    "mailto:frenata.ap@gmail.com?subject=Vacancy Offers&body=Dear Applicant,",
    "_blank"
  );
});

const getSpecial = document.getElementById("special");
const getThanks = document.getElementById("thanks");
const getBtnclose = document.getElementById("btnClose");
const getBtncv = document.getElementById("btnCV");
const getModalcv = document.getElementById("modalCV");
const getBtnclosecv = document.getElementById("btnClosecv");

getSpecial.addEventListener("click", () => {
  getModalcv.style.display = "none";
  getThanks.style.display = "flex";
  getThanks.classList.add("modalFadeIn");
  getThanks.classList.remove("modalFadeOut");
});
getBtnclose.addEventListener("click", () => {
  getThanks.classList.add("modalFadeOut");
  getThanks.classList.remove("modalFadeIn");
});

getBtncv.addEventListener("click", () => {
  getThanks.style.display = "none";
  getModalcv.style.display = "flex";
  getModalcv.classList.add("modalFadeIn");
  getModalcv.classList.remove("modalFadeOut");
});

getBtnclosecv.addEventListener("click", () => {
  getModalcv.classList.add("modalFadeOut");
  getModalcv.classList.remove("modalFadeIn");
});

const bodyPage = document.querySelector("body");

const elementAll = document.querySelectorAll(".idSelection");

const getSectionspan = document.getElementById("sectionSpan");
const homeImg = document.getElementById("homeImg");
const homeSpan = document.getElementById("homeSpan");
const homeP = document.getElementById("homeP");
const homeH = document.getElementById("homeH");
homeImg.classList.add("defFadein");
homeSpan.classList.add("defFadeleftin");
homeP.classList.add("defFadeleftin");
homeP.style.animationDuration = "2s";
getBtncv.classList.add("defFadetopin");
homeH.classList.add("defFadein");

const skillsH = document.getElementById("skillsH");

const projectBlub = document.querySelectorAll(".projectBlub");

const socialH = document.getElementById("socialH");
const socialP = document.getElementById("socialP");
const elementParentthree = document.getElementById("elementParentthree");

socialH.style.opacity = "0";
socialH.style.transition = "all 0.5s ease-in-out";

socialP.style.opacity = "0";
socialP.style.transition = "all 0.5s ease-in-out";
//Animation

// defFadein
// defFadeout

// defFadeleftin
// defFadeleftout

// defFaderightin
// defFaderightout

// defFadetopin
// defFadetopout

// defFadebottin
// defFadebottout

window.addEventListener("scroll", () => {
  let windowScrollyvalue = window.scrollY;
  // console.log(windowScrollyvalue);

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let presentPage = (windowScrollyvalue / (bodyPage.scrollHeight - 633)) * 100;
  // console.log(presentPage);
  if (windowWidth > 916) {
    if (windowScrollyvalue > 150 && windowScrollyvalue < 650) {
      skillsH.style.opacity = "1";
    } else {
      skillsH.style.opacity = "0";
    }

    if (windowScrollyvalue < 490) {
      homeImg.classList.add("defFadein");
      homeSpan.classList.add("defFadeleftin");
      homeP.classList.add("defFadeleftin");
      homeP.style.animationDuration = "2s";
      getBtncv.classList.add("defFadetopin");
      homeH.classList.add("defFadein");
    } else if (windowScrollyvalue > 491 && windowScrollyvalue < 699) {
      homeImg.classList.remove("defFadein");
      homeSpan.classList.remove("defFadeleftin");
      homeP.classList.remove("defFadeleftin");
      homeP.style.animationDuration = "2s";
      getBtncv.classList.remove("defFadetopin");
      homeH.classList.remove("defFadein");
      getTextchange.style.opacity = "0";
    } else if (windowScrollyvalue > 700 && windowScrollyvalue < 780) {
      projectBlub[0].classList.remove("defFadebottin");
      projectBlub[1].classList.remove("defFaderightin");
      projectBlub[2].classList.remove("defFadeleftin");
    } else if (windowScrollyvalue > 781 && windowScrollyvalue < 1000) {
      projectBlub[0].classList.add("defFadebottin");
      projectBlub[1].classList.add("defFaderightin");
      projectBlub[2].classList.add("defFadeleftin");

      socialH.style.opacity = "0";
      socialP.style.opacity = "0";
      elementParentthree.classList.remove("defFadetopin");
    } else if (windowScrollyvalue > 1001) {
      socialH.style.opacity = "1";
      socialP.style.opacity = "1";

      elementParentthree.classList.add("defFadetopin");
    }
  } else if (windowWidth < 915 && windowWidth > 359) {
    socialH.style.opacity = "1";
    socialP.style.opacity = "1";
    elementParentthree.style.opacity = "1";

    elementAll.forEach((el, i) => {
      let elGetBounding = el.getBoundingClientRect().top;
      el.classList.add("setAttoff");

      if (elGetBounding < 460) {
        el.classList.remove("setAttoff");
        el.classList.add("setAtton");
      } else {
        el.classList.add("setAttoff");
        el.classList.remove("setAtton");
      }
    });
  } else if (windowWidth < 358) {
    socialH.style.opacity = "1";
    socialP.style.opacity = "1";
    elementParentthree.style.opacity = "1";

    elementAll.forEach((el, i) => {
      let elGetBounding = el.getBoundingClientRect().top;
      el.classList.add("setAttoff");
      if (elGetBounding < 420) {
        el.classList.remove("setAttoff");
        el.classList.add("setAtton");
      } else {
        el.classList.add("setAttoff");
        el.classList.remove("setAtton");
      }
    });
  }
});
