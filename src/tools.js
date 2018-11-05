const fns = {
    // functional switch
    callIfFunction: x => x instanceof Function ? x() : x,
    choose: switchFn => // cache cases
        caseVal => fns.callIfFunction(switchFn(caseVal)[caseVal] || switchFn().default), // get case
    agree: (x, ...list) => // agree on a fall through set
        list.find(val => x === val) || list[0] 
}

export default fns