// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div>
//             <h2>This is Dashboard page.</h2>
//         </div>
//     );
// };

// export default Dashboard;

import React from "react";
import "./Dashboard.css";
import { CartesianGrid, YAxis, XAxis, Legend, Radar, PolarRadiusAxis, PolarAngleAxis, PolarGrid, RadarChart, BarChart, Tooltip, Bar, ResponsiveContainer} from "recharts";
import useDataLoad from "../../hooks/useDataLoad";

const Dashboard = () => {
  const [data] = useDataLoad();

  return (
    <>
        <div className="chart-section1">
            {/* Chart-1 */}
            <div className="chart-1">
                <ResponsiveContainer>
                    <RadarChart outerRadius={100} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="month" />
                    <PolarRadiusAxis angle={20} domain={[0, 10]} />
                    <Radar
                        name="Sell"
                        dataKey="sell"
                        stroke="#55F80F"
                        fill="#55F80F"
                        fillOpacity={0.6}
                    />
                    <Radar
                        name="Revenue"
                        dataKey="revenue"
                        stroke="#DC143C"
                        fill="#DC143C"
                        fillOpacity={0.6}
                    />
                    <Radar
                        name="Investment"
                        dataKey="investment"
                        stroke="#FFA500"
                        fill="#FFA500"
                        fillOpacity={0.6}
                    />
                    <Tooltip />
                    <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            
            {/* Chart-2 */}
            <div className="chart-2">
                <ResponsiveContainer>
                    <BarChart data={data}>
                    <CartesianGrid strokeDasharray="1 7" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#FFA500" />
                    <Bar dataKey="sell" fill="#55F80F" />
                    <Bar dataKey="revenue" fill="#DC143C" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
          </div>
        <h2 style={{'textAlign':'center'}}>Monthly Investment Report</h2>  
    </>
  );
};

export default Dashboard;
