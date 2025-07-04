document.addEventListener("DOMContentLoaded", ()=>{
    const calculateBtn = document.getElementById('btn')
//input fields
    const amount = document.getElementById('numberInput1')
    const interest = document.getElementById('numberInput2')
    const year = document.getElementById('numberInput3')

//display

    const monthlyPayment = document.getElementById('monthlyPayment')
    const totalPayment = document.getElementById('TotalPayment')
    const totalInterestPayment = document.getElementById('TotalInterest')

    function calculateLoan(){
        const principal = parseFloat(amount.value);
        console.log(principal);
        const Interest = parseFloat(interest.value)/100/12;
        const payments = parseFloat(year.value) *12;
        if(isNaN(principal) || isNaN(Interest) || isNaN(payments)){
            alert('Please enter a valid number');
            return;
        }
        const x = Math.pow(1+Interest,payments);
        const monthly =(principal * x *Interest) /(x - 1);
        if(isFinite(monthly)){
            const total = monthly * payments;
            const totalInterest = total-principal;

            monthlyPayment.textContent = monthly;
            totalPayment.textContent = total;
             totalInterestPayment.textContent = totalInterest;
             animateValue(monthlyPayment,0,monthly,1000);
             animateValue(totalPayment,0,total,1000);
             animateValue(totalInterestPayment,0,totalInterest,1000);
             

        }
        
    
    }

    function animateValue(element,start,end,duration){
        const startTime = performance.now();
        function update(currentTime)
        {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed/duration,1)
            const current = start + (end - start) * progress;
            element.textContent = current ;
            
        }
        if(progress < 1)
            {
                requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
    }

    calculateBtn.addEventListener("click", calculateLoan)

})

