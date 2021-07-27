import { useEffect, useContext } from 'react';
import { dataContext } from './data.provider';

function App() {
  const { handleSetData } = useContext(dataContext);

  useEffect(() => {
    let url = 'http://localhost:5051/api/job';

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
        handleSetData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className='App'></div>;
}

export default App;
