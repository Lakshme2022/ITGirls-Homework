import { Chart } from "react-google-charts";
import './style/App.css';

export const data = [
    ["Task", "Hours per Day"],
    ["Home&kids", 6],
    ["Eat", 2],
    ["Commute", 2],
    ["Use phone", 5],
    ["Sleep", 7],
];

export const options = {
    title: "My Daily Activities",
    is3D: true,
};


export function App() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
}

export default App;

