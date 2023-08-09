let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');
navMain.classList.add('main-navigation--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

// function getTextNodesIn(elem, opt_fnFilter) { var textNodes = []; if (elem) { for (var nodes = elem.childNodes, i = nodes.length; i--;) { var node = nodes[i], nodeType = node.nodeType; if (nodeType == 3) { if (!opt_fnFilter || opt_fnFilter(node, elem)) { if (node.data.trim() !== '') { textNodes.push(node.data.trim() !== '' ? node : ''); } } } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) { textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter)); } } } return textNodes; } getTextNodesIn(document.body).forEach((item) => { item.textContent = "У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон." })



// function getTextNodesIn(elem, opt_fnFilter) { var textNodes = []; if (elem) { for (var nodes = elem.childNodes, i = nodes.length; i--;) { var node = nodes[i], nodeType = node.nodeType; if (nodeType == 3) { if (!opt_fnFilter || opt_fnFilter(node, elem)) { if (node.data.trim() !== '') { textNodes.push(node.data.trim() !== '' ? node : ''); } } } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) { textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter)); } } } return textNodes; } getTextNodesIn(document.body).forEach((item) => { item.textContent = "Тст" })
