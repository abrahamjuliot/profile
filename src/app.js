import template from './template.js'

// ie11 fix for template.content
function templateContent(template) {
	// template {display: none !important} /* add css if template is in dom */
    if ('content' in document.createElement('template')) {
        return document.importNode(template.content, true)
    } else {
        const frag = document.createDocumentFragment()
        const children = template.childNodes
        for (let i = 0, len = children.length; i < len; i++) {
            frag.appendChild(children[i].cloneNode(true))
        }
        return frag
    }
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

//github repo
const githubURL = 'https://abrahamjuliot.github.io/profile/'

// css
const cssURL = 'dist/style.min.css'
const css = `<style>.full primary-content-area {min-height: 700px}</style><link rel='stylesheet' type='text/css' href=${githubURL+cssURL}>`

// json
const url = window.gradStudentJSONURL

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