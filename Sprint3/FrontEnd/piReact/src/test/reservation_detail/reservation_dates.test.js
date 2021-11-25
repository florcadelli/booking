import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Dates from "../../components/reservation_detail/reservation_dates";



describe('<Dates />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Dates />);
       // expect(component.container).toHaveTextContent("©2021 Digital Booking")
       component.getByText('Seleccioná tu fecha de reserva')
    })
    
})