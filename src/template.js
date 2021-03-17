// functional switch
const callIfFunction = x => x instanceof Function ? x() : x
const choose = switchFn => // cache cases
    caseVal => callIfFunction(switchFn(caseVal)[caseVal] || switchFn().default) // get case
const agree = (x, ...list) => // agree on a fall through set
    list.find(val => x === val) || list[0] 

// Choose track
const track = selection => ({
    ['ENTX']: 'Environmental Toxicology',
    ['ENSC']: 'Environmental Sciences',
    ['EPS']: 'Earth and Planetary Sciences',
    ['ECON']: 'Environmental Economics',
    ['EEOB']: 'Evolution, Ecology, and Organismal Biology',
	['CEE']: 'Chemical and Environmental Engineering',
    default: ''
})
const Program = choose(track)

// Choose faculty
const faculty = selection => ({
    ['ajami']: ['Hoori Ajami', 'hoori.ajami'],
    ['anderson']: ['Michael Anderson', 'michael.anderson'],
    ['bahreini']: ['Roya Bahreini', 'roya.bahreini'],
    ['crohn']: ['David Crohn', 'david.crohn'],
    ['gan']: ['Jay Gan', 'j.gan'],
    ['graham']: ['Robert Graham', 'robert.graham'],
    ['gray']: ['Andrew B. Gray', 'andrew.gray'],
    ['haghverdi']: ['Amir Haghverdi', 'amir.haghverdi'],
    ['hirmas']: ['Daniel Hirmas', 'daniel.hirmas'],
    ['homyak']: ['Pete Homyak', 'peter.homyak1'],
    ['hopkins']: ['Francesca Hopkins', 'francesca.hopkins'],
    ['jenerette']: ['Darrel Jenerette', 'darrel.jenerette'],
    ['knapp']: ['Keith Knapp', 'keith.knapp'],
    ['li']: ['King-Fai Li', 'king-fai.li'],
    ['lin']: ['Ying-Hsuan Lin', 'ying-hsuan.lin'],
    ['porter']: ['William Porter', 'william.porter'],
    ['schlenk']: ['Daniel Schlenk', 'daniel.schlenk'],
    ['sickman']: ['James Sickman', 'james.sickman'],
    ['simunek']: ['Jirka Šimunek', 'jiri.simunek'],
    ['volz']: ['David C. Volz', 'david.volz'],
    ['wu']: ['Laosheng Wu', 'laosheng.wu'],
    ['ying']: ['Sam Ying', 'samantha.ying'],
    ['schwabe']: ['Kurt Schwabe', 'kurt.schwabe'],
	['zhang']: ['Haofei Zhang', 'haofei.zhang'],
    ['oglesby']: ['David D. Oglesby', 'david.oglesby'],
    ['allen']: ['Robert J. Allen', 'robert.allen'],
    ['barth']: ['Nicolas Barth', 'nic.barth'],
    ['bekker']: ['Andrey Bekker', 'andrey.bekker'],
    ['brounce']: ['Maryjo Brounce', 'maryjo.brounce'],
    ['douilly']: ['Roby Douilly', 'roby.douilly'],
    ['dieterich']: ['James H. Dieterich', 'james.dieterich'],
    ['droser']: ['Mary Droser', 'mary.droser'],
    ['fogel']: ['Marilyn Fogel', 'marilyn.fogel'],
    ['ford']: ['Heather Ford', 'heather.ford'],
    ['funning']: ['Gareth Funning', 'gareth.funning'],
    ['ghosh']: ['Abhijit Ghosh', 'abhijit.ghosh'],
    ['hughes']: ['Nigel C. Hughes', 'nigel.hughes'],
    ['kane']: ['Stephen R. Kane', 'stephen.kane'],
    ['liu']: ['Wei Liu', 'wei.liu'],
    ['turner']: ['Sandra Kirtland Turner', 'sandra.kirtlandturner'],
    ['love']: ['Gordon Love', 'gordon.love'],
    ['lyons']: ['Timothy Lyons', 'timothy.lyons'],
    ['mckibben']: ['Michael A. McKibben', 'michael.mckibben'],
    ['minnich']: ['Richard A. Minnich', 'richard.minnich'],
    ['ridgwell']: ['Andy Ridgwell', 'andrew.ridgwell'],
    ['sadler']: ['Peter M. Sadler', 'peter.sadler'],
    ['scott']: ['Thomas A. Scott', 'thomas.scott'],
	['schwieterman']: ['Edward Schwieterman', 'edward.schwieterman'],
    default: ''
})
const PI = choose(faculty)

// template iterator
const repeat = (list, fn) => list.map(item => fn(item)).join('')

// template conditional
const when = (x, template) => x ? `${template}`: ''

const template = (site, css, data) =>
`${css}
<section class='grads'>
    ${repeat(data, (item) => `
        <div class='grad-card'>
            <div class='grad-header'>
                ${when(item.img,
                `<div class='grad-img'><img src='/sites/g/files/${site}/files/${item.img}.jpg'/></div>`)}
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
                    <a href='${item.websiteURL}' target='_blank'>View Website</a>
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