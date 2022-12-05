import axios from 'axios';
import { useEffect, useState } from 'react';
import Gap from '../components/Gap';
import CardBookRec from '../components/CardBookRec';
import Layout from '../components/Layout';
import './BooksRec.css';

export default function BooksRec() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRec() {
      try {
        const response = await axios.get('https://api.npoint.io/8cdf2435c6bbf3264335');
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchRec();
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="contentRec">
        {isLoading ? (
          <p>Please wait</p>
        ) : (
          data.map(function (item, index) {
            return (
              <div key={index}>
                <Gap height={15} />
                <CardBookRec Rec={item} />
              </div>
            );
          })
        )}
      </div>
    </Layout>
 );
}