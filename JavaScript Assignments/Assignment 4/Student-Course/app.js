const Student = [
    { name: 'Jawwad', course: 'Web Development', Enrollmentdate: '22-04-2025' },
    { name: 'Wahid', course: 'Graphic Design', Enrollmentdate: '22-04-2025' },
    { name: 'Ali', course: 'Data Science', Enrollmentdate: '21-02-2025' },
    { name: 'Sami', course: 'Web Development', Enrollmentdate: '2-02-2025' },
    { name: 'Subhan', course: 'Data Science', Enrollmentdate: '13-03-2025' },
    { name: 'Rafay', course: 'Graphic Design', Enrollmentdate: '13-01-2025' },
];


function processEnrollments(enrollments, courseStartDate) {
    const courseFees = {
        "Web Development": 200,
        "Data Science": 250,
        "Graphic Design": 150
    };

    const earlyBirdDiscount = 0.10; 

    const summary = enrollments.map(enrollment => {
        const { name, course, Enrollmentdate } = enrollment;

        const formattedName = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const formattedCourse = course.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        // Determine the fee based on the course
        let fee;
        switch (formattedCourse) {
            case "Web Development":
                fee = courseFees["Web Development"];
                break;
            case "Data Science":
                fee = courseFees["Data Science"];
                break;
            case "Graphic Design":
                fee = courseFees["Graphic Design"];
                break;
            default:
                fee = 0; // Unknown course
        }

        // Calculate the duration since enrollment
        const enrollmentDateObj = new Date(Enrollmentdate.split('-').reverse().join('-')); // Convert to YYYY-MM-DD format
        const currentDate = new Date();
        const durationInDays = Math.floor((currentDate - enrollmentDateObj) / (1000 * 60 * 60 * 24));

        // Apply early bird discount if applicable
        if (durationInDays > 30) {
            fee -= fee * earlyBirdDiscount;
        }

        return {
            name: formattedName,
            course: formattedCourse,
            fee: fee.toFixed(2), // Format fee to 2 decimal places
            durationInDays: durationInDays
        };
    });

    return summary;
}


const courseStartDate = "2025-05-01"; // Example course start date
const processedEnrollments = processEnrollments(Student, courseStartDate);
console.log(processedEnrollments);
