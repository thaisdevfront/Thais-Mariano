const Header = document.getElementById('Header')

Header.innerHTML=`
    <header>
        <div class="container-h">
            <div class="logo">
                <Img src="assets/img/logo.png"></Img>
            </div>

            <div class="menu">
                <button onclick="openMenu()"><img src="assets/img/menu.png"></button>
            </div>
        </div>
        <div id="ulmenu">
            <div class="controls">
                <div class="container">
                    <button onclick="openMenu()"><i class="fa-solid fa-chevron-left"></i></button>
                    <button onclick="openMenu()"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
            </div>
        <nav  >
            <ul >
                <li>
                    <a href="#">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#produts">
                        Produtos
                    </a>
                </li>
                <li>
                    <a href="#services">
                        Serviços
                    </a>
                </li>
                <li>
                    <a href="#appMovel">
                        Aplicativo Móvel
                    </a>
                </li>
                <li>
                    <a href="#contato">
                        Contato
                    </a>
                </li>
                <li>
                    <a href="http://">
                        Contato
                    </a>
                </li>
            </ul>
            <div class="social">
                <h4>Follow me</h4>
                <ul>
                    <li>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-brands fa-github"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
    </header>
    `

