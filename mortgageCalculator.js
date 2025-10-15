// === Mortgage Calculator JS ===
$(document).ready(function () {
    const annualInterestRate = 0.045; // 4.5% Fixed Annual Interest Rate
    const MIN_LOAN_AMOUNT = 5000; // The Minimum Loan Required (£)
    const MAX_LOAN_AMOUNT = 1000000; // The Maximum Loan Required (£)
    const MIN_LOAN_TERM = 5; // The Minimum Loan Term (Years)
    const MAX_LOAN_TERM = 30; // The Maximum Loan Term (Years)
    const MIN_MONTHLY_INCOME = 1000; // The Minimum Monthly Income (£)
    const MAX_MONTHLY_INCOME = 25000; // The Maximum Monthly Income (£)

    // The Formula For Monthly Payment
    function calculateMonthlyPayment(P, r, n) {
        return P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    }
    
    // The Validation Of Fields Inputed By The User
    function validateInputs(loanAmount, loanTerm, monthlyIncome) {
        const errorMessages = [];

        if (!loanAmount || loanAmount < MIN_LOAN_AMOUNT || loanAmount > MAX_LOAN_AMOUNT) {
            errorMessages.push(`Loan Amount must be between £${MIN_LOAN_AMOUNT} and £${MAX_LOAN_AMOUNT}.`);
        }

        if (!loanTerm || loanTerm < MIN_LOAN_TERM || loanTerm > MAX_LOAN_TERM) {
            errorMessages.push(`Loan Term must be between ${MIN_LOAN_TERM} and ${MAX_LOAN_TERM} years.`);
        }

        if (!monthlyIncome || monthlyIncome < MIN_MONTHLY_INCOME || monthlyIncome > MAX_MONTHLY_INCOME) {
            errorMessages.push(`Monthly Income must be between £${MIN_MONTHLY_INCOME} and £${MAX_MONTHLY_INCOME}.`);
        }
        // All Error Messages Must be Visible
        if (errorMessages.length > 0) {
            $("#error").hide().html(errorMessages.join("<br>")).fadeIn();
            return false;
        }

        return true;
    }
    
    // Calculation
    $("#calculate").click(function () {
        const loanAmount = parseFloat($("#loanAmount").val());
        const loanTerm = parseInt($("#loanTerm").val());
        const monthlyIncome = parseFloat($("#monthlyIncome").val());

        $("#error").text("").hide(); // The Previous Errors Should Be Cleared
        $("#result").text("").hide(); // The Previous Errors Should Be Cleared

        if (!validateInputs(loanAmount, loanTerm, monthlyIncome)) return;

        const r = annualInterestRate / 12; // The Monthly Interest Rate
        const n = loanTerm * 12; // The Number Of Monthly Payments Totaled
        const monthlyPayment = calculateMonthlyPayment(loanAmount, r, n);
        const maxAffordablePayment = monthlyIncome * 0.30;

        if (monthlyPayment > maxAffordablePayment) {
            $("#result").hide().html(`<p style="color:red">Loan denied: Monthly payment exceeds 30% of your income.</p>`).fadeIn();
        } else {
            const totalPayment = monthlyPayment * n;
            const totalInterest = totalPayment - loanAmount;
            const remainingIncome = monthlyIncome - monthlyPayment;

            // The Layout Of The Detailed Result Which Is Displayed
            $("#result").hide().html(`
                <p>Monthly Payment: £${monthlyPayment.toFixed(2)}</p>
                <p>Total Payment over ${loanTerm} years: £${totalPayment.toFixed(2)}</p>
                <p>Total Interest: £${totalInterest.toFixed(2)}</p>
                <p>Remaining Income after Payment: £${remainingIncome.toFixed(2)}</p>
                <p style="color:green">Loan accepted: Monthly payment is within 30% of your income.</p>
            `).fadeIn();
        }
    });
});
