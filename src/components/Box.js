const Box = ({box}) => {
    // console.log("boxxxx:::: ", box);
    return  <div className="box-cat">
                {box.map((meal)=>{
                    return  <div key={meal.id} className="box-meal">
                                <div className="left-box"> 
                                    <h3>{meal.title}</h3>
                                    <p className={meal.description.length>1 ?"descript-meal" : "none"}>{meal.description}</p>
                                    <p id="price">{meal.price} €</p>
                                </div>
                                <img className={!meal.picture && "none"} src={meal.picture} alt="meal-pic"/>
                            </div>
                                
                })}
            </div>
}

export default Box;