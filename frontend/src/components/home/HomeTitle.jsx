import React from 'react'

function Title() {
    return (
        <div>
            <div className="container mt-5" style={{height:'35rem'}}>
                <div className="row align-items-start">
                    <div className="col">
                        <div className="container my-5">
                            <h4 className="pink mb-3">Big Event 2024</h4>
                            <h1 className="text-white my-5" style={{fontSize: '3rem'}}>
                                World Biggest 2023 <br /> CONFERENCE
                            </h1>
                        </div>

                        <h5 className="text-white my-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                            eligendi dolorem distinctio ab.
                        </h5>
                    </div>
                    <div className="col">{/* One of two columns */}</div>
                </div>
            </div>
        </div>
    )
}

export default Title