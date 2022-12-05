import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Gap from "../components/Gap";
import "./DetailRec.css";


export default function DetailRec(){

    const {id_books} = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchDetailRec(){
            try {
                const response = await axios.get('https://api.npoint.io/8cdf2435c6bbf3264335', {
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
            await fetchDetailRec();
            setIsLoading(false);
        }
        fetchData();
    }, [id_books]);


    return <Layout>
         <div className="contentDetailRec">
                {isLoading ? (
                    <p>Please wait</p>
                ) : (
                    <>
                        <h1 className="contentBooks">{data.Judul}</h1>
                        <div className="CardDetailRec">
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