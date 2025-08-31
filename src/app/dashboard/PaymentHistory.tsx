import { payments } from "@/content.json";


const PaymentHistory = () => {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-semibold my-6 text-center text-amber-600">
        Payments History
      </h2>
      <table className="dashboard-table rounded-md border border-red-500">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Amount</th>
            <th>Paid For</th>
            <th>Payments Ref</th>
          </tr>
        </thead>
        <tbody>
          {
            payments.map(pay => (
              <tr key={pay.id}>
                <td >{pay.id}</td>
                <td >{pay.amount}</td>
                <td >{pay.name}</td>
                <td >{pay.ref}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default PaymentHistory