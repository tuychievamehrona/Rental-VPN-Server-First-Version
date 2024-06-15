// Rounded text
new CircleType(document.getElementById("intro__subtitle")).dir(-1).radius(500);

// Fixed header
const header = document.getElementById("header");
const profile = document.getElementById("profile__inner");

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add("fixed");
        profile.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
        profile.classList.remove("fixed");
    }
});

// Profile Active
const profileMenu = document.getElementById("profile__menu");
const profileItem = document.getElementById("profile__item");
const profileIcon = document.getElementById("profile__icon");
const profileOpen = document.getElementById("profile__open");
const profileClose = document.getElementById("profile__close");

profileOpen.addEventListener("click", function (event) {
    event.preventDefault();

    if (!profile.classList.contains("active")) {
        profileOpen.classList.add("active");
        profileMenu.classList.add("visible");
        profileItem.classList.add("active");
        profileIcon.classList.add("active");
        profile.classList.add("active");
    } else {
        profileOpen.classList.remove("active");
        profileMenu.classList.remove("visible");
        profileItem.classList.remove("active");
        profileIcon.classList.remove("active");
        profile.classList.remove("active");
    }
});

profileClose.addEventListener("click", function () {
    profile.classList.remove("active");
    profileIcon.classList.remove("active");
    profileItem.classList.remove("active");
    profileMenu.classList.remove("visible");
    profileOpen.classList.remove("active");
});

// Logo scroll
const logo = document.getElementById("logo");

logo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Smooth scroll
$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        const $this = $(this);
        const blockId = $this.data("scroll");
        const blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate(
            {
                scrollTop: blockOffset,
            },
            500
        );
    });
});

// Nav Link Active
const home = document.getElementById("home");
const getHomeTopCoords = home.getBoundingClientRect().top;
const navLinkHome = document.getElementById("navLinkHome");

const about = document.getElementById("about");
const getAboutTopCoords = about.getBoundingClientRect().top;
const navLinkAbout = document.getElementById("navLinkAbout");

const testimonials = document.getElementById("testimonials");
const getTestimonialsTopCoords = testimonials.getBoundingClientRect().top;
const navLinkTestimonials = document.getElementById("navLinkTestimonials");

const contact = document.getElementById("contact");
const getContactTopCoords = contact.getBoundingClientRect().top;
const navLinkContact = document.getElementById("navLinkContact");

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    const homeHeight = $(home).height();
    const aboutHeight = $(about).height();
    const testimonialsHeight = $(testimonials).height();

    if (scrollPos >= getHomeTopCoords - 92 && scrollPos < homeHeight / 1.5) {
        navLinkHome.classList.add("active");
    } else {
        navLinkHome.classList.remove("active");
    }

    if (
        scrollPos > getHomeTopCoords + homeHeight / 1.5 &&
        scrollPos < getAboutTopCoords + aboutHeight / 1.5
    ) {
        navLinkAbout.classList.add("active");
    } else {
        navLinkAbout.classList.remove("active");
    }

    if (
        scrollPos > getAboutTopCoords + aboutHeight / 1.5 &&
        scrollPos < getTestimonialsTopCoords + testimonialsHeight / 1.5
    ) {
        navLinkTestimonials.classList.add("active");
    } else {
        navLinkTestimonials.classList.remove("active");
    }

    if (scrollPos > getTestimonialsTopCoords + testimonialsHeight / 3) {
        navLinkContact.classList.add("active");
        navLinkTestimonials.classList.remove("active");
    } else {
        navLinkContact.classList.remove("active");
    }
});

navLinkHome.addEventListener("click", function () {
    navLinkHome.classList.add("active");
});

navLinkHome.click();

// Lang
const enLangId = document.getElementById("en_lang");
const ruLangId = document.getElementById("ru_lang");
const enLangClasses = document.querySelectorAll(".en_lang");
const ruLangClasses = document.querySelectorAll(".ru_lang");
const inputName = document.querySelector(".sign__item--name");
const inputEmailOne = document.querySelector(".sign__item--email-1");
const inputNumber = document.querySelector(".sign__item--number");
const inputPasswordOne = document.querySelector(".sign__item--password-1");
const inputAgain = document.querySelector(".sign__item--again");
const inputEmailTwo = document.querySelector(".sign__item--email-2");
const inputPasswordTwo = document.querySelector(".sign__item--password-2");
const messageText = document.querySelector(".message__text");

