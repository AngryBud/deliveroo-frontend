// import { useState } from "react";
// import Choice from "./Choice";
import {BiMinusCircle} from "react-icons/bi";
import {BiPlusCircle} from "react-icons/bi";

const Shop = ({add, setCounter}) => {

    let tot= 0;
    let deliv = Number("2.50").toFixed(2);
    console.log("on est dans le shop :::: ", add);
    return  <div className="boxShop">
                <button id="valid" type="submit" >Valider mon panier</button>
                <div className="allDish">
                {add.map((dish, index)=>{
                // console.log("add :::: ", add.price);
                // Number(dish.price);
                // console.log("dish :::: ", dish.price);
                // console.log("amount :::: ", dish.amount);
                
                tot += (dish.price) * (dish.amount);
                // arrondi = nombre*100;          // 556.845
                // tot = Math.round(tot); // 556
                // tot = tot/100;
                console.log("tototototo ::::: ", tot);
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
                <div className="firstTotal">
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
                
                
            </div>;
}

export default Shop;