import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Gap from "../components/Gap";
import "./DetailTop.css";


export default function DetailTop(){

    const {id_books} = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchDetailTop(){
            try {
                const response = await axios.get('https://api.npoint.io/251d7f14c2b6068b507d', {
                    params: {
                        id_books,
                    },
                });
                if (response.status===200){
                    setData(response.data[id_books-1]);
                }
            } catch (err) {
                console.log('err', err);
            }
        }
        async function fetchData(){
            setIsLoading(true);
            await fetchDetailTop();
            setIsLoading(false);
        }
        fetchData();
    }, [id_books]);


    return <Layout>
         <div className="contentDetailTop">
                {isLoading ? (
                    <p>Please wait</p>
                ) : (
                    <>
                        <h1 className="contentBooks">{data.Judul}</h1>
                        <div className="CardDetailTop">
                            <table border = "0" width="100%">
                                <tr>
                                    <td>{data.Rate}</td>
                                </tr>
                                <Gap height={20}/>
                                <tr>
                                    <td>{data.Review}</td>
                                </tr>
                            </table>
                        </div>
                    </>
                )
                }
            </div>
    </Layout>
}