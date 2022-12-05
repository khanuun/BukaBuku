import "./CardBookTop.css"
import { Link } from "react-router-dom";

export default function CardBookTop({Top}){
   return ( <div className="TopCard">
        <table border="0">
             <tr>
                <td>{Top.Judul}</td>
            </tr>
        </table>
        <Link className="buttonTopCard" to={'/DetailTop/'+Top.id_books}>Details</Link>
    </div>)
}