import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
        <DatePicker className ="valueSearch mr-2"
            renderCustomHeader={({
                monthDate,
                customHeaderCount,
                decreaseMonth,
                increaseMonth,
            }) => (
                <div>
                    {/* Moverse entre meses */}
                    <button
                        aria-label="Previous Month"
                        className={
                            "react-datepicker__navigation react-datepicker__navigation--previous"
                        }
                        style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                        onClick={decreaseMonth}
                    >
                        <span
                            className={
                                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                            }
                        >
                            {"<"}
                        </span>
                    </button>

                    <span className="react-datepicker__current-month">
                        {monthDate.toLocaleString("es-ES", {
                            month: "long",
                            year: "numeric",
                        })}
                    </span>
                    <button
                        aria-label="Next Month"
                        className={
                            "react-datepicker__navigation react-datepicker__navigation--next"
                        }
                        style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                        onClick={increaseMonth}
                    >
                        <span
                            className={
                                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                            }
                        >
                            {">"}
                        </span>
                    </button>
                </div>
            )}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
            }}
            monthsShown={2}
            dateFormat="dd/MM"
        />
    );
};

export default Calendar;