(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _templateObject = _taggedTemplateLiteral(['\n\t\t<section class=\'grads\'>\n\t\t\t', '\n\t\t</section>\n\t'], ['\n\t\t<section class=\'grads\'>\n\t\t\t', '\n\t\t</section>\n\t']);

var _data = require('./data.js');

var _data2 = _interopRequireDefault(_data);

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
	patch(document.getElementById('block-ucr-default-page-title'), html(_templateObject, repeat(_data2.default, function (item) {
		return '\n\t\t\t\t<div class=\'grad-card\'>\n\t\t\t\t\t<div class=\'grad-header\'>\n\t\t\t\t\t\t' + when(item.img, '<div class=\'grad-img\'><span ' + styleImg(item) + '></span></div>') + '\n\t\t\t\t\t\t<div class=\'grad-intro\'>\n\t\t\t\t\t\t\t<div class=\'grad-name\'>' + item.name + '</div>\n\t\t\t\t\t\t\t' + when(item.program, '<div class=\'grad-program\'>' + Program(item.program) + '</div>') + '\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\'grad-section\'>\n\t\t\t\t\t\t' + when(item.research, '<div class=\'grad-research\'>' + item.research + '</div>') + '\n\t\t\t\t\t\t' + when(item.email, '<div class=\'grad-email\'>\n\t\t\t\t\t\t\t<a href=\'mailto:' + item.email + '\'>' + item.email + '</a>\n\t\t\t\t\t\t</div>') + '\n\t\t\t\t\t\t' + when(item.websiteURL, '<div class=\'grad-website\'>\n\t\t\t\t\t\t\t<a href=\'' + item.websiteURL + '\' target=\'_blank\'>' + siteName(item.websiteURL) + '</a>\n\t\t\t\t\t\t</div>') + '\n\t\t\t\t\t\t' + when(item.faculty, '<div class=\'grad-faculty\'>Advisor: \n\t\t\t\t\t\t\t<a href=\'https://profiles.ucr.edu/' + item.facultySite + '\' target=\'_blank\'>' + item.faculty + '</a>\n\t\t\t\t\t\t</div>') + '\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t';
	})));
});

},{"./data.js":2}],2:[function(require,module,exports){
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
