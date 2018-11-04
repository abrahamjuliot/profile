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

// functional switch (program)
const callIfFunction = x => x instanceof Function ? x() : x
const choose = switchFn => // cache cases
	caseVal => callIfFunction(switchFn(caseVal)[caseVal] || switchFn().default) // get case
const agree = (x, ...list) => // agree on a fall through set
  list.find(val => x === val) || list[0] 
  
const track = selection => ({ 
  ['ENTX']: 'Environmental Toxicology',
  ['ENSC']: 'Environmental Sciences',
  ['GEO']: 'Geological Sciences',
  default: 'Unknown'
})
const Program = choose(track)

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
                    <a href='https://profiles.ucr.edu/${item.facultySite}' target='_blank'>${item.faculty}</a>
                </div>`)}
            </div>
        </div>
    `)}
</section>
`

export default template