import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";
import { Job } from "../types.ts";

export const Menu: FunctionComponent = (props: {
  data: Job[];
}) => {
  const [selected, setSelected] = useState<Job>(props.data[0]);
  const nombres = ["Juan", "María", "Carlos", "Ana", "Jose"];
  const mostrarNotificacion2 = () => {
    if (!("Notification" in window)) {
      alert("Este navegador no soporta notificaciones");
    } else if (Notification.permission === "granted") {
      new Notification("GUARDADO CON EXITO");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification("GUARDADO CON EXITO");
        }
      });
    }
  };

  const mostrarNotificacion1 = () => {
    if (!("Notification" in window)) {
      alert("Este navegador no soporta notificaciones");
    } else if (Notification.permission === "granted") {
      new Notification("SOLICITADO CON EXITO");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification("SOLICITADO CON EXITO");
        }
      });
    }
  };
  const enviarCorreo = () => {
    window.location.href = 'mailto:' + 'smartinfuentec@alumnos.nebrija.es' + '?subject=' + encodeURIComponent('Enviar Curriculum');
  }




  return (
    <div class="container">
      
      <div class="sidebar">
        <div class="Encabezado">
          <h1 class="Titulo">Principales empleos recomendados</h1>
          <h4>{props.data.length} resultados</h4>
        </div>
        <ul class="lista">
          {props.data.map((ch) => (
            <li
              class="filas"
              onClick={() => {
                setSelected(ch);
              }}
              style={{
                backgroundColor: selected === ch ? "lightblue" : "inherit",
              }}
            >
              <img
                src="https://brand.infojobs.net/downloads/ij-logo_reduced/ij-logo_reduced.jpg"
                class="imagen1"
              />
              <div class="texto">
                <h4>{ch.slug}</h4>
                <h4>{ch.company_name}</h4>
                <div class="contactos">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/720/720236.png"
                    class="imagen2"
                  />
                  <span class="texto3">
                    {Math.floor(Math.random() * 11)} contactos trabajan aquí
                  </span>
                </div>
                <h6>
                  Promocionado :{" "}
                  <span class="solicitud">
                    <strong>
                      {Math.floor(Math.random() * 11)} solicitudes
                    </strong>
                  </span>
                </h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div class="info">
        <div>
          <div style={{ color: "grey" }}>
            <h1 style={{ color: "black" }}>{selected.slug}</h1>
            <h2>{selected.company_name}</h2>
            <h3>Hibrido : {selected.remote}</h3>
            <p>Ubicacion : {selected.location}</p>
            <p>Creemos que puedes encajar</p>
            <p>Consultar opiniones de la empresa</p>
            <p>Fecha Anuncio : {selected.created_at}</p>
            <strong style={{ color: "green" }}>
              {Math.floor(Math.random() * 11)} solicitudes
            </strong>
          </div>
          <button class="solicitar" onClick={mostrarNotificacion1}>
            Solicitar
          </button>
          <button class="guardar" onClick={mostrarNotificacion2}>
            Guardar
          </button>
          <div class="conoce_equipo1">
            <h3>Conoce al equipo</h3>
            <div class="conoce_equipo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/720/720236.png"
                class="imagen1"
              >
              </img>
              <div class="nombre_boton">
                <span class="span3">
                  {nombres[Math.floor(Math.random() * nombres.length)]}
                </span>
                <button class="boton_enviar" onClick={enviarCorreo}>Enviar Mensaje</button>
              </div>
            </div>
          </div>
          <div class="largetext">
            <div
              dangerouslySetInnerHTML={{
                __html: selected.description,
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
