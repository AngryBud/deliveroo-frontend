import Box from "./Box";

const Category = ({categories}) => {
    console.log("lallalaal", categories);
    return  <div className="each-cat">
            {categories.map((cat, index)=>{
            console.log("nameemem ::: ", cat);
            console.log("len meals ::: ", cat.meals.length);
            // if (cat.meals.length > 0)
            // {
                return ( cat.meals.length > 0 && <div key={index} className="each">
                        
                        {/* {cat.meals.length > 0 ?} */}
                        <div className="title-cate"><h2>{cat.name}</h2></div>
                        <Box box={cat.meals}/>
                    </div>);
            // }
            })}
            </div>;
}

export default Category;