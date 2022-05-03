
// props : liste des repas et fonction qui gere le state de la liste
const Box = ({box, handleChoice}) => {
    return  <div className="box-cat">
                                                                                                                                {/*on map sur les plats de la categorie en question*/}
                {box.map((meal)=>{
                    return  <div key={meal.id} className="box-meal" onClick={() => handleChoice(meal)}>                        {/*on affiche un box avec les info du plat si on clique on met a jour le state*/}
                                <div className="left-box">                                                                     {/*partie gauche d'une box*/}
                                    <h3>{meal.title}</h3>                                                                      {/*nom du plat*/}
                                    <p className={meal.description.length>1 ?"descript-meal" : "none"}>{meal.description}</p>  {/*si description existe on mettera une box pour l'ecrire*/}
                                    <div className="stars">                                                                    {/*petite div pour le prix et si popular*/}
                                        <p id="price">{meal.price} €</p>                                                       {/*affichage du prix*/}
                                        <span style={{display:!meal.popular && "none"}}> ★ Populaire</span>                    {/*si popular on affiche etoile popular*/}
                                    </div>
                                </div>
                                    
                                <img style={{display:!meal.picture && "none"}} src={meal.picture} alt="meal-pic"/>              {/*partie droite avec photo*/}
                            </div>
                                
                })}
            </div>
}

export default Box;