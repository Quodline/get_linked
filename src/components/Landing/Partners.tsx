import '../../styles/Partners.css';

import libertyAssured from '../../assets/libertyAssured.png';
import libertyPay from '../../assets/libertyPay.png';
import winwise from '../../assets/winwise.png';
import wisper from '../../assets/wisper.png';
import paybox from '../../assets/Paybox.png';
import vuzual from '../../assets/vuzual.png';

function Partners() {
    return <section className="section-content flex flex-col px-[5.2rem] pt-[4.1rem]">
        <h3 className="text-center">Partners and Sponsors</h3>
        <p className="leading-[2.75rem] text-center self-center lg:w-[45.2rem]">
            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
        </p>
        <div className="partnerList">
            <div className="partnerList-partner border-b-2 border-r-2 pr-[1.3rem] lg:pr-[4.9rem] pb-[.86rem] lg:pb-[2.28rem]">
                <img src={libertyAssured} alt="Liberty Assured"/>
            </div>
            <div className="partnerList-partner border-b-2 border-r-2 px-[1.3rem] lg:px-[4.9rem] pb-[.86rem] lg:pb-[2.28rem]">
                <img src={libertyPay} alt="Liberty Pay"/>
            </div>
            <div className="partnerList-partner exclude-after border-b-2 pl-[1.3rem] lg:pl-[4.9rem] pb-[.86rem] lg:pb-[2.28rem]">
                <img src={winwise} alt="WinWise"/>
            </div>
            <div className="partnerList-partner border-r-2 pr-[1.3rem] lg:pr-[4.9rem] pt-[.86rem] lg:pt-[2.28rem]">
                <img src={wisper} alt="WhisperSMS"/>
            </div>
            <div className="partnerList-partner border-r-2 px-[1.3rem] lg:px-[4.9rem] pt-[.86rem] lg:pt-[2.28rem]">
                <img src={paybox} alt="Paybox"/>
            </div>
            <div className="partnerList-partner pl-[1.3rem] lg:pl-[4.9rem] pt-[.86rem] lg:pt-[2.28rem]">
                <img src={vuzual} alt="Vuzual Plus"/>
            </div>
        </div>
    </section>
}

export default Partners;
