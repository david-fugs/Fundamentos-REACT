import PropTypes from 'prop-types'

export function Button({text, name='Usuario'}) {
    console.log(text)
    if (!text) {
        console.error('texto rerquerido')
    }
    return <button onClick={function(){console.log('hola mundo')}} >
       {text} - {name}     

    </button>
}
//esto es para que solo reciba texto y que sea requerido
Button.propTypes= {
    text: PropTypes.string.isRequired
}
