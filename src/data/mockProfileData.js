// Este arquivo simula os dados que viriam de um banco de dados ou API.

// Dados do usuário logado
export const userData = {
  name: "Teste User",
  avatar: require("./../../assets/profile.webp"),
};

// Dados do humor semanal
export const moodData = [
  { day: "DOM", value: 1 },
  { day: "SEG", value: 2 },
  { day: "TER", value: 3 },
  { day: "QUA", value: 4 },
  { day: "QUI", value: 5 },
  { day: "SEX", value: 6 },
  { day: "SAB", value: 7 },
];

// Dados dos cards "Mais Recentes"
export const recentData = [
  { id: "1", source: require("./../../assets/terapia1.jpg") },
  { id: "2", source: require("./../../assets/terapia2.jpg") },
  { id: "3", source: require("./../../assets/terapia1.jpg") },
];
