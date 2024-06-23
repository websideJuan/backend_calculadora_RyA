let calendario = []

function obtenerDiasDelMes (year, month) {
  const ultimoDiaMes = new Date(year, month + 1, 0).getDate()
  return Array.from({ length: ultimoDiaMes }, (_, index) => index + 1)
}

const year = 2024
const month = 2

const diasDelMes = obtenerDiasDelMes(year, month)

calendario = {
  dias: diasDelMes.map(dia => ({
    dia,
    message: '',
    type: '',
    created_at: new Date()
  })),
  tickets: []
}

export { calendario }
