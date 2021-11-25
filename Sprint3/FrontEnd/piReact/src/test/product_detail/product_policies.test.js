import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Policies from "../../components/product_detail/product_policies";



describe('<Policies />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<Policies />);
       // expect(component.container).toHaveTextContent("©2021 Digital Booking")
       component.getByText('Qué tenés que saber')
    })
    
})