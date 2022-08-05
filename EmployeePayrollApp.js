//UC1 - Modify Employee Payroll Class with new Attributes and Getters and Setters

class EmployeePayrollData {
    //getter and setter method
    id;
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$")
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }
    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }
    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }
    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this._startDate = startDate;
        if (startDate > now) throw 'Start Date is a Future Date';
        var diff = Math.abs(now.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30)
            throw 'Start Date is beyond 30 days!';
        this.startDate = startDate;
    }

    //methord--
    toString() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + ", profilepic= " + this.profilePic + ", department= " + this.department + ", salary=" + this.salary + ", startDate= " + empDate + ", note=" + this.note;
    }
}

//UC2 - Ability to set Event Listeners when Document is loaded so as to Set Event Listener on Salary Range to display appropriate value
let isUpdate = false;
let employeePayrollObj = {};
window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
    //const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            setTextValue('.text-error',"");
            // textError.textContent = "";
            return;
        }
        try{
            checkName(name.value);
            setTextValue('.text-error',"");
             //textError.textContent = "";
        }
        catch(e){
            setTextValue('.text-error',e);
            // textError.textContent = e;
        }
    });

   const date = document.querySelector("#date");
   date.addEventListener('input' , function(){
       let startDate = getInputValueById('#day')+" "+getInputValueById('#month')+" "+ getInputValueById('#year');
       try{
           checkStartDate(new Date(Date.parse(startDate)));
           setTextValue('.date-error', "");
       }
       catch(e){
           setTextValue('.date-error',e);
       }
   });

    const salary = document.querySelector("#salary");
    setTextValue('.salary-output', salary.value);
    salary.addEventListener('input',function(){
        setTextValue('.salary-output', salary.value);
    });
});
document.querySelector('#cancelButton').href=site_properties.home_page;
checkForUpdate();
//UC3-  Ability to create Employee Payroll Object On Save.

const save = (event) =>{
    event.preventDefault();
    event.stopPropagation();
    try{
        setEmployeePayrollObject();
        if (site_properties.use_local_storage.match("trure")){
            createAndUpdateStorage();
            resetForm();
            window.location.replace(site_properties.home_page);
        }
        else{
            createEmployeePayroll();
        }
    }
    catch(e){
        return ;
    }
}

const setEmployeePayrollObject = () =>{
    if(!isUpdate && site_properties.use_local_storage.match("trure")){
        employeePayrollObj.id = createNewEmployeeId();
    }
    employeePayrollObj._name = getInputValueById('#name');
    employeePayrollObj._profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollObj._gender = getSelectedValues('[name=gender]').pop();
    employeePayrollObj._department = getSelectedValues('[name=department]');
    employeePayrollObj._salary = getInputValueById('#salary');
    employeePayrollObj._note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollObj._startDate = date;
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList){
        let empPayrollData = employeePayrollList.find(empData => empData._id == employeePayrollObj._id);
    if(!empPayrollData){
        employeePayrollList.push(employeePayrollObj);
    }
    else{
        const index = employeePayrollList.map(empData._id).indexOf(empPayrollData._id);
        employeePayrollList.splice(index,1,cemployeePayrollObj);
    }
}else{
    employeePayrollList = [employeePayrollObj]
}
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}


const createNewEmployeeId = () =>{
    let empID = localStorage.getItem("EmployeeId");
    empID = !empID ? 1 : (parseInt(empID)+1).toString();
    localStorage.getItem("EmployeeId",empID);
    return empID;
}
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    }
    catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}


const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const setform = () =>{
    setValue('#name', employeePayrollObj._name);
    setSelectedValues('[name=profile]',employeePayrollObj._profilePic);
    setSelectedValues('[name=gender]',employeePayrollObj._gender);
    setSelectedValues('[name=department]',employeePayrollObj._department);
    setValue('#salary', employeePayrollObj._salary);
    setTextValue('.salary-output'.employeePayrollObj._salary);
    setValue('#notes',employeePayrollObj._note);
    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    setValue('#day', date[0]);
    setValue('#month',date[1]);
    setValue('#year',date[2]);
}
const setSelectedValues = (propertyValue, value) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item =>{
        if(Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked = true;
            }
        }
        else if (item.value === value)
        item.checked = true;
    });
}
//UC5 - Ability to reset the form on clicking reset

const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setValue('#notes', "");
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}