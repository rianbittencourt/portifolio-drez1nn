import React from "react";
import Grid from "@mui/material/Grid";
import MixIcon from "../imgs/mix-icon.png";

function ServicesCard() {
  return (
    <div className="SectionContainer">
      <section class="grid grid-template-rows-1">
        <div class="item">
          <img src={MixIcon}></img>
          <div className="text-card-box">
          <h1>Mixagem</h1>
          <p>Tem uma gravação para mixar? Usando equipamentos analógicos e ferramentas digitais, vamos chegar na sonoridade perfeita para o seu trabalho!</p>
          </div>
        </div>
        <div class="item">
          <img src={MixIcon}></img>
          <div className="text-card-box">
          <h1>Mixagem</h1>
          <p>Tem uma gravação para mixar? Usando equipamentos analógicos e ferramentas digitais, vamos chegar na sonoridade perfeita para o seu trabalho!</p>
          </div>
        </div>
        <div class="item">
          <img src={MixIcon}></img>
          <div className="text-card-box">
          <h1>Mixagem</h1>
          <p>Tem uma gravação para mixar? Usando equipamentos analógicos e ferramentas digitais, vamos chegar na sonoridade perfeita para o seu trabalho!</p>
          </div>
        </div>
        <div class="item">
          <img src={MixIcon}></img>
          <div className="text-card-box">
          <h1>Mixagem</h1>
          <p>Tem uma gravação para mixar? Usando equipamentos analógicos e ferramentas digitais, vamos chegar na sonoridade perfeita para o seu trabalho!</p>
          </div>
        </div>
      </section>
    </div>
    // <div className="SectionCard">
    //   <Grid
    //     className="ttt"
    //     container
    //     spacing={2}
    //     columns={16}

    //   >
    //     <Grid className="services-card" item xs={8}>
    //       <img className="icons-card" src={MixIcon}></img>
    //       <div className="card-text">
    //       <h1 className="h1-card">Mixagem</h1>
    //       <p className="p-card">
    //         Tem uma gravação para mixar? Usando equipamentos analógicos e
    //         ferramentas digitais, vamos chegar na sonoridade perfeita para o seu
    //         trabalho!
    //       </p>
    //       </div>
    //     </Grid>
    //     <Grid className="services-card" item xs={8}>
    //       <img className="icons-card" src={MixIcon}></img>

    //       <div className="card-text">
    //       <h1 className="h1-card">Mixagem</h1>
    //       <p className="p-card">
    //         Tem uma gravação para mixar? Usando equipamentos analógicos e
    //         ferramentas digitais, vamos chegar na sonoridade perfeita para o seu
    //         trabalho!
    //       </p>
    //       </div>
    //     </Grid>
    //     <Grid className="services-card" item xs={8}>
    //       <img className="icons-card" src={MixIcon}></img>
    //       <div className="card-text">
    //       <h1 className="h1-card">Mixagem</h1>
    //       <p className="p-card">
    //         Tem uma gravação para mixar? Usando equipamentos analógicos e
    //         ferramentas digitais, vamos chegar na sonoridade perfeita para o seu
    //         trabalho!
    //       </p>
    //       </div>
    //     </Grid>
    //     <Grid className="services-card" item xs={8}>
    //       <img className="icons-card" src={MixIcon}></img>
    //       <div className="card-text">
    //       <h1 className="h1-card">Mixagem</h1>
    //       <p className="p-card">
    //         Tem uma gravação para mixar? Usando equipamentos analógicos e
    //         ferramentas digitais, vamos chegar na sonoridade perfeita para o seu
    //         trabalho!
    //       </p>
    //       </div>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}

export default ServicesCard;
