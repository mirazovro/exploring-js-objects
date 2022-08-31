// console.log('this')

const kodomali = {
    name: 'kodom ali',
    age: 56,
    study: 'math',
    money: 5000,
    subjects: ['calculas', 'algabra', 'biology'],
    exam: function () {
        console.log(this)
        // console.log(this.name + ' exam result is ' + this.age);
        return (this.name + ' exam result is ' + this.age);
        
    },


    examArrow: () => {
        console.log(this)
    },

    examnested: () => {
        const arrow= () => {
            console.log(this)
           
        }
        arrow();
    },


    retake: function () {
        return (this.name+ ' retake the '+ this.subjects[1]+' exam')
    },
    treatDay: function (amount,tips) {
        this.money = this.money - amount-tips;
        return this.money;
    }
}

 kodomali.exam();

const badamAli = {
    name: 'badam ali',
    money: 5000
}

function clickhandler() {
    console.log('inside click handler', this)
    
}

document.getElementById('clickbtn').addEventListener('click', function (){
    console.log(this);   
})


badamAli.exam = kodomali.exam;
badamAli.exam()