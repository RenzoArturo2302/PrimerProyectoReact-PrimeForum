import React from "react";
import "./HomeView.css";
const NoticiasSlider = () => {
  return (
    <div className="NewsSlider">
      <div className="MainNew">
        <img src="src\assets\img\news-800x500-3.jpg" alt="" />
        <div className="Fondo"></div>
        <div className="Metadatos">
          <div className="CategoryDate">
            <h2 className="Category limitar-caracter-categoria">
              Naturaleza y Medio Ambiente
            </h2>
            <h3 className="Date">2023-07-01</h3>
          </div>
          <h1 className="Titulo limitar-caracter">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            veritatis.
          </h1>
        </div>
      </div>
      <div className="New2">
        <img src="src\assets\img\news-700x435-1.jpg" alt="" />
        <div className="Fondo"></div>
        <div className="Metadatos">
          <div className="CategoryDate">
            <h2 className="Category limitar-caracter-categoria">
              Hobbies y Manualidades
            </h2>
            <h3 className="Date">2023-07-01</h3>
          </div>
          <h1 className="Titulo limitar-caracter">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
            itaque.
          </h1>
        </div>
      </div>
      <div className="New3">
        <img src="src\assets\img\news-800x500-2.jpg" alt="" />
        <div className="Metadatos">
          <div className="CategoryDate">
            <h2 className="Category limitar-caracter-categoria">
              Nombre de Categoría
            </h2>
            <h3 className="Date">2023-07-01</h3>
          </div>
          <h1 className="Titulo limitar-caracter">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            veritatis.
          </h1>
        </div>
        <div className="Fondo"></div>
      </div>
      <div className="New4">
        <img src="src\assets\img\news-800x500-1.jpg" alt="" />
        <div className="Fondo"></div>
        <div className="Metadatos">
          <div className="CategoryDate">
            <h2 className="Category limitar-caracter-categoria">
              Nombre de Categoría
            </h2>
            <h3 className="Date">2023-07-01</h3>
          </div>
          <h1 className="Titulo limitar-caracter">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            voluptatibus.
          </h1>
        </div>
      </div>
      <div className="New5">
        <img src="src\assets\img\news-700x435-4.jpg" alt="" />
        <div className="Fondo"></div>
        <div className="Metadatos">
          <div className="CategoryDate">
            <h2 className="Category limitar-caracter-categoria ">
              Naturaleza y Medio Ambiente
            </h2>
            <h3 className="Date">2023-07-01</h3>
          </div>
          <h1 className="Titulo limitar-caracter">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            veritatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fugit, veritatis.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NoticiasSlider;