enLangId.addEventListener("click", function (event) {
    event.preventDefault();

    document.documentElement.setAttribute("lang", "en");

    enLangId.classList.add("active");
    ruLangId.classList.remove("active");

    for (let i = 0; i < enLangClasses.length; i++) {
        let enLangClass = enLangClasses[i];
        let ruLangClass = ruLangClasses[i];

        enLangClass.classList.add("active");
        ruLangClass.classList.remove("active");
    }

    inputName.placeholder = "Name";
    inputEmailOne.placeholder = "Email";
    inputNumber.placeholder = "Phone number";
    inputPasswordOne.placeholder = "Password";
    inputAgain.placeholder = "The password again";
    inputEmailTwo.placeholder = "Email";
    inputPasswordTwo.placeholder = "Password";
    messageText.placeholder = "Message";
});

ruLangId.addEventListener("click", function (event) {
    event.preventDefault();

    document.documentElement.setAttribute("lang", "ru");

    enLangId.classList.remove("active");
    ruLangId.classList.add("active");

    for (let i = 0; i < enLangClasses.length; i++) {
        let enLangClass = enLangClasses[i];
        let ruLangClass = ruLangClasses[i];

        enLangClass.classList.remove("active");
        ruLangClass.classList.add("active");
    }

    inputName.placeholder = "Имя";
    inputEmailOne.placeholder = "Электронная почта";
    inputNumber.placeholder = "Номер телефона";
    inputPasswordOne.placeholder = "Пароль";
    inputAgain.placeholder = "Пароль ещё раз";
    inputEmailTwo.placeholder = "Электронная почта";
    inputPasswordTwo.placeholder = "Пароль";
    messageText.placeholder = "Сообщение";
});

enLangId.click();

// Theme
const themeLight = document.getElementById("theme-light");
const themeDark = document.getElementById("theme-dark");

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

themeLight.addEventListener("click", function () {
    if (!themeLight.classList.contains("active")) {
        themeLight.classList.add("active");
        themeDark.classList.remove("active");
        setTheme("theme-light");
    } else {
        themeDark.classList.add("active");
        themeLight.classList.remove("active");
        setTheme("theme-dark");
    }
});

themeDark.addEventListener("click", function () {
    if (!themeDark.classList.contains("active")) {
        themeDark.classList.add("active");
        themeLight.classList.remove("active");
        setTheme("theme-dark");
    } else {
        themeLight.classList.add("active");
        themeDark.classList.remove("active");
        setTheme("theme-light");
    }
});

// Modals
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)",
        });
    }, 200);
});

modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({
        transform: "scale(0)",
    });

    setTimeout(function () {
        modalParent.removeClass("show");
        $("body").removeClass("no-scroll");
    }, 200);
});

$(".modal").on("click", function (event) {
    event.preventDefault();

    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "scale(0)",
    });

    setTimeout(function () {
        $this.removeClass("show");
        $("body").removeClass("no-scroll");
    }, 200);
});

$(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
});

// Testimonials swiper
new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Hidden text
const texts = document.querySelectorAll(".testimonials__text");
const textsInner = document.querySelectorAll(".testimonials__text-inner");

const textsInnerHeightArray = [];
for (let i = 0; i < textsInner.length; i++) {
    let textInnerHeight = textsInner[i].clientHeight;
    textsInnerHeightArray.push(textInnerHeight);
}

const textsInnerHeightUnsuitableIndexArray = [];
for (let i = 0; i < textsInnerHeightArray.length; i++) {
    let textInnerHeight = textsInnerHeightArray[i];
    if (textInnerHeight > 200) {
        textsInnerHeightUnsuitableIndexArray.push(i);
    }
}

for (let i = 0; i < texts.length; i++) {
    textsInnerHeightUnsuitableIndexArray.forEach((element) => {
        if (i === element) {
            texts[i].classList.add("hidden");
        }
    });
}

