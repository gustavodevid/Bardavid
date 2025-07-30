import { color } from "framer-motion";

export function FeedbackSection() {
  const styles = {
    section: {
      padding: "3rem 1rem",
      textAlign: "center"
    },
    cards: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1.5rem"
    },
    card: {
      background: "#fff",
      padding: "1.5rem",
      borderRadius: "12px",
      maxWidth: "280px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      textAlign: "center"
    },
    avatar: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      marginBottom: "1rem"
    },
    name: { margin: "0.5rem 0 0.2rem", fontSize: "1.2rem" },
    role: { fontSize: "0.9rem", color: "#666", marginBottom: "0.5rem" },
    comment: { fontStyle: "italic", fontSize: "0.95rem", color: "#000" }
  };

  const feedbacks = [
    {
      name: "Joana Lima",
      role: "Professora de Desenvolvimento Web",
      comment: "Gustavo sempre se destacou pelo comprometimento e pela vontade de aprender. Um talento promissor!",
      avatar: "https://i.pravatar.cc/100?img=10"
    },
    {
      name: "Carlos Henrique",
      role: "Colega de Projeto",
      comment: "Trabalhar com Gustavo foi incrível. Sempre organizado, proativo e com ótimas ideias para o front-end.",
      avatar: "https://i.pravatar.cc/100?img=12"
    },
    {
      name: "Fernanda Souza",
      role: "Cliente",
      comment: "Fiquei impressionada com o resultado do site. Super profissional e atencioso em cada detalhe.",
      avatar: "https://i.pravatar.cc/100?img=14"
    }
  ];

  return (
    <section style={styles.section}>
      <h2>O que dizem sobre mim</h2>
      <div style={styles.cards}>
        {feedbacks.map((fb, index) => (
          <div key={index} style={styles.card}>
            <img src={fb.avatar} alt={fb.name} style={styles.avatar} />
            <h3 style={styles.name}>{fb.name}</h3>
            <p style={styles.role}>{fb.role}</p>
            <p style={styles.comment}>"{fb.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
