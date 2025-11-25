// Exporta a lista de profissionais
export const profissionaisData = [
  {
    id: 1,
    nome: "Dr. Arthur Mendes",
    source: require("./../../assets/doutorH.webp"),
    area: "Psicologia",
    descricao: "Especialista em terapia cognitivo-comportamental e ansiedade.",
    avaliacao: 4.8, // --- NOVOS CAMPOS ---
    preco: 300.0,
    endereco: "Av. Brigadeiro Faria Lima, 2500 - Sala 102",
    crm: "12345-SP",
    sobre:
      "Formado pela USP e com 10 anos de experiência, Dr. Arthur utiliza a TCC (Terapia Cognitivo-Comportamental) para ajudar pacientes a reestruturar pensamentos e superar a ansiedade.",
    agenda: [
      {
        data: "15/12", // Segunda (Antes: 20/11)
        diaSemana: "SEG",
        horarios: ["09:00", "10:00", "14:00", "15:30"],
      },
      {
        data: "16/12", // Terça (Antes: 21/11)
        diaSemana: "TER",
        horarios: ["08:00", "11:00", "16:00"],
      },
      {
        data: "17/12", // Quarta (Antes: 22/11)
        diaSemana: "QUA",
        horarios: ["13:00", "14:00", "15:00", "16:00"],
      },
    ],
  },
  {
    id: 2,
    nome: "Dra. Beatriz Costa",
    source: require("./../../assets/doutoraM.webp"),
    area: "Psicoterapia",
    descricao:
      "Foco em relacionamentos e terapia de casal. Abordagem humanista.",
    avaliacao: 4.9, // --- NOVOS CAMPOS ---
    preco: 350.0,
    endereco: "Rua Oscar Freire, 1120 - Sala 30",
    crm: "54321-SP",
    sobre:
      "Dra. Beatriz acredita na escuta ativa e na empatia como ferramentas de transformação. Especialista em dinâmicas de casal e comunicação não-violenta.",
    agenda: [
      {
        data: "15/12", // Segunda (Antes: 20/11)
        diaSemana: "SEG",
        horarios: ["10:00", "11:00", "13:00"],
      },
      {
        data: "17/12", // Quarta (Antes: 22/11)
        diaSemana: "QUA",
        horarios: ["15:00", "16:00", "17:00", "18:00"],
      },
      {
        data: "18/12", // Quinta (Antes: 23/11)
        diaSemana: "QUI",
        horarios: ["09:00", "10:00"],
      },
    ],
  },
  {
    id: 3,
    nome: "Dr. Carlos Vieira",
    source: require("./../../assets/psychoanalysis1.webp"),
    area: "Psicologia",
    descricao: "Ajudo a processar traumas e luto com técnicas de EMDR.",
    avaliacao: 4.5, // --- NOVOS CAMPOS ---
    preco: 280.0,
    endereco: "Av. Paulista, 980 - Sala 55",
    crm: "67890-SP",
    sobre:
      "Psicólogo especialista em luto e trauma, com certificação internacional em EMDR. Abordagem focada em ressignificar memórias difíceis.",
    agenda: [
      {
        data: "16/12", // Terça (Antes: 21/11)
        diaSemana: "TER",
        horarios: ["09:00", "10:00", "11:00"],
      },
      {
        data: "17/12", // Quarta (Antes: 22/11)
        diaSemana: "QUA",
        horarios: ["13:00", "14:00"],
      },
      {
        data: "19/12", // Sexta (Antes: 24/11)
        diaSemana: "SEX",
        horarios: ["09:00", "10:00", "11:00", "12:00"],
      },
    ],
  },
  {
    id: 4,
    nome: "Dra. Daniela Lima",
    source: require("./../../assets/psychoanalysis2.webp"),
    area: "Psicoterapia",
    descricao: "Psicanalista com foco no autoconhecimento e análise de sonhos.",
    avaliacao: 5.0, // --- NOVOS CAMPOS ---
    preco: 320.0,
    endereco: "Rua Augusta, 1500 - Sala 21",
    crm: "09876-SP",
    sobre:
      "Psicanalista com abordagem freudiana clássica, focada na análise do inconsciente, interpretação de sonhos e livre associação para o autoconhecimento profundo.",
    agenda: [
      {
        data: "15/12", // Segunda (Antes: 20/11)
        diaSemana: "SEG",
        horarios: ["14:00", "15:00", "16:00"],
      },
      {
        data: "18/12", // Quinta (Antes: 23/11)
        diaSemana: "QUI",
        horarios: ["10:00", "11:00", "14:00", "15:00"],
      },
    ],
  },
  {
    id: 5,
    nome: "Dr. Eduardo Solano",
    source: require("./../../assets/psychoanalysis3.webp"),
    area: "Psicologia",
    descricao:
      "Experiência com TDAH e desenvolvimento de carreira profissional.",
    avaliacao: 4.7, // --- NOVOS CAMPOS ---
    preco: 290.0,
    endereco: "Online (Atendimento Remoto)",
    crm: "11223-SP",
    sobre:
      "Especialista em neuropsicologia, com foco em adultos com TDAH. Ajuda pacientes a desenvolver estratégias de organização e foco, além de orientação vocacional.",
    agenda: [
      {
        data: "16/12", // Terça (Antes: 21/11)
        diaSemana: "TER",
        horarios: ["18:00", "19:00", "20:00"],
      },
      {
        data: "17/12", // Quarta (Antes: 22/11)
        diaSemana: "QUA",
        horarios: ["18:00", "19:00"],
      },
      {
        data: "19/12", // Sexta (Antes: 24/11)
        diaSemana: "SEX",
        horarios: ["17:00", "18:00", "19:00", "20:00"],
      },
    ],
  },
  {
    id: 6,
    nome: "Dra. Fernanda Alves",
    source: require("./../../assets/psychotherapy4.webp"),
    area: "Psicoterapia",
    descricao: "Especialista em transtornos alimentares e imagem corporal.",
    avaliacao: 4.8, // --- NOVOS CAMPOS ---
    preco: 310.0,
    endereco: "Alameda Santos, 1200 - Sala 80",
    crm: "33445-SP",
    sobre:
      "Terapeuta com abordagem focada na aceitação corporal e na relação saudável com a comida. Vasta experiência em casos de bulimia, anorexia e compulsão alimentar.",
    agenda: [
      {
        data: "15/12", // Segunda (Antes: 20/11)
        diaSemana: "SEG",
        horarios: ["09:00", "10:30", "14:00"],
      },
      {
        data: "17/12", // Quarta (Antes: 22/11)
        diaSemana: "QUA",
        horarios: ["09:00", "10:30"],
      },
      {
        data: "18/12", // Quinta (Antes: 23/11)
        diaSemana: "QUI",
        horarios: ["13:00", "14:30", "16:00"],
      },
    ],
  },
];
