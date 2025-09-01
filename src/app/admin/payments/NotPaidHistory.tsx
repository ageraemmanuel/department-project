"use client";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { motion } from 'framer-motion'

type JsPDFWithInternal = jsPDF & {
  internal: {
    getNumberOfPages: () => number;
  };
};

const notPaid = [
  { id: 1, name: "Agera Emmanuel", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 2, name: "Enoch John", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 3, name: "Cletus John", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 4, name: "Terfa Iorwa", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 5, name: "Fater Iorwa", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 6, name: "Fater Iorwa", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 7, name: "Terfa John", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 8, name: "Terfa Iorwa", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 9, name: "Terfa Iorwa", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" },
  { id: 10, name: "Donatus Emmanuel", dept: "Maths & computer science", sem: "Second", sess: "2024/2025" }
];


const NotPaidHistory = () => {
  // 📌 Download PDF with branding
  const downloadPDF = () => {
    const doc = new jsPDF() as JsPDFWithInternal;

    // Title (centered)
    doc.setFontSize(16);
    doc.addImage("/logo.jpg", "jpg", 14, 10, 25, 25);
    doc.text("Department of Math & Comp Science MOAUM", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.text("Students Yet To Pay", 105, 28, { align: "center" });

    // ✅ Table
    const tableColumn = ["S/N", "Student Name", "Department", "Semester", "Session"];
    const tableRows = notPaid.map(p => [p.id, p.name, p.dept, p.sem, p.sess]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      theme: "grid",
      styles: { fontSize: 10, halign: "center" },
      headStyles: { fillColor: [255, 165, 0] }, // orange header
    });

    // ✅ Footer (Page Number + Signature)
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.text(`Page ${i} of ${pageCount}`, 200, 290, { align: "right" });

      if (i === pageCount) {
        doc.text("_______________________", 20, 280);
        doc.text("HOD Signature", 25, 285);
      }
    }

    doc.save("yet_paid_data.pdf");
  };

  // 📌 Download CSV
  const downloadCSV = () => {
    const headers = ["S/N", "Student Name", "Department", "Semester", "Session"];
    const rows = notPaid.map(p => [p.id, p.name, p.dept, p.sem, p.sess]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(e => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "payment_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ translateY: -500, zIndex: -1, opacity: 0 }}
      whileInView={{ translateY: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 2, }}
      className="max-w-full my-10 shadow">
      <h2 className="text-center mb-5 pt-4 text-2xl sm:text-3xl font-bold text-amber-600">
        Students Yet To Pay
      </h2>

      {/* 📌 Action buttons */}
      <div className="flex gap-4 mb-4 ml-4">
        <button
          onClick={downloadCSV}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download CSV
        </button>

        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      {/*  Table */}
      <div className="table-container ">
        <table className="dashboard-table w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>S/N</th>
              <th>Students Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Session</th>
            </tr>
          </thead>
          <tbody>
            {notPaid.map(pay => (
              <tr key={pay.id} className="text-center border-t">
                <td>{pay.id}</td>
                <td>{pay.name}</td>
                <td>{pay.dept}</td>
                <td>{pay.sem}</td>
                <td>{pay.sess}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default NotPaidHistory;
