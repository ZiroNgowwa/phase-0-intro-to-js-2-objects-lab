// Write your solution in this file!
const employee = {
    streetAdress:' ',
    name:'',
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = Object.assign({}, employee, {[key]:value})
    return newObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = Object.assign(employee, {[key]:value})
    return newObject
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign(employee,key)
    delete newObject[key]
    return newObject
}