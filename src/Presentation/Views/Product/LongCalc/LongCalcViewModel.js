import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { useCounterState } from '../Calculator/SharedState';
export default function LongCalcViewModel() {
  const [count, setCount] = useCounterState();
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [resultlonglist, setResultlonglist] = useState(null);

    useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('calculation_progress', (data) => {
      setProgress(data.progress);
    });

    socket.on('calculation_complete', (data) => {
      setResult(data.result);
      setResultlonglist(data.result_detail);
      setIsCalculating(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

    async function startCalculation(event) {
    setIsCalculating(true);
    setProgress(0);
    setResult(null);

    try {
      console.log('try log param1:');
      await axios.post('http://localhost:5000/start-calculation',{'param1':count});
      console.log(count);
    } catch (error) {
      console.error('Error starting calculation:', error);
      setIsCalculating(false);
    }
  };
    return {startCalculation, isCalculating, progress, result}
}