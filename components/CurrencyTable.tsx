import React from "react";

type CurrencyData = {
  currency: string;
  buy: string;
  sell: string;
};

const CurrencyTable: React.FC = () => {
  const data: CurrencyData[] = [
    { currency: "AUD", buy: "10.100", sell: "10.140" },
    { currency: "CNY", buy: "2.225", sell: "2.234" },
    { currency: "EUR", buy: "16.880", sell: "16.920" },
    { currency: "GBP", buy: "20.350", sell: "20.400" },
    { currency: "HKD", buy: "2.090", sell: "2.099" },
    { currency: "JPY", buy: "103,60", sell: "104,00" },
    { currency: "MYR", buy: "3.635", sell: "3.655" },
    { currency: "SAR", buy: "4.315", sell: "4.335" },
    { currency: "SGD", buy: "11.945", sell: "11.970" },
    { currency: "USD", buy: "16.220", sell: "16.245" },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
  <table
    className="bg-white" // Menjadikan tabel memiliki background putih
    style={{
      width: "60%",
      borderCollapse: "collapse",
      textAlign: "center",
      margin: "auto", // Membuat tabel berada di tengah
    }}
  >

        <thead>
          <tr>
            <th style={{ border: "0.5px solid black", padding: "8px", backgroundColor: "black", color: "white" }}>
              Mata Uang
            </th>
            <th style={{ border: "0.5px solid black", padding: "8px", backgroundColor: "red", color: "white" }}>
              Buy (Kami Membeli Valas Dari Anda)
            </th>
            <th style={{ border: "0.5px solid black", padding: "8px", backgroundColor: "green", color: "white" }}>
              Sell (Kami Menjual Valas Ke Anda)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "0.5px solid black", padding: "8px", color: "black" }}>{item.currency}</td>
              <td style={{ border: "0.5px solid black", padding: "8px", color: "red" }}>{item.buy}</td>
              <td style={{ border: "0.5px solid black", padding: "8px", color: "green" }}>{item.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;