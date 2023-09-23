import "../styles/Landing/Landing.css";

import Header from "../components/Header.tsx";
import Introduction from "../components/Landing/Introduction.tsx";
import Guidelines from "../components/Landing/Guidelines.tsx";
import JudgingCriteria from "../components/Landing/JudgingCriteria.tsx";
import Faq from "../components/Landing/Faq.tsx";
import Timeline from "../components/Landing/Timeline.tsx";
import Prizes from "../components/Landing/Prizes.tsx";
import Banner from "../components/Landing/Banner.tsx";
import Partners from "../components/Landing/Partners.tsx";
import Privacy from "../components/Landing/Privacy.tsx";
import Footer from "../components/Landing/Footer.tsx";

function Landing() {
    return <>
        <header role="banner" className="landing-header flex flex-col min-h-[85.5rem] lg:min-h-[90rem]">
            <div className="border-b border-fade-gray">
                <Header />
            </div>
            <Banner />
        </header>
        <Introduction />
        <Guidelines />
        <JudgingCriteria />
        <Faq />
        <Timeline />
        <Prizes />
        <Partners />
        <Privacy />
        <Footer />
    </>
}

export default Landing;
