import React, { createContext, useState, useEffect } from 'react';

export const dataContext = createContext({
  data: {},
  handleSetData: () => {}
});

const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const handleSetData = (rawData) => {
    setData(rawData);
  };
  useEffect(() => {
    console.log('Global data:');
    console.log(data);
  }, [data]);
  return (
    <dataContext.Provider
      value={{
        data,
        handleSetData
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
