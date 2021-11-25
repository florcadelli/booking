import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Time from "../../components/reservation_detail/reservation_time";



describe('<Time />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Time />);
       // expect(component.container).toHaveTextContent("©2021 Digital Booking")
       component.getByText('Tu horario de llegada')
    })
    
})