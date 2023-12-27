import './subs.scss';

const Subscription = () => {
    return (
        <section className="subs_component">
            <div className="container">
                <h2>Subscribe to our newsletter</h2>
                <p>
                    Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
                </p>
                <form>
                    <input type="text" placeholder="Email address" />
                    <button>
                        Subscribe
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.125 10H16.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
                <div className="spacer"></div>
                <div className="sponsors">
                    <a href="#">
                        <img src="/assets/google_icon.svg" alt="" />
                    </a>
                    <a href="#">
                        <img src="/assets/amazon_icon.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/assets/philips_icon.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/assets/samsung_icon.png" alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Subscription