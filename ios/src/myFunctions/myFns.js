export function uniqueId() {
    return (performance.now() + Math.random()).toString(36).replace('.', '');
}
export function errorText(txt, rules) {
    let res = ''
    rules.map((v) => {
        return v.rule(txt) === true ? res = v.text : undefined
    })
    return res
}