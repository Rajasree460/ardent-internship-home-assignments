import React from 'react';
import Avatar from '@mui/material/Avatar';
import Pd from './Pd';
import Md from './Md';
import Fr from './Fr';

const Rankcard = () => {
    return (
        <>
            <div className="header mt-2">
                <div className="logo">
                    <Avatar alt="logo" src="/img/logo.jpg" sx={{ width: 80, height: 80 }} />
                </div>
                <div className="title">
                    <h5>BIHAR SCHOOL EXAMINATION BOARD,PATNA</h5>
                    <h5>ANNUAL SECONDARY SCHOOL EXAMINATION RESULT,2020</h5>
                </div>
            </div>
            <div className="container-fluid">
                <div className="card1">
                    <div className="card-body">
                        <div className="pd">
                            <div className="colour">
                                <h4>Personal details</h4>
                            </div>
                            <div>
                               <Pd />
                            </div>
                        </div>
                        <div className="md">
                            <div className="colour">
                                <h4>Marks details</h4>
                            </div>
                            <div>
                              <Md />
                            </div>
                        </div>
                        <div className="fr">
                           <div className="colour">
                                <h4>Final Result</h4>
                            </div>
                            <div>
                               <Fr />
                            </div>
                        </div>
                    </div>
                        <div className='footer'>
                            <h6><b>Abbreviation used:</b></h6>
                            <h6>•F:-Fail  •C:-Compartmental  •B:-Betterment  •UR:-Under Regulation  •ABS:-Absent</h6>
                            <h6><b>Note:</b> This copy is not valid for any leagel use.</h6>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Rankcard;
