const popupModal = document.querySelector(".popup");
const popupOverlay = document.querySelector(".pop-overlay");
const game = document.querySelector(".game");
const main_message_container = document.querySelector(
  ".main-message-container"
);
const Salah = document.querySelector(".balloon-main-container .salahname");
const fullscreen = document.querySelector(".fullscreen-overlay");
//loader functions

const loader = document.querySelector(".loader-container");
const container = document.querySelector(".game");
// عند بدء تحميل الوسائط
container.addEventListener("loadstart", function () {
  container.style.display = "none";
  loader.style.display = "block"; // عرض المؤشر
});

// عند تحميل البيانات الفعلية
container.addEventListener("loadeddata", function () {
  container.style.display = "block";
  loader.style.display = "none"; // عرض المؤشر
});

// يمكنك أيضًا إضافة حدث للتحقق من حالة التحميل إذا كنت تريد
container.addEventListener("error", function () {
  loader.style.display = "none"; // إخفاء المؤشر في حال وجود خطأ
  alert("Error loading video");
});

//===========SOUND PLAY

function soundPlay(el) {
  const audio = new Audio(el);
  audio.play();
}

let data = [
  {
    title: "ما هو مجموع تسبيحات السجود في صلاة المغرب؟",
    answers: [
      {
        label: "مرتان",
        data_answer: "f",
      },
      {
        label: "18 مرة",
        data_answer: "t",
      },
      {
        label: "6 مرات",
        data_answer: "f",
      },
    ],
  },
  {
    title: "ما هو مجموع الاعتدالات في صلاة العصر؟",
    answers: [
      {
        label: "4 مرات",
        data_answer: "f",
      },
      {
        label: "مرة واحدة",
        data_answer: "f",
      },
      {
        label: "12 مرة",
        data_answer: "t",
      },
    ],
  },
  {
    title: "كم مرة أركع لله تعالى في صلاة الفجر؟",
    answers: [
      {
        label: "مرة واحدة",
        data_answer: "f",
      },
      {
        label: "مرتان",
        data_answer: "t",
      },
      {
        label: "12 مرة",
        data_answer: "f",
      },
    ],
  },
  {
    title: "ما هو مجموع تسبيحات السجود في صلاة الفجر؟",
    answers: [
      {
        label: "12 مرة",
        data_answer: "t",
      },
      {
        label: "8 مرات",
        data_answer: "f",
      },
      {
        label: "4 مرات",
        data_answer: "f",
      },
    ],
  },
  {
    title: "كم مرة أقرأ سورة الفاتحة في صلاة المغرب؟",
    answers: [
      {
        label: "8 مرات",
        data_answer: "f",
      },
      {
        label: "3 مرات",
        data_answer: "t",
      },
      {
        label: "9 مرات",
        data_answer: "f",
      },
    ],
  },
  {
    title: "كم مرة أجلس للتشهد في صلاة العشاء؟",
    answers: [
      {
        label: "24 مرة",
        data_answer: "f",
      },
      {
        label: "مرتان",
        data_answer: "t",
      },
      {
        label: "4 مرات",
        data_answer: "f",
      },
    ],
  },
  {
    title: "ما هو مجموع تسبيحات الركوع في صلاة المغرب؟",
    answers: [
      {
        label: "9 مرات",
        data_answer: "t",
      },
      {
        label: "4 مرات",
        data_answer: "f",
      },
      {
        label: "8 مرات",
        data_answer: "f",
      },
    ],
  },
  {
    title: "ما هو مجموع تسبيحات السجود في صلاة العصر؟",
    answers: [
      {
        label: "24 مرة",
        data_answer: "t",
      },
      {
        label: "3 مرات",
        data_answer: "f",
      },
      {
        label: "12 مرة",
        data_answer: "f",
      },
    ],
  },
];

// يمكنك الآن العمل مع المصفوفة "data"

let arr = Object.keys(data);

shuflle(arr);

function shuflle(arr) {
  let current = arr.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = arr[current];
    arr[current] = arr[random];

    arr[random] = temp;
  }
}

let currentPage = 0,
  question_contianer = document.querySelector(".questions-container-inner");
const main_titleImg = document.querySelector(
  ".question-item-container .qustion-title"
);

const nav = document.querySelector(".result-true-false-container nav");
let selectedItem;
let wrongAnswers = 0;
let message_icon = document.getElementById("message-icone");
let feedback = document.getElementById("feedback");
let result_percent = document.querySelector(".result-container span");
let navItems = document.querySelectorAll(
  ".result-true-false-container nav li a"
);
let itemsArr = Array.from(navItems);
const masgedImages = document.querySelectorAll(".game-item .image-questionAA");
const masgedArr = Array.from(masgedImages);

