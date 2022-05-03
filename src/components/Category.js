import Box from "./Box";

/*toutes les categories et la fonction qui gere notre tableau d'objet*/
const Category = ({categories, handleChoice}) => {
    return  <div className="fullList">                                          {/*bloc categorie de repas*/}
                                                                                {/*on map sur tout le tableau categories*/}
            {categories.map((list, index)=>{
                return ( list.meals.length > 0 && 
                        <div key={index} className="each">                      {/*on return qqch si la categories contien des meals*/}
                            <h2>{list.name}</h2>                                {/*affichage titre categorie*/}
                            <Box box={list.meals} handleChoice={handleChoice}/> {/*on appelle le component box pour chaque plat*/}
                        </div>)
            })}
            </div>;
}

export default Category;