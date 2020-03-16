// Amortization calculates the montly payment of a loan.
export function amortization(principal, interestRate, loanMonths) {
    let P = principal,
    r = interestRate/12,
    n = loanMonths
    let A=P*(r*Math.pow(1+r,n))/(Math.pow(1+r, n)-1)

    return A // Amortization
}

export function carLoanForm(vehicleCost=0, salesTax=0, tradeInValue=0, dealerFees=0, rebatesOrIncentives=0, downPayment=0, interestRate=0, loanMonths=0){
    let totalCost = (vehicleCost * (1 + (salesTax/100))) - tradeInValue + dealerFees - rebatesOrIncentives - downPayment
    let payment = amortization(totalCost, interestRate/100, loanMonths)
    return payment
}

export function carAffordabilityForm(monthlySalary=0, loanMonths=0, percentDown=0, interestRate=0){
    return reverseAmortization(monthlySalary/10, interestRate/100, loanMonths) * (1 + (percentDown/100))
}

export function reverseAmortization(monthlyPayment, interestRate, loanMonths) {
    let r = interestRate/12,
    n = loanMonths,
    P = monthlyPayment / ((r*Math.pow(1+r,n))/(Math.pow(1+r, n)-1))

    return P // Principal
}


export function normalizeFormValues(formElements){
    return [...formElements].reduce(function(total, elem){
        total[elem.id] = Number(elem.value) || 0
        return total
    }, {})
}

// module.exports = {
//     amortization,
//     carLoanForm
// }