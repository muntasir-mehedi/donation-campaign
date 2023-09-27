import { Pie } from "recharts";


const Statistics = ({data, totalData}) => {
    const remainingData = totalData - data;
    const chartData = {
        labels: ["Donated", "Remaining"],
        datasets: [
          {
            data: [data, remainingData],
            backgroundColor: ["#36A2EB", "#FF5733"], // Colors for "Donated" and "Remaining"
          },
        ],
      };
    return (
        <div>
            <Pie width={400} height={400} data={chartData} cx="50%"
            cy="50%"></Pie>
        </div>
    );
};

export default Statistics;