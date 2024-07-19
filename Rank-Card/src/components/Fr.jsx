import React from 'react';

const Fr = () => {
    // Define marks data with passing marks
    const marks = [
        { subject: 'M.I.L. HINDI', total: 95, passingMarks: 30 },
        { subject: 'S.I.L. SANSKRIT', total: 88, passingMarks: 30 },
        { subject: 'MATHEMATICS', total: 97, passingMarks: 30 },
        { subject: 'SCIENCE', total: 97, passingMarks: 30 },
        { subject: 'SOCIAL SCIENCE', total: 94, passingMarks: 30 },
    ];

    // Calculating total marks and percentage
    const totalMarks = marks.reduce((acc, mark) => acc + mark.total, 0);
    const percentage = (totalMarks / (marks.length * 100)) * 100;

    // Determining pass/fail
    const isPass = marks.every(mark => mark.total >= mark.passingMarks);

    // Determining division
    let division;
    if (!isPass) {  //for total p/f
        division = 'Fail';
    } else if (percentage >= 80) {
        division = '1st Division';
    } else if (percentage >= 45) {
        division = '2nd Division';
    } else if (percentage >= 30) {
        division = '3rd Division';
    } else {
        division = 'Fail';   //for 1 sub p/f
    }

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Result:</th>
                        <th scope="col">{isPass ? 'Pass' : 'Fail'}</th>
                        <td></td>
                        <td></td>
                        <th scope="col">Total Marks:</th>
                        <td></td>
                        <th scope="col">{totalMarks}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Division</th>
                        <th scope="col">{division}</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">English</th>
                        <td>100</td>
                        <td>030</td>
                        <td>070</td>
                        <td>-</td>
                        <td></td>
                        <td>070</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Fr;
