import './index.css'

function App() {
  return (
    <>
      <header>
        <div className="cabecalho">
          <button className="BtContato" type="button">
            <span>Vamos conversar</span>
            <img
              className="icone-seta"
              src="/imagens/seta-cima.png"
              alt="Ícone de Seta"
            />
          </button>

          <h1>
            <img className="Logo" src="/imagens/LogoNN.png" alt="Logo" />
          </h1>

          <button className="BtMenu" type="button">
            <span>Menu</span>
            <img
              src="/imagens/Menu-icon.png"
              alt="Ícone do Menu"
              className="icone-menu"
            />
          </button>
        </div>
      </header>

      <main>
        
      </main>

      <footer />
    </>
  )
}

export default App
