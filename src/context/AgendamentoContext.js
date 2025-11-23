import React, { createContext, useState, useContext } from "react";
import { profissionaisData } from "../data/profissionaisData";

// 1. Criar o Contexto
const AgendamentoContext = createContext();

// 2. Criar o "Provedor"
export function AgendamentoProvider({ children }) {
  const [profissionais, setProfissionais] = useState(profissionaisData);

  // Lista de Agendamentos do usuário (Começa vazia [])
  const [agendamentos, setAgendamentos] = useState([]);

  // --- Função 1: Agendar (Salva na lista e remove da agenda do médico) ---
  const agendarHorario = (nomeProfissional, data, horario) => {
    // A. Adiciona na lista de "Meus Agendamentos"
    const novoAgendamento = {
      id: Date.now().toString(), // Gera um ID único
      nomeProfissional,
      data,
      horario,
      status: "Confirmado",
    };

    setAgendamentos((listaAtual) => [...listaAtual, novoAgendamento]);

    // B. Remove o horário disponível da lista geral (Visualmente para outros)
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

  // --- Função 2: Cancelar (Remove da lista de agendamentos) ---
  const cancelarAgendamento = (id) => {
    setAgendamentos((listaAtual) =>
      listaAtual.filter((item) => item.id !== id)
    );
  };

  // 4. Compartilha TUDO no value
  const value = {
    profissionais, // Lista geral de médicos
    agendamentos, // <--- FALTAVA ISSO (A lista do usuário)
    agendarHorario, // Função de adicionar
    cancelarAgendamento, // <--- FALTAVA ISSO (Função de remover)
  };

  return (
    <AgendamentoContext.Provider value={value}>
      {children}
    </AgendamentoContext.Provider>
  );
}

// 5. Hook customizado
export function useAgendamento() {
  const context = useContext(AgendamentoContext);
  if (!context) {
    throw new Error(
      "useAgendamento deve ser usado dentro de um AgendamentoProvider"
    );
  }
  return context;
}
