import React, { useState } from "react";

export default function GuaAppMockup() {
  const [screen, setScreen] = useState("login");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [posts] = useState([
    {
    id: 1,
    title: "⚡ Corte eléctrico inesperado",
    body: "Se ha producido una interrupción de energía en la zona norte. Nuestro equipo trabaja para restaurar el servicio lo antes posible.",
    image: "https://cdn0.celebritax.com/sites/default/files/styles/watermark_100/public/1757974136-nueva-averia-falla-unidad-generacion-deja-oscuras-habana.jpg",
    time: "Hace 5 minutos",
    likes: 25,
    comments: 3,
  },
  {
    id: 2,
    title: "🔥 Sobrecarga detectada",
    body: "Nuestros sistemas detectaron una sobrecarga en la red eléctrica. Estamos gestionando la situación para evitar daños mayores.",
    image: "https://img.freepik.com/vector-gratis/ilustracion-corte-energia-diseno-plano-dibujado-mano_23-2149253388.jpg?semt=ais_incoming&w=740&q=80",
    time: "Hace 30 minutos",
    likes: 18,
    comments: 2,
  },
  {
    id: 3,
    title: "🛠 Mantenimiento preventivo",
    body: "Se realizará mantenimiento preventivo en la zona centro mañana de 08:00 a 10:00 para mejorar la seguridad eléctrica.",
    image: "https://pbs.twimg.com/media/G0VjVUuXEAAsoxF?format=jpg&name=4096x4096",
    time: "Hace 1 hora",
    likes: 12,
    comments: 1,
  },
  {
    id: 4,
    title: "⚡ Falla en transformador",
    body: "Un transformador sufrió daños y estamos trabajando para reemplazarlo y restablecer la electricidad en la zona afectada.",
    image: "https://img.freepik.com/vector-gratis/ilustracion-corte-energia-diseno-plano-dibujado-mano_23-2149253386.jpg?semt=ais_hybrid&w=740&q=80",
    time: "Hace 2 horas",
    likes: 30,
    comments: 5,
  },
  {
    id: 5,
    title: "🌩️ Prevención ante tormenta",
    body: "Debido a las condiciones climáticas, nuestra red eléctrica podría verse afectada. Recomendamos tomar precauciones y desconectar equipos sensibles.",
    image: "https://img.freepik.com/vector-gratis/fondo-corte-energia-diseno-plano-dibujado-mano_23-2149243834.jpg?semt=ais_hybrid&w=740&q=80",
    time: "Hace 3 horas",
    likes: 22,
    comments: 4,
  },
  ]);

    

  function handleLogin(e) {
    e.preventDefault();
    if (user === "admin" && pass === "admin") {
      setScreen("home");
    } else {
      alert("Usuario o contraseña incorrectos. Intenta de nuevo.");
    }
  }

 const [messages, setMessages] = useState([]);
const [newMsg, setNewMsg] = useState("");
const [firstReplySent, setFirstReplySent] = useState(false); // controla si ya se envió el primer mensaje automático

function sendMessage() {
  if (!newMsg.trim()) return;

  // Agregar el mensaje del usuario
  setMessages((prev) => [...prev, { from: "user", text: newMsg.trim() }]);
  setNewMsg("");

  if (!firstReplySent) {
    // Primer mensaje automático cordial
    setFirstReplySent(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "company",
          text: "👋 Hola, muchas gracias por contactarnos. ¿En qué podemos ayudarle hoy?",
        },
      ]);
    }, 1200);

  } else {
    // Segundo mensaje automático cordial tras el siguiente mensaje del usuario
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "company",
          text: "✅ Ya uno de nuestros técnicos ha sido notificado y estará al tanto de su caso.",
        },
      ]);
    }, 1200);
  }
}
  return (
    <div id="app" className="min-h-screen bg-gradient-to-br from-sky-100 to-cyan-200 flex items-center justify-center p-6">
      <div className="">
       {/* HEADER ANIMADO */}
      {/* HEADER ANIMADO */}
      {(screen === "home" || screen === "chat") && (
        <div className="container">
          <div className="btn btn--1" onClick={() => setScreen("home")}>
            <div className="content">
              <div className="front">
                <div className="border"></div>
                <i className="fas fa-newspaper"></i>
              </div>
              <div className="back">
                <div className="border"></div>
                <p>Noticias</p>
              </div>
            </div>
          </div>

          {/* Botón CHAT (icono YouTube) */}
          <div className="btn btn--2" onClick={() => setScreen("chat")}>
            <div className="content">
              <div className="front">
                <div className="border"></div>
                <i className="fas fa-comments"></i>
              </div>
              <div className="back">
                <div className="border"></div>
                <p>Chat</p>
              </div>
            </div>
          </div>

          <div className="btn btn--3">
            <div className="content">
              <div className="front">
                <div className="border"></div>
                <i className="fas fa-user"></i>
              </div>
              <div className="back">
                <div className="border"></div>
                <p>Perfil</p>
              </div>
            </div>
          </div>
        </div>
      )}


        <main className="p-6">
          
          {/* LOGIN */}
          {screen === "login" && (
            <form onSubmit={handleLogin} className="space-y-5 login-form">
              <header className="px-6 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md">
          <h1 className="text-2xl font-bold tracking-wide text-center">⚡ GUA APP</h1>
        </header>
              <h2 className="text-xl font-semibold text-slate-700 text-center">Inicia Sesión</h2>
              <div className="form-input-material">
              <input
                type="text"
                placeholder="Usuario" autocomplete="off"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="form-control-material"
                required
              />
              
               </div>
               <div className="form-input-material">
              <input
                type="password"
                placeholder="Contraseña" autocomplete="off"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="form-control-material"
                required
              />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-ghost w-full"
              >
                Ingresar
              </button>
              <p className="text-xs text-slate-400 text-center mt-2">
                Usuario: <b>admin</b> | Contraseña: <b>admin</b>
              </p>
            </form>
          )}

          {/* HOME */}
          {screen === "home" && (
            <section className="space-y-4">
              <h2 className=" noticias text-xl font-semibold text-slate-800"
               >🔔 Noticias</h2>
              {posts.map((p) => (
                <article
                  key={p.id}
                  className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-slate-800">{p.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{p.body} <br/><br/> {p.time}</p>
                      <img
                        src={p.image}
                        alt={p.title}
                        className=" h-10 w-10"
                      />
                    </div>
                    
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
                    <span>👍 {p.likes}</span>
                    <span>💬 {p.comments}</span>
                  </div>
                </article>
              ))}
            </section>
            
          )}
          

         {/* CHAT */}
{screen === "chat" && (
  <section>
    <h2>💬 Chat con la compañía</h2>

    {/* Contenedor de chat */}
    <div className="chat-container">
      <ul className="chat">
        {messages.map((m, i) => (
          <li
            key={i}
            className={`message ${m.from === "user" ? "right" : "left"}`}
          >
            {/* Avatar */}
            <img
              className="logo"
              src={
                m.from === "user"
                  ? "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                  : "https://cdn-icons-png.freepik.com/256/11644/11644669.png"
              }
              alt={m.from}
            />

            {/* Texto */}
            <p>{m.text}</p>
          </li>
        ))}
      </ul>

      {/* Input */}
      <input
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="text_input"
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
    </div>
  </section>
)}
        </main>
      </div>
    </div>
  );
}

