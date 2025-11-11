// Exporta a lista de agendamentos do usuário
// Note o 'professionalId' ligando ao profissional
export const agendamentosData = [
  {
    id: 'a1',
    professionalId: 2, // Este agendamento é com a "Joe" (id: 2)
    dataAgendamento: '2025-12-29T14:00:00', // Use o formato ISO para datas
  },
  {
    id: 'a2',
    professionalId: 1, // Este agendamento é com o "Mister" (id: 1)
    dataAgendamento: '2025-12-22T10:30:00',
  },
  {
    id: 'a3',
    professionalId: 1, // Outro com o "Mister"
    dataAgendamento: '2025-12-15T09:00:00',
  },
  // ...mais 3 para ter mais de 5
];