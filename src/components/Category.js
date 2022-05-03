import Box from "./Box";

const Category = ({categories, handleChoice}) => {
    return  <div className="each-cat">
            {categories.map((cat, index)=>{
            // if (cat.meals.length > 0)
            // {
                return ( cat.meals.length > 0 && <div key={index} className="each">
                        
                        {/* {cat.meals.length > 0 ?} */}
                        <div className="title-cate"><h2>{cat.name}</h2></div>
                        <Box box={cat.meals} handleChoice={handleChoice}/>
                    </div>);
            // }
            })}
            </div>;
}

export default Category;