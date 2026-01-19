let elem = document.getElementById("first");

elem.insertAdjacentHTML("beforebegin", '<div id="test">beforebegin</div>');

elem.insertAdjacentHTML("afterbegin", '<div id="test1">afterbegin</div>');

elem.insertAdjacentHTML("beforeend", '<div id="test2"> beforeend </div>');

elem.insertAdjacentHTML("afterend", '<div id="test3"> afterend </div>');