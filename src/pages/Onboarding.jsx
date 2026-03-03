import "../css/onboarding.css"
import {useState} from "react";
import Upload from "../../src/media/upload.png";
export function Onboarding(){

    const slides = [
        {
            id : 0,
            content:    ( <>
                <p>
                    <label htmlFor="company_name">Enter company name</label>
                    <input id="company_name" type="text"/>
                </p>
                <p>
                    <label htmlFor="cac">CAC</label>
                    <input id="cac" type="text"/>
                </p>
                <p>
                    <label htmlFor="tin">TIN</label>
                    <input id="tin" type="number"/>
                </p>
                </>
          )
        },
        {
          id : 1,
            content:  (<> <div className="upload-container">
                <p>Upload CAC document</p>
                <label htmlFor="file-upload">
                    <div>
                        <img src={Upload} alt="try again"/>
                        <p><strong>Click to upload</strong> or drag and drop</p>
                        <span>SVG,PNG,JPG or GIF (max. 800x400px)</span>
                    </div>
                    <input id="file-upload" type="file" hidden/>
                </label>
            </div>
            </>)
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;
    const progress = ((currentSlide + 1)/ totalSlides);
    const isFirst  = (currentSlide === 0);
    const isLast  = (currentSlide === totalSlides -1 );

    const handleNext = (e) => {
        e.preventDefault();
        if (!isLast) setCurrentSlide((prev) => prev + 1);
    };

    const handlePrevious = () => {
        if (!isFirst) setCurrentSlide((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle submission logic here
        alert("Form submitted!");
    };

    return(
        <section className="onboarding-section">
            <main>

                <form onSubmit={handleSubmit} className="onboarding-form">
                    <span>Let's customise your platform </span>
                    <p>Tailor Your Experience: Set up Your Organization
                        Seamlessly</p>
                    <div>

                    </div>
                    <div className="progress">
                        {slides.map(() => (
                            <span className="bar"></span>
                        ))}
                    </div>
                    <div className="carousel">
                        <div className="carousel-track"  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {slides.map((slide) => (
                                <div key={slide.id} className="carousel-slide">
                                    {slide.content}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carousel-buttons">
                        {!isFirst ? <button type="button" onClick={handlePrevious}>Previous</button>
                            : <button disabled type="button"> Previous</button>
                        }

                        {isLast ? <button type="submit">Submit</button>
                            :
                            <button type="button" onClick={handleNext}>Next</button>}
                    </div>
                </form>

            </main>
        </section>
    )
}

{/*<div className="carousel-slide">*/}
{/*    <p>*/}
{/*        <label htmlFor="company_name">Enter company name</label>*/}
{/*        <input id="company_name" type="text"/>*/}
{/*    </p>*/}
{/*    <p>*/}
{/*        <label htmlFor="cac">CAC</label>*/}
{/*        <input id="cac" type="text"/>*/}
{/*    </p>*/}
{/*    <p>*/}
{/*        <label htmlFor="tin">TIN</label>*/}
{/*        <input id="tin" type="number"/>*/}
{/*    </p>*/}
{/*</div>*/}
{/*<div className="carousel-slide"></div>*/}
