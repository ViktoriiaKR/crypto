import React, { useRef } from "react"
import { Line } from "react-chartjs-2"

// @ts-ignore
function Dashboard({ data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div className="dashboard" style={{height: '100%'}}>
      <div className="chart-container" style={{height: '100%'}}>
        <Line data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;