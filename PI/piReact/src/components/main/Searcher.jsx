import React, { useState } from 'react'
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale("es", es);



const Searcher = ({ props }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const calendar_icon= <i class="far fa-calendar-minus"></i> + "Check in - Check out"
  return (

    <section class="searcher">
      <h1>Busca ofertas en cabañas, casas y mucho más</h1>

      <form action="#" method="POST">
        <select class="form-control fa reserve">
          <option class="fa">&#xf279; ¿A dónde vamos?</option>
          <option value="not found">No se encontraron resultados</option>
        </select>

        {/*  &#xf3c5;  */}

        <div className= "form-control fa reserve">
        <DatePicker
          wrapperClassName="datePicker"
          dateFormat="d 'de' MMM."
          placeholderText= "&#xf272;  Check in - Check out"
          className= "fa reserve_date"
          /* style="font-family:Arial, FontAwesome" */
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          monthsShown={2}
          locale= "es"
          
        />
        </div>
        
        <input class="search" type="submit" value="Buscar" />
      </form>
    </section>

  )
}

export default Searcher
