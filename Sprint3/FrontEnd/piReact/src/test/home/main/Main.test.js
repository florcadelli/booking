import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Main from "../../../components/home/main/Main";



describe('<Main />',()=>{

    test('children renderizados', () =>{
        const component= render(
        <Main />);
       component.getByText('Buscar por tipo')
    })
    
    })