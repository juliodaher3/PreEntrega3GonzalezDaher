let metrosDeCuerda = 0
let valorFinal = 0
let stock = 1000

const cuerdas = ['nylon', 'poliester', 'polietileno']

let precioCuerdas = { "nylon": 45, "poliester": 62, "polietileno": 57 }

let inputCuerda = document.getElementById('inputCuerda')
let inputMetros = document.getElementById('inputMetros')
let inputTotal = document.getElementById('inputTotal')

let productoSeleccionado =
  prompt(`Que producto desea comprar ? (escriba el numero de la opcion deseada) 
1.'cuerda de nylon' 
2.'cuerda de poliester' 
3.'cuerda de polietileno'`)

function consultarCantidadDeMetros (precio, cuerda) {
  metrosDeCuerda = prompt(
    `La cuerda de ${cuerda} tiene un precio de $${precio} por metro. Cuantos metros quiere comprar?`
  )

  parseFloat(metrosDeCuerda)
  if (metrosDeCuerda < 0 || metrosDeCuerda == '' || metrosDeCuerda == NaN)
    alert('El valor ingresado es incorrecto')
  else {
    while (metrosDeCuerda > stock) {
      alert('Tenemos solamente ' + stock + ' metros en stock')
      metrosDeCuerda = parseFloat(prompt('Cuanto desea?'))
    }

    valorFinal = metrosDeCuerda * precio
  }

  if (
    confirm(
      `Usted esta por comprar ${metrosDeCuerda} metros de cuerda por $${valorFinal}. Confirma la transaccion?`
    )
  ) {
    alert('Gracias por comprar con nosotros.')
    inputCuerda.value = cuerda
    inputMetros.value = metrosDeCuerda
    inputTotal.value = valorFinal
  } else {
    alert(`:'(`)
  }
}

if (
  productoSeleccionado == 3 ||
  productoSeleccionado == 2 ||
  productoSeleccionado == 1
) {
  tipoDeCuerda = cuerdas[(productoSeleccionado - 1)]
  precioPorMetro = precioCuerdas[tipoDeCuerda]

  consultarCantidadDeMetros(precioPorMetro,tipoDeCuerda)
} else alert('El producto seleccionado no es valido.')
