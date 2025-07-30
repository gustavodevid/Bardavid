const comentarios = [
  {
    icon: 'card-icon fas fa-user-graduate',
    title: 'Joana Lima',
    subtitle: 'Professora de Desenvolvimento Web',
    texto: 'Gustavo sempre se destacou pelo comprometimento e pela vontade de aprender. Um talento promissor!'
  },
  {
    icon: 'card-icon fas fa-users',
    title: 'Carlos Henrique',
    subtitle: 'Colega de Projeto',
    texto: 'Trabalhar com Gustavo foi incrível. Sempre organizado, proativo e com ótimas ideias para o front-end.'
  },
  {
    icon: 'card-icon fas fa-briefcase',
    title: 'Fernanda Souza',
    subtitle: 'Cliente',
    texto: 'Fiquei impressionada com o resultado do site. Super profissional e atencioso em cada detalhe.'
  }
]

const Comentarios = () => {
  return (
    <>
      <h2>O que dizem sobre mim</h2>
      <section className="section-container">
        <div className="section-content">
          <div className="card-container">
            {comentarios.map((comentario, index) => (
              <div className="card-section" key={index}>
                <div className="card-content">
                  <i className={comentario.icon}></i>
                  <h2 className="card-title">{comentario.title}</h2>
                  <p className="card-text"><strong>{comentario.subtitle}</strong></p>
                  <p className="card-text">"{comentario.texto}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Comentarios;
