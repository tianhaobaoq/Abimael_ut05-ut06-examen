import React from "react";
import Button from '@mui/material/Button'
import Avatar from "@mui/material/Avatar"
import Box from '@mui/material/Box';
import { TextField } from '@mui/material'
import { useState } from "react";


export function mayorDeEdad(edad) 
{
    if (edad < 0 ) return null;
    return(edad >= 18) ? true: false;


}

function Formulario () {

const [data, setData] = useState({nombre:'', edad:''})
const [texto, setTexto] = useState('')

const handleSubmit = (e) => {
  //Para que no mande el formulario, sino que haga lo que yo le diga
  e.preventDefault();

  //Llamo a la función mayor de edad. 
  const res = mayorDeEdad(data.edad);
  if ( res === true) {
    setTexto('Eres mayor de edad')
  }
  else if (res === false)
  {
    setTexto('Eres menor de edad')
  } 
  else if (res === null)
  {
    setTexto('No me la intentes colar')
  }
}
return <>
    <Box
        sx={{
            width: 500,
            maxWidth: '100%',
            margin: '50px auto'
        }}
        >
        <h2>Rellena el formulario</h2>
        <Avatar alt='icono' src='/gato.png' />
        <form onSubmit={handleSubmit}>
            <TextField 
                fullWidth 
                variant="standard" 
                label="Nombre" 
                id="nombre" 
                value={data.nombre}
                onChange={(event) => {setData({...data, nombre: event.target.value})}}
                margin="normal" 
                role="input" />
   
            <TextField 
                fullWidth 
                variant="standard" 
                label="Edad" 
                id="edad" 
                value={data.edad}
                onChange={(event) => {setData({...data, edad: event.target.value})}}
                margin="normal" 
                role="input" />
       
            <Button type="submit" variant="outlined">Enviar</Button>
            {/*renderizado condicional: si texto no está vacío aparece el heading h6
             con el contenido del texto.*/}
            {texto !== '' && <h6>{texto}</h6>  }
        </form>
      </Box>
</>
}

export default Formulario


  
   
  

  







