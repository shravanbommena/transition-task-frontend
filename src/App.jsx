import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResult = async () => {
      const response = await axios.get(
        "https://transition-task-backend.onrender.com/check"
      );
      setResult(response.data);
      setLoading(false);
    };
    getResult();
  }, []);

  const resultTable = () => {
    return (
      <table className="table-auto border border-slate-900 border-collapse">
        <thead>
          <tr>
            <th className="border">Rule</th>
            <th className="border">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border">Validation Fee Paid</td>
            <td className="border">
              {result.valuationFeePaid ? "True" : "False"}
            </td>
          </tr>
          <tr>
            <td className="border">UK Resident</td>
            <td className="border">{result.ukResident ? "True" : "False"}</td>
          </tr>
          <tr>
            <td className="border">Risk Rating</td>
            <td className="border">{result.riskRating ? "True" : "False"}</td>
          </tr>
          <tr>
            <td className="border">LTV Below 60%</td>
            <td className="border">{result.ltvBelow60 ? "True" : "False"}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return <div>{loading ? <BeatLoader /> : <div>{resultTable()}</div>}</div>;
};

export default App;
