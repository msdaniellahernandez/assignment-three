function extractValue(arr, key) {
    return arr.map(obj => obj[key]);
}
function vowelCount(str) {
    const vowels = "aeiou";
    const result = {};
    str.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) {
            result[char] = result[char] ? result[char] + 1 : 1;
        }
    });
    return result;
}
function addKeyAndValue(arr, key, value) {
    return arr.map(obj => ({ ...obj, [key]: value }));
}
function partition(arr, callback) {
    return arr.reduce((acc, val) => {
        callback(val) ? acc[0].push(val) : acc[1].push(val);
        return acc;
    }, [[], []]);
}
module.exports = {
    extractValue,
    vowelCount,
    addKeyAndValue,
    partition
};
