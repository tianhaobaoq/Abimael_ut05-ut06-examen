import {mayorDeEdad} from '../components/Formulario'
import Formulario from '../components/Formulario.jsx'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Test del formulario', () => {

    //Declaramos las variables
    let h2
    let image
    let textfieldName
    let textfieldAge
    let button
    let h6

    beforeEach(() => {

        //Renderizamos los componentes
        render(<Formulario />);
        h2 = screen.getByRole('heading', {level: 2});
        image = screen.getByRole('img');
        textfieldName = screen.getByLabelText('Nombre');
        textfieldAge = screen.getByLabelText('Edad');
        button = screen.getByRole('button',{name:'Enviar'});
    });

    //Renderiza cabecera del formulario
    test('Se renderiza la cabecera del formulario', () => {
        expect(h2).toBeInTheDocument();
    });

    //Renderiza imagen del formulario
    test('Se renderiza la imagen del formulario', () => {
        expect(image).toBeInTheDocument();
    });

    //Renderiza nombre del formulario
    test('Se renderiza el nombre del formulario', () => {
        expect(textfieldName).toBeInTheDocument();
    });

    //Renderiza edad del formulario
    test('Se renderiza la edad del formulario', () => {
        expect(textfieldAge).toBeInTheDocument();
    });

    //Renderiza botón del formulario
    test('Se renderiza el botón del formulario', () => {
        expect(button).toBeInTheDocument();
    });

    //Cuando rellena el formulario y le da al boton, aparece una cabecera h6 en el formulario
    test('Cuando rellena el formulario y le da al boton, aparece una cabecera h6 en el formulario', async () => {
        const user = userEvent.setup()
        await user.type(textfieldName, 'Abimael');
        await user.type(textfieldAge, '18');
        await user.click(button);
        h6 = screen.getByRole('heading', {level: 6});
        expect(h6).toBeInTheDocument();
    });

    

})































describe('Test unitarios con función MayorDeEdad', () => {

    //Test 1
    test('La función devuelve booleans', () => {
        const result = mayorDeEdad(65)
        expect(typeof result).toBe('boolean')
    })

    //Test 2
    test('La entrada a la función es 18, devuelve true', () => {
        const result = mayorDeEdad(18)
        expect(result).toBeTruthy()
    })

    //Test 3
    test('La entrada a la función es mayor a 18, devuelve true', () => {
        const result = mayorDeEdad(19)
        expect(result).toBeTruthy()
    })

    //Test 4
    test('La entrada a la función es menor de 18, nos devuelve false', () => {
        const result = mayorDeEdad(17)
        expect(result).toBeFalsy()
    })

    //Test 5
    test('La entrada es un número negativo', () => {
        const result = mayorDeEdad(-60)
        expect(result).toBeNull
    })

})