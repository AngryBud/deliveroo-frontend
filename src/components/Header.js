import logo from "../img/logo.png";

const Header = ({rest}) => {
  return    <div className="big-header">
                <div className="top-header">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="desc">
                    <div className="name-desc">
                        <h1>{rest.name}</h1>
                        <p>{rest.description}</p>
                    </div>
                    <img src={rest.picture} alt="pic-rest"/>
                </div>
            </div>;
}

export default Header;