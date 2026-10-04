import '../../index.css'
import './estilo.css'
import { motion } from "motion/react"
import LogoNN from "../../assets/LogoNN.png"
import MenuIcon from "../../assets/Menu-icon.png"
import SetaCima from "../../assets/seta-cima.png"
import SetaBaixo from "../../assets/seta-baixo.png"
import Coco from "../../assets/CocoIMG.jpg"


function Home() {
  return (
    <>
      <header>
        <div className="cabecalho">
          <button className="BtContato" type="button">
            <span>Vamos conversar</span>
            <img
              className="icone-seta"
              src={SetaCima}
              alt="Ícone de Seta"
            />
          </button>

          <h1>
            <img className="Logo" src={LogoNN} alt="Logo" />
          </h1>

          <button className="BtMenu" type="button">
            <span>Menu</span>
            <img
              src={MenuIcon}
              alt="Ícone do Menu"
              className="icone-menu"
            />
          </button>
        </div>
      </header>

      <main>
        <section id="Hero">
          <div id="Apresentacao">
            <h1 className="titulo-principal">Uma experiência natural para <br /><span>o seu paladar.</span></h1>
            <p className="descricao-principal">Transformamos o coco em diversos produtos saborosos  leves e nutritivos, <br />com responsabilidade ambiental e foco em trazer uma vida saudável para você! <br /> <span className="aviso-rolagem">Role para baixo e conheça um pouco mais dos nossos produtos.</span></p>
          </div>
          <div className="Role">
            <span>Deslize para nos conhecer</span>
            <motion.img className="icone-seta-baixo" src={SetaBaixo} alt="Seta para baixo"
              animate={{ y: 10 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
          </div>
        </section>

              <hr/>

        <section id="Producao">

        </section>

        <section id="Produtos">

        </section>

        <section id="QuemSomos">

        </section>

        <section id="">

        </section>

      </main>

      <footer />
    </>
  )
}

export default Home
