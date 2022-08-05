//UC2 - Ability to Update an Employee Payroll details.
const stringifyDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const newDate = !date ? "undefined" :
                    new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
}

const checkName = (name) => {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if(!nameRegex.test(name)) throw 'Name is Incorrect';
}

const checkStartDate = (startDate)=> {
    let now = new Date();
    if (startDate > now) throw 'Start Date is a Future Date';
    var diff = Math.abs(now.getTime() - startDate.getTime());
    if (diff / (1000 * 60 * 60 * 24) > 30)
        throw 'Start Date is beyond 30 days!';
    
}