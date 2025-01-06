import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const InvoicePreview = ({ invoice }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add invoice header
    doc.text(`Invoice ID : ${invoice._id}`, 20, 20);
    doc.text(`Customer Name : ${invoice.customerName}`, 20, 30);
    doc.text(`Customer Email : ${invoice.customerEmail}`, 20, 40);
    doc.text(
      `Invoice Date : ${new Date(invoice.createdAt).toLocaleDateString()}`,
      20,
      50
    );
    doc.text(`Total Amount : $${invoice.total.toFixed(2)}`, 20, 60);

    // Add table for product details
    const tableColumnHeaders = [
      "Product Name",
      "Quantity",
      "Price ($)",
      "Total ($)",
    ];
    const tableRows = invoice.products.map((product) => [
      product.name,
      product.quantity,
      product.price.toFixed(2),
      invoice.total.toFixed(2),
    ]);

    doc.autoTable({
      startY: 70, // Start below the invoice details
      head: [tableColumnHeaders],
      body: tableRows,
    });

    // Save the PDF file
    doc.save(`invoice_${invoice._id}.pdf`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-[0px_0px_4px_0px_#00000040] rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Invoice Preview
        </h2>
        <div className="mb-4 space-y-2">
          <p className="text-gray-600">
            <span className="font-semibold">Invoice ID: </span>
            {invoice._id}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Customer Name: </span>
            {invoice.customerName}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Customer Email: </span>
            {invoice.customerEmail}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Invoice Date: </span>
            {new Date(invoice.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Total Amount: </span>${" "}
            {invoice.total}
          </p>
        </div>
        <button
          onClick={generatePDF}
          className="w-full bg-neutral-700 text-white px-4 py-3 rounded-md hover:bg-neutral-800 transition font-semibold text-lg"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default InvoicePreview;
