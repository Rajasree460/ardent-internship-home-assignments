import React from "react";
const alist = 'img/alist.jpg';
const best = 'img/best netflix.jpg';
const breaking = 'img/breaking.jpg';
const peaky = 'img/peaky.jpg';
const popular = 'img/popular.jpg';
const sci = 'img/sci fi.jpg';
const str = 'img/str.jpg';
const stranger = 'img/stranger.jpg';

const Boots = () =>{
    return(
        <>
            <div className="card1" >
                <h1 className="text-center">All Netflix Series Download From Here</h1>
            </div>
                    
            <div className="container-fluid mt-5 mx-3">
            <div className="row mx-5">
                    
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={best} className="image-fluid" alt={best}></img>
                            <h3 className="text-center" style={{ marginTop: '10px'}}>Doli Saja Ka Rakhna</h3>
                            <h4 style={{textAlign:'center',display: 'block', marginTop: '2px' }}>This is Netflix Series</h4>
                            <button type="button" className="btn btn-outline-success">Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={peaky} className="image-fluid"alt={peaky}></img>
                            <h3 className="text-center" style={{ marginTop: '10px' }}>Doli Saja Ka Rakhna</h3>
                            <h4 style={{textAlign:'center',display: 'block', marginTop: '2px' }}>This is Netflix Series</h4>
                            <button type="button" className="btn btn-outline-success">Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={stranger} className="image-fluid" alt={stranger}></img>
                            <h3 className="text-center" style={{ marginTop: '10px' }}>Doli Saja Ka Rakhna</h3>
                            <h4 style={{textAlign:'center',display: 'block', marginTop: '2px' }}>This is Netflix Series</h4>
                            <button type="button" className="btn btn-outline-success">Watch Now</button>
                        </div>
                    </div>
                    

                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={alist} className="image-fluid" alt={alist}></img>
                            <h3 className="text-center" style={{ marginTop: '10px' }}>Doli Saja Ka Rakhna</h3>
                            <h4 style={{textAlign:'center',display: 'block', marginTop: '2px' }}>This is Netflix Series</h4>
                            <button type="button" className="btn btn-outline-success">Watch Now</button>
                        </div>
                    </div>
                    </div>

                    
                    <div className="row mt-5 mb-5 mx-5">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={str} className="image-fluid" alt={str}></img>
                            <h3 className="text-center" style={{ marginTop: '10px' }}>Doli Saja Ka Rakhna</h3>
                            <h4 style={{textAlign:'center',display: 'block', marginTop: '2px' }}>This is Netflix Series</h4>
                            <button type="button" className="btn btn-outline-success">Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={popular} className="image-fluid" alt={popular}></img>
                            <h3 className="text-center" style={{ marginTop: '10px' }}>Doli Saja Ka Rakhna</h3>
                            <h4 style={{textAlign:'center',display: 'block', marginTop: '2px' }}>This is Netflix Series</h4>
                            <button type="button" className="btn btn-outline-success">Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={sci} className="image-fluid" alt={sci}></img>
                            <h3 className="text-center" style={{ marginTop: '10px' }}>Doli Saja Ka Rakhna</h3>
                            <h4 style={{textAlign:'center',display: 'block', marginTop: '2px' }}>This is Netflix Series</h4>
                            <button type="button" className="btn btn-outline-success">Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={breaking} className="image-fluid" alt={breaking}></img>
                            <h3 className="text-center" style={{ marginTop: '10px' }}>Doli Saja Ka Rakhna</h3>
                            <h4 style={{textAlign:'center',display: 'block', marginTop: '2px' }}>This is Netflix Series</h4>
                            <button type="button" className="btn btn-outline-success">Watch Now</button>
                        </div>
                    </div>    
                </div>
                </div>
        </>
    )
}


export default Boots
