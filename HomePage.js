
// UC4 Display Employee Details in Tabular Format using Template Literals
/*
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
*/
/*UC 4 – Display Employee Details in Tabular Format using Template Literals */
//Template literal ES6 feature
/*
const createInnerHtml = () => {
    const innerHtml =`
        <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
           <td><img class="profile" alt="" src="Ellipse -9.png" style="width: 70px;
               height: 52px;"></td>
           <td>Prateek</td>
           <td>Male</td>
           <td>
               <div class="dept-label">Engineering</div>
               <div class="dept-label">Finance</div>
           </td>
           <td>800000</td>
           <td>04 Nov 2021</td>
           <td>
               <img id="1" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
               <img id="1" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
           </td>
    </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
};
*/

// UC4 Display Employee Details in Tabular Format using Template Literals
/*
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
*/
/*UC 4 – Display Employee Details in Tabular Format using Template Literals */
//Template literal ES6 feature
/*
const createInnerHtml = () => {
    const headerHtml =  "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
    <tr>
           <td><img class="profile" alt="" src="Ellipse -9.png" style="width: 70px;
               height: 52px;"></td>
           <td>Prateek Pai</td>
           <td>Male</td>
           <td>
               <div class="dept-label">HR</div>
               <div class="dept-label">Finance</div>
           </td>
           <td>800000</td>
           <td>04 Nov 2021</td>
           <td>
               <img id="1" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
               <img id="1" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
           </td>
    </tr>`;
        
    document.querySelector('#table-display').innerHTML = innerHtml;
}
*/

//UC5 - Ability to view Employee Payroll details in a Tabular Format from JSON Object.
/*
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
*/

//UC5 - Ability to view Employee Payroll details in a Tabular Format from JSON Object.
/*
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[1];
    const innerHtml = `${headerHtml}

                <tr>
                    <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td>
                        <div class="dept-label">${empPayrollData._department[0]}</div>
                        <div class="dept-label">${empPayrollData._department[1]}</div>
                    </td>
                         <td>${empPayrollData._salary}</td>
                         <td>${empPayrollData._startDate}</td>
                         <td>
                             <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
                             <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
                         </td>
                </tr>`;

    document.querySelector('#table-display').innerHTML = innerHtml;
}
*/
/*
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Prateek Pai',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'Ellipse -3.png'
        },
        {
            _name: 'Vasanth Pai',
            _gender: 'Male',
            _department: [
                'Sales'

            ],
            _salary: '400000',
            _startDate: '29 Mar 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: 'Ellipse -5.png'
        }
    ];
    return empPayrollListLocal;
}
*/

//UC 5 – Display Employee Details from JSON Object including the Department
/*
     const createInnerHtml = () => {
        const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
            "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        let empPayrollData = createEmployeePayrollJSON()[0];
        const innerHtml = `${headerHtml}
    
                    <tr>
                        <td><img class="profile" alt="" src="${empPayrollData._profilePic}" alt=""></td>
                        <td>${empPayrollData._name}</td>
                        <td>${empPayrollData._gender}</td>
                        <td>${getDeptHtml(empPayrollData._department)}</td>
                        <td>${empPayrollData._salary}</td>
                        <td>${empPayrollData._startDate}</td>
                             <td>
                                 <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
                                 <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
                             </td>
                    </tr>`;
            
        document.querySelector('#table-display').innerHTML = innerHtml;
    }

    const getDeptHtml = (deptList) => {
     let deptHtml = '';
     for (const dept of deptList) {
         deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
     }
     return deptHtml;
 }
 */

//UC 5 – Display All Employee Payroll Details from JSON Object
/*
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();

    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        
        <tr>
           <td><img class="profile" alt="" src="${empPayrollData._profilePic}" alt=""></td>
           <td>${empPayrollData._name}</td>
           <td>${empPayrollData._gender}</td>
           <td>${getDeptHtml(empPayrollData._department)}</td>
           <td>${empPayrollData._salary}</td>
           <td>${empPayrollData._startDate}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
                    <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
                </td>
       </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
*/

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

//UC6 - Display Employee Details from Local Storage

let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}


const createInnerHtml = () => {
    if (empPayrollList.length == 0) return;
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml = `${headerHtml}`;

    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        
        <tr>
           <td><img class="profile" alt="" src="${empPayrollData._profilePic}" alt=""></td>
           <td>${empPayrollData._name}</td>
           <td>${empPayrollData._gender}</td>
           <td>${getDeptHtml(empPayrollData._department)}</td>
           <td>${empPayrollData._salary}</td>
           <td>${empPayrollData._startDate}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
                    <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
                </td>
       </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;

}

