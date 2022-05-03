const Box = ({box, handleChoice}) => {
    // console.log("boxxxx:::: ", box);

    return  <div className="box-cat">
                {box.map((meal)=>{
                    // console.log("price :::: ", meal.price)
                    return  <div key={meal.id} className="box-meal" onClick={() => handleChoice(meal)}>
                                <div className="left-box">
                                    <h3>{meal.title}</h3>
                                    <p className={meal.description.length>1 ?"descript-meal" : "none"}>{meal.description}</p>
                                    <div className="stars">
                                        <p id="price">{meal.price} €</p>
                                        <span style={{display:!meal.popular && "none"}}> ★ Populaire</span>
                                    </div>
                                </div>
                                    
                                <img style={{display:!meal.picture && "none"}} src={meal.picture} alt="meal-pic"/>
                            </div>
                                
                })}
            </div>
}

export default Box;