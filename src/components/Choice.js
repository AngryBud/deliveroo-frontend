import {BiMinusCircle} from "react-icons/bi";
import {BiPlusCircle} from "react-icons/bi";

const Choice = ({add}) => {
    console.log("choicetab ::: ", add);
    return  <div className= "fullDish">
            {add.map((dish, index) =>{
            return  <div key={index} className="lineDish">
                        <button>{BiMinusCircle}</button>

                        <button>{BiPlusCircle}</button>
                    </div>
            })}
            </div>;
}

export default Choice;