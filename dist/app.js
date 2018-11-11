(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _template = require('./template.js');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// ie11 fix for template.content
function templateContent(template) {
	// template {display: none !important} /* add css if template is in dom */
	if ('content' in document.createElement('template')) {
		return document.importNode(template.content, true);
	} else {
		var frag = document.createDocumentFragment();
		var children = template.childNodes;
		for (var i = 0, len = children.length; i < len; i++) {
			frag.appendChild(children[i].cloneNode(true));
		}
		return frag;
	}
}

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
	return templateContent(template); // ie11 fix for template.content
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

//github repo
var githubURL = 'https://abrahamjuliot.github.io/profile/';

// css
var cssURL = 'dist/style.min.css';
var css = '<link rel=\'stylesheet\' type=\'text/css\' href=' + (githubURL + cssURL) + '>';

// json
var url = window.gradStudentJSONURL;

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
		patch(document.getElementById('gradstudents'), html(_templateObject, (0, _template2.default)(css, data)));
	});
});

},{"./template.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// functional switch
var callIfFunction = function callIfFunction(x) {
    return x instanceof Function ? x() : x;
};
var choose = function choose(switchFn) {
    return (// cache cases
        function (caseVal) {
            return callIfFunction(switchFn(caseVal)[caseVal] || switchFn().default);
        }
    );
}; // get case
var agree = function agree(x) {
    for (var _len = arguments.length, list = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        list[_key - 1] = arguments[_key];
    }

    return (// agree on a fall through set
        list.find(function (val) {
            return x === val;
        }) || list[0]
    );
};

// Choose track
var track = function track(selection) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, 'ENTX', 'Environmental Toxicology'), _defineProperty(_ref, 'ENSC', 'Environmental Sciences'), _defineProperty(_ref, 'GEO', 'Geological Sciences'), _defineProperty(_ref, 'ECON', 'Environmental Economics'), _defineProperty(_ref, 'default', ''), _ref;
};
var Program = choose(track);

