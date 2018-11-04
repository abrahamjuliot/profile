(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _templateObject = _taggedTemplateLiteral(['\n\t\t', '\n\t\t<section class=\'grads\'>\n\t\t\t', '\n\t\t</section>\n\t'], ['\n\t\t', '\n\t\t<section class=\'grads\'>\n\t\t\t', '\n\t\t</section>\n\t']);

var _data = require('./data.js');

var _data2 = _interopRequireDefault(_data);

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// doc readyState
var ready = function ready(fn) {
	return document.readyState != 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
};

// template conditional
var when = function when(x, template) {
	return x ? '' + template : '';
};

// functional switch (faculty/ program)
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
	for (var _len2 = arguments.length, list = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		list[_key2 - 1] = arguments[_key2];
	}

	return (// agree on a fall through set
		list.find(function (val) {
			return x === val;
		}) || list[0]
	);
};

var track = function track(selection) {
	var _ref;

	return _ref = {}, _defineProperty(_ref, 'ENTX', 'Environmental Toxicology'), _defineProperty(_ref, 'ENSC', 'Environmental Sciences'), _defineProperty(_ref, 'GEO', 'Geological Sciences'), _defineProperty(_ref, 'default', 'Unknown'), _ref;
};
var Program = choose(track);

// app
ready(function () {
	patch(document.getElementById('block-ucr-default-page-title'), html(_templateObject, _css2.default, repeat(_data2.default, function (item) {
		return '\n\t\t\t\t<div class=\'grad-card\'>\n\t\t\t\t\t<div class=\'grad-header\'>\n\t\t\t\t\t\t' + when(item.img, '<div class=\'grad-img\'><span ' + styleImg(item) + '></span></div>') + '\n\t\t\t\t\t\t<div class=\'grad-intro\'>\n\t\t\t\t\t\t\t<div class=\'grad-name\'>' + item.name + '</div>\n\t\t\t\t\t\t\t' + when(item.program, '<div class=\'grad-program\'>' + Program(item.program) + '</div>') + '\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\'grad-section\'>\n\t\t\t\t\t\t' + when(item.research, '<div class=\'grad-research\'>' + item.research + '</div>') + '\n\t\t\t\t\t\t' + when(item.email, '<div class=\'grad-email\'>\n\t\t\t\t\t\t\t<a href=\'mailto:' + item.email + '\'>' + item.email + '</a>\n\t\t\t\t\t\t</div>') + '\n\t\t\t\t\t\t' + when(item.websiteURL, '<div class=\'grad-website\'>\n\t\t\t\t\t\t\t<a href=\'' + item.websiteURL + '\' target=\'_blank\'>' + siteName(item.websiteURL) + '</a>\n\t\t\t\t\t\t</div>') + '\n\t\t\t\t\t\t' + when(item.faculty, '<div class=\'grad-faculty\'>Advisor: \n\t\t\t\t\t\t\t<a href=\'https://profiles.ucr.edu/' + item.facultySite + '\' target=\'_blank\'>' + item.faculty + '</a>\n\t\t\t\t\t\t</div>') + '\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t';
	})));
});

},{"./css.js":2,"./data.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = /*css*/"\n<style>\n.grads {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tmargin: 0 auto;\n\tjustify-content: space-between;\n}\n\n.grad-card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\twidth: 100%;\n\tmargin: 0 0 1.5rem;\n\tpadding: 24px;\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n.grad-header {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\talign-items: top;\n\tmargin-bottom: 15px;\n}\n.grad-intro {\n\tmargin-left: 4%;\n}\n.grad-section {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n\n.grad-img {\n\tpadding: 10px 5px;\n}\n.grad-img span {\n\tdisplay: block;\n\twidth: 100px; /*max-*/\n    height: 100px; /*auto*/\n    border-radius: 50%;\n\t\n}\n.grad-name {\n\tdisplay: flex;\n\tfont-size: 1.3rem;\n    color: #2198d9;\n    line-height: 1.4;\n}\n\n.grad-program {\n\tdisplay: flex;\n\tfont-style: italic;\n\tfont-weight: bold;\n\tcolor: #8a8a8a;\n\tfont-size: .9rem;\n}\n.grad-email,\n.grad-website,\n.grad-research,\n.grad-faculty {\n\tfont-size: .9rem;\n}\n\n.grad-research {\n  padding:  5px 10px;\n  margin: 0 auto 15px;\n  background: #f9f9f9;\n  border-radius: 5%;\n}\n\n.grad-faculty {\n\tborder-top: 1px solid #eee;\n\tpadding-top: 5px;\n\ttext-align: left;\n\tmargin: 15px 0 0;\n}\n\n\na[href*=\"@ucr.edu\"]:after {\n    display: inline-block;\n    font: normal normal normal 24px/1 \"Material Design Icons\";\n    font-size: inherit;\n    text-rendering: auto;\n    line-height: inherit;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    content: \"\f1f0\";\n    padding-left: 4px;\n}\n\n\n@media (min-width: 40rem) {\n\t.grads {\n\t\tflex-direction: row;\n\t\tflex-wrap: wrap;\n\t}\n\t.grad-card {\n\t\twidth: 47%;\n\t\tmargin: 0 1% 1.5rem;\n\t}\n}\n@media (min-width: 62rem) {\n\t.grads {\n\t\tflex-direction: row;\n\t\tflex-wrap: wrap;\n\t}\n\t.grad-card {\n\t\t\n\t\twidth: 31%;\n\t}\n}\n</style>\n";

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  "name": "Macon Abernathy",
  "img": "https://picsum.photos/300",
  "email": "maber001@ucr.edu",
  "program": "ENTX",
  "faculty": "Jay Gan",
  "facultySite": "j.gan",
  "research": "Toxicogenomics of Human Lung Cell Lines; Study of Atmospheric Particulate Matter (PM2.5) and Their Health Effects",
  "websiteURL": "https://github.com"
}, {
  "name": "Macon Abernathy",
  "img": "https://picsum.photos/300",
  "email": "maber001@ucr.edu",
  "program": "GEO",
  "faculty": "Hoori Ajami",
  "facultySite": "hoori.ajami",
  "research": "Toxicogenomics of Human Lung Cell Lines; Study of Atmospheric Particulate Matter (PM2.5) and Their Health Effects",
  "websiteURL": "https://github.com"
}, {
  "name": "Macon Abernathy",
  "img": "https://picsum.photos/300",
  "email": "maber001@ucr.edu",
  "program": "ENSC",
  "faculty": "Samantha Ying",
  "facultySite": "samantha.ying",
  "research": "Toxicogenomics of Human Lung Cell Lines; Study of Atmospheric Particulate Matter (PM2.5) and Their Health Effects",
  "websiteURL": "https://github.com"
}];

},{}]},{},[1]);
