import logo from "../img/logo.png";                             /* import du logo */

const Header = ({rest}) => {                                    /*data du restaurant en props */
  return    <div className="big-header">                        {/*tout le header*/}
                <div className="top-header">                    {/*la bande avec logo*/}
                    <img src={logo} alt="logo"/>                {/*balise du logo*/}
                </div>
                <div className="description">                   {/*toute la partie avec titre et description et photo*/}
                    <div className="name-description">          {/*partie avec titre et description*/}
                        <h1>{rest.name}</h1>                    {/*recup nom*/}
                        <p>{rest.description}</p>               {/*recup descript*/}
                    </div>
                    <img src={rest.picture} alt="pic-rest"/>    {/*recup photo*/}
                </div>
            </div>;
}

export default Header;