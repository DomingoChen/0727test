import { useEffect, useContext } from 'react';
import { dataContext } from './data.provider';

function App() {
  const { data, handleSetData } = useContext(dataContext);

  useEffect(() => {
    if (!data) return;

    console.log('從全域空間抓到local使用:');
    console.log(data);
  }, [data]);

  useEffect(() => {
    let url = 'http://localhost:5051/api/job'; // 請改為自己的API

    let params = {
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    };
    fetch(url, params)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // 抓到資料並送到全域
        console.log('抓到資料並送到全域:');
        console.log(data);
        handleSetData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleSetData]);

  return <div className='App'></div>;
}

export default App;
