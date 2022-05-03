// import { useState } from "react";
// import Choice from "./Choice";
import {BiMinusCircle} from "react-icons/bi";
import {BiPlusCircle} from "react-icons/bi";

const Shop = ({add, setCounter}) => {

    let tot= 0;
    let deliv = Number("2.50").toFixed(2);
    console.log("on est dans le shop :::: ", add);
    return  <div className={add.length > 0 ?"boxShop":"boxShop2"}>
                <button id={add.length>0?"valid": "invalid"} type="submit" >Valider mon panier</button>
                <span className={add.length > 0 && "none"}>Votre panier est vide</span>
                <div className={!add.length ? "none": "allDish"}>
                
                {add.map((dish, index)=>{
                tot += (dish.price) * (dish.amount);
                // console.log("tototototo ::::: ", tot);
                return <div key={index} className="lineDish">
                            <div className="dishText-btn">
                                <button id="btn" onClick={()=>{
                                        let am = add[index].amount - 1;
                                        console.log("am ===== ", am);
                                        let newTab = [...add];   
                                        newTab[index].amount = am;
                                        if (!am)
                                            newTab.splice(newTab.indexOf(newTab[index]), 1);
                                        setCounter(newTab);
                                }}><BiMinusCircle/></button>
                                <span id="dishAm">{dish.amount}</span>
                                <button id="btn" onClick={()=>{
                                        let am = add[index].amount + 1;
                                        console.log("am ===== ", am);
                                        let newTab = [...add];   
                                        newTab[index].amount = am;
                                        setCounter(newTab);
                                }}><BiPlusCircle/></button>
                                <span id ="titleDish">{dish.title}</span>
                            </div>
                            <div className="priceDish">
                                <span>{Number(dish.price * dish.amount).toFixed(2)} €</span>
                            </div>
                        </div>
                })}
                </div>
                <div className={!add.length ? "none": "boxTotal"}>
                    <div className="firstTotal" >
                        <div className="sousTotal">
                            <span>Sous-Total</span>
                            <span>{Number(tot).toFixed(2)} €</span>
                        </div>

                        <div className="delivery">
                            <span>Frais de livraison</span>
                            <span>{deliv} €</span>
                        </div>   
                    </div>
                    <div className="fullTotal">
                        <span>Total</span>
                        <span>{(Number(tot) + Number(deliv)).toFixed(2)} €</span>
                    </div>
                </div>
                
                
            </div>;
}

export default Shop;