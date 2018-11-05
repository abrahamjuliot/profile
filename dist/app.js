(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

var _template = require('./template.js');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// tagged template literal (JSX alternative)
var patch = function patch(oldEl, newEl) {
	return oldEl.parentNode.replaceChild(newEl, oldEl);
};
var html = function html(stringSet) {
	for (var _len = arguments.length, expressionSet = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		expressionSet[_key - 1] = arguments[_key];
	}

	var template = document.createElement('template');
	template.innerHTML = stringSet.map(function (str, i) {
		return '' + str + (expressionSet[i] || '');
	}).join('');
	return template.content;
};

// http factory
var xhr = function xhr() {
	var XHR = function XHR() {
		return new XMLHttpRequest();
	};
	var onload = function onload(req, fn) {
		var parse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

		req.onload = function () {
			if (req.status >= 200 && req.status < 400) {
				var data = req.responseText;parse && (data = JSON.parse(data));
				fn(data); // execute callback with data
			}
		};
	};
	return {
		get: function get(url, fn, parse) {
			var req = XHR();
			req.open('GET', url, true);
			onload(req, fn, parse);
			req.send();
		}
	};
};

var http = xhr();

// doc readyState
var ready = function ready(fn) {
	return document.readyState != 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
};

// json
var url = 'https://abrahamjuliot.github.io/profile/data/ensc.json';

// sort json by last word in search field
var by = function by(getValue) {
	return function (a, b) {
		return getValue(a) > getValue(b) ? 1 : -1;
	};
};
var sortBy = function sortBy(arr, val) {
	return arr.sort(by(function (obj) {
		return obj[val].split(" ").pop();
	}));
};

// app: get json then when DOM is ready patch html template
http.get(url, function (json) {

	var data = sortBy(json, 'name');
	ready(function () {
		patch(document.getElementById('block-ucr-default-page-title'), html(_templateObject, (0, _template2.default)(_css2.default, data)));
	});
});

},{"./css.js":2,"./template.js":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = /*css*/"\n<style>\n.grads {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tmargin: 0 auto;\n\tjustify-content: space-between;\n}\n\n.grad-card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\twidth: 100%;\n\tmargin: 0 0 1.5rem;\n\tpadding: 24px;\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n\n.grad-header {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\talign-items: top;\n\tmargin-bottom: 15px;\n}\n\n.grad-intro {\n\tmargin-left: 4%;\n}\n\n.grad-section {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.grad-img {\n\tpadding: 10px 5px;\n}\n\n.grad-img span {\n\tdisplay: block;\n\twidth: 100px; /*max-*/\n    height: 100px; /*auto*/\n    border-radius: 50%;\n\t\n}\n\n.grad-name {\n\tdisplay: flex;\n\tfont-size: 1.3rem;\n    color: #2198d9;\n    line-height: 1.4;\n}\n\n.grad-program {\n\tdisplay: flex;\n\tfont-style: italic;\n\tfont-weight: bold;\n\tcolor: #8a8a8a;\n\tfont-size: .9rem;\n}\n\n.grad-email,\n.grad-website,\n.grad-research,\n.grad-faculty {\n\tfont-size: .9rem;\n}\n\n.grad-research {\n  padding:  5px 10px;\n  margin: 0 auto 15px;\n  background: #f9f9f9;\n  border-radius: 5%;\n}\n\n.grad-faculty {\n\tborder-top: 1px solid #eee;\n\tpadding-top: 5px;\n\ttext-align: left;\n\tmargin: 15px 0 0;\n}\n\n\na[href*=\"@ucr.edu\"]:after {\n    display: inline-block;\n    font: normal normal normal 24px/1 \"Material Design Icons\";\n    font-size: inherit;\n    text-rendering: auto;\n    line-height: inherit;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    content: \"\f1f0\";\n    padding-left: 4px;\n}\n\n\n@media (min-width: 40rem) {\n\t.grads {\n\t\tflex-direction: row;\n\t\tflex-wrap: wrap;\n\t}\n\t.grad-card {\n\t\twidth: 47%;\n\t\tmargin: 0 1% 1.5rem;\n\t}\n}\n\n@media (min-width: 62rem) {\n\t.grads {\n\t\tflex-direction: row;\n\t\tflex-wrap: wrap;\n\t}\n\t.grad-card {\n\t\twidth: 31%;\n\t}\n}\n</style>\n";

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tools = require('./tools.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fns = {
    faculty: function faculty(selection) {
        var _ref;

        return _ref = {}, _defineProperty(_ref, 'ajami', ['Hoori Ajami', 'hoori.ajami']), _defineProperty(_ref, 'anderson', ['Michael Anderson', 'michael.anderson']), _defineProperty(_ref, 'bahreini', ['Roya Bahreini', 'roya.bahreini']), _defineProperty(_ref, 'crohn', ['David Crohn', 'david.crohn']), _defineProperty(_ref, 'gan', ['Jay Gan', 'j.gan']), _defineProperty(_ref, 'graham', ['Robert Graham', 'robert.graham']), _defineProperty(_ref, 'gray', ['Andrew B. Gray', 'andrew.gray']), _defineProperty(_ref, 'haghverdi', ['Amir Haghverdi', 'amir.haghverdi']), _defineProperty(_ref, 'hirmas', ['Daniel Hirmas', 'daniel.hirmas']), _defineProperty(_ref, 'homyak', ['Pete Homyak', 'peter.homyak1']), _defineProperty(_ref, 'hopkins', ['Francesca Hopkins', 'francesca.hopkins']), _defineProperty(_ref, 'knapp', ['Keith Knapp', 'keith.knapp']), _defineProperty(_ref, 'li', ['King-Fai Li', 'king-fai.li']), _defineProperty(_ref, 'lin', ['Ying-Hsuan Lin', 'ying-hsuan.lin']), _defineProperty(_ref, 'porter', ['William Porter', 'william.porter']), _defineProperty(_ref, 'schlenk', ['Daniel Schlenk', 'daniel.schlenk']), _defineProperty(_ref, 'sickman', ['James Sickman', 'james.sickman']), _defineProperty(_ref, 'simunek', ['Jirka Šimunek', 'jiri.simunek']), _defineProperty(_ref, 'volz', ['David C. Volz', 'david.volz']), _defineProperty(_ref, 'wu', ['Laosheng Wu', 'laosheng.wu']), _defineProperty(_ref, 'schwabe', ['Kurt Schwabe', 'kurt.schwabe']), _defineProperty(_ref, 'oglesby', ['David D. Oglesby', 'david.oglesby']), _defineProperty(_ref, 'allen', ['Robert J. Allen', 'robert.allen']), _defineProperty(_ref, 'barth', ['Nicolas Barth', 'nic.barth']), _defineProperty(_ref, 'bekker', ['Andrey Bekker', 'andrey.bekker']), _defineProperty(_ref, 'brounce', ['Maryjo Brounce', 'maryjo.brounce']), _defineProperty(_ref, 'douilly', ['Roby Douilly', 'roby.douilly']), _defineProperty(_ref, 'dieterich', ['James H. Dieterich', 'james.dieterich']), _defineProperty(_ref, 'droser', ['Mary Droser', 'mary.droser']), _defineProperty(_ref, 'fogel', ['Marilyn Fogel', 'marilyn.fogel']), _defineProperty(_ref, 'ford', ['Heather Ford', 'heather.ford']), _defineProperty(_ref, 'funning', ['Gareth Funning', 'gareth.funning']), _defineProperty(_ref, 'ghosh', ['Abhijit Ghosh', 'abhijit.ghosh']), _defineProperty(_ref, 'hughes', ['Nigel C. Hughes', 'nigel.hughes']), _defineProperty(_ref, 'kane', ['Stephen R. Kane', 'stephen.kane']), _defineProperty(_ref, 'liu', ['Wei Liu', 'wei.liu']), _defineProperty(_ref, 'turner', ['Sandra Kirtland Turner', 'sandra.kirtlandturner']), _defineProperty(_ref, 'love', ['Gordon Love', 'gordon.love']), _defineProperty(_ref, 'lyons', ['Timothy Lyons', 'timothy.lyons']), _defineProperty(_ref, 'mckibben', ['Michael A. McKibben', 'michael.mckibben']), _defineProperty(_ref, 'minnich', ['Richard A. Minnich', 'richard.minnich']), _defineProperty(_ref, 'ridgwell', ['Andy Ridgwell', 'andrew.ridgwell']), _defineProperty(_ref, 'sadler', ['Peter M. Sadler', 'peter.sadler']), _defineProperty(_ref, 'scott', ['Thomas A. Scott', 'thomas.scott']), _defineProperty(_ref, 'default', selection), _ref;
    },

    PI: (0, _tools.choose)(fns.faculty)
};

exports.default = fns;

},{"./tools.js":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _track = require('./track.js');

var _faculty = require('./faculty.js');

// template iterator
var repeat = function repeat(list, fn) {
    return list.map(function (item) {
        return fn(item);
    }).join('');
};

// background img style
var styleImg = function styleImg(obj) {
    return '\n\tstyle=\'background: url(' + obj.img + ') no-repeat; background-size: contain\'\n';
};

// web url cleaner
var siteName = function siteName(url) {
    return url.replace(/(^\w+:|^)\/\//, '');
};

// template conditional
var when = function when(x, template) {
    return x ? '' + template : '';
};

var template = function template(css, data) {
    return css + '\n<section class=\'grads\'>\n    ' + repeat(data, function (item) {
        return '\n        <div class=\'grad-card\'>\n            <div class=\'grad-header\'>\n                ' + when(item.img, '<div class=\'grad-img\'><span ' + styleImg(item) + '></span></div>') + '\n                <div class=\'grad-intro\'>\n                    <div class=\'grad-name\'>' + item.name + '</div>\n                    ' + when(item.program, '<div class=\'grad-program\'>' + (0, _track.Program)(item.program) + '</div>') + '\n                </div>\n            </div>\n            <div class=\'grad-section\'>\n                ' + when(item.research, '<div class=\'grad-research\'>' + item.research + '</div>') + '\n                ' + when(item.email, '<div class=\'grad-email\'>\n                    <a href=\'mailto:' + item.email + 'ucr.edu\'>' + item.email + 'ucr.edu</a>\n                </div>') + '\n                ' + when(item.websiteURL, '<div class=\'grad-website\'>\n                    <a href=\'' + item.websiteURL + '\' target=\'_blank\'>' + siteName(item.websiteURL) + '</a>\n                </div>') + '\n                ' + when(item.faculty, '<div class=\'grad-faculty\'>Advisor: \n                    <a href=\'https://profiles.ucr.edu/' + (0, _faculty.PI)(item.faculty.toLowerCase())[1] + '\' target=\'_blank\'>\n                        ' + (0, _faculty.PI)(item.faculty.toLowerCase())[0] + '\n                    </a>\n                </div>') + '\n            </div>\n        </div>\n    ';
    }) + '\n</section>\n';
};

exports.default = template;

},{"./faculty.js":3,"./track.js":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fns = {
    // functional switch
    callIfFunction: function callIfFunction(x) {
        return x instanceof Function ? x() : x;
    },
    choose: function choose(switchFn) {
        return (// cache cases
            function (caseVal) {
                return fns.callIfFunction(switchFn(caseVal)[caseVal] || switchFn().default);
            }
        );
    }, // get case
    agree: function agree(x) {
        for (var _len = arguments.length, list = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            list[_key - 1] = arguments[_key];
        }

        return (// agree on a fall through set
            list.find(function (val) {
                return x === val;
            }) || list[0]
        );
    }
};

exports.default = fns;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tools = require('./tools.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fns = {
    track: function track(selection) {
        var _ref;

        return _ref = {}, _defineProperty(_ref, 'ENTX', 'Environmental Toxicology'), _defineProperty(_ref, 'ENSC', 'Environmental Sciences'), _defineProperty(_ref, 'GEO', 'Geological Sciences'), _defineProperty(_ref, 'ECON', 'Environmental Economics'), _defineProperty(_ref, 'default', selection), _ref;
    },

    Program: (0, _tools.choose)(fns.track)
};

exports.default = fns;

},{"./tools.js":5}]},{},[1]);
