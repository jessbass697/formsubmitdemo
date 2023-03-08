function reveal() {
  var reveals = document.querySelectorAll(".top-row");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } //else {
    //   reveals[i].classList.remove("active");
    // }
  }
}

window.addEventListener("scroll", reveal);

function reveal1() {
  var reveals1 = document.querySelectorAll(".left-column");

  for (var i = 0; i < reveals1.length; i++) {
    var windowHeight1 = window.innerHeight;
    var elementTop1 = reveals1[i].getBoundingClientRect().top;
    var elementVisible1 = 150;

    if (elementTop1 < windowHeight1 - elementVisible1) {
      reveals1[i].classList.add("active");
    } //else {
    //   reveals[i].classList.remove("active");
    // }
  }
}

window.addEventListener("scroll", reveal1);

function reveal2() {
  var reveals2 = document.querySelectorAll(".right-column");

  for (var i = 0; i < reveals2.length; i++) {
    var windowHeight2 = window.innerHeight;
    var elementTop2 = reveals2[i].getBoundingClientRect().top;
    var elementVisible2 = 150;

    if (elementTop2 < windowHeight2 - elementVisible2) {
      reveals2[i].classList.add("active");
    } //else {
    //   reveals[i].classList.remove("active");
    // }
  }
}

window.addEventListener("scroll", reveal2);

function reveal3() {
  var reveals3 = document.querySelectorAll(".map-wrap");

  for (var i = 0; i < reveals3.length; i++) {
    var windowHeight3 = window.innerHeight;
    var elementTop3 = reveals3[i].getBoundingClientRect().top;
    var elementVisible3 = 150;

    if (elementTop3 < windowHeight3 - elementVisible3) {
      reveals3[i].classList.add("active");
    } //else {
    //   reveals[i].classList.remove("active");
    // }
  }
}

window.addEventListener("scroll", reveal3);

function reveal4() {
  var reveals4 = document.querySelectorAll(".form-wrap");

  for (var i = 0; i < reveals4.length; i++) {
    var windowHeight4 = window.innerHeight;
    var elementTop4 = reveals4[i].getBoundingClientRect().top;
    var elementVisible4 = 150;

    if (elementTop4 < windowHeight4 - elementVisible4) {
      reveals4[i].classList.add("active");
    } //else {
    //   reveals[i].classList.remove("active");
    // }
  }
}

window.addEventListener("scroll", reveal4);


const counters = Array.from(document.querySelectorAll(".number-counter"));
const counterValues = [];
const speed = 500;

const startCounters = () => {
  const updateCount = (counter, target, count, index) => {
    const inc = target / speed;
    counterValues[index] = count + inc;
    if (count < target) {
      counter.innerText = Math.floor(counterValues[index]);
    } else {
      counter.innerText = target;
    }
  };

counters.forEach((counter, index) => {
  counterValues.push(0)
  const interval = setInterval(() => {
    const target = +counter.getAttribute("data-target");
    const count = counterValues[index];
    if (target !== count) {
      updateCount(counter, target, count, index)
    } else {
      clearInterval(interval);
    }
  }, 1)
});
};

// On the first scroll in this window, call the function to start the counters
window.addEventListener('scroll', startCounters, {
  once: true
});
