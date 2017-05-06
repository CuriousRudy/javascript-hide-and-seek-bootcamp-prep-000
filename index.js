function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(selector, target) {
return `document.getElementById(#${selector}).querySelector(.target)`
}
