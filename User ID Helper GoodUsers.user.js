// ==UserScript==
// @name User ID Helper GoodUsers
// @namespace http://example.com/
// @version 1.064
// @description Adds a helper message near user ID
// @author Me
// @match http://www.charmdate.com/**
// @match http://www1.charmdate.com/**
// @match http://www2.charmdate.com/**
// @match http://www3.charmdate.com/**
// @match http://www4.charmdate.com/**
// @match http://www5.charmdate.com/**
// @match http://www6.charmdate.com/**
// @match http://www7.charmdate.com/**
// @updateURL
// @downloadURL
// ==/UserScript==

(function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM95461243")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Обмін контактами через 20 листів.Порно. Термін спілкування 2 тиждня.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💸";
  button.style.marginLeft = "5px";
  button.addEventListener("click", function() {
  if (newElement.style.display === "none") {
  newElement.style.display = "block";
  } else {
  newElement.style.display = "none";
  }
  });
  parent.appendChild(button);
  parent.appendChild(newElement);
}
});
})();

(function() {
  'use strict';
  let links = document.querySelectorAll("td a");
  links.forEach(function(link) {
  if (link.textContent.includes("CM55541327")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Порно,зустріч.Фетіш на ледібоєв,трансів,смоктання цицьок.Любе тресом,коли його їбуть в сраку.Правильний кейс,це те що ми їдемо з подругой в його країну.Треба швидко пропонувати дзвінок";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💸";
  button.style.marginLeft = "5px";
  button.addEventListener("click", function() {
  if (newElement.style.display === "none") {
  newElement.style.display = "block";
  } else {
  newElement.style.display = "none";
  }
  });
  parent.appendChild(button);
  parent.appendChild(newElement);
}
});
})();