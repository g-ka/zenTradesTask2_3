import React from 'react';
import CompanyMetrics from './CompanyMetrics';
import RevenueGraphs from './RevenueGraphs';

const Main = () => {
  return (
    <main className='dash_main'>
      <CompanyMetrics />
      <RevenueGraphs />
    </main>
  )
}

export default Main