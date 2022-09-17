import React, { Fragment } from "react";
import './Clock.scss';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <Fragment>
            <section className="timer-container">
               
                    <div className="clock">
                        <section>
                            <p>{timerDays < 10 ? `0${timerDays}` : timerDays}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours < 10 ? `0${timerHours}` : timerHours}</p>
                            <small>Hours</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}</p>
                            <small>Minutes</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            
        </Fragment>
    );
};

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default Clock;