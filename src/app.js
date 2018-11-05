import css from './css.js'
import template from './template.js'

// ie11 fix for template.content
const getFragment = template => {
	const frag = document.createDocumentFragment()
    const children = [...template.childNodes]
    children.forEach((el) => { frag.appendChild(children[el].cloneNode(true)) })
  	return frag
}
const templateContent = template => {
    return 'content' in document.createElement('template') ?
    	document.importNode(template.content, true) :
		getFragment(template)
}

// tagged template literal (JSX alternative)
const patch = (oldEl, newEl) => oldEl.parentNode.replaceChild(newEl, oldEl)
const html = (stringSet,...expressionSet) => {
	const template = document.createElement('template')
	template.innerHTML = stringSet.map((str, i) => `${str}${expressionSet[i]||''}`).join('')
	return templateContent(template) // ie11 fix for template.content
}

// http factory
const xhr = () => {
	const XHR = () => new XMLHttpRequest()
	const onload = (req, fn, parse = true) => {
		req.onload = () => {
			if (req.status >= 200 && req.status < 400) {
				let data = req.responseText
				;(parse) && (data = JSON.parse(data))
				fn(data) // execute callback with data
			}
		}
	}
	return {
		get (url, fn, parse) {
			const req = XHR()
			req.open('GET', url, true)
			onload(req, fn, parse)
			req.send()
		}
	}
}

const http = xhr()

// doc readyState
const ready = (fn) => document.readyState != 'loading' ? fn(): 
	document.addEventListener('DOMContentLoaded', fn);

// json
const url = 'https://abrahamjuliot.github.io/profile/data/ensc.json'

// sort json by last word in search field
const by = (getValue) => (a, b) => getValue(a) > getValue(b) ? 1 : -1
const sortBy = (arr, val) => arr.sort(by(obj => obj[val].split(" ").pop()))

// app: get json then when DOM is ready patch html template
http.get(url, (json) => {

	const data = sortBy(json, 'name')
	ready(() => {
		patch(document.getElementById('gradstudents'),
		html`${template(css, data)}`)
	})
})