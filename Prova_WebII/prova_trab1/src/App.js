import logo1 from './img/Joao.jpeg'
import logo2 from './img/William.jpg'
import logo3 from './img/Amilto.jpg'
import logo4 from './img/Thomas.png'
import logo5 from './img/Faleiro.jpg'
import './App.css';

function App() {
  return (

  <div className='app'>  
    <div className="title-container">
        <h2 className="text-exp">Projeto de Programação Web II</h2>
    </div>
    <section className="card-container">
    <div className="container">
        <div className="user-image">
            <img src={logo1}
                alt="ninja_user"/>
        </div>
        <div className="content">
            <h3 className="name">João Pedro Marques</h3>
            <p className="username">@jpferreira</p>

            <div className="links">
                <a className="facebook" href="https://www.facebook.com/joaopedro.marques.792197" target="_blank" title="GFG_facebook">
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="git" href="https://github.com/Ferreira2912" title="TIuser_github" target="_blank">
                    <i className="fab fa-github-square"></i>
                </a>
                <a className="insta" href="https://www.instagram.com/joao_pedromf29" target="_blank" title="GFG_instagram">
                    <i className="fab fa-instagram-square"></i>
                </a>
            </div>
            
                <p className="details">Quem será?</p>

        </div>
    </div>
    <div className="container">
        <div className="user-image">
            <img src={logo2}
                alt="ninja_user"/>
        </div>
        <div className="content">
            <h3 className="name">William Gabriel Schreiner</h3>
            <p className="username">@williamg.sch</p>

            <div className="links">
                <a className="facebook" href="https://www.facebook.com/willian.schreiner.98" target="_blank" title="GFG_facebook">
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="git" href="https://github.com/WilliamSchreiner" title="TIuser_github" target="_blank">
                    <i className="fab fa-github-square"></i>
                </a>
                <a className="insta" href="https://www.instagram.com/@william.gab.sch" target="_blank" title="GFG_instagram">
                    <i className="fab fa-instagram-square"></i>
                </a>
            </div>
            
                <p className="details">Quero dormi...</p>

        </div>
    </div>
    <div className="container">
        <div className="user-image">
            <img src={logo3}
                alt="ninja_user"/>
        </div>
        <div className="content">
            <h3 className="name">Amilto Junior Smaniotto</h3>
            <p className="username">@Amilto.J</p>

            <div className="links">
                <a className="facebook" href="https://www.facebook.com/amiltojunior.smaniotto.3" target="_blank" title="GFG_facebook">
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="git" href="https://github.com/AmiltoJ" title="TIuser_github" target="_blank">
                    <i className="fab fa-github-square"></i>
                </a>
                <a className="insta" href="https://www.instagram.com/amilto._.exe" target="_blank" title="GFG_instagram">
                    <i className="fab fa-instagram-square"></i>
                </a>
            </div>
            
                <p className="details">Tô Casado Tropa</p>

        </div>
    </div>
    <div className="container">
        <div className="user-image">
            <img src={logo4}
                alt="ninja_user"/>
        </div>
        <div className="content">
            <h3 className="name">THOMAS EDUARDO Z. DE ALMEIDA</h3>
            <p className="username">@Thomas.eal</p>

            <div className="links">
                <a className="facebook" href="https://www.facebook.com/" target="_blank" title="GFG_facebook">
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="git" href="https://github.com/PolarSpot/" title="TIuser_github" target="_blank">
                    <i className="fab fa-github-square"></i>
                </a>
                <a className="insta" href="https://www.instagram.com/thomas.eal/" target="_blank" title="GFG_instagram">
                    <i className="fab fa-instagram-square"></i>
                </a>
            </div>
            
                <p className="details"> Corinthians Grande</p>

        </div>
    </div>
    <div className="container">
        <div className="user-image">
            <img src={logo5}
                alt="ninja_user"/>
        </div>
        <div className="content">
            <h3 className="name">Lucas Eduardo Faleiro</h3>
            <p className="username">@luxca.img</p>

            <div className="links">
                <a className="facebook" href="https://www.facebook.com/" target="_blank" title="GFG_facebook">
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="git" href="https://github.com/LuxcaBR" title="TIuser_github" target="_blank">
                    <i className="fab fa-github-square"></i>
                </a>
                <a className="insta" href="https://www.instagram.com/luxca.img/" target="_blank" title="GFG_instagram">
                    <i className="fab fa-instagram-square"></i>
                </a>
            </div>
            
                <p className="details"> Segue lá</p>

        </div>
    </div>
</section>
    <div className='text-title'>
        <h2 className='title-exp'>
            Atividade selecionada pelo grupo : 2
        </h2>
    </div>
    <div className="text-container">
        <h3 className="text-exp">Crie um programa para ajudar o amigo marombeiro, 
            deve ter uma tela para cadastrar o exercício 
            (nome do exercício, quantidade de series e repetições) e uma opção 
            para marcar qual ele já concluiu.</h3>
    </div>

    <script src="https://kit.fontawesome.com/704ff50790.js"
        crossorigin="anonymous">
    </script>
    
    </div>
  );
}

export default App;