function createElements() {
  //====================
  //=====CREATE ELEMENTS FROM DATA====
  //====================
  data.forEach((element) => {
    //=====CREATE question_item_container====
    const question_item_container = document.createElement("div");
    question_item_container.className = "question-item-container";
    question_item_container.setAttribute("answer", "t");

    //=====CREATE question_title====

    const question_title = document.createElement("div");
    question_title.className = "question-title";
    question_title.classList.add("visible");
    

    const label = document.createElement("label");
    label.textContent = `${element.title}`;
    question_title.appendChild(label);

    //=====CREATE answers_container====
    const answers_container = document.createElement("div");
    answers_container.className = "this-that-container";

    //=====CREATE asnwers====

    //create 3 answers
    //main element
    const answer1 = document.createElement("a");
    const answer2 = document.createElement("a");
    const answer3 = document.createElement("a");

    //answers attributes
    answer1.setAttribute("data-answer", element.answers[0].data_answer);
    answer2.setAttribute("data-answer", element.answers[1].data_answer);
    answer3.setAttribute("data-answer", element.answers[2].data_answer);

    //span and icons
    const icon1 = document.createElement("i");
    const span1 = document.createElement("span");
    const icon2 = document.createElement("i");
    const span2 = document.createElement("span");
    const icon3 = document.createElement("i");
    const span3 = document.createElement("span");

    //answers appendchild
    span1.textContent = `${element.answers[0].label}`;
    icon1.appendChild(span1);
    answer1.appendChild(icon1);
    answers_container.appendChild(answer1);

    span2.textContent = `${element.answers[1].label}`;
    icon2.appendChild(span2);
    answer2.appendChild(icon2);
    answers_container.appendChild(answer2);

    span3.textContent = `${element.answers[2].label}`;
    icon3.appendChild(span3);
    answer3.appendChild(icon3);
    answers_container.appendChild(answer3);

    //=====append elements to parent====
    question_item_container.appendChild(question_title);
    question_item_container.appendChild(answers_container);

    question_contianer.appendChild(question_item_container);
  });
}
createElements();

const items = document.querySelectorAll(".question-item-container");
const myarr = Array.from(items);

//change image masged by answer true
let imageNum = 0;

function changeImageMasged() {
  masgedArr.forEach((ms) => {
    ms.classList.remove("show");
  });

  masgedArr[imageNum].classList.add("show");
}
changeImageMasged();

function controlInShowElements() {
  //show question by current page

  myarr.forEach((item) => {
    item.classList.remove("show");
  });

  myarr[currentPage].classList.add("show");
  
}
controlInShowElements();

function selectCurrentAnswers() {
  let answers = myarr[currentPage].querySelectorAll(".this-that-container a");
  let title = myarr[currentPage].querySelector(".question-title");
  title.classList.add("slideInDown")
  
 
  
  checkAnswers(answers);
}
selectCurrentAnswers();

function checkAnswers(answers) {
  answers.forEach((answer) => {
    //check answers
    answer.addEventListener("click", () => {
     

      answers.forEach((ans) => {
        ans.classList.add("disabled");
      });

      itemsArr[currentPage].classList.add("animated");

      //if answer true

      if (
        myarr[currentPage].getAttribute("answer") ===
        answer.getAttribute("data-answer")
      ) {
        answer.classList.add("true");
        

        itemsArr[currentPage].classList.add("true");

        soundPlay("../media/audios/correct.mp3");

        imageNum++;

        changeImageMasged();
      }

      //if answer false
      else {
        answer.classList.add("false");

        answers.forEach((ans) => {
          if(myarr[currentPage].getAttribute("answer") === ans.getAttribute("data-answer")){
            ans.classList.add("true")
          }
          else{
            ans.classList.add("notClicked")
        }
          
        });

        wrongAnswers++;

        itemsArr[currentPage].classList.add("false");

        soundPlay("../media/audios/error.mp3");
      }

      //show the next question

      setTimeout(() => {
        if (currentPage < data.length - 1) {
          currentPage++;
         
          selectCurrentAnswers();
          answers.forEach((ans) => {
            ans.classList.remove("disabled");
          });

          controlInShowElements();
          changeImageMasged();
        } else {
          main_message_container.classList.add("active");
          soundPlay("../media/audios/101.mp3");
          rateAnswer();
        }
      }, 1000);
    });
  });
}
function rateAnswer() {
  let percent = (wrongAnswers / data.length) * 100;

  let resultPercet = 100 - percent;

  if (percent < 20) {
    message_icon.classList.add("wellDonw-icon");

    feedback.classList.add("wellDonw");
  } else if (percent >= 20 && percent < 70) {
    message_icon.classList.add("good-icon");

    feedback.classList.add("good");
  } else {
    message_icon.classList.add("tryAgain-icon");

    feedback.classList.add("tryAgain");
  }

  result_percent.innerHTML = resultPercet.toFixed(0) + "%";
}

rateAnswer();

main_message_container
  .querySelector(".reload")
  .addEventListener("click", () => window.location.reload());

const checkScreen = () => {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const isMobile = window.innerWidth < 768 && isPortrait;
  return isMobile;
};
window.addEventListener("load", () => {
  const is_mobile = checkScreen();
  if (is_mobile) {
    popupModal.style.visibility = "visible";
    popupOverlay.style.visibility = "visible";
  } else {
    popupModal.style.visibility = "hidden";
    popupOverlay.style.visibility = "hidden";
    game.style.visibility = "visible";
  }
});
document.addEventListener("contextmenu", function (event) {
  var target = event.target;
  if (target.tagName === "IMG") {
    event.preventDefault();
  }
  return false;
});

window.addEventListener("orientationchange", function () {
  const is_mobile = checkScreen();
  if (window.orientation === 90 || window.orientation === -90) {
    if (is_mobile) {
      game.style.visibility = "visible";
      popupModal.style.visibility = "hidden";
      popupOverlay.style.visibility = "hidden";
    } else {
      popupModal.style.visibility = "visible";
      popupOverlay.style.visibility = "visible";
    }
  } else {
    popupModal.style.visibility = "visible";
    popupOverlay.style.visibility = "visible";
  }
});

function openFullscreen() {
  fullscreen.classList.add("hide");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    // Chrome, Safari, Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // IE/Edge
    elem.msRequestFullscreen();
  }
}

var elem = document.documentElement;

// fullscreen.addEventListener("dblclick", openFullscreen);

window.addEventListener("load", () => {
  // إخفاء الـ Loader
  loader.style.display = "none";
});
