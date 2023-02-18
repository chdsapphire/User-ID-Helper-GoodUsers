// ==UserScript==
// @name User ID Helper GoodUsers
// @namespace http://example.com/
// @version 2.14
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
// @updateURL https://github.com/chdsapphire/User-ID-Helper-GoodUsers/raw/main/User%20ID%20Helper%20GoodUsers.user.js
// @downloadURL https://github.com/chdsapphire/User-ID-Helper-GoodUsers/raw/main/User%20ID%20Helper%20GoodUsers.user.js
// ==/UserScript==

(function() {
  'use strict';

  function checkForUpdates() {
      console.log("Checking for updates...");

      // Fetch the raw link from GitHub
      fetch("https://github.com/chdsapphire/User-ID-Helper-GoodUsers/raw/main/User%20ID%20Helper%20GoodUsers.user.js")
          .then(response => response.text())
          .then(text => {
              // Extract the version from the fetched script
              const match = /@version\s+([\d.]+)/.exec(text);
              if (match) {
                  const version = match[1];

                  // Compare the version with the current version
                  if (version > GM_info.script.version) {
                      console.log(`A new version (${version}) is available.`);
                      // Add your code to update the script here
                  } else {
                      console.log("You have the latest version.");
                  }
              } else {
                  console.error("Could not extract version information.");
              }
          })
          .catch(error => {
              console.error("An error occurred while checking for updates.", error);
          });
  }

  function runUpdateCheck() {
      checkForUpdates();
      setTimeout(runUpdateCheck,  60 * 60 * 1000);
  }

  runUpdateCheck();
})();


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
  button.innerHTML = "💲";
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
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM15433591")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Порно,зустріч.Фетіш на пірсінг на сосках,на геніталіях.В нього пірсінг на сосках та геніталіях.Можно зацепити на секс з донькою";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM99191410")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Порно. Правильний кейс якщо увімкнути звабливий спліт.Обмін контактами. В нього є фб можно попросити прислати фото його фб профілю";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM50242351")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Зустріч,порно.Він каже що він майстер.В нього є бар, правильний кейс це коли ми просимо поради де краще зустрітись або зупинитись в лондоні. Він пише довгі листи,відповіді не завжди читає,зазвичай приходить в чат 2-3рази на тиждень.Читає не багато.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM46544906")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Зустріч,порно.Правильний випадок увімкнути сексуальний спліт.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM76220681")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Christchurch, New Zealand,peter hinkley.нужна встреча, порно.постоянно плачется что нет денег ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM80620971")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Somers (штат Айова),нужна встреча,письма читает плохо, но время от времени пишет.постоянно плачется что нет денег, работы нет";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM84375318")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Louisville, Kentucky (United States). 2. Bruce 4. нужна встреча, порно, обмен инфой. 5. у него есть жена, которая время от времени страдает нервными срывами  попадает в психушку, об этом лучше не говорить. 6. постоянно плачется что нет денег";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM89717624")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. New South Wales, Australia 2. Richard 4. Мужчина работает водителем автобуса и собирается уйти на пенсию, чтобы мог наслаждаться жизнью. 5. Его интересует встреча и порно. 6. Скептик и эгоист  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM32760556")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. New South Wales, Australia 2. Richard 4. Мужчина работает водителем автобуса и собирается уйти на пенсию, чтобы мог наслаждаться жизнью. 5. Его интересует встреча и порно. 6. Скептик и эгоист  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM32760556")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Мужчина недавно купил дом в Salinas (до этого жил в Pebble Beach), 2. Teslaguy Kramer (Bob) 4. Хочет встретиться, любит порно 5. Постоянно предлагает приехать к нему, посмотреть новый дом, но потом морозиться, потом опять предлагает. 6. С ним нужно ловить момент, общение наскоками 7. Одного разу спіймали тим що сказали що ми фанат тесли. Він фанат тесли  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM32760556")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Мужчина недавно купил дом в Salinas (до этого жил в Pebble Beach), 2. Teslaguy Kramer (Bob) 4. Хочет встретиться, любит порно 5. Постоянно предлагает приехать к нему, посмотреть новый дом, но потом морозиться, потом опять предлагает. 6. С ним нужно ловить момент, общение наскоками 7. Одного разу спіймали тим що сказали що ми фанат тесли. Він фанат тесли  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM23799855")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Rotorua (Новая Зеландия) 2. Michael 4. Нужна встреча, порно 5. Работает там в больнице рентгенологом, имеет квалификацию технолога медицинской визуализации 6. Волнуется за своего пожилого отца, боится старости";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM23799855")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Rotorua (Новая Зеландия) 2. Michael 4. Нужна встреча, порно 5. Работает там в больнице рентгенологом, имеет квалификацию технолога медицинской визуализации 6. Волнуется за своего пожилого отца, боится старости";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM19544682")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Scottsdale (Arizona)2. Richard4. Юрист, участвует в судебных разбирательствах 5. Нужна встреча 6. Общение больше дружеское";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM26415845")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Klamath Falls, Oregon (United States) 2. Joseph 4. Шизик, считает себя аналитиком, разговаривает с Богом и считает себя особенным, понятия веры перевернутые, тоже своеобразные как и он сам, любит одеваться в женскую одежду, считает что он мужчина-женщина в одном теле 5. Он в детстве жил в приемной семье и его несколько лет насиловал муж одной из сестер, пока он не пошел в армию 6. Любит длинные письма";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM67957725")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Pont-à-Celles, Belgium 2. Denis 4. Нужна встреча, БДСМ 5. Он считает что уже прожил несколько жизней и на земле его жизнь не первая, но он их просто не помнит 6. Он считает себя особенным";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM27489074")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Plano, Texas (United States) 2. Stephen (Stevie) 4. Нужна встреча, порно 5. Хотел ребенка, но передумал, теперь категорически не хочет 6. жалуется что сайт дорогой, хочет бесплатно смотреть видео";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM17769660")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Calgary, Alberta (Canada) 2. Robert 4. Хочет встречу, говорит давай встретимся и теряется, потом приходит и говорит, что он не верит что леди настоящая, и почему они все еще не встретились 5. Ему не нравятся спамы провокации 6. В хорошее настроение может быть романтичным";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM17769660")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Calgary, Alberta (Canada) 2. Robert 4. Хочет встречу, говорит давай встретимся и теряется, потом приходит и говорит, что он не верит что леди настоящая, и почему они все еще не встретились 5. Ему не нравятся спамы провокации 6. В хорошее настроение может быть романтичным";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM38050132")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Overland Park, Kansas (United States) 2. Bill 4. Нужна встреча, порно, обмен инфой 5. Очень упертый и всегда прав, все знает лучше чем какая-то женщина, ему нравится когда его слушают и советуются 6. Слишком настырно ждет встречу и если она не происходит, то начинает жаловаться, что ты не настоящая";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM24968672")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Derrycahill (Ireland) 2. Tony 4. Есть дом и небольшой участок земли, две собаки и две кошки. Собаки - Max, немецкая овчарка и Buster, лабрадор, работает репетитором в Edutionsl Trainning.  5. Состоит в обществе каких-то масонов с которыми встречается в Лондоне время от времени. 6. Любит общаться на тему политики.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM57951957")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Southampton (United Kingdom) 2. Ron (Richard) 4. Отставной британский бизнесмен, имеет много украинских друзей, которые живут в его городе. 5. Ему нравятся сильные женщины. 6. Недавно вернулся на сайт, чтобы попытаться найти девушку, которой он писал по электронной почте, и убедиться, что с ней все в порядке.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM94928684")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Живет в 4 часах от Miami (Florida) 2. Douglas 4. Играет на гитаре, нужна встреча, порно, обмен инфой 5. Писал о том, что он никогда не смог бы жить в Майами. Слишком много нежелательных чернокожих и бедных латиноамериканцев 6. Общается на сайте с несколькими леди";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM822651")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Brandon (Canada) 2. Andrew 4. Нужна встреча 5. Мужчина замкнутый, работает охранником в банке и общается со своим младшим братом, иногда они встречаются за ужином. 6. Мужчина очень давно на сайте и его сложно чем то удивить";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM74167857")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Quebec (Canada) 2. JeanPierre 4. Ему нужно найти кого-то серьезного и готового к настоящим и конкретным отношениям 5. Его увлечения связаны со спортом и музыкой, забеги на длинные дистанции по всему миру и игра на гитаре, у него есть дети близнецы 5 лет Anyssia и Axel, которых он очень любит и проводит с ними много времени 6. У него уже были виртуальные отношения с другими женщинами, на этом сайте, и он считает, что это пустая трата времени и денег";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM99353969")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Город где живет мужчина США, город Тусон, штат Аризона.2. Кристофер. 4. Что хочет и на что цеплять можно.Серьезные отношения. Любит разговоры о еде, очень хорошо разбирается в кулинарии, так же любит юмор, нужно много шутить, курит траву и немного пошлый. Можно спросить за семью. Тема политики хорошо заходит.5. Что не любит что лучше не упоминать.  Лучше не говорить ничего плохого в своей семье, все должны любить друг друга и уважать. Не нужно начинать спорить или говорить про общения с другими девушками , начинает либо уходить с чата, либо обижаться и не писать несколько дней.6. Слабые // сильные места. Общается в чате и читает письма, нет камшеера, фотки смотрит редко. В письмах не смотрит платные фото и видео  Дарит подарки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM301671")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. США, Франклин-Каунти штат Небраска.2. Стив.4. Можно предложить дружбу и сказать что живешь недалеко, тема серьезных отношений тоже норм.5. Что не любит что лучше не упоминать. Не любит когда его обманывают и обещают что-то очень скоро.6. Слабые // сильные места. Общается только в письмах, нет камшеера, фотки смотрит редко. В письмах не смотрит платные фото и видео. Дарит мелкие подарки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM51282790")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1.США, город Портедж, Висконсин.2. Ларри.4. Ищет семью состоящую из девушек рабынь, которые будут удовлетворять мастера. Любит порно..5. Что не любит что лучше не упоминать.  Дает тупые правила в начале общения, которые нужно соблюдать. Ненавидит фото, общение камшеер призирает. Нельзя перечить ему.6. Слабые // сильные места Общается в чате, очень редко пишет письма, но по началу читает письма, иногда может отправить подарок.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM69238061")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. США, Уэстпорт, Коннектикут.2. Джефф.4.Не ищет серьезные отношения, хочет просто круто проводить время вместе и любит порно. Хочет чтобы девушка приехала к нему как можно скорее.6.Общается в камшеер, просто в чате, любит смотреть камеру, стикеры, и иногда отправляет письма..";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM645589")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Може бути норм аможе ні. Може писати скарги про те що сайт блокує його інфу.1.США, Рестон, Вирджиния.2. Baltassar.4. Хочет чтобы девушка приехала к нему или жила недалеко от него.5. Не любит профессиональные фотографии, лучше селфи или обычные фотки.6.  Общается в камшеер иногда, просто в чате,  редко общается, после того как подарил подарок пропал.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM72630623")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1.США, город Чандлер, штат Аризона.2. Рэнди.4.Любит порно, хочет чтобы девушка приехала и занялась с ним сексом..5. Он инвалид, лучше про это не расспрашивать.6. Общается в чате и читает письма, нет камшеера, фотки смотрит редко. Подарки не дарит, сразу перестает нормально общаться…";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM56104779")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. Канада, Эдмонтон.2. Сэмми.4. Что хочет и на что цеплять можно.Хочет встречи и свидание. Личная встреча в его городе.5. Начинаешь отмазываться от встречи, приходит в чат и ругается.6. Общался в чате один раз 3 минуты… и читает письма но мало отвечает…";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM14640756")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. США, город Эдмонт, штат Оклахома.2. Джон.4.Хочет встречи , но одновременно и не хочет встречи.5.Начинаешь отмазываться от встречи, приходит в чат и ругается.6. Смотрит фотки, в чат не приходит, почти не отвечает, но смотрит письма и фотки в письме.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM14640756")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "1. США, город Эдмонт, штат Оклахома.2. Джон.4.Хочет встречи , но одновременно и не хочет встречи.5.Начинаешь отмазываться от встречи, приходит в чат и ругается.6. Смотрит фотки, в чат не приходит, почти не отвечает, но смотрит письма и фотки в письме.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM90682038")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Thomas Порно,говорит будем друзьями на всю жизнь.со встречи срезается сам, время от времени пишет письма.фермер, весь год он сажает различные культуры, вечно нет времени на общение, встречи тем более.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM88481291")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Хоче зустріч, читає багато листів, може дзвонити він лікар тому можно пограти в пошуки його в соц мережах";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM13114623")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "у него где то девушка на сайте, которую он ждет. там любовь,любит порно письма.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM30086219")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- Встреча. приятное общение, флирт, но без порно, можно попробовать что нибудь легкое.У него есть 4 детей от бывшей жены, он в разводе, ревнует и скучает по детям, когда они с бывшей женой. у него своя пекарня, он много времени проводит на работе и любит путешествия. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45677961")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- 2.  Michael 3. Rastatt, Germany 4. Мужчина ищет серьезных отношений. Любитель романтических диалогов 5. Выходит в чат только при упоминании встречи. Нравится легкое порно.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM46790387")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 7. John 8. Manteca, California 9. Мужчина ищет серьезных отношений и встречи. 10. Лучше всего в чате заходит порно. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM68432334")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  2. William Hansen 12. Carrier, Mississippi 13. Общение только по поводу встречи. 14.  В чат выходит крайне редко. Ненавидит многочисленные письма и чаты. Всегда жалуется на нехватку средств и глубокую старость ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM62263614")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 16. Philip 17. Lydney, UK 18. Мужчина вдовец, который ищет серьезные отношения и встречу. В чат выходит редко 19. Общение на любимые темы, кроме порно";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM58250438")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 21. Clive 22. Derby, UK 23. номер телефону 247889950200 25. Мужчина любит романтические письма. В чат не выходит.26. Общение состоит из признаний в любви и обсуждении встречи, можно порно ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM55281199")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 28. Colin 29. UK 30. +447851650080 31. Романтическое общение 32. Общение абсолютно на любые темы: порно, встреча, любовь. В чат выходит часто ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM23037088")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Tony Franca 35. Adelaide, Australia 36. Instagram - picha_daco 37. Мужчина любит скандалы. Постоянные упреки, проверки через фейки, оскорбления, обвинения в обмане, попытки найти девушку во всех соц сетях и ее родственников. При этом его можно быстро осадить признаниями в любви и обещаниями скорой встречи. 38. Общение на любые темы, но больше всего привлекает встреча. Также его привлекают девушки с $";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM57706168")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Gus. Живет у озера Тахо, часто бывает в LA. Очень ревнивый мужчина. Упрекает в общении с другими мужчинами, если увидит девушку онлайн после чата с ним. После этого он желает всего хорошего и исчезает. Вызвать его обратно можно предложением скорой встречи либо порно. В чате общается абсолютно на любые темы, любит долгие пошлые переписки.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM98710148")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Michael Hamilton. Green Bay, WI. 1-920-784-7909. Мужчина заинтересован в серьезных отношениях. Письма пишет и читает редко. В чат не выходит. Нравятся романтические письма и обсуждение встречи ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM24517639")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Steve. Fort Lauderdale. Мужчина любит романтические письма. В чат практически не выходит. Пишет и читает письма не так часто. Любит любовные послания, порно фантазии, обсуждения встречи ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM25608849")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Donald. Columbia Louisiana. Мужчина редко пишет письма и выходит в чат. Общение на тему встречи ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM25608849")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Donald. Columbia Louisiana. Мужчина редко пишет письма и выходит в чат. Общение на тему встречи ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM46890225")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Victor Tores. Austin, US. Мужчину интересует встреча и порно.В нього багато секс іграшок котрими він буде кохати жінку. В чат выходит только при упоминании скоро встречи.Ведется на обмін контактами. Общается в чате на любые темы";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM97822681")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Joe. Живет недалеко от Мюнхена . +491728966883   e-mail: info@utc-flugschule.de. Мужчина пилот, бывает в разных странах. Привлекает тема встречи, пишет любовные письма, нравится порно . В чаты не выходит, в письмах поддерживает общение на любые темы";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM62145211")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Lee Francis. Живет недалеко от Лондона . Мужчина ищет серьезные отношения, любит романтические диалоги. Охотно общается после предложения встречи - пишет письма, выходит в чат. Нравится порно. Общается абсолютно на любые темы";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM572062")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Peter. Port St. Lucie, Fl. Общается только на тему встречи. Если отменять встречу кидает в чс, обвиняет во всем. Общение на другие темы мало поддерживает, говорит, что ненавидит чаты. Порно поддерживает по настроению.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM15544560")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Stefan Gardestam. Stallarholmen. Общается на тему встречи.. Выходит в чат если назначить дату встречи, общается на любые темы. Порно не заходит";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM54789797")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Victor Garcia. La Coruna. +34619848036. Общение только на тему встречи и обмена контактами ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41105452")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Richard (San Antonio)Встреча и порно! Женат. Камшееры .Ищет новую жену ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM29972055")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Max (Montana) Встреча! Легкая эротика! Камшеер и звонки.  Ищет жену, любит любовные письма! ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM90292743")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Jeff (  Lansing) Встреча и любовь.. Порно поз запретом. Камшеер. Сложный мужчина, проверяет каждую деталь, все  то что рассказывали! Очень любит когда его залюбливают. ищет жену очень сложные отношения с бывшей женой. Создает фейки и проверяет. Истеричка. Любит спускать пар на женщину  соорясь с ней. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM78215361")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Larry (Ohio) Встреча...Порно под запретом, призирает таких женщин! Очень дотошный до каждой мелочи, нужно помнить во всех деталях что ему рассказывала. Ему нужна жена и его нужно очень любить, большие любовные письма";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45677961")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Michael Norbert (Male)Обмен контактами и встреча! Порно не воспринимает. мужчина правильный. Ему важна встреча или что бы ему дали номер! Гуляем по всем сайтам, доверчевый до момента как отменят встречу. поэтому сразу лучше не обещать что приедешь через месяц, лучше пообещать позже срок что бы дольше продержался! Ноет что нет денег и что уйдет с сайта уже как 2 года но все тут же";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM15420786")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Hans  (Port Elizabeth)Обмен контактами и встреча! Порно под запретом!!Но больше поведеться на контакты, любит загадывать загадки что бы отгадали контакты, очень душной помнит каждую мелочь что когда говорили. Не любит чаты жмот, письма читает . ведеться на спам с контактами. Ругаеться если письмо короткое(  в его понимании короткое это 1000 символов) , пишем письма на 3-6 тысяч и требует такого же, что бы все о жизни обязательно рассказывали!";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45707883")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Martin Keith  (Australia)встреча, романтик. Живет в доме престарелых, порно не заходит только встреча. контакты не просит и на обмен не ведеться. ему нужно что бы приехала женщина и ухаживала. в чаты не выходит. письма читает все!";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM59266161")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 1. Аллан 2. Живет где-то возле Майами 3. не давал, но давал свой сайт, чтобы мы купили его книгу или что-то типа того. 4. Также хочет съебать с сайта, любовь + порно ( он псевдоинтеллектуал ), Он либертарианец, от этого можно отталкиваться, довольно культурный. 5. Может сгореть если все идет не так как он хочет. Всё должно быть по его сценарию. 6. Просто мозгоёб, но на какой-то кэш можно развести.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM95943482")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 1. David, Настоящее имя Мадубуэзе Нвозо/Madubueze Nwozo2. Живет в Нэшвилл, работает в штате Теннеси3. +161583831574. Хочет съебать с сайта, любовь + порно ( хочет много секса )5. Да в принципе опенмайнд.6. Деньги, может слиться в любой момент.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM74186875")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– он колясочник, основная тема общения была в том, что девушка должна пожертвовать ему деньги на то, чтобы помочь беженцам и раньше только на это откликался.Правильно буде писати що вона дуже заможна жінка";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM49957456")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Tom (Нытик, просит 1 письмо в 2 дня...хочет всречу как можно скорее, любит длинные письма)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM98072409")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Ronald (Хочет длинные письма, но сам пишет хуйню, нужно придумывать что писать, в чатах редко смотрит очень редко, встреча)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM18444841")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Russ (Иногда может чат, письма читает по 10+ и так же может прислать..фото не смотрит и остальное тоже..встреча)//Порно, просто общение и встреча ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM57408777")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Carlos (Хочет встречу, иногда может зайти в чат, фото не смотрит и т.д...любит порно, были запросы на зз, но толку 0..)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41297221")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Milan (Хз, были звонки, чаты, потерялся, недавно написал, что его заебуют женщины и просят трахнуть их дочерей или групповуха и т.д...сказал ,что разочаровался в украинских девушках и опять пропал, встреча)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM30590536")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Mike (Был хороший мужик, хорошие чаты, высылал хорошие подарки не любит порно, встреча,ОБМІН КОНТАКТАМИ.Він волонтер допомогає українцям.Може вестись на зустріч в його місті)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM37290323")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– gary (Иногда чат, иногда письма, иногда смотрит фото, хочет встреч) Просто иногда... Ведется за зустріч в його місті і на обмін контактами.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM293354")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– bruce (Не было ни одного чата и не хочет...читает письма и отправляет иногда, но высылает хорошие подарки, встреча)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM1150037")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–William (Хороший мужик, стабильно чат, стабильно читает письма, но отправляет одно в 7-10 писем иногда до лимита доходит нужно просить, чтобы написал..смотрит фото, видео, может отправить подарки, иногда подрывает крышу и начинает ныть, что все хуево и он мне не нужен нужно успокаивать, встреча, но тоже ждун)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM1092990")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–malcolm (Лучший дедок, иногда забывает что встреча на какую-то дату, но сейчас стал записывать...Смотрит фото в чатах, приходит только камшик в письмах просит отправлять только одно фото, потому что думает, что платит деньги за другие, если даже не открыл..За подарки говорит,что не отправит пока не увидит лично,лучше не просить)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM83289410")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Jason (Чатов нет говорит что дорого, но может за раз отослать 10 писем и прочитать так же, фото в письмах иногда смотрит, если заебывать, встреча)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41280778")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Robert (Хочет встреч, читает , смотрит иногда фото, если несколько раз с периодом раз в неделю просить подарки может выслать на 3-й раз..чаты очень редко из-за сливов со встреч)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM83153828")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Bryan (обычный мужик ,любит порно читает стабильно и отвечает, раньше хорош был в чате на камшике сейчас чатов нет только письма, может дарить подарки конкретный ждун, встреча)";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM86384420")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Michael Долгое общение, раньше выходил в кам, но сейчас экономит деньги. Встреча, Очень хочет встретиться в его городе в Старбаксе";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM23050996")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Mark Полный бомжара, надо трясти с него письма. Немного порнушник в плане садомазохизма, хочет придушить ))))), но хочет настощей любви не смотря на это))) просто общение и встреча. Не любит камеру и с камерой вкл не приходит в чат.Правильна історія що вона працювала в його країні або працює";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM29529353")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Georgios Хочет семью, не порно вообще, хочет встретиться, Крраще якщо клієнтка була Магдебурге , но провоцируем на встречу в его городе, романтик няшка вообще";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM51282790")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Мужик гарем хочет, обращаться к нему Мастер, если начнет выендриваться, не смотрит фотки и хочет, чтобы фотки в письмах были максимально отфотошопленные. общаться без камеры, бо он бомжик";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM32211265")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Какой-то водитель, который хочет отношений, но у него их то ли не было, то ли недолгие..  застенчивый, постоянно в разъездах, основная тема - встреча. Раз в 10 писем может ответить.Девушка для него в автосалоне Форд в Перте в Австралии работает, живет в Bunbary.в чаты выходит только около 4-5 утра нашего времени, но тоже редко, хотя можно на камшеер развести. Немного душный романтик";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM32211265")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Какой-то водитель, который хочет отношений, но у него их то ли не было, то ли недолгие..  застенчивый, постоянно в разъездах, основная тема - встреча. Раз в 10 писем может ответить.Девушка для него в автосалоне Форд в Перте в Австралии работает, живет в Bunbary.в чаты выходит только около 4-5 утра нашего времени, но тоже редко, хотя можно на камшеер развести. Немного душный романтик";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM75318412")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– рідко чат, більше листів, про шлюб і про дітей не говорити, інвалід";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM66183480")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– тільки листи, рідко чат, можна звонити кожен день, чекає дівчину яка буде жити в нього";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM91696324")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Charles 1 California Hermosa Beach 2 Чарльз Брайан Мартин 4 общение вне сайта и встреча ему нужно только это. 5 проверяет на других сайтах анкеты и пишет с левых страниц , очень противный и придирается ко  всему. 6. Очень противный и геморойный может даже написать жалобу просит фото с его именем на листике. Ищет только встречу";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM64091977")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 1 United States Baltimore 2 Buddy 4 Только встреча!!! И СЕКС БДСМ 5 Очень сильный доминант не любит когда не слушают то что он говорит делать 6 Читает но не любит когда пишешь каждый день ругается сильно иногда выходит в чат что бы узнать не приехала ли девушка в его город ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM64091977")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 1 United States Baltimore 2 Buddy 4 Только встреча!!! И СЕКС БДСМ 5 Очень сильный доминант не любит когда не слушают то что он говорит делать 6 Читает но не любит когда пишешь каждый день ругается сильно иногда выходит в чат что бы узнать не приехала ли девушка в его город ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM58213448")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 1 United States Baltimore 2 Buddy 4 Только встреча!!! И СЕКС БДСМ 5 Очень сильный доминант не любит когда не слушают то что он говорит делать 6 Читает но не любит когда пишешь каждый день ругается сильно иногда выходит в чат что бы узнать не приехала ли девушка в его город ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM26672848")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– jose живе в monterrey mexico намагається знайти будь яку інформацію про дівчат, перевіряє фото в Інтернеті, хоче справжніх відносин ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM98922822")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– не любить багато листів, може зайти в чат і наїхати, що дівчина багато пише, готовий зустрітись ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM42389630")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– на перший чат грошей не жаліє, далі жлоб, не треба багато писати, бо злиться ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM29815006")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– політика, він фанат Трампа, все про Бога ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM86626899")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– фотки всі дивиться в чаті, можна довго тримать на цікавому спілкуванні, хвалить його";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM13001443")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– романтик, можна CamShare, розуміє хто ми і для чого ми тут, чіпляється якщо дівчина в його місті";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM67863660")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Jari Город: Sauvo Интересует встреча, скидывает фото себя голого, поэтому можно порно.і";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM24055250")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Gary 4 Порно и встреча 5 Про работу не очень любит говорить 6 Стабильно читает и дарит подарки когда просишь не думает жить с девушкой а хочет просто приезжать к ней на секс";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM79625585")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Darrell 1 United States Bellflower 2 реальне імʼя jackie?? 4 Серьезные отношение , любовь  5 Одиночка который ждет свою любовь не любит говорить о прошлом 6. Зацепить можно то что ты рядом с ним в городе или уже есть билет на руках. Редко пишет!";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM50105009")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– 1 United Kingdom Chester 4 Начало общения без надо без порно, хочет серьёзные отношения 5 не любит тратить деньги и не хочет платить за общение 6 Обожает свою работу трудоголик работает на королевской почте. Встреча в ближайшие сроки! ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM96147439")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– James 4 Встреча в его городе или приезд в город рядом с ним 6 Читает но не все мониторит даты приезда  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM33571655")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  пошляк, можна випросить CamShare і дзвінок, все про кохання і зустріч  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM76083601")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  alex Город: Budapest Ему интересен обмен контактами и встреча. Теряет надежду на этом сайте. Можно разговоры про порно, но основное встреча. Можно ещё о войне поныть ему.Он хочет встретить любовь.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM65139452")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Nigel 1 Yeovil United Kingdom 4 Обмен контактами 6 Можно развести на письма с обменам почты и или номера телефона  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM10202756")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Doug Он пилот, я живу в Детройте и я базируюсь в Нью-Йорке-его слова.Любит секси разговоры в camshare. Но в то же время с серьезными намерениями. Рассказывает много о себе. Поправился из-за тяжелого периода, сейчас правильно питаеться. Обучает кузину летать на самолете. Не любит модные вещи и дорогие, хочет жить в доме в горах. Зацепила анкета тем, что нет много воды о любви и тд, а есть точность о хобби и простоте. У него была несерьезная девушка, поэтому ему важна серьезность.Хочет встречу и порно  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM75605234")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Matt Город: Indianapolis У него есть две дочери. Про встречу не говорит.Порнушник жёсткий. Камшерит и показывает член на камеру. Цепляет тройничек с девушками.Интересовался контактами, потому что хотел уйти с сайта.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM80818387")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Richard Город: Edinburgh Общался с ней на другом сайте, хочет встречу. Немного порнушник.Он верный и честный и такую же ищет девушку.Работает водителем грузовика..  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM80818387")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Richard Город: Edinburgh Общался с ней на другом сайте, хочет встречу. Немного порнушник.Он верный и честный и такую же ищет девушку.Работает водителем грузовика..  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM79585416")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Joseph Город: San Jose Был в Украине, интересует исключительно встреча.У него есть мама, за которой он ухаживает.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM76677739")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Siggi Город: Mainz.Имя: Siegfried Schaus.Было два брака, с этой женой до сих пор вместе, спит на диване, ищет последнюю попытку на любовь, хочет еще одного ребенка.Тренирует девочек по футболу.Пытался передать свой Фейсбук.Интересны контакты ему и встреча.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM50188250")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  James. Город: Westminster.Хочет ее осеменить, у него больные почки и сахарный диабет, жирный дед, может показать член в камшер, жёсткий порнушник, может поговорить по телефону, подышать в трубку.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM46845596")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  John. Город: Modesto.Ему нужна встреча, и хочет получить номер.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM46826084")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Jeffrey .Город: Windsor.Недоверчивый, раздражающий тип, ищет серьезную девушку, нужна встреча...Ищет здесь любовь.Не хочет быть придирчивым.У него есть сын Роберт, 23 года, он живет с матерью.Любит кататься на велосипеде и лошадях или ходить в походы на природу. Он готовит и любит делать массаж. Он целитель и делает расклады на картах таро.Он хочет жену украинку, чтоб она научила его истории Украины, еде и культуре.Нужна честная и верная жена.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM56204552")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Leif Фамилия имя - Guthus Leif Город - Norway, HORTEN Хочет обмен данными, не нравится когда напрягают чатами и камшеер.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM13395105")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  больной на всю голову. Хочет встречи. Говорить про грязные секреты , рассказывает по секс с сестрой и собакой. Письма читает .Приехать желаетльно с подругой .  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM81572119")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Джем. Дубаи Марина. Деньги есть .Любит смотреть порно, хочет секс 3. ждет встречи..  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM10408863")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Патрик. Лос Анжелес.Встреча, лесби порно, не против секс 3. Шизоидный не любит грубость, всегда со всем соглашаться. Разговоры долгие...  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM20207394")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  1 Mark.2 Florida.4 Если он написал вам, тогда начните с лайтового общения. Он любит всё, что связанно с ранчо. Заядлый рыбак. Имеет кучу травм. Купил дом на колёсах, в котором захочет жить с вами. Доите его по максимуму в первые несколько дней. Камшер, фото, видео - он смотрит всё. На подарки его тоже можно брать. В любой момент он может просто пропасть без причины. Лучше предложить ему встречу через 2-3 недели, и доить его эти 2 недели по максимуму..5 Если начнёт тему за обмен контактами, скинет сайт своей секретарши, для того, чтобы вы связались с ним там - скажите, что сайт на территории Украины не работает. Лучше избегать этой темы с ним.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM17112913")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  1 David. 2 Las Vegas 4 Пишет книгу. Любит показать свою змею, и сам тащится от этого. Сексороматик. Хочет встречи.6 Часто приходит в камшер. Не всегда читает письма. Он общается с многими.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM12695692")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  1 Edwin Thomas 2 Florida 4 Заядлый рыбак, прекрасный повар и просто хороший дед. Тему общения с ним найти проще некуда. 5 Не любит когда его задалбывают звонками/письмами. Лучше словить ритм общения с ним. 6 Дарид подарки сам, иногда и просить не нужно. С ним нужно говорить по душам. (Встречу лучше не предлагать, он не ищет любовь. Ему интересен процесс общения с красотками).  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70241815")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  1 Rodwin 2 Honolulu, Hawaii 4 Семья, он хочет создать свою крепкую семью.  5 Лучше не упоминать о его отношениях. Они были 20 лет, и там не сложилось. 6 Активный персонаж, если подобрать подход. Разговоры по душам его радуют. .  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM97218312")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  1 Rodwin 2 Honolulu, Hawaii 4 Семья, он хочет создать свою крепкую семью.  5 Лучше не упоминать о его отношениях. Они были 20 лет, и там не сложилось. 6 Активный персонаж, если подобрать подход. Разговоры по душам его радуют. .  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM97218312")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  1 Thomas Keith  2 Pennsylvania 4 Любит покидать члены, любит секс. 5 Собирается уходить с сайта. Заходит редко. 6 Сильная сторона - любит массаж простаты. Ведется на обмін контактами. .  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM33571655")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  1 Ruben 2 Louisiana 4 Любит всё, что связанно с любовью и сексом. Романтик. 5 Редко заходит в онлайн. Работа связанная с путешесествиями.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM11614992")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Встреча, порно не надо, очень спокойный, можно звонки, но нужно уговорить, чтобы не ставил ограничение по времени   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM95461243")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Хочет трисом, не верит если говорить, что девушка собирается в его город, лучше быть где-то рядом, за контакты не надо   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM51854")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Педофил, хочет чтобы если у девушки был ребенок, то он присутствовал при их сексе, отбитый в плане секса, любит все   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM33506253")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Контакты, пишет музыку, живет в Лидс UK, может повестись на встречу   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM74245602")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Контакты, ведется больше на почту   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM38284870")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Контакты (FB, watsap), встреча, порно, хочет анал и любит лизать. Камшееры не предлагать, реагирует агрессивно   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM84431150")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Контакты, порно, можно говорить, что у девушки много денег   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM75605234")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Matt: Indianapolis У него есть две дочери. Про встречу не говорит. Порнушник жёсткий. Камшерит и показывает член на камеру.  Цепляет тройничек с девушками.Интересовался контактами, потому что хотел уйти с сайта.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM80551615")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Порно.Дивится багато фото і відео.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41569506")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Gerald Зустріч, дуже багато порно, також любов і романтика. треба вихваляти його член.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM572062")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  peter  Дуже нервовий, зустріч, і також обмін контактами, а саме WeChat. Любить багато порно під настрій Може спалити спліт. Має дім також в Флоріда.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM79585416")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Joseph Город: San Jose Был в Украине, интересует исключительно встреча.У него есть мама, за которой он ухаживает..   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM76677739")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Siggi  Город: Mainz Имя: Siegfried Schaus Было два брака, с этой женой до сих пор вместе, спит на диване, ищет последнюю попытку на любовь, хочет еще одного ребенка. Тренирует девочек по футболу. Пытался передать свой Фейсбук.Интересны контакты ему и встреча.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM50188250")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  ames  Город: Westminster у него больные почки и сахарный диабет, жирный дед, может показать член в камшер, жёсткий порнушник, может поговорить по телефону, подышать в трубку.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM53638242")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Paul Встреча в его городе, можно вывести на камшеер, но нужно долбить его за это. Глубоко верующий, но если сам начнет, то можно эротику, предлагает и хочет массаж  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM40496221")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Встреча в его городе, просто общение, можно легкое порно, семейный  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM43687216")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– David Контакты, хочет жениться хоть на ком-то уже у кого есть деньги, ведется на переезд в его город ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM52683330")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Bobby Порно, встреча в его городе, контакты, не любит камшееры, депрессивный ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM15189255")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Balken Встреча, контакты НЕ надо, на камшеер НЕ выходит, можно звонки, но аккуратно";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM49686630")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Mark Порно, встреча, он в городе недалеко от Лондона, терпилка, можно просить звонок";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM20021655")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Mark - Читает письма и после них приходит в чат. Тема Порно и Встреча. Побольше писем с порно и провокаций такого содержания. В камшеер вывести не получилось.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM55148912")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Alfredo - Пишет письмо раз в день перед своим сном. Тема Встреча и Контакты. Будет ждать модель у себя. Любит когда женщина с мозгами.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM20982191")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Bill - Деньги есть на переписку письмами. Тема Порно и немного встречи (будет ждать приезда к нему). Побольше писать о том, как и в каком порядке модель будем с ним зажигать.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM90574874")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Pavel - Деньги есть. Всем известный персонаж. Любит, когда женщине больно ( пытки, издевательства). Очень мало пишет и нужно готовиться к тому, что придется писать о том как и в каком порядке Вашу модель насиловали ( в магазине охранник, таможенник или гинеколог).  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM37147012")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Stephen - Деньги есть, но в последнее время начал экономить. Много чатов и камшееров(если влюбится). Очень легкое общение. Тема - встреча. У мужчины много хобби. Любит говорить о своей работе ( собственная строительная компания) и о других своих проектах.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM48212021")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  John - Пишет объемные романтические письма. Деньги есть, но жмот. Возможен созвон и кратковременный чат порно характера. Любит французский язык и поговорить о высоком.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM31816076")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Chris Однолюб, багато порно,  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45892734")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  настоящее имя Karol. Читает письма, пишет ответные. На камшеер приходиться долго разводить. Умный мужчина, любит поразмышлять. В разводе, есть сын. За встречу и контакты не упоминает.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM33385247")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Raymond порнушнік, все що пов'язано з куні це його тема. потрібно постійно писати як хочеш його язик і боготворити його язик, можна розкрутити на недовгий камшеер якщо попросити показати його пєтарду.він це дууууже любить  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM18512101")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Ronnie цей кадр клює на розмови про мистецтво,музеї,розмови про його афігенний стиль,ще він дуже полюбляє тему контактів,але не просто обмін, а вигадування рєбусів і схем обміну  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM1217908")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  зовуть Jenssen. куколд.ну тут все ясно, ціпанути можна на розповідь про коханця, з яким модель буде займатись сексом,поки Дженсен буде спостерігати,або спати наказаний в сусідній кімнаті  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM83349559")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Hansueli Говорить німецькою, хоче обмін контактами, може подивитись фото в листах якщо додати опис  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM1294312")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  om (раб) Живе наразі на Філіпінах, раб, любить пити сечу, їсти гімно, та менструальні випорожнення, шкуає зустріч с госпожею  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM313497")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Tan Шукає швидку зустріч в Schaffhausen(Швейцарія),шукає пристрасть, не вірить у реальність жінок ту  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM52683330")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Bobby - Хочет встречу для секса. Любит обычное порное и живет в горде рядом Piedmont Triad International Airport. Точный город неизвестен. Контакты нет  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM17112913")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  David  На встречу не давит. Хочет найти любовь + порно с детальным описанием. Очень сильный в камшеерах и любит романтику. Контакты нет.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41297221")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Milan  Хочет обычную девушку и очень любит эротику( не сразу ). Верит что в мире есть заговор и все войны из-за денег. Любит так же контакты,хорошие чаты.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM33571655")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Ruben  Откровенное порно,очень четко любит описывать. Хочет встречу и любит любовные письма.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM11338519")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–  Greg  Хочет встречу. Инвалид и верующий человек. Ищет девушку из ведения (танцует и черные волосы). Любит немного эротики и в целом простое общение  .  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM55745413")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Mark  Хочет встречи. Верующий ( Лютеранская церковь). Немного эротики,но секс после брака. Контакты и звонки через сайт. В чатах любит смотреть фото. Проблемы с ногой(больно ходить)  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45050168")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Shaun Цікавить обмін контактами. Може подивитись фото  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM13384109")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– John  Общение на общие темы,хочет найти простую жену. Очень увлекается историей,классической музыкой и любит обмен ФБ  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM72171292")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Robert  - Настоящие имя Robi (Robika). Хочет встречу и контакты. Очень ранимый и ищет простую и небогатую жену. Хорошо идут контакты + любит письма в дружеском стиле! Контакты urjob75@gmail.com  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70546823")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Frank - Хочет встречу, увлекается машинами ( лоурайдеры). Против вакцин из-за этого умерла сестра. Может забывать о чем было прошлое письмо. Порно и контакты нет.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM62278138")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Kai  - хочет встречу , любит просто общение и хочет обычную девушку. Порно и контакты нет. Скромный и застенчивый. Хорошие чаты + медийка  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM49781343")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Phil Встречи, порно в роли госпожи, возможно раскрутить на камшеер, возможны контакты.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM74724307")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Bobby  Возможны встречи,много порно, читает все письма, но никаких чатов.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM57237037")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Rudolf Хочет реальных встреч,пропадает иногда, обмен контактами возможен, очень любит порно  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM1015664")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Steven Встречи, очень любит девственниц и много жен,порно, старается экономить, обмен контактами возможен.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM82536955")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Gordon Хочет встреч, любит порно, очень экономный ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM29661477")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "–Norm Очень общительный. Очень хорошо идет на звонки, камшеер, чаты. Иногда может пропадать. Возможно легкий намек на порно. Ждет встреч. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM68411079")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Bob Нужно быть внимательным к нему по общению. Любит порно, однако не перегибать. Контакты не предлогать.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM43680035")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– David Мужчина желает реальных встреч,может зайти в чат и возможен камшеер. Очень любит порно.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM61255088")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Joe не подобаються бісексуали.Треба казати що він накращій чоловік.Спілкуєтся 3 дні потім блокує  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM75212818")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Todd Хоче зустріч. Знервований. Може камшеир, фото, відео не дивиться. Любить похвалу.Може читати багато листів. Треба підлаштовуватись під нього  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM575822")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "– Edward (Ted) Хоче зустріч, може приїхати усюди, багато порно, куколд. Дивиться фото  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM74055595")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- Встреча  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM74055595")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- Встреча  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM88458334")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- хуй знает шо но бабок пизда  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM35513829")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- Встреча/Порно/Обмен инфой:  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM60666887")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- КПД: Длинные камшеер/подарки смотрит медиа - Встреча  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM26108102")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- КПД: Длинные камшееры  Порно  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM24682578")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "- КПД: Длинные камшееры/Звонки –Обмен инфой:  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM55587640")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Длинные чаты/ Встреча у него в городе ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM13200367")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Длинные чаты/ Порно/Встреча ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM341489")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Долгие текст чаты/ Встреча/Порно/Обмен инфой: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM77314595")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Жирные камшееры/ Встреча/Порно: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM18700201")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Камшееры/ Встреча: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM1023303")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Камшееры/ Порно/Инфа: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70686132")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Камшееры/ ОЧень жесткое порно ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM32272327")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: КАмшееры/Медиа/ Обмен контактами/Порно ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM27546993")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Камшееры/подарки/ Встреча у него в городе: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM89736080")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Медиа/Письма/ Порно ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM96415393")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Много чатов/ Порно: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM59582793")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Норм постоянник/ Встреча/порно был в киеве: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM83870084")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Письма/  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM58657818")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70241815")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Подарки/ Встреча: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM18385780")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Подарки/Звонки/ Встреча/порно";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM90479894")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: постоянник/ Встреча/порно ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM89429224")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Смотрит медиа длинные камшееры/ Встреча ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM86799341")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Чаты/ Порно/Встреча/Обмен инфой ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM73794211")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Чаты/Камшееры/ Встреча ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM74932830")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Чаты/Медиа/Письма/ Встреча ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM51435076")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Чаты/Письма/ Порно/Встреча: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM12387654")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Чаты/Подарки/ Встреча:Я еду в колорадо кататься на лыжах ты будешь мой интсруктор?-Посоветуй мне горнолыжный куркорт в колорадо-Ты покажешь мне горы колорадо? ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45736380")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Читает много коротких писем/ Обмен инфой/порно ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM57241922")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД: Читает много писем/смотри медиа/ - Порно: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41620898")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " –КПД:Постоянник/Медиа/Чаты/Письма/ Встреча нормальное общение ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM74055595")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Встреча:  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM94704262")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Порно: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM79671476")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Порно: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM17155963")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Порно: ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM53846398")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Встреча у него в городе  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM97846744")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Встреча/Порно: Как далеко ты живешь от город Универститет?  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM30590536")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Встреча: Можем ли мы встретиться во время моей поздки в UK?Можем ли мы встретиться где то в Manchester? Сможешь ли ты приехать в манчестер для встречи со мной?  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70592")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Встреча/обмен инфой: Ты скажешь мне секрет твоего номера телефона? Почему ты убрал фамилию с вашего прфоайла?  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM95943482")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Обмін контактами.Жре листи що йобнутий  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM63986328")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Живет в Германии. Болеет раком. Нужна встреча.Сильный на кам и звонки.Любит милое общение.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM42892312")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Живет в Калифорнии. Любит животных. Ищет девушку.Любит брюнеток.Сильный на кам.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM80080215")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Philip.Ренфрю, Онтарио, Канада.Заинтересован в контактах и встрече.  Хорошо читает письма с паззлом. Пока что мало информации.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM15945800")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Stein.Hommersåk, Норвегия.Интересы: встреча/порно/контакты. Заинтересован в длительных отношениях и том, чтобы найти себе доминантную женщину, которая будет его страпонить и относиться к нему как к своему пёсику. Делает хороший баланс на чатах, письмах и просмотре фоток.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM79521096")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Paudie.Корк, Ирландия.Заинтересован во встрече/порно. Хочет встретиться как можно скорее. Жалуется что сайт для него непосильно дорогой, но смотрит все фотки в чатах и письмах. Игнорирует попытки обмена контактами в письмах, не заинтересован и врёт, что ничего не видит.Частые чаты и письма.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM95266996")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Pete.Миртл Бич.Заинтересован найти своему сыну Крису серьёзные отношения. После этого ищет девушку себе. Себе ищет менее  серьёзные отношения и готов делить свою девушку с другими мужчинами. Ведётся на встречу и порно (если девушка не для сына).В начале общения хорошо смотрит фотки в чатах и письмах..  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM97254308")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Gary.Newport Beach Интересы: встреча/порно/контакты. Куколд. Заводят фантазии и реальные случаи, когда его девушку берёт кто-то другой. Слишком со многими девушками общается, почти не концентрируясь ни на одной. <br>– Gary (Любит порно, хочет встречу,иногда чаты и смотрит фото)  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM87878182")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Dennis.Где-то рядом с Орландо, Флорида.Интересы: встреча/контакты. Ищет серьёзные отношения. Старается экономить, основной доход через письма. Редкие чаты, фото смотрит только если как-то связано с контактами и то не всегда.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM80252112")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Pasi.Хельсинки, Финляндия.Заинтересован только во встрече. Разочаровался в сайте и включил режим экономки, о чём открыто пишет девушке в чате. Поэтому общается только в чатах и только раз в неделю. Часто доводит до лимита.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45133254")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Rick.Bates City, Миссури.Хочет встречу и контакты. Ищет серьёзные отношения.Мужик верующий и плохо идёт на всякое порно.Баланс слабый, но стабильный. Общение в основном через письма с очень редкими и короткими чатами. Фотки платно не смотрит.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM92353220")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Prince.Нью-Йорк.Несерьёзный мужик, пишущий лишь раз в пару недель в лучшем случае. Хочет встречу, но читает крайне слабо из-за чего сам же пропускает все встречи. В чат не приходит.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM35629851")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - John.Сан-Антонио, Техас.Заинтересован во встрече и порно. Ищет лишь интрижку, так как он всё ещё в браке, хоть и брак там на грани.Мужик очень терпеливый и способен легко ждать месяцами даже без надежды на встречу, так как он и сам сильно занят работой. Делает хороший баланс на частых письмах, не жалуется на объём. Но слишком занятой для чатов. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM77872251")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Sam.Хьюстон, Техас.Хочет встречу, контакты, порно. Ищет девушку, которая готова одеваться в шлюховатые наряды и выходить с ним в люди в такой одежде, чтобы демонстрировать что у него такая женщина. Также хочет доминировать в отношениях, ставить девушку на колени.Может делать долгие чаты, камшееры и смотреть фотки, но быстро теряет интерес и разочаровывается в девушках. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM35234662")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Norman.Саванна, Южная Каролина.Primmer Norman.Хочет встречу, контакты, порно. Ищет серьёзные отношения.Открыт почти для любой темы, но лучше без всяких редких фетишей.Может много тратить на чатах и письма. Не делает камшееры, очень редко смотрит фотки ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM59893785")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Robert/Порно, встреча. Любит секс и все что с ним может быть связано. Сильный на кам и звонки. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41498165")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - David/ CM41498165 Общение, встреча. У девушки должны быть хорошие взгляды на жизнь. Ищет  по большей части друга а не девушку. <br> – David Возможны встречи, никаких обмен контактами, никакого порно. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM850653")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM850653 Claude Зустріч в Geneva(Женева), трохи обмін котактами, хочу спілкуватись на іншому сайті Baltic Single Lady. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM850653")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM850653 Claude Зустріч в Geneva(Женева), трохи обмін котактами, хочу спілкуватись на іншому сайті Baltic Single Lady. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM19372712")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM19372712 Jens Хочу зустріч в Odense, Данія. також хоче отрімати пошту і номер телефону, донатить мало. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM50729184")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM50729184 Ove Хоче зустріч в Aarhus, Данія. Спілкується виключно датською мовою, також хоче щоб його знайшли на Фейсбук, не вірить в чесність сайта.. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM26553120")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM26553120 Andy Хоче зустріч в Фінляндії, дивиться фото в листах.. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM15596559")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM15596559 Richard Називає себе Daddy, педофіл, порно лише з дітьми та підлітками, відкриває фото в чаті якщо сказати що там є дитина на фото ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM94628421")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM94628421 Steven Дуже сильний, довгі камшеери, багато порно, показую член на камеру, очікує що до нього приїдуть в Santa Familia, Cayo District, Belize. Але швидко зникає, кілька днів поспіль зливає багато грошей, потім може кинуть в блок.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM36452536")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM36452536  Wayne Дивиться фото в листах, зустріч в WA(Western Australia). любов, романтика, флірт  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM97151114")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM97151114 Lars-André Сильний, дивиться усі медіа, може довгий камшеер, не надто жорстке порно.Починати спілкування варто з того що у клієнтки є плани на переїзд в Норвегію  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM59810144")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM59810144 John Збочинець, любить інцести і секс з підлітками, хоче бути одним чоловіком на оргії, може бути багато коротких текстових чатів, дуже легко дратується якщо сперичатись з ним  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM35830253")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM35830253 Manfred (Terry) Підтримує різні теми для розмови, якщо назвати його Manfred, то більше спілкування не буде. Може дивитись фото  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM59035094")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Joe CM59035094 - Мужик хочет контакты, очень хорошо заряжает чаты и шлет свои фото. Любит комплименты в свою сторону и любит любовные смс  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM27443653")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - John CM27443653 хоче зустріч, порно. Він нефтяник. Можно вибити дзвінок. в нього є дружина. Він класнов едется на зустріч і секс. Але це не повинно бути примусово. Він боїтся що дружина в нього усі баби забере якщо він буду зраджувати.Коли він заходить в онлайн, він одразу їде кудись в чат. Тому треба штормити. Кпд дивится багато медіа  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM31693509")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - CM31693509 Miguel  1. Torreblanca, Испания 2. Miguel 3. +34 64 208 75 77 4. Любовь, контакты, встреча 5. С контактами нужно быть осторожным. Жаловался на переводчика, который отказывался от его идей по обмену контактами. 6. Низкая самооценка, слабый на любовь, встречу, контакты. Вечно хочет экономить кредиты, но по факту готов платить. Медийку не смотрит, только если касается контактов  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41246000")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - жирний порно камш  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM35593596")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " - Порно.Хоче їбати мамку і доньку(15 років +). Може вестись на трисом. Правильний розвиток чату мамка з донькою їдуть в його країну і хочуть бути виїбаними  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM68765189")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM68765189 - Професор, пропонувати дружбу і любов до кінця життя.Знає російську   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM49957456")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM49957456 - Можно викликати в чат написавши аеропорт його міста. Каже що хоче покинути сайт, можно спробувати пазл обміну контактами.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM31046843")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM31046843 - Пошта Soliddeephouse g.mail - можно викликати на обмін контактами. Була відповідь в чаті на мномер телефона   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70592")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " Зустріч,порно,обмін контактами. Він мед брат в клініці в його місті. Він реагує на обмін контактами, на пазли з цифрами, на пошук в фб. <br> Він може тиждень приходити в чат. Йому потрібно завжди багато і активно писати. <br> Порно потрібне цікаве.Типу подруга вчора їбалась з сином трампа.   ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM83496518")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM83496518	Макс	Порно, дрочку в людных местах		Просто порно-чаты, немного встреча ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM18123431")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = " CM18123431 Эрик Максимально длинные письма,флирт, порно, 50 оттенков серого Короткие письма, короткие ответы, чаты,подарки,ждать Встречи как можно скорее или хотя бы контакты  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM72495063")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM72495063 Роберт Быстрые ответы в чате, порно Ждать Встреча, отношения. Вспыльчивый.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70695407")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM70695407 Дэниел Надо со всем соглашаться и быть супер нежной Много работающие женщины Встречу как можно скорее. Пишет жалобы.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM60011964")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM60011964 Douglas Doane Умеренно длинные интересные письма Встреча";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM94618801")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM94618801 Phillip Умные беседы, любит Бога Прививки, сторонник народной медицины Реальной встречи";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM48083740")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM48083740 Карл Нравится смотреть фотки, камшэр, звонки Встречу, реальные отношения, обмен контактами";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM55728784")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM55728784 Винсент Порно, встреча, camshare. Присылает свои фото, если просить Хочет отношений, но у него есть девушка";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM84972198")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM84972198 Марк Обмен контактами";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM84972198")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM84972198 Марк Обмен контактами";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM10475756")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM10475756 Jan Robert Встреча/порно/контакты. Ищет бдсм-отношения. Хочет быть мастером и найти себе девушку-рабыню. Живёт где-то в полутора часах от Осло. Всякие игрушки, ошейники, бондаж. Делает хорошие камшееры, может смотреть фотки и хорошо читает письма.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM80080215")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM80080215 Philip Встреча/контакты. Ищет долгосрочные отношения. Простой терпеливый мужик. Обычный, без каких-то ярко выраженных фетишей. Пока что ничего больше эротики не было, не уходит в тему порно. Может иногда делать чаты и смотреть фотки, хорошо читает письма и часто пишет сам.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM19533702")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM19533702 - какой-то религиозный тип, спортсмен. На контакт пошел туго, потому что ему нужно пересказать Библию, чтобы он хотя бы на что-то повелс..";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM92277865")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM92277865 - порнушик. У него есть любовь на этом сайте, но она застряла в Украине и не может выехать. Можно давить тем, что она лгунья и никогда не приедет к нему, потому что она и контакты ему не дает, и отказывает во встрече ему. В общем и целом порно + любовь, но по поводу девушки нужно писать более лайтово.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM79034265")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM79034265 - Joe, продает электрооборудование для нефтяников. Деньги есть, но очень скуп, однако выбить с него что-нибудь можно. Ведется на контакты + любовь, нужно всё делать очень плавно и без резких движений, потому что если действовать резко можно слить очень быстро.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM16359852")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM16359852 - очень хорошо на контакты и особенно встречу ведется, запас 3-4 недели, прикол мужика в том что может забросать письмами. Когда он в сети, то есть он видит тебя в сети и пишет ты тут? ты где?. Короткие письма и читает легко. P.S. сейчас у него проблемы с кредитами.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM44664107")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM44664107 - John, лютый Лох. Есть на всех анкетах мне кажется, хватает его максимум на 2-3 дня. Повестись может на что угодно, но чтобы ты не делал и не писал, даже если всё идет по его плану он сливается";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM39125524")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM39125524 - Фредерик, живет в США, повёлся на контакты, но уже слился, потому что кончились кредиты и вероятно в ближайшее время пополнять не будет";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM78370936")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM78370936 - Стюарт, живет а Англии. Особо не разговорчив, но пошёл на обмен контактами + небольшую любовь. Бывший военный, в чате смотрит фото, но не долго сидит, и не часто приходит в этот самый чат, но в целом деньги есть";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70190091")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM70190091 Joe порнушник.Любит разговоры про секс.Женат.рыщет на сайте втайне от жегны.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM70190091")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM70190091 Joe порнушник.Любит разговоры про секс.Женат.рыщет на сайте втайне от жегны.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM85884627")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM85884627 DAVID  мужик любит смотреть как модель встает на сплитах. может докопаться до мелочей.Любитель купить контакты.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  newElement.innerHTML = "CM55541327 Kevin порнушник.Любит разговоры про секс и хочет встречу для секса";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM55862668")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM55862668 Philip  любит общение про любовь и семью.ценит верность.можно немного попошлить.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM14278161")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM14278161 John  мужик ищет любовь всей жизни. у него дочь с дцп и он очень любит ее.любит философские разговорпы,разговор про любовь и совсем немного секса";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM11296812")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM11296812 Johnny ищет жену. общение про любовь и семью. ценит семейные ценности";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41498165")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM41498165 David Жирный мужик,смотрит медийку всю.Но верующий. не любит порно.Ищет не слишком молодую даму.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM18515040")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "jone CM18515040 он проститутка , любит ботинки и курить, употребляет траву наркотики, ботинки любимая тема для разговора и любые извращения ,чем грязнее тем лучше.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45559604")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Vikesh CM45559604 встреча, письма хорошо читает , чаты короткие, хочет несколько жен .Он Дева и не любит драмы.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM45559604")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "Vikesh CM45559604 встреча, письма хорошо читает , чаты короткие, хочет несколько жен .Он Дева и не любит драмы.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM51463210")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM51463210 Michael называть императором, хочет встречу, жлоб чаты короткие письма не чиатает. Порно с извращениями ,много жен и инцест";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM52683330")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM52683330 Bobby порнушник.Может вестись на тему мамы и дочери.хочет девственницу.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM18512101")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM18512101 Ronnie любит чтобы хвалили его стиль.Любит женщин стильных и с чувством вкуса.ищет любви.Люит передавать контакты";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM14798812")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM14798812 Todd хочет встречу.Любит быстрые ответы.Хочет более легкого и доступного общения. если долго не отвечать, начинает беситься.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM37931634")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM37931634 David  хочет встречи.Любит общение про любовь и немного порно";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM65299235")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM65299235 Eddy  Хочет общения про любовь и встречи.Хочет семью.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM55937000")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM55937000 D  dan  Хочет бесплатного общения. Любить передавать контакты.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM29356558")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM29356558 Robbert  хочет встречи.Если чувствует слив,закрывает акк.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM97814306")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM97814306 Luzu(Gene Geraci) Живет в Нэшвиле, Теннесси, у него никогда нельзя просить подарки, сразу кидает жалобу и говорит что это обман, мужик очень общительный и можно общаться с ним на любые темы, он много говорит о себе. Иногда любит порно но редко. Он всегда будет подозревать тебя во лжи если будет отмена встречи или если ты не послушаешься его в чем то, он очень нестабильный, сегодня добрый, завтра он злой и в дипресии. Больная тема это звонки, камера в чате, он категорически не любит услуги сайта, говорит что все прослушивается и у него нет денег на это. Фото в письмах не смотрит, в чате может смотреть почти каждую фото но по настроению. нормальное общение с ним это только встреча. Ты должен быть уверен во встрече, он чувствует каждое слово которое ты пишешь ему и если он заметит несерьезность во встрече в твоих словах сразу обидеться.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41985538")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM41985538 Lasse – Живет в Борас, Швеция, у него нет денег на чаты но изредко может посмотреть фото в письме или в чате под предлогом что фото очень эротическое или на фото важная ифна. Любит обсуждать порно втроем, ему нравиться когда его трахают в жопу и разного рода извращения, так же любит обсуждать встречу и просит номер рейса если ты летишь к нему. В чатах сидит 5-10 минут. Больная тема для него если ты заставляешь его смотреть фото и читать письма, он злится потому что у него нет денег но быстро успокаивается если между вами хорошие отношения. Успокоить можно тем что очень любишь его и боишься потерять и то что забронировал рейс к нему в ближайшее время. Его можно дернуть на тему встречи если игнорит либо контактами. ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM85615692")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM85615692 Robert – живет в Westfield, Массачусеттс Очень сложный мужчина, если вы собрались лететь к нему то он сразу потребует рейс и время прилета, если уходить от темы будет вечно подозревать в обмане и следить когда ты заходишь онлайн когда выходишь. Мужик знает как все устроено и почти всегда подозревает в обмане. В чаты не ходит, фото в письмах не смотрит, на звонки не отвечает, экономит. Читает только одно письмо которое ты ему отправишь после его письма. Любит обмениваться контактами и всегда дает свой фб и какую то беседу на фб с его друзьями. Больная тема для него это отмена встречи, он сразу злиться и обвиняет в обмане. Если ты в его стране готовся что он будет проверять время когда ты заходишь в онлайн и когда выходишь, будет задавать глупые вопросы « а че ты выходишь из онлайна в 3 ночи по украинскому времени, ты в Украине сейчас?? Почему врешь?» И в дальнейшем он будет часто напоминать об отмененной встрече. Его можно зацепить только встречей и тогда он возможно будет чаще отвечать тебе чтобы спланировать встречу. Предлагает для встречи паб Bobby Vi.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM41788822")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM41788822 Christer – -Мужик любит обсуждать порно втроем, особенно когда у женщины есть молодая дочь или молодая подруга. Так же очень зацыклен на обмене контактами и ненавидит этот сайт потому что он блокирует обмен контактами и пошлые слова. Общение о встрече, контактах и порно. Живет на Кипре, в Пейя. В чаты редко ходит потому что он думает что сайт все проверяет и ему легче писать письма чтобы была возможность их сохранить, письма читает каждый день, фото в письмах тоже может читать если хорошо попросить. Клюет на обмен контактов и встречу. Слабые места, запросы на звонок, не дает их и злиться потому что думает что его будут прослушивать.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM56575720")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM56575720 Franke Neal – Живет на данный момент в Нью Хемпшир, Laconia в доме для бездомных, раньше он жил с сестрой но тратил все деньги на общение на сайте и поэтому сестра часто ругалась с ним потому что он не платил за дом и не помогает ей. Любит обсуждать тему обмена контактами, легкое порно и встречу, в чатах медийку может читать если хорошо попросить под предлогом что на фото изображена важная информация или очень красивая фото. Слабые места это его отношения с семьей и отсутствие денег поэтому лучше подбадривать его всегда и говорить что все будет хорошо и ты поможешь ему с деньгами иначе он будет сдаваться и уходить в дипрессию. У него всегда мало денег поэтому может часто пропадать.  ";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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
  if (link.textContent.includes("CM69495872")) {
  let parent = link.parentElement;
  let newElement = document.createElement("div");
  newElement.innerHTML = "CM69495872(Mustafa)  Живет в Анталии, работает админом магазина в отеле, ведется на контакты и хочет общения на других площадках.";
  newElement.style.display = "none";
  let button = document.createElement("button");
  button.innerHTML = "💲";
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