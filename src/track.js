import { choose } from './tools.js'

const fns = {
    track(selection) {
        return { 
            ['ENTX']: 'Environmental Toxicology',
            ['ENSC']: 'Environmental Sciences',
            ['GEO']: 'Geological Sciences',
            ['ECON']: 'Environmental Economics',
            default: selection
        }
    },
    Program: choose(fns.track)
}

export default fns


