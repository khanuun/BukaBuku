import "./CardBookRec.css"
import { Link } from "react-router-dom";

export default function CardBookRec({Rec}){
   return ( <div className="RecCard">
        <table border="0">
             <tr>
                <td>{Rec.Judul}</td>
            </tr>
        </table>
        <Link className="buttonRecCard" to={'/DetailRec/'+Rec.id_books}>Details</Link>
    </div>)
}