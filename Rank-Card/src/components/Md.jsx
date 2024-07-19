import React from 'react';

const Md = () => {
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">F.Marks</th>
                        <th scope="col">P.Marks</th>
                        <th scope="col">Theory</th>
                        <th scope="col">INT./PRACT</th>
                        <th scope="col">Regulation</th>
                        <th scope="col">Subject Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">M.I.L. HINDI</th>
                        <td>100</td>
                        <td>030</td>
                        <td>095</td>
                        <td>-</td>
                        <td></td>
                        <td>095</td>
                    </tr>
                    <tr>
                        <th scope="row">S.I.L. SANSKRIT</th>
                        <td>100</td>
                        <td>030</td>
                        <td>088</td>
                        <td>-</td>
                        <td></td>
                        <td>088</td>
                    </tr>
                    <tr>
                        <th scope="row">MATHEMATICS</th>
                        <td>100</td>
                        <td>030</td>
                        <td>097</td>
                        <td>-</td>
                        <td></td>
                        <td>097</td>
                    </tr>
                    <tr>
                        <th scope="row">SCIENCE</th>
                        <td>100</td>
                        <td>030</td>
                        <td>077</td>
                        <td>020</td>
                        <td></td>
                        <td>097</td>
                    </tr>
                    <tr>
                        <th scope="row">SOCIAL SCIENCE</th>
                        <td>100</td>
                        <td>030</td>
                        <td>074</td>
                        <td>010+010</td>
                        <td></td>
                        <td>094</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Md;
