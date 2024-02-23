const Projetos = [
    {
      title: 'Gow DB',
      subtitle: 'Uma Database do Universo de God of War',
      img: 'assets/gowdb.png',
      tecnologies: [
        {
          name: 'TypeScript',
          color: 'primary'
      },
        {
          name: 'Vite',
          color: 'success'
        }
      ]
    },
    {
        title: 'Dzn Games',
        subtitle: 'Uma loja de games online',
        img: 'assets/games.png',
        tecnologies: [
          {
            name: 'TypeScript',
            color: 'primary'
        },
          {
            name: 'Vite',
            color: 'success'
          }
        ]
    },
    {
        title: 'Fidelius',
        subtitle:  'Sistema de Semiologia Farmacêutica',
        img: 'assets/Fidelius.png',
        tecnologies: [
          {
            name: 'TypeScript',
            color: 'primary'
        },
          {
            name: 'Vite',
            color: 'success'
          }
        ]
    }
  ]

Projetos.forEach(projeto => {
  console.log(projeto.tecnologies);
});
export default Projetos;