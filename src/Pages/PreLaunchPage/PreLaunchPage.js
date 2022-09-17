import React, { useEffect, useRef, useState } from 'react'
import Timer from '../../assets/images/Timer.jpeg';
import Clock from '../../Components/Clock/Clock';
import './PreLaunchPage.scss';

const PreLaunchPage = () => {

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    const [width, setWidth] = useState('')

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("Sep 18,2022 18:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        <div className='pre-launch'>

            <section className='content-1'>
                <h1>Grand Opening</h1>
                <h2>18th September 2022 , 6pm</h2>

                {
                    width > 1000
                    &&
                    <>
                        <br />
                        <p>Rupali Arcade, NS Road,</p>
                        <p> Chinsurah, Hoogly -712101</p>
                        <br />
                        <p>9163308035 / 869726385</p>
                    </>
                }

                <Clock
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                />

            </section>

            <section className='image'>
            <img src="https://i.ibb.co/FYM9D6R/Timer.jpg" alt="Pre launch announcement"/>
            </section>

            {width <= 1000
                &&
                <section className='content-2'>

                    <p>Rupali Arcade, NS Road,</p>
                    <p> Chinsurah, Hoogly -712101</p>
                    <br />
                    <p>9163308035 / 869726385</p>
                </section>}
        </div>
    )
}

export default PreLaunchPage