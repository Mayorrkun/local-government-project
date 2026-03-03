import "../css/onboarding.css"
export function Onboarding(){

    return(
        <section className="onboarding-section">
            <main>

                <form action="" className="onboarding-form">
                    <span>Let's customise your platform </span>
                    <p>Tailor Your Experience: Set up Your Organization
                        Seamlessly</p>
                    <div>

                    </div>
                    <div className="carousel">
                        <div>
                            <p>
                                <label htmlFor=""></label>
                                <input type="text"/>
                            </p>
                            <p>
                                <label htmlFor=""></label>
                                <input type="text"/>
                            </p>
                            <p>
                                <label htmlFor=""></label>
                                <input type="text"/>
                            </p>
                        </div>
                        <div>

                        </div>

                    </div>
                    <div>
                        <button>Previous</button> <button> Next</button>
                    </div>
                </form>

            </main>
        </section>
    )
}