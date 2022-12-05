import Layout from "../components/Layout";
import "./About.css";


export default function About(){
    return <Layout>
         <div className="contentAbout">
                <img src="/images/bukabooks.png" className="contentAboutImg" alt="rocket"></img>
                <p className="contentAboutBody">This app developed by:</p>
                <p className="contentAboutBody2">Khanuun Maulida Puspita Hasyim</p>
            </div>
    </Layout>
}