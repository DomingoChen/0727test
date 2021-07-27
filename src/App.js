import { useEffect, useContext } from 'react';
import { dataContext } from './data.provider';

const getJobList = async () => {
  let url = 'http://localhost:5051/api/job';

  let params = {
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  };
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetch(url, params);
      const parsed = await data.json();
      return resolve(parsed);
    } catch (error) {
      return reject(error);
    }
  });
};

function App() {
  const { handleSetData } = useContext(dataContext);

  useEffect(() => {
    async function fetchData() {
      const response = await getJobList();
      handleSetData(response);
    }
    fetchData();
  }, []);

  return <div className='App'></div>;
}

export default App;
