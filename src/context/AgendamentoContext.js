import React, { createContext, useState, useContext } from "react";
import { profissionaisData } from "../data/profissionaisData";

const AgendamentoContext = createContext();

export function AgendamentoProvider({ children }) {
  const [profissionais, setProfissionais] = useState(profissionaisData);

  const [agendamentos, setAgendamentos] = useState([]);

  // Agendar (Salva na lista e remove da agenda do médico)
  const agendarHorario = (nomeProfissional, data, horario) => {
    // Adiciona na lista de "Meus Agendamentos"
    const novoAgendamento = {
      id: Date.now().toString(),
      nomeProfissional,
      data,
      horario,
      status: "Confirmado",
    };

    setAgendamentos((listaAtual) => [...listaAtual, novoAgendamento]);

    // Remove o horário disponível da lista geral
    setProfissionais((profissionaisAtuais) => {
      return profissionaisAtuais.map((prof) => {
        if (prof.nome === nomeProfissional) {
          const agendaAtualizada = prof.agenda.map((dia) => {
            if (dia.data === data) {
              const horariosAtualizados = dia.horarios.filter(
                (h) => h !== horario
              );
              return { ...dia, horarios: horariosAtualizados };
            }
            return dia;
          });
          return { ...prof, agenda: agendaAtualizada };
        }
        return prof;
      });
    });

    console.log("Agendamento salvo:", novoAgendamento);
  };

  // Cancelar (Remove da lista de agendamentos)
  const cancelarAgendamento = (id) => {
    setAgendamentos((listaAtual) =>
      listaAtual.filter((item) => item.id !== id)
    );
  };

  const value = {
    profissionais,
    agendamentos,
    agendarHorario,
    cancelarAgendamento,
  };

  return (
    <AgendamentoContext.Provider value={value}>
      {children}
    </AgendamentoContext.Provider>
  );
}
export function useAgendamento() {
  const context = useContext(AgendamentoContext);
  if (!context) {
    throw new Error(
      "useAgendamento deve ser usado dentro de um AgendamentoProvider"
    );
  }
  return context;
}
