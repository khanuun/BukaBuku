import axios from 'axios';
import { useEffect, useState } from 'react';
import Gap from '../components/Gap';
import CardBookTop from '../components/CardBookTop';
import Layout from '../components/Layout';
import './BooksTop.css';

export default function BooksTop() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTop() {
      try {
        const response = await axios.get('https://api.npoint.io/251d7f14c2b6068b507d');
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchTop();
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="contentTop">
        {isLoading ? (
          <p>Please wait</p>
        ) : (
          data.map(function (item, index) {
            return (
              <div key={index}>
                <Gap height={15} />
                <CardBookTop Top={item} />
              </div>
            );
          })
        )}
      </div>
    </Layout>
 );
}