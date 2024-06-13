import useTitle from "../../../utils/useTitle";
import "./About.css";

function About(): JSX.Element {
    useTitle('Booking');

    return (
        <div className="About">
    <section>
        <h2>Explore Your Options</h2>
        <p>Our platform offers a diverse array of destinations, from exotic tropical paradises to charming European towns. With thousands of vacation packages curated by our team of travel experts, you're sure to find the perfect itinerary to suit your interests and preferences.</p>

        <h2>Seamless Booking Experience</h2>
        <p>Booking your dream vacation has never been easier. Our user-friendly website allows you to browse through destinations, compare prices, and customize your itinerary with just a few clicks. With secure payment options and instant confirmation, you can relax knowing that your vacation plans are in good hands.</p>
        <img src="lake-como-family-vacation.jpg" style={{
                    width: '900px',
                    height: '458px',
        }}/>
        <br />
        <br />
        <h2>Expert Recommendations</h2>
        <p>Not sure where to start? Our team of experienced travel advisors is here to help. From personalized recommendations to insider tips on hidden gems and must-see attractions, we'll ensure that every aspect of your trip is tailored to your unique needs.</p>

        <h2>Your Adventure Awaits</h2>
        <p>Embark on your next adventure with Your Vacation Website. Whether you're planning a romantic honeymoon, a family getaway, or a solo expedition, we're committed to providing you with unparalleled service, unbeatable value, and memories that will last a lifetime.</p>

        <p>Start planning your dream vacation today!</p>
    </section>


        </div>
    );
}

export default About;