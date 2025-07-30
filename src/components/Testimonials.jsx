import React from 'react';

export function Testimonials() {
  const reviews = [
    {
      name: "João Silva",
      role: "Gerente de Projetos",
      text: "Gustavo é um profissional dedicado e sempre entrega código de qualidade. Excelente trabalho em equipe!",
    },
    {
      name: "Maria Oliveira",
      role: "Mentora de Front-end",
      text: "Muito focado no aprendizado, domina React e tem boa capacidade de resolver problemas complexos.",
    },
    {
      name: "Carlos Pereira",
      role: "Cliente",
      text: "Desenvolveu nosso site com muita atenção aos detalhes e cumpriu prazos rigorosos. Recomendo!",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Opiniões sobre mim</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map(({ name, role, text }) => (
            <div
              key={name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-gray-700 dark:text-gray-300"
            >
              <p className="mb-4 italic">"{text}"</p>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
