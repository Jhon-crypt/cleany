import { BrowserView } from 'react-device-detect';
export default function FeaturesHero() {

    return (

        <>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 id="features-hero-text-header" className="display-5 fw-bold text-body-emphasis lh-1 mb-3">We Are Very Experienced In Cleaning Services</h1>
                        <p id="features-hero-text" className="lead">
                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore
                        </p>
                        <div className="mt-2">

                            <div className="row mb-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: '35px', height: '35px', backgroundColor: '#E8F7FF' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                                <path d="M17 1.98804L6 11.729L1 7.30129" stroke="#118AC5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 id="features-hero-list-text-head">
                                            We are Committed
                                        </h5>
                                        <p id="features-hero-list-text-lead">
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod tempor incididunt
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: '35px', height: '35px', backgroundColor: '#E8F7FF' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                                <path d="M17 1.98804L6 11.729L1 7.30129" stroke="#118AC5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 id="features-hero-list-text-head">
                                            We are Committed
                                        </h5>
                                        <p id="features-hero-list-text-lead">
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod tempor incididunt
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: '35px', height: '35px', backgroundColor: '#E8F7FF' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                                <path d="M17 1.98804L6 11.729L1 7.30129" stroke="#118AC5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 id="features-hero-list-text-head">
                                            We are Committed
                                        </h5>
                                        <p id="features-hero-list-text-lead">
                                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod tempor incididunt
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <BrowserView>
                            <img id="feature-hero-thumbnail1" className="img-thumbnail" src="./thumbnail1.png" />
                        </BrowserView>
                        <img src="./features-hero-section.png" className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        <BrowserView>
                            <img id="feature-hero-thumbnail2" className="img-thumbnail" src="./thumbnail2.png" />
                        </BrowserView>
                    </div>
                </div>
            </div>

        </>

    )

}