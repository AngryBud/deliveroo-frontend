import {BiMinusCircle} from "react-icons/bi";
import {BiPlusCircle} from "react-icons/bi";

// props : dish{plat} fonction setCounter pour mettre a jour le state
//          add : toutes la categories et l'index 
const FillDish = ({dish, setCounter, add, index}) => {
  return <div className="lineDish">
            <div className="dishText-btn">                                  {/*creer div pour les bouttons et nom*/}
                <button id="btn" onClick={()=>{  
                        let am = add[index].amount - 1;                     /*bouton moins on save la quantite moins 1*/
                        let newTab = [...add];                              /*on copie notre tableau*/
                        newTab[index].amount = am;                          /*on appllique la quantite au plat du tableau a l'index*/
                        if (!am)                                            /*si quantite est a zero*/
                            newTab.splice(newTab.indexOf(newTab[index]), 1);/*on supprime la ligne du tableau*/
                        setCounter(newTab);                                 /*on met a jour le state*/
                }}><BiMinusCircle/></button>
                <span id="dishAm">{dish.amount}</span>                      {/*affichage quantite*/}
                <button id="btn" onClick={()=>{
                        let am = add[index].amount + 1;                     /*bouton moins on save la quantite plus 1*/
                        let newTab = [...add];                              /*on copie notre tableau*/
                        newTab[index].amount = am;                          /*on appllique la quantite au plat du tableau a l'index*/
                        setCounter(newTab);                                 /*on met a jour le state*/
                }}><BiPlusCircle/></button>
                <span id ="titleDish">{dish.title}</span>                   {/*nom du plat*/}
            </div>
            <div className="priceDish">                                     {/*div pour le total maj du prix du plat * quantite*/}
                <span>{Number(dish.price * dish.amount).toFixed(2)} €</span>{/*affichage prix du plat * quantite avec 2 decimale*/}
            </div>
        </div>
}

export default FillDish;