// Choose faculty
var faculty = function faculty(selection) {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, 'ajami', ['Hoori Ajami', 'hoori.ajami']), _defineProperty(_ref2, 'anderson', ['Michael Anderson', 'michael.anderson']), _defineProperty(_ref2, 'bahreini', ['Roya Bahreini', 'roya.bahreini']), _defineProperty(_ref2, 'crohn', ['David Crohn', 'david.crohn']), _defineProperty(_ref2, 'gan', ['Jay Gan', 'j.gan']), _defineProperty(_ref2, 'graham', ['Robert Graham', 'robert.graham']), _defineProperty(_ref2, 'gray', ['Andrew B. Gray', 'andrew.gray']), _defineProperty(_ref2, 'haghverdi', ['Amir Haghverdi', 'amir.haghverdi']), _defineProperty(_ref2, 'hirmas', ['Daniel Hirmas', 'daniel.hirmas']), _defineProperty(_ref2, 'homyak', ['Pete Homyak', 'peter.homyak1']), _defineProperty(_ref2, 'hopkins', ['Francesca Hopkins', 'francesca.hopkins']), _defineProperty(_ref2, 'knapp', ['Keith Knapp', 'keith.knapp']), _defineProperty(_ref2, 'li', ['King-Fai Li', 'king-fai.li']), _defineProperty(_ref2, 'lin', ['Ying-Hsuan Lin', 'ying-hsuan.lin']), _defineProperty(_ref2, 'porter', ['William Porter', 'william.porter']), _defineProperty(_ref2, 'schlenk', ['Daniel Schlenk', 'daniel.schlenk']), _defineProperty(_ref2, 'sickman', ['James Sickman', 'james.sickman']), _defineProperty(_ref2, 'simunek', ['Jirka Šimunek', 'jiri.simunek']), _defineProperty(_ref2, 'volz', ['David C. Volz', 'david.volz']), _defineProperty(_ref2, 'wu', ['Laosheng Wu', 'laosheng.wu']), _defineProperty(_ref2, 'ying', ['Sam Ying', 'samantha.ying']), _defineProperty(_ref2, 'schwabe', ['Kurt Schwabe', 'kurt.schwabe']), _defineProperty(_ref2, 'oglesby', ['David D. Oglesby', 'david.oglesby']), _defineProperty(_ref2, 'allen', ['Robert J. Allen', 'robert.allen']), _defineProperty(_ref2, 'barth', ['Nicolas Barth', 'nic.barth']), _defineProperty(_ref2, 'bekker', ['Andrey Bekker', 'andrey.bekker']), _defineProperty(_ref2, 'brounce', ['Maryjo Brounce', 'maryjo.brounce']), _defineProperty(_ref2, 'douilly', ['Roby Douilly', 'roby.douilly']), _defineProperty(_ref2, 'dieterich', ['James H. Dieterich', 'james.dieterich']), _defineProperty(_ref2, 'droser', ['Mary Droser', 'mary.droser']), _defineProperty(_ref2, 'fogel', ['Marilyn Fogel', 'marilyn.fogel']), _defineProperty(_ref2, 'ford', ['Heather Ford', 'heather.ford']), _defineProperty(_ref2, 'funning', ['Gareth Funning', 'gareth.funning']), _defineProperty(_ref2, 'ghosh', ['Abhijit Ghosh', 'abhijit.ghosh']), _defineProperty(_ref2, 'hughes', ['Nigel C. Hughes', 'nigel.hughes']), _defineProperty(_ref2, 'kane', ['Stephen R. Kane', 'stephen.kane']), _defineProperty(_ref2, 'liu', ['Wei Liu', 'wei.liu']), _defineProperty(_ref2, 'turner', ['Sandra Kirtland Turner', 'sandra.kirtlandturner']), _defineProperty(_ref2, 'love', ['Gordon Love', 'gordon.love']), _defineProperty(_ref2, 'lyons', ['Timothy Lyons', 'timothy.lyons']), _defineProperty(_ref2, 'mckibben', ['Michael A. McKibben', 'michael.mckibben']), _defineProperty(_ref2, 'minnich', ['Richard A. Minnich', 'richard.minnich']), _defineProperty(_ref2, 'ridgwell', ['Andy Ridgwell', 'andrew.ridgwell']), _defineProperty(_ref2, 'sadler', ['Peter M. Sadler', 'peter.sadler']), _defineProperty(_ref2, 'scott', ['Thomas A. Scott', 'thomas.scott']), _defineProperty(_ref2, 'default', ''), _ref2;
};
var PI = choose(faculty);

// template iterator
var repeat = function repeat(list, fn) {
    return list.map(function (item) {
        return fn(item);
    }).join('');
};

// template conditional
var when = function when(x, template) {
    return x ? '' + template : '';
};

var template = function template(css, data) {
    return css + '\n<section class=\'grads\'>\n    ' + repeat(data, function (item) {
        return '\n        <div class=\'grad-card\'>\n            <div class=\'grad-header\'>\n                ' + when(item.img, '<div class=\'grad-img\'><img src=\'/sites/g/files/rcwecm1176/files/' + item.img + '.jpg\'/></div>') + '\n                <div class=\'grad-intro\'>\n                    <div class=\'grad-name\'>' + item.name + '</div>\n                    ' + when(item.program, '<div class=\'grad-program\'>' + Program(item.program) + '</div>') + '\n                </div>\n            </div>\n            <div class=\'grad-section\'>\n                ' + when(item.research, '<div class=\'grad-research\'>' + item.research + '</div>') + '\n                ' + when(item.email, '<div class=\'grad-email\'>\n                    <a href=\'mailto:' + item.email + 'ucr.edu\'>' + item.email + 'ucr.edu</a>\n                </div>') + '\n                ' + when(item.websiteURL, '<div class=\'grad-website\'>\n                    <a href=\'' + item.websiteURL + '\' target=\'_blank\'>View Website</a>\n                </div>') + '\n                ' + when(item.faculty, '<div class=\'grad-faculty\'>Advisor: \n                    <a href=\'https://profiles.ucr.edu/' + PI(item.faculty.toLowerCase())[1] + '\' target=\'_blank\'>\n                        ' + PI(item.faculty.toLowerCase())[0] + '\n                    </a>\n                </div>') + '\n            </div>\n        </div>\n    ';
    }) + '\n</section>\n';
};

exports.default = template;

},{}]},{},[1]);
