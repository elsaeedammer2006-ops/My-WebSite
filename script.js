const menu = document.querySelector(".links");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-xmark");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  closeBtn.classList.toggle("active");
});

document.addEventListener("scroll", (e) => {
  if (menu.classList.contains("active") && e.target !== menuBtn) {
    menu.classList.remove("active");
    menuBtn.classList.add("active");
    closeBtn.classList.remove("active");
  }
});

// Form validation
const btn = document.querySelector("form .btn");
const nameInput = document.querySelector("form input[type='text']");
const emailInput = document.querySelector("form input[type='email']");
const messageInput = document.querySelector("form textarea");

function validateForm(input) {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      input.classList.remove("false");
      input.classList.add("full");
    } else {
      input.classList.remove("full");
    }
  });
}
validateForm(nameInput);
validateForm(emailInput);
validateForm(messageInput);

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Clear previous validation states
  nameInput.classList.remove("false", "full");
  emailInput.classList.remove("false", "full");
  messageInput.classList.remove("false", "full");

  let isValid = true;
  if (nameInput.value === "") {
    nameInput.classList.add("false");
    isValid = false;
  } else {
    nameInput.classList.add("full");
  }
  if (emailInput.value === "") {
    emailInput.classList.add("false");
    isValid = false;
  } else {
    emailInput.classList.add("full");
  }
  if (messageInput.value === "") {
    messageInput.classList.add("false");
    isValid = false;
  } else {
    messageInput.classList.add("full");
  }
  if (isValid) {
    Swal.fire({
      title: "تم ارسال البيانات بنجاح",
      text: "Thank you for contacting me. I will get back to you soon.",
      icon: "success",
      draggable: true,
      timer: 3000,
      showConfirmButton: false,
      width: "400px",
    }).then(() => {
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      nameInput.classList.remove("full");
      emailInput.classList.remove("full");
      messageInput.classList.remove("full");
    });
  } else {
    Swal.fire({
      title: "يرجي اضافه البيانات",
      text: "Please fill in all fields before submitting.",
      icon: "error",
      draggable: true,
      timer: 2500,
      showConfirmButton: false,
      width: "400px",
      padding: "5px",
    });
  }
});

// Fqa section
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".question i");
const chevronDown = document.querySelectorAll(".fa-chevron-down");
const chevronUp = document.querySelectorAll(".fa-chevron-up");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    questions.forEach((_, i) => {
      if (i !== index) {
        answers[i].classList.remove("active");
        chevronDown[i].classList.add("active");
        chevronUp[i].classList.remove("active");
      }
    });

    answers[index].classList.toggle("active");
  });
});

const translate = document.querySelector(".fa-language");

translate.addEventListener("click", () => {
  const locat = window.location.pathname;
  if (locat.includes("index.html") || locat === "/") {
    window.location.href = "index-ar.html";
  } else {
    window.location.href = "index.html";
  }
});
