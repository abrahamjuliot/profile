import css from './css.js'
import template from './template.js'

// tagged template literal (JSX alternative)
const patch = (oldEl, newEl) => oldEl.parentNode.replaceChild(newEl, oldEl)
const html = (stringSet,...expressionSet) => {
	const template = document.createElement('template')
	template.innerHTML = stringSet.map((str, i) => `${str}${expressionSet[i]||''}`).join('')
	return template.content
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
const url = 'https://abrahamjuliot.github.io/gradstudents/ensc.json'

// app: get json then when DOM is ready patch html template
http.get(url, (data) => {
	ready(() => {
		patch(document.getElementById('block-ucr-default-page-title'),
		html`${template(css, data)}`)
	})
})