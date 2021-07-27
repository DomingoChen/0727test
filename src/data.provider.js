import React, { createContext, useState, useEffect, useCallback } from 'react';

export const dataContext = createContext({
  data: null,
  handleSetData: () => {}
});

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) return;
    console.log('全域空間的資料:');
    console.log(data);
  }, [data]);

  const handleSetData = useCallback((rawData) => {
    setData(rawData);
  }, []);
  return (
    <dataContext.Provider
      value={{
        // 送出資料給各地使用
        data,
        handleSetData
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
