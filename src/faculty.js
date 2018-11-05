import { choose } from './tools.js'

const fns = {
    faculty(selection) {
        return { 
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
            ['knapp']: ['Keith Knapp', 'keith.knapp'],
            ['li']: ['King-Fai Li', 'king-fai.li'],
            ['lin']: ['Ying-Hsuan Lin', 'ying-hsuan.lin'],
            ['porter']: ['William Porter', 'william.porter'],
            ['schlenk']: ['Daniel Schlenk', 'daniel.schlenk'],
            ['sickman']: ['James Sickman', 'james.sickman'],
            ['simunek']: ['Jirka Šimunek', 'jiri.simunek'],
            ['volz']: ['David C. Volz', 'david.volz'],
            ['wu']: ['Laosheng Wu', 'laosheng.wu'],
            ['schwabe']: ['Kurt Schwabe', 'kurt.schwabe'],
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
            default: selection
        }
    },
    PI: choose(fns.faculty)
} 

export default fns