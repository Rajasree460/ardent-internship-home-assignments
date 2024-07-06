//3 diff components in a single file
import React from "react";
// import unemployment from './unemployment.png';
// import unemploymentS from './unemploymentS.png';
// import unemploymentR from './unemploymentR.png';
const Head=()=>{
    return(
        <>
            <h1><u>Essay</u></h1>
        </>
    )
}

const Unemp=()=>{
    return(
        <>
            <h2 align="left"><u>Unemployment</u></h2>
            <img src="/unemployment.png" alt="unemployment" style={{ width: "300px", height: "200px" }}/>
            <p><b>Unemployment</b> is a big problem that affects many people around the world. It happens when people who can and want to work cannot find jobs. Unemployment can cause serious problems for individuals, families, and communities, leading to money troubles, social issues, a lower quality of life & most importantly depression,anxity etc psycological affects.</p>
        </>
    )
}

const Reason=()=>{
    return(
        <>
            <h2 align="left"><u>Reason</u></h2>
            <img src="/unemploymentR.png" alt="unemployment reason" style={{ width: "300px", height: "200px" }}/>
            <ol>
               <li><b>Economic Downturns:</b> Recessions and economic slowdowns lead to decreased demand for goods and services, resulting in layoffs and reduced hiring.</li>
               <li><b>Echnological Advancements:</b>T Automation and new technologies can render certain jobs obsolete, displacing workers who may not have the skills to transition to new roles.</li>
               <li><b>Globalization:</b> The shifting of jobs to countries with cheaper labor can result in job losses in domestic markets.</li>
               <li><b>Education and Skills Mismatch:</b> There is often a gap between the skills possessed by the workforce and the skills required by employers, leading to unemployment.</li>
               <li><b>Structural Changes:</b> Changes in industry composition, such as the decline of manufacturing jobs and the rise of service-oriented roles, can contribute to unemployment.</li>
            </ol>
        </>
    )
}

const Soln=()=>{
    return(
        <>
            <h2 align="left"><u>Solution</u></h2>
            <img src="/unemploymentS.png" alt="unemployment solution" style={{ width: "300px", height: "200px" }}/>
            <ol type="I">
               <li><b>Economic Stimulus:</b> Governments can implement policies to stimulate economic growth, such as increasing public spending, reducing taxes, and providing incentives for businesses to hire.</li>
               <li><b>Education and Training Programs:</b> Investing in education and vocational training can help workers acquire the skills needed in the current job market, reducing the skills mismatch.</li>
               <li><b>Technological Adaptation Programs:</b> Initiatives to help workers transition into new roles created by technological advancements can mitigate job losses due to automation.</li>
               <li><b>Support for Small and Medium Enterprises (SMEs):</b> Providing support and incentives for SMEs can foster job creation, as these businesses are often significant employers.</li>
               <li><b>Social Safety Nets:</b> Implementing robust social safety nets, such as unemployment benefits and job search assistance, can support individuals while they seek new employment opportunities.</li>
            </ol>
        </>
    )
}

export {Head,Unemp,Reason,Soln}
