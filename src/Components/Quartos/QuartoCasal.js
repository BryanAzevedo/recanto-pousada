import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import Button from "./BotãoQuarto.js";
import "./Quarto.css";

function QuartoCasal() {
  return (
    <div className="quarto-casal">
      <h1>Quarto Casal</h1>
      <div className="fundo-quartos">
        <div className="Imagens-quartos">
          <Carrossel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div>
              <img
                src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg"
                alt="Aqui tem um quarto"
              />
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Aqui tem um banheiro"
              />
            </div>
          </Carrossel>
        </div>
        <div className="descricao-quartos">
          <br />
          <p>
            Nossos quartos casal possuem a melhor infraestrutura para receber
            você e seu cônjuge com todo o respeito e privacidade necessários.
            Venha já ter sua melhor experiência e melhor estadia que uma pousada
            pode oferecer. <h3>Apenas R$120 por dia!</h3>
          </p>
          <br />
          <div className="btn-quarto">
            {
              <Button variant="contained" color="primary" disableElevation>
                Reservar!
              </Button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuartoCasal;
