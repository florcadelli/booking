import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import UserData from "../../../components/home/header/UserData";



describe('<UserData />',()=>{

    test('contenido renderizado', () =>{
        const component= render(<UserData />);
       // expect(component.container).toHaveTextContent("©2021 Digital Booking")
       component.getByText('Hola,')
    })
    
})
