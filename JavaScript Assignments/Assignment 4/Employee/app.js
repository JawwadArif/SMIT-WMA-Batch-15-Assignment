const Employees = [
    { EmployeeName: "ali", BasicSalary: 105000, HoursWorked: 46, isEligible: true },
    { EmployeeName: "jawwad", BasicSalary: 120000, HoursWorked: 50, isEligible: false },
    { EmployeeName: "sami", BasicSalary: 150000, HoursWorked: 55, isEligible: true },
    { EmployeeName: "rafay", BasicSalary: 90000, HoursWorked: 36, isEligible: false },
    { EmployeeName: "wahaj", BasicSalary: 150000, HoursWorked: 56, isEligible: true },
    { EmployeeName: "hamza", BasicSalary: 95000, HoursWorked: 40, isEligible: false },
];

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function processEmployees(employees) {
    const processedEmployees = employees.map(employee => {
        const name = capitalize(employee.EmployeeName);

        const baseRate = employee.BasicSalary / 40;
        const overtimeHours = Math.max(0, employee.HoursWorked - 40);
        const overtimePay = overtimeHours * baseRate * 1.5;

        let bonus = 0;
        switch (employee.isEligible) {
            case true:
                bonus = employee.BasicSalary * 0.10;
                break;
            case false:
                bonus = 0;
                break;
        }
        let totalPay = employee.BasicSalary + bonus + overtimePay;

        let tax = 0;
        if (totalPay > 100000) {
            tax = totalPay * 0.30;
            totalPay -= tax;
        }

        return {
            name,
            bonus: parseFloat(bonus.toFixed(2)),
            overtimePay: parseFloat(overtimePay.toFixed(2)),
            tax: parseFloat(tax.toFixed(2)),
            totalPay: parseFloat(totalPay.toFixed(2))
        };
    });

    const totalPayroll = processedEmployees.reduce((sum, emp) => sum + emp.totalPay, 0);

    return {
        processedEmployees,
        totalPayroll: parseFloat(totalPayroll.toFixed(2))
    };
}

// Example usage:
const result = processEmployees(Employees);
console.log(result.processedEmployees);
console.log("Total Payroll:", result.totalPayroll);

