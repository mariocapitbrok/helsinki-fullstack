const cantCostal50kg = $1
const cantCostal15kg = $2
const cantCostal10kg = $3
const cantCostal5kg = $4
const multiplyBy = 1

const precioCostal50kg = 225
const precioCostal15kg = 105
const precioCostal10kg = 77
const precioCostal5kg = 45

let nuevoPrecioCostal50kg = precioCostal50kg
let nuevoPrecioCostal15kg = precioCostal15kg
let nuevoPrecioCostal10kg = precioCostal10kg
let nuevoPrecioCostal5kg = precioCostal5kg

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
      if (total >= 20 && total <= 80) return 41.558442 / 100
      return 41.558442 / 100
    }
    if (presentation === '15kg') {
      if (total >= 1 && total < 10) return 0
      if (total >= 10 && total < 20) return 5 / 100
      if (total >= 20 && total < 40) return 10 / 100
      if (total >= 40 && total < 65) return 20 / 100
      if (total >= 65 && total <= 66) return 41.558442 / 100
      return 41.558442 / 100
    }
    if (presentation === '10kg') {
      if (total >= 1 && total < 15) return 0
      if (total >= 15 && total < 30) return 5 / 100
      if (total >= 30 && total < 60) return 10 / 100
      if (total >= 60 && total < 100) return 20 / 100
      if (total >= 100 && total <= 400) return 41.558442 / 100
      return 41.558442 / 100
    }
    if (presentation === '5kg') {
      if (total >= 1 && total < 30) return 0
      if (total >= 30 && total < 60) return 5 / 100
      if (total >= 60 && total < 120) return 10 / 100
      if (total >= 120 && total < 200) return 20 / 100
      if (total >= 200 && total <= 800) return 41.558442 / 100
      return 41.558442 / 100
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

cantSuma = cantCostal50kg + cantCostal15kg + cantCostal10kg + cantCostal5kg
cantDescuento = cantSuma * multiplyBy < 1201 ? cantSuma * multiplyBy : 1200
cantTotal = cantSuma * multiplyBy

if (cantCostal50kg)
  nuevoPrecioCostal50kg =
    precioCostal50kg * (1 - descEnvasada(cantDescuento, 'costal', '50kg'))
if (cantCostal15kg)
  nuevoPrecioCostal15kg =
    precioCostal15kg * (1 - descEnvasada(cantDescuento, 'costal', '15kg'))
if (cantCostal10kg)
  nuevoPrecioCostal10kg =
    precioCostal10kg * (1 - descEnvasada(cantDescuento, 'costal', '10kg'))
if (cantCostal5kg)
  nuevoPrecioCostal5kg =
    precioCostal5kg * (1 - descEnvasada(cantDescuento, 'costal', '5kg'))

//setSubtotal( 'subtotalPrecioCostal50kg',  nuevoPrecioCostal50kg, false )
//setSubtotal( 'subtotalPrecioCostal15kg',  nuevoPrecioCostal15kg, false )
//setSubtotal( 'subtotalPrecioCostal10kg',  nuevoPrecioCostal10kg, false )
//setSubtotal( 'subtotalPrecioCostal5kg',  nuevoPrecioCostal5kg, false )
setSubtotal('subtotalCostal', cantTotal, true)

total =
  (cantCostal50kg * nuevoPrecioCostal50kg +
    cantCostal15kg * nuevoPrecioCostal15kg +
    cantCostal10kg * nuevoPrecioCostal10kg +
    cantCostal5kg * nuevoPrecioCostal5kg) *
  multiplyBy

return total
