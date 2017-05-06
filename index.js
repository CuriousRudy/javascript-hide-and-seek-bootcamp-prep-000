function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
return document.querySelector('main #nested .target')
}

function increaseRankBy(n) {
  const bank = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0, l = bank.length; i < l; i++) {
  bank[i].innerHTML = parseInt(bank[i].innerHTML) + n
}
return
}

function deepestChild() {
  var area = document.getElementById('grand-node');
  return area.querySelector('div div div div')
}
