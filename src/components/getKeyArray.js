/*
    迭代数组，取出每个元素的某个属性，组成新的数组
*/
export default function (arr = [], key) {
    return arr.map(item => item[key])
}