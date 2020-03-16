let {amortization, carLoanForm} = require('./Finance.js')

function TestAmortization(){
    assertEqual(44.32061025275814, amortization(1000, 0.06, 24))

    assertEqual(5118.164698392562, amortization(231232, 0.03, 48))
}

function TestCarLoanForm(){
    assertEqual(415.04399911665035, carLoanForm(18000, 6, 100, 24, 74, 100, 2.79, 48))
}

function run(){
    try {
        TestAmortization()
        TestCarLoanForm()
        console.log('success')
    } catch(err){
        console.error(err)
    }
}

run()

// basic assertion
function assertEqual(a, b){
    if (a === b) {
        return true
    } else {
        throw new Error(`Not Equal: expected ${a} to equal ${b}`)
    }
}