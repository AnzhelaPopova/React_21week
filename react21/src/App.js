import React from 'react';
import Chart from 'react-google-charts';
const data = [
  ['Задача', 'Гардероб'],
  ['Работа', 70],
  ['Отдых', 20],
  ['Праздник', 10],
];
const options = {
  title: 'Мой гардероб',
  pieHole: 0.4,
};
const App = () => {
  return (
    <div className='App'>
      <h1>Пример круговой диаграммы</h1>
      <Chart
        chartType='PieChart'
        data={data}
        options={options}
        width='100%'
        height='400px'
      />
    </div>
  );
};
export default App;