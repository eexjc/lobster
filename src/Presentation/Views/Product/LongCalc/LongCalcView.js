import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import CurveDisplay from "./CurveDisplay";
import DI from '../../../../DI/ioc'
export default function LongCalcView() {
        const { startCalculation, isCalculating, progress, result} = DI.resolve("LongCalcViewModel")
      return (
            <div>
    <div>
      <button onClick={startCalculation} disabled={isCalculating}>
        {isCalculating ? 'Calculating...' : 'Start Calculation'}
      </button>
      {isCalculating && <p>Progress: {progress.toFixed(2)}%</p>}
      {result && <p>Result: {result}</p>}
    </div>
    <div>{result ? <CurveDisplay/>:'please wait' }</div>
</div>
  );
}
