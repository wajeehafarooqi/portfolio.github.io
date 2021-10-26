import React from 'react'

const About = () => {
    return (
        <>
            <div className="text-blue-700 my-5">
                <h1 className="text-center">Service</h1>
            </div>
            <div className="container-fluid text-blue-300 mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src="./images/slide2.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h3 className="text-blue-700 mb-5 uppercase" >Research</h3>
                                        <h4 className="text-blue-700 mb-3 ">Thesis:</h4>
                                            <p className="font-bold mb-1 ml-2"> Thesis Title:</p><p className="underline ml-2"> Interesting Ranges of Metrics to Predict Fault in Software</p>
                                            <p className="font-bold mb-1 ml-2">Supervisor:</p> <p className="underline ml-2">Dr. Mian Muhammad Awais (Associate Professor) LUMS</p>
                                        <h4 className=" text-blue-700 mb-3" >Journal:</h4>
                                        {/* <p class="card-text"> */}
                                        <ul>
                                            <li className="list-disc">
                                                <a className="capitalize" href="https://www.researchgate.net/publication/268810208_System_thinking_approach_for_investigation_of_construction_safety_climate"> A System Approach for cross trades construction safety climates – analyzing accident investigation </a>
                                            </li>
                                        </ul>
                                        <h4 className=" text-blue-700 mb-3" >International Conference:</h4>
                                        <ul className="list-disc">
                                            <li >
                                                <a className="capitalize" href="http://www.ethanpublishing.com/index.php?m=content&c=index&a=show&catid=167&id=254">System thinking approach for investigation of construction safety climate </a>
                                            </li>
                                            <li>
                                                <a  className="capitalize" href="http://vfast.org/journals/index.php/VTCS/article/view/108"> Classification of dengue fever using decision tree</a>
                                            </li>
                                            <li>
                                                <a className="capitalize" href="">course grade predictor using association rule mining </a>
                                            </li>
                                            <li>
                                                <a className="capitalize" href="https://www.deepdyve.com/lp/institute-of-electrical-and-electronics-engineers/a-critical-study-of-selected-classification-algorithms-for-dengue-dA9qDmZm44"> A critical study of selected classification algorithm on dengue fever and dengue haemraghic fever</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src="./images/slide2.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h3 className="text-blue-700 mb-5 uppercase" >Data science</h3>
                                    <h4 className="text-blue-700 mb-3 ">Project:</h4>
                                    <ul className="list-disc">
                                        <li>
                                            <a href="https://github.com/wajeehafarooqi/Coursera_Capstone">Coursera Capstone</a>
                                        </li>
                                    </ul>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src="./images/slide2.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <h3 className="text-blue-700 mb-5 uppercase" >Web Development</h3>
                                    <h4 className="text-blue-700 mb-3 ">Project:</h4>
                                    <ul className="list-disc">
                                        <li>
                                            Resturant
                                        </li>
                                        
                                        <li>
                                            E-commerce
                                        </li>
                                        <li>
                                            Portfolio
                                        </li>

                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    

                </div>

            </div>
        </>
        
    )
}

export default About