// Testimonials text active
const openLinks = document.querySelectorAll(".testimonials__open");
const closeLinks = document.querySelectorAll(".testimonials__close");
const prevButton = document.querySelector(".testimonials__button--prev");
const nextButton = document.querySelector(".testimonials__button--next");

for (let i = 0; i < openLinks.length; i++) {
    let openLink = openLinks[i];
    let closeLink = closeLinks[i];
    openLink.addEventListener("click", function (event) {
        event.preventDefault();
        texts[i].classList.remove("hidden");
        texts[i].classList.add("active");
        closeLink.classList.add("active");
    });
    prevButton.addEventListener("click", function () {
        if (
            (texts[i].classList.contains("active"),
            closeLink.classList.contains("active"))
        ) {
            closeLink.classList.remove("active");
            texts[i].classList.remove("active");
            texts[i].classList.add("hidden");
        }
    });
    closeLink.addEventListener("click", function (event) {
        event.preventDefault();
        closeLink.classList.remove("active");
        texts[i].classList.remove("active");
        texts[i].classList.add("hidden");
    });
    nextButton.addEventListener("click", function () {
        if (
            (texts[i].classList.contains("active"),
            closeLink.classList.contains("active"))
        ) {
            closeLink.classList.remove("active");
            texts[i].classList.remove("active");
            texts[i].classList.add("hidden");
        }
    });
}

// No testimonials
const testimonialsInner = document.querySelector(".testimonials__inner");
const testimonialsBlock = document.querySelector(".testimonials__block");
const testimonialsItem = document.querySelector(".testimonials__item");
const fractions = document.querySelector(".testimonials__quantity");

if (!testimonialsBlock.contains(testimonialsItem)) {
    testimonialsInner.classList.add("no-testimonials");
} else {
    testimonialsInner.classList.remove("no-testimonials");
}

if (testimonialsInner.classList.contains("no-testimonials")) {
    fractions.innerText = "0";
}

// Page reload
window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
});

// Sign up
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const passwordAgain = document.getElementById("password-again");
const signUp = document.getElementById("sign-up");
const nameElement = document.getElementById("name-element");
const creationDate = document.getElementById("create-date");

const users = {};

function User(name, email, number, password, creationDate) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.password = password;
    this.creationDate = creationDate;
}

function createId(users) {
    return Object.keys(users).length;
}

signUp.addEventListener("click", function (event) {
    event.preventDefault();

    const nameUser = name.value;
    const emailUser = email.value;
    const numberUser = number.value;
    const passwordUser = password.value;

    nameElement.innerHTML = nameUser;
    creationDate.innerHTML =
        new Date().toLocaleDateString() +
        " " +
        new Date().toLocaleTimeString().slice(0, -3);

    const user = new User(
        nameUser,
        emailUser,
        numberUser,
        passwordUser,
        creationDate
    );

    const userId = "User" + createId(users);
    users[userId] = user;

    console.log(users);

    if (passwordUser !== passwordAgain.value) {
        if (enLangId.classList.contains("active")) {
            alert("Password mismatch!");
        }

        if (ruLangId.classList.contains("active")) {
            alert("Пароли не совпадают!");
        }
    } else {
        if (enLangId.classList.contains("active")) {
            alert(`${nameUser}, you have successfully registered!`);
        }

        if (ruLangId.classList.contains("active")) {
            alert(`${nameUser}, вы успешно прошли регистрацию!`);
        }
    }
});

// Sign in
const signUpButton = document.getElementById("sign-up__button");
const signInButton = document.getElementById("sign-in__button");
const signOutButton = document.getElementById("sign-out__button");
const signIn = document.getElementById("sign-in");

signIn.addEventListener("click", function (event) {
    event.preventDefault();

    signUpButton.classList.add("no-active");
    signInButton.classList.add("no-active");

    profileOpen.classList.remove("no-active");
    signOutButton.classList.remove("no-active");
});

signOutButton.addEventListener("click", function (event) {
    event.preventDefault();

    signUpButton.classList.remove("no-active");
    signInButton.classList.remove("no-active");

    profileOpen.classList.add("no-active");
    signOutButton.classList.add("no-active");
});
