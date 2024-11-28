function getGradePoints(totalMarks) {
    if (totalMarks >= 90) return 10;
    else if (totalMarks >= 80) return 9;
    else if (totalMarks >= 70) return 8;
    else if (totalMarks >= 60) return 7;
    else if (totalMarks >= 50) return 6;
    else if (totalMarks >= 45) return 5;
    else if (totalMarks >= 40) return 4;
    else return 0;
}

function calculateSGPA() {
    const table = document.getElementById("subjectTable");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let row of rows) {
        const internalMarks = parseInt(row.getElementsByClassName("internal")[0].value) || 0;
        const externalMarks = parseInt(row.getElementsByClassName("external")[0].value) || 0;
        const credits = parseInt(row.cells[3].innerText);

        const totalMarks = internalMarks + externalMarks;
        const gradePoints = getGradePoints(totalMarks);

        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
    }

    const sgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0.0;
    document.getElementById("result").innerText = `Your SGPA: ${sgpa}`;
}
