function calcudorDeHoras (start, end) {
  const [inicioHoras, inicioMinutos] = start.split(':').map(Number)
  const [finHoras, finMinutos] = end.split(':').map(Number)

  let minutosTrabajados = (finHoras * 60 + finMinutos) - (inicioHoras * 60 + inicioMinutos)
  let horasTrabajadas = Math.floor(minutosTrabajados / 60)
  minutosTrabajados = minutosTrabajados % 60

  let TipoDeHora = 0

  if (horasTrabajadas < 2) {
    horasTrabajadas = 2
    minutosTrabajados = 0
  }

  if (horasTrabajadas > 8) {
    if (minutosTrabajados <= 15) {
      minutosTrabajados = 15
    } else if (minutosTrabajados <= 30) {
      minutosTrabajados = 30
    } else if (minutosTrabajados <= 45) {
      minutosTrabajados = 45
    } else {
      horasTrabajadas += 1
      minutosTrabajados = 0
    }
  }

  if (horasTrabajadas > 10 || (horasTrabajadas === 10 && minutosTrabajados > 0)) {
    TipoDeHora = (horasTrabajadas - 10 + minutosTrabajados / 60).toFixed(2)
  }

  return { horas: horasTrabajadas, minutos: minutosTrabajados, extras: TipoDeHora }
}

export { calcudorDeHoras }
