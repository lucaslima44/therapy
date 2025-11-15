import React, { createContext, useState, useContext } from "react";
// Importe seus dados INICIAIS
import { profissionaisData } from "../data/profissionaisData"; 

// 1. Criar o Contexto
const AgendamentoContext = createContext();

// 2. Criar o "Provedor" (o componente que vai guardar os dados)
export function AgendamentoProvider({ children }) {
  // Carregamos os dados da agenda no 'useState'.
  // Esta é a nossa "memória global" que PODE ser alterada.
  const [profissionais, setProfissionais] = useState(profissionaisData);

  // Esta é a função que o PaymentScreen vai chamar
  const agendarHorario = (nomeProfissional, data, horario) => {
    setProfissionais((profissionaisAtuais) => {
      // 1. Mapeia a lista de profissionais
      return profissionaisAtuais.map((prof) => {
        // 2. Encontra o profissional certo
        if (prof.nome === nomeProfissional) {
          // 3. Mapeia a agenda dele
          const agendaAtualizada = prof.agenda.map((dia) => {
            // 4. Encontra o dia certo
            if (dia.data === data) {
              // 5. Filtra e remove o horário agendado
              const horariosAtualizados = dia.horarios.filter(
                (h) => h !== horario
              );
              // 6. Retorna o dia com os horários atualizados
              return { ...dia, horarios: horariosAtualizados };
            }
            return dia; // Retorna o dia inalterado
          });
          // 7. Retorna o profissional com a agenda atualizada
          return { ...prof, agenda: agendaAtualizada };
        }
        return prof; // Retorna o profissional inalterado
      });
    });

    console.log(`Horário agendado: ${nomeProfissional}, ${data} às ${horario}`);
  };

  // 4. Compartilha o estado (profissionais) e a função (agendarHorario)
  const value = {
    profissionais,
    agendarHorario,
  };

  return (
    <AgendamentoContext.Provider value={value}>
      {children}
    </AgendamentoContext.Provider>
  );
}

// 5. Criar um "Hook" customizado para facilitar o uso
export function useAgendamento() {
  return useContext(AgendamentoContext);
}