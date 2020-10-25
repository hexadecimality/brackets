module.exports = function check(str, bracketsConfig) {
    let modify = bracketsConfig.map((e) => e.join(''));
    for (let i = 0; i < modify.length; i++) {
        if (str.includes(modify[i])) {
            str = str.replace(modify[i], '');
            i = -1;
        }
    }
    return (str) ? false : true;
}
