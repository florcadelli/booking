import React from 'react'

const Searcher = ({props}) => {
return (
   
    <section class="searcher">
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>

      <form action="#" method="POST">
        <select class="form-control fa reserve">
          <option class="fa">&#xf3c5; Ubicacion ciudades</option>
        </select>

        {/*  &#xf3c5;  */}

        <input type="datetime-local" class="reserve" />
        <input class="search" type="submit" value="Buscar" />
      </form>
    </section>

)
}

export default Searcher
