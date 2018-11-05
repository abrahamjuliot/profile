import { Program } from './track.js'
import { PI } from './faculty.js'

// template iterator
const repeat = (list, fn) => list.map(item => fn(item)).join('')

// background img style
const styleImg = (obj) => `
	style='background: url(${obj.img}) no-repeat; background-size: contain'
`

// web url cleaner
const siteName = (url) => url.replace(/(^\w+:|^)\/\//, '')

// template conditional
const when = (x, template) => x ? `${template}`: ''

const template = (css, data) =>
`${css}
<section class='grads'>
    ${repeat(data, (item) => `
        <div class='grad-card'>
            <div class='grad-header'>
                ${when(item.img,
                `<div class='grad-img'><span ${styleImg(item)}></span></div>`)}
                <div class='grad-intro'>
                    <div class='grad-name'>${item.name}</div>
                    ${when(item.program,
                    `<div class='grad-program'>${Program(item.program)}</div>`)}
                </div>
            </div>
            <div class='grad-section'>
                ${when(item.research,
                `<div class='grad-research'>${item.research}</div>`)}
                ${when(item.email,
                `<div class='grad-email'>
                    <a href='mailto:${item.email}ucr.edu'>${item.email}ucr.edu</a>
                </div>`)}
                ${when(item.websiteURL,
                `<div class='grad-website'>
                    <a href='${item.websiteURL}' target='_blank'>${siteName(item.websiteURL)}</a>
                </div>`)}
                ${when(item.faculty,
                `<div class='grad-faculty'>Advisor: 
                    <a href='https://profiles.ucr.edu/${PI(item.faculty.toLowerCase())[1]}' target='_blank'>
                        ${PI(item.faculty.toLowerCase())[0]}
                    </a>
                </div>`)}
            </div>
        </div>
    `)}
</section>
`

export default template