
import FillDish from "./FillDish";
import FillTotal from "./FillTotal";

const Shop = ({add, setCounter}) => {

    let total= 0;                                                                                       /*variable total pour calculer le prix*/
    let deliv = Number("2.50").toFixed(2);                                                              /*variable deliv avec prix de la livraison remis en number avec 2 decimal*/

    return  <div className={add.length > 0 ?"boxShop":"boxShop2"}>                                      {/*classe pour une box avec ou sans article*/}
                <button id={add.length>0?"valid": "invalid"} type="submit" >Valider mon panier</button> {/*classe pour un boutton avec panier vide ou non*/}
                <span className={add.length > 0 ? "none": "spanValid"}>Votre panier est vide</span>     {/*classe pour afficher ou non la span*/}
                <div className={!add.length ? "none": "allDish"}>                                       {/*classe pour creer une box des articles choisi ou pas*/}
                                                                                                        {/*on map sur notre state qui est mis a jour*/}
                {add.map((dish, index)=>{
                total += (dish.price) * (dish.amount);                                                  /*on incremente total des prix des plats multiplier par la quantite*/
                return <div key={index} className="lineDish">
                            <FillDish setCounter={setCounter} dish={dish}                               /*appelle component avec tous les choix*/
                                        add={add} index={index} />
                        </div>
                })}
                </div>
                <div className="boxTotal">
                    <FillTotal add={add} total={total} deliv={deliv}/>                                  {/*appelle component pour les totaux*/}
                </div>
                
                
            </div>;
}

export default Shop;