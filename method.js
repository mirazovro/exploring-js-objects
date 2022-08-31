const student = {
    name: 'kodom ali',
    age: 56,
    study: 'math',
    money: 5000,
    subjects: ['calculas', 'algabra', 'biology'],
    exam: function () {
        // console.log(this.name + ' exam result is ' + this.age);
        return (this.name + ' exam result is ' + this.age);
        
    },
    retake: function () {
        return (this.name+ ' retake the '+ this.subjects[1]+' exam')
    },
    treatDay: function (amount,tips) {
        this.money = this.money - amount-tips;
        return this.money;
    }
}
const result = student.exam();
//  console.log(result)

const retakexm = student.retake();
// console.log(retakexm);

const remaining = student.treatDay(600,100);
console.log(remaining);

const dolaRemaining = student.treatDay(500,150);
console.log(dolaRemaining)