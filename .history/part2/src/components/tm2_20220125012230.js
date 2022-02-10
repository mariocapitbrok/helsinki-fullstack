const cantTm50kg = $1
const cantTm15kg = $2
const cantTm10kg = $3
const cantTm5kg = $4
const multiplyBy = $6

const precioTm50kg = 2600
const precioTm15kg = 4100
const precioTm10kg = 4500
const precioTm5kg = 5200

let nuevoPrecioTm50kg = precioTm50kg
let nuevoPrecioTm15kg = precioTm15kg
let nuevoPrecioTm10kg = precioTm10kg
let nuevoPrecioTm5kg = precioTm5kg

let cantSuma = 0
let cantDescuento = 0
let cantTotal = 0
let total = 0

function descEnvasada(total, unit, presentation) {
  if (unit === 'TM' && presentation !== 'granel') {
    if (total >= 1 && total < 5) return 0
    if (total >= 5 && total < 20) return 3 / 100
    if (total >= 20 && total < 36) return 6 / 100
    if (total >= 36 && total < 121) return 10 / 100
    if (total >= 121 && total < 241) return 20 / 100
    if (total >= 241 && total < 701) return 25 / 100
    if (total >= 701 && total < 1201) return 30 / 100
    if (total >= 1201 && total < 2401) return 40 / 100
    if (total >= 2401 && total < 7000) return 50 / 100
    if (total >= 7000) return 55 / 100
  }
  if (unit === 'costal' && presentation !== 'granel') {
    if (presentation === '50kg') {
      if (total >= 1 && total < 3) return 0
      if (total >= 3 && total < 6) return 5 / 100
      if (total >= 6 && total < 12) return 10 / 100
      if (total >= 12 && total < 20) return 20 / 100
      if (total >= 20 && total <= 80) return 42.222 / 100
      return 42.222 / 100
    }
    if (presentation === '15kg') {
      if (total >= 1 && total < 10) return 0
      if (total >= 10 && total < 20) return 5 / 100
      if (total >= 20 && total < 40) return 10 / 100
      if (total >= 40 && total < 65) return 20 / 100
      if (total >= 65 && total <= 66) return 42.222 / 100
      return 42.222 / 100
    }
    if (presentation === '10kg') {
      if (total >= 1 && total < 15) return 0
      if (total >= 15 && total < 30) return 5 / 100
      if (total >= 30 && total < 60) return 10 / 100
      if (total >= 60 && total < 100) return 20 / 100
      if (total >= 100 && total <= 400) return 42.222 / 100
      return 42.222 / 100
    }
    if (presentation === '5kg') {
      if (total >= 1 && total < 30) return 0
      if (total >= 30 && total < 60) return 5 / 100
      if (total >= 60 && total < 120) return 10 / 100
      if (total >= 120 && total < 200) return 20 / 100
      if (total >= 200 && total <= 800) return 42.222 / 100
      return 42.222 / 100
    }
  }
}

function descGranel(total) {
  if (total >= 1 && total < 20) return 0
  if (total >= 20 && total < 36) return 6 / 100
  if (total >= 36 && total < 121) return 10 / 100
  if (total >= 121 && total < 241) return 20 / 100
  if (total >= 241 && total < 701) return 25 / 100
  if (total >= 701 && total < 1201) return 30 / 100
  if (total >= 1201 && total < 2401) return 40 / 100
  if (total >= 2401 && total < 7000) return 50 / 100
  if (total >= 7000) return 55 / 100
}

cantSuma = cantTm50kg + cantTm15kg + cantTm10kg + cantTm5kg
cantDescuento = cantSuma * multiplyBy < 1201 ? cantSuma * multiplyBy : 1200
cantTotal = cantSuma * multiplyBy

if (cantTm50kg)
  nuevoPrecioTm50kg =
    precioTm50kg * (1 - descEnvasada(cantDescuento, 'TM', '50kg'))
if (cantTm15kg)
  nuevoPrecioTm15kg =
    precioTm15kg * (1 - descEnvasada(cantDescuento, 'TM', '15kg'))
if (cantTm10kg)
  nuevoPrecioTm10kg =
    precioTm10kg * (1 - descEnvasada(cantDescuento, 'TM', '10kg'))
if (cantTm5kg)
  nuevoPrecioTm5kg =
    precioTm5kg * (1 - descEnvasada(cantDescuento, 'TM', '5kg'))

//setSubtotal( 'subtotalPrecioTm50kg',  nuevoPrecioTm50kg, false )
//setSubtotal( 'subtotalPrecioTm15kg',  nuevoPrecioTm15kg, false )
//setSubtotal( 'subtotalPrecioTm10kg',  nuevoPrecioTm10kg, false )
//setSubtotal( 'subtotalPrecioTm5kg',  nuevoPrecioTm5kg, false )
setSubtotal('subtotalTm', cantTotal, true)

total =
  (cantTm50kg * nuevoPrecioTm50kg +
    cantTm15kg * nuevoPrecioTm15kg +
    cantTm10kg * nuevoPrecioTm10kg +
    cantTm5kg * nuevoPrecioTm5kg) *
  multiplyBy

return total
