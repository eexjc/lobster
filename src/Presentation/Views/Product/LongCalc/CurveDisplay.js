import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {Line as LLine} from 'react-chartjs-2';
// warning!!!! this view model has view and controller logic tangled up, need to be separated in the future.

function CurveDisplay() {
  const [curveData, setCurveData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCurveData();
  }, []);

  const fetchCurveData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/curve-data');
      setCurveData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching curve data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Curve Display</h2>
      <LineChart width={600} height={300} data={curveData}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default CurveDisplay