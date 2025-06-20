import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip
} from '@syncfusion/ej2-react-charts';

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();

  const chartBackground = currentMode === 'Dark' ? '#1f2937' : '#ffffff';

  return (
    <div className="m-4 p-4 bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md">
      <ChartComponent
        id="custom-line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={chartBackground}
        tooltip={{ enable: true }}
        legendSettings={{ background: 'transparent', visible: true }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

        <SeriesCollectionDirective>
          {lineCustomSeries.length > 0 ? (
            lineCustomSeries.map((series, idx) => (
              <SeriesDirective key={idx} {...series} />
            ))
          ) : (
            <></>
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
