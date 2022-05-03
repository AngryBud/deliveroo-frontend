
// props: le total des dish , prix livraison, le tab
const FillTotal = ({total, deliv, add}) => {
  return <div className={!add.length ? "none": "boxTotal2"}>                 {/*si on a des articles on cree cette box */}
            <div className="firstTotal" >                                   {/*creation FirstTOTAL QUI COMPRENDRA LE sous total et frais de livraison */}
                <div className="sousTotal">                                 {/*div du sous total */}
                    <span>Sous-Total</span>                                 {/*affichage Sous total*/}
                    <span>{Number(total).toFixed(2)} €</span>               {/*affichage Sous total valeur a 2 decimal*/}
                </div>
                <div className="delivery">                                  {/*div des frais de livrasion */}
                    <span>Frais de livraison</span>                         {/*affichage frais de livraison*/}
                    <span>{deliv} €</span>                                  {/*affichage valeure livraison*/}
                </div>   
            </div>
            <div className="fullTotal">                                     {/*div fullTotal */}
                <span>Total</span>                                          {/*affichage Total */}
                <span>{(Number(total) + Number(deliv)).toFixed(2)} €</span> {/*affichage valeure Total */}
            </div>
        </div>
}

export default FillTotal;