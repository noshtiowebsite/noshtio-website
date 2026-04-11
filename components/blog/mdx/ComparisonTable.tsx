interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export default function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse rounded-lg border border-gray-200 bg-white shadow-sm">
        <thead>
          <tr className="bg-navy text-white">
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-gray-200 px-4 py-3 text-left font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-200 px-4 py-3 text-navy"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
