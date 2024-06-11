import "./Home.css";
import VacationsImageSource from '../../../assets/images/vacations.jpg';
import Vacations2ImageSource from '../../../assets/images/vacations2.jpg';
import { useEffect, useState } from "react";
import useTitle from "../../../utils/useTitle";
import Clock from "../clock/Clock";

function Home(): JSX.Element {

    // let's replace the following code with a custom hook
    // useEffect(() => {
    //     document.title = 'Northwind home';
    // }, [])
    // useTitle('Booking');

    // const randomNumber = Math.floor(Math.random() * 2) + 1;

    // const desserts = [
    //     { id: 1, name: 'Pana Cota', price: 10 },
    //     { id: 2, name: 'Re-colad', price: 40 },
    //     { id: 3, name: 'Black Forest Cake', price: 30 },
    //     { id: 4, name: 'Baklava', price: 5 }
    // ]

    // function displaySale() {
    //     alert('%50 discount on Re-colad')
    // }

    // const arr = useState<string>('')
    // const sale2Info = arr[0];
    // const setSale2Info = arr[1];

    // // let sale2Info = 'test...';
    // function displaySale2() {
    //     setSale2Info('30% discount on all fresh fruits');
    // }

    // // const arr3 = useState<string>('')
    // // const sale3Info = arr3[0];
    // // const setSale3Info = arr3[1];
    // const [sale3Info, setSale3Info] = useState<string>('')

    // function displaySale3() {
    //     setSale3Info('20% discount on all chicken');
    // }

    // const [time, setTime] = useState<string>('');
    // function displayTime() {
    //     const now = new Date();
    //     setTime(now.toLocaleTimeString());
    // }

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log('displaying time')
    //         displayTime()
    //     }, 1000)
    // }, [])

    return (
        <div className="Home">

            {/* {randomNumber === 1 ? <img src={VacationsImageSource} /> : <img src={Vacations2ImageSource} />} */}
            {/* <img src={randomNumber === 1 ? VacationsImageSource : Vacations2ImageSource} /> */}
{/* 
            {randomNumber === 1 && <img src={VacationsImageSource} />}
            {randomNumber === 2 && <img src={Vacations2ImageSource} />}

            <hr />
            {desserts.map(dessert => <span key={dessert.id}>{dessert.name}: USD{dessert.price} | </span>)}
            <hr />

            <button onClick={displaySale}>Display Sale</button>
            <hr />

            <button onClick={displaySale2}>Display Sale2</button>
            <p>sale2: bar {sale2Info}</p>

            <hr />
            <button onClick={displaySale3}>Display Sale3</button>
            <p>sale2: bar {sale3Info}</p>

            <hr />
            <button onClick={displayTime}>Display Time</button>
            <p>time now is: {time}</p> */}

            <hr />

    <div>
          <section>
        <h2>Discover Your Perfect Getaway</h2>
        <p>Are you dreaming of your next adventure? Look no further! At Booking, we specialize in helping you plan unforgettable vacations tailored to your desires.</p>

        <h2>Explore Our Destinations</h2>
        <p>From sun-drenched beaches to snow-capped mountains, we offer a diverse range of destinations to suit every traveler's tastes. Browse our curated selection of exotic locales, historic cities, and natural wonders to find your ideal getaway.</p>

        <h2>Plan Your Dream Vacation</h2>
        <p>Our user-friendly platform makes it easy to plan your dream vacation. Simply search for your desired destination, select your travel dates, and choose from a variety of accommodation options to create your perfect itinerary.</p>

        <h2>Expert Advice and Tips</h2>
        <p>Not sure where to start? Our team of experienced travel advisors is here to help. Whether you're seeking adventure, relaxation, or cultural immersion, we'll provide personalized recommendations and insider tips to ensure your trip exceeds expectations.</p>

        <h2>Book with Confidence</h2>
        <p>With secure payment options and 24/7 customer support, you can book your vacation with confidence. Plus, our flexible cancellation policies give you peace of mind in uncertain times.</p>

        <h2>Start Your Journey Today</h2>
        <p>Embark on your next adventure with [Your Vacation Website Name]. Begin planning your dream vacation today and create memories that will last a lifetime.</p>
      </section>
    </div>


        </div>
    );
}

export default Home;
