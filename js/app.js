const toggleInput = document.querySelector(".toggle__btn input")
const toggleSpan = document.querySelector(".toggle span")
const circle = document.querySelector(".toggle__btn-circle")
const toggleBtn = document.querySelector(".toggle__btn")
const modeText = document.querySelector(".toggle span")

console.log(modeText)

const body = document.querySelector("body")
const bgCard = document.querySelectorAll(".card")
const bgTop = document.querySelector(".bg-top")
const amount = document.querySelectorAll(".dashboard__followers-card-amount")
const userName = document.querySelectorAll(".dashboard__followers-card-user-name")
const headline = document.querySelector(".headline")
const viewsAmount = document.querySelectorAll(".dashboard__overview-card-views-amount")


const lightTheme = {
  bgTopLight: "hsl(225, 100%, 98%)",
  bgCardLight: "hsl(227, 47%, 96%)",
  grayishBlueTextLight: "hsl(228, 12%, 44%)",
  darkBlueTextLight: "hsl(230, 17%, 14%)",
  userColor: "hsl(230, 17%, 14%)",
  bodyBg: "#fff",
  headlineColor: "hsl(230, 17%, 14%)",
  viewsAmountColor: "hsl(230, 17%, 14%)",
  toggleCircle: "#fff",
  toggleBg: "linear-gradient(to right, hsl(230, 22%, 74%), hsl(230, 22%, 74%))",
  toggleText: "hsl(230, 22%, 74%)"
}

const darkTheme = {
  bgTopLight: "hsl(232, 19%, 15%)",
  bgCardLight: "hsl(238, 28%, 20%)",
  grayishBlueTextLight: "hsl(238, 28%, 20%)",
  darkBlueTextLight: "hsl(228, 34%, 66%)",
  userColor: "hsl(228, 12%, 44%)",
  bodyBg: "hsl(230, 17%, 14%)",
  headlineColor: "#fff",
  viewsAmountColor: "#fff",
  toggleCircle: "hsl(238, 28%, 20%)",
  toggleBg: "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  toggleText: "#fff"
}

toggleInput.addEventListener("change", switchToggle)

function switchToggle(e) {
  if (e.target.checked) {
    themeSwitch(lightTheme)
    circle.classList.replace("off", "on")
  } else {
    themeSwitch(darkTheme)
    circle.classList.replace("on", "off")
  }
}

function themeSwitch({ bgTopLight, bgCardLight, headlineColor, viewsAmountColor, bodyBg, userColor, toggleCircle, toggleBg, toggleText }) {
  modeText.style.color = toggleText
  circle.style.backgroundColor = toggleCircle
  toggleBtn.style.backgroundImage = toggleBg
  headline.style.color = headlineColor
  bgTop.style.backgroundColor = bgTopLight
  bgCard.forEach(item => {
      item.style.backgroundColor = bgCardLight
  })

  viewsAmount.forEach(item => item.style.color = viewsAmountColor)
  amount.forEach(item => item.style.color = viewsAmountColor)
  userName.forEach(item =>  item.style.color = userColor)

  body.style.backgroundColor = bodyBg
}