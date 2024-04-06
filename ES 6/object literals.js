// Object Literals
function studentInfo(name, age){
    return {
        name, age
    }
}
console.log(studentInfo("Samiuzzaman", 22));

let message = {
    "body name"() {
        return `Hi I am object function.`
    }
}
console.log(message['body name']());