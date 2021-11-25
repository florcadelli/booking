import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdLocationOn } from 'react-icons/md'; // Importo ícono de ubicación.
import es from 'date-fns/locale/es';
registerLocale("es", es);



function Searcher({ cities, handleSelectCity , categories, handleSelectCategory, handleSelectDates, handleCityAndDates}) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const calendar_icon = <i class="far fa-calendar-minus"></i> + "Check in - Check out"
  //console.log(cities) // Debug
  const [selectValue, setSelectValue] = useState("")
 // const [selectValueCategory, setSelectValueCategory] = useState("")
  /* console.log("Valor seleccionado")
  console.log(selectValue); */
  //Intento filtrar los productos por categoría.

  console.log("Rango de fechas")
  console.log(dateRange)

  return (

    <section class="searcher">
      <h1>Busca ofertas en cabañas, casas y mucho más</h1>

      <form action="#" method="POST" onSubmit={(event)=> {
        event.preventDefault()
        if (dateRange[0] === null) {
          handleSelectCity(selectValue)
        } else if (selectValue === "" || selectValue === undefined || selectValue === null) {
          handleSelectDates(dateRange)
        } else {
          console.log("filtró por ambos")
          handleCityAndDates(dateRange, selectValue)
        }
        
        
        
      }}>
        <select class="form-control fa reserve" value={selectValue} onChange={(event) => {
          setSelectValue(event.target.value)
        }}>
          <option class="fa">&#xf279; ¿A dónde vamos?</option>
          {/* Muestros las ciudades - NO RECONOCE cities */}
          {/* {Object.values(cities)} */}
          {/* {cities.map( city => {<option key={city.id} > <MdLocationOn/> {city.name} </option>})} */}
          {cities.map(function (city) {
            return (
              <option key={city.id} value={city.name}>
                {/* {<MdLocationOn /> } */}
                {city.name} - {city.countryName}
              </option>
            )
          })}
          {/* <option value="not found">No se encontraron resultados</option> */}
        </select>

      {/* <select class="form-control fa reserve" value={selectValueCategory} onChange={(event) => {
          setSelectValueCategory(event.target.value)
        }}>
          <option class="fa">&#xf279; Seleccionar categoria</option>
          {categories.map(function (category) {
            return (
              <option key={category.id} value={category.title}>
                {/* {<MdLocationOn /> } }
                {category.title}
              </option>
            )
          })}
          {/* <option value="not found">No se encontraron resultados</option> }
        </select> 
  */}

        {/*  &#xf3c5;  */}

        <div className="form-control fa reserve">
          <DatePicker
            wrapperClassName="datePicker"
            dateFormat="d 'de' MMM."
            placeholderText="&#xf272;  Check in - Check out"
            className="fa reserve_date"
            /* style="font-family:Arial, FontAwesome" */
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            monthsShown={2}
            locale="es"

          />
        </div>

        <input class="search" type="submit" value="Buscar" />
      </form>


    </section>

  )
}



export default Searcher