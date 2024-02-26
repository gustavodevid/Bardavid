const skills = [
    {
        icon: 'card-icon fas fa-desktop',
        title: 'Desenvolvimento Web',
        subtitle: 'Experiência no desenvolvimento de aplicações web front-end e back-end. Conhecimento em Spring, HTML, CSS e JavaScript, assim como em frameworks populares como React, Angular ou Vite.js.'
    },
    {
        icon: 'card-icon fas fa-mobile',
        title: 'Desenvolvimento Mobile',
        subtitle: 'Prototipagem de layouts mobile com ênfase no Touch-friendly e usabilidade. Foco na experiência eficaz entre negócio e cliente.'
    },
    {
        icon: 'card-icon fas fa-database',
        title: 'Projeção e implementação de Bancos de Dados',
        subtitle: 'Habilidade em projetar e gerenciar bancos de dados relacionais (SQL) e não relacionais (NoSQL). Competência em consultas eficientes, otimização de desempenho e modelagem de dados.'
    }
]
    const Habilidades = ()=>{
    return (
        <>
        <h2>Skills</h2>
    <section className="section-container">
        <div className="section-content">
            <div className="card-container">
            {skills.map((skill, index) => (
                <div className="card-section" key={index}>
                 <div className="card-content">
                     <i className={skill.icon}></i>
                     <h2 className="card-title">{skill.title}</h2>
                     <p className="card-text">{skill.subtitle}</p>
                 </div>
                </div>
        ))}
            </div>
        </div>
    </section>
        </>
    )
}
export default Habilidades;