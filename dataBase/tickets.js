let calendario = []
const currentDate = new Date()

const month = currentDate.getMonth()
const year = currentDate.getFullYear()

const daysArray = []
const daysInMonth = new Date(year, month + 1, 0).getDate()
const firstDayOfMonth = new Date(year, month, 1).getDay()

for (let i = 0; i < firstDayOfMonth; i++) {
  daysArray.push(null)
}
for (let i = 1; i <= daysInMonth; i++) {
  daysArray.push(i)
}

calendario = {
  dias: daysArray.map(dia => ({
    dia,
    message: '',
    type: ''
  })),
  year,
  month: month + 1,
  tickets: []
}

export { calendario }
