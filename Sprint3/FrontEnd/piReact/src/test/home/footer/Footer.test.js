import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Footer from "../../../components/home/footer/Footer";



describe('<Footer />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Footer />);
       // expect(component.container).toHaveTextContent("©2021 Digital Booking")
       component.getByText('©2021 Digital Booking')
    })
    
})
