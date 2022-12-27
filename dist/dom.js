"use strict";
var submitBtn = document.getElementById('submit-btn');
var input = document.getElementById('input');
var handleSubmit = function (event) {
    var _a;
    var target = event.target;
    var p = document.createElement('p');
    p.innerText = input === null || input === void 0 ? void 0 : input.value;
    (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(p);
};
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', handleSubmit);
