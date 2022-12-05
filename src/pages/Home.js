import LinkPrimary from "../components/LinkPrimary";
import LinkSecondary from "../components/LinkSecondary";
import Layout from "../components/Layout";
import Gap from "../components/Gap";

import "./Home.css";

export default function Welcome(){
    return (
        <Layout>
            <div className="contentWelcome">
                <img src="/images/bukabooks.png" className="contentWelcomeImg" alt="rocket"></img>
                <h2 className="contentWelcomeTitle">BukaBuku, yuk!</h2>
                <p className="contentWelcomeBody"> “The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” ― Dr. Seuss </p>
                <Gap
                    height={25}
                />
               <LinkPrimary
                    url="/BooksTop"
                    text="Top 5 Popular Books"
                />
                <Gap
                    height={10}
                />
                <LinkSecondary
                    url="/BooksRec"
                    text="Weekly Books Recommendation"
                />
            </div>
        </Layout>
    )
}