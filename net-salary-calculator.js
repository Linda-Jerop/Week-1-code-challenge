/*
Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 

Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

Net Salary = Total Salary(+benefits) - Total Deductions
OUTPUT     = INPUT                   - Inputs Calculate

TAX
if monthly salary <= 24,000 rate of tax is 10% 
if monthly salary >= 24,001 && <= 32,333 tax is 25%
if monthly salary >= 32,334 && <= 500,000 tax is 30%
if monthly salary >= 500,001 && <= 800,000 tax is 32.5%
if monthly salary > 800,000 rate of tax is 35%
SAME WITH ANNUAL

DEDUCTIONS
SHIF(replaced NHIF) 2.75% -- From gross monthly salary
NSSF : Contribute 6% if:
       If employee earns up to 8,000 [Tier 1] deduct (6% of amount)
       If employee earns over 8,000 [Tier 2] deduct both (6% of 8,000) and (6% of (Earnings - 8,000)) 
Housing Levy 1.5% -- From gross monthly salary
*/

//monthlySalary == Gross Monthly Salary

//TAX CALC
function payeeTax(monthlySalary) {
    // const salary = Number(prompt("Input Gross Salary here"));
    let tax = 0;

    if (monthlySalary > 24000) {
         tax = (24000 / 10) // 10% == 10/100 == 1/10 hence divide by 10
    }
    else {
         tax = ((24000 - monthlySalary) / 10)
    }

    if (monthlySalary >= 24001 && monthlySalary <= 32333) { // 25% == 0.25
         tax = ((32333 - 24000) * 0.25)
    }
    else if (monthlySalary >= 32334 && monthlySalary <= 500000) { //30% == 0.3
         tax = ((500000 - 32333) * 0.3)
    }

    if (monthlySalary >= 500001 && monthlySalary <= 800000) {
         tax = ((800000 - 500000) * 0.325)
    }
    else if (monthlySalary > 800000) {
         tax = ((monthlySalary - 800000) * 0.35)
    }

    console.log(tax);
    
}


payeeTax(10000);

//DEDUCTIONS
//NHIF Deductions
function nhifDeductions(monthlySalary) {
    const nhifDeductions = (0.275 * monthlySalary)
}


nhifDeductions();

//NSSF Deductions
function nssfDeductions(monthlySalary) {

     let nssfDeductions = 0;

    //Tier 1
    if (monthlySalary <= 8000) {
        nssfDeductions = (0.06 * monthlySalary)
    }
    //Tier 2
    else {
        nssfDeductions = ((0.06 * 8000) + (0.06 * (monthlySalary - 8000)))
    }

    // console.log(nssfDeductions);
    
    return nssfDeductions;
}


nssfDeductions(7000);

//Housing Levy
function housingLevy(monthlySalary) {
    const housingLevy = (0.015 * monthlySalary)
}


housingLevy();

//Net Salary
function netSalary(monthlySalary) {
    const netSalary = (monthlySalary - (payeeTax() + nhifDeductions() + nssfDeductions() + housingLevy()))
}
netSalary();

//Gross Salary
function grossSalary(monthlySalary) {
    const netSalary = (monthlySalary + (payeeTax() + nhifDeductions() + nssfDeductions() + housingLevy()))
}
grossSalary();

//ANNUAL
function annualNetSalary(monthlySalary){
    console.log(annualNetSalary)
   // return netSalary(monthlySalary)*12;
}

function annualGrossSalary(monthlySalary){
    return grossSalary(monthlySalary)*12;
}


