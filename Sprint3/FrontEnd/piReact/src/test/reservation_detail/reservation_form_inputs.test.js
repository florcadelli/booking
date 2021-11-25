import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Inputs from "../../components/reservation_detail/reservation_form_inputs";



describe('<Inputs />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Inputs />);
       // expect(component.container).toHaveTextContent("©2021 Digital Booking")
       component.getByText('Completá tus datos')
    })
    
})