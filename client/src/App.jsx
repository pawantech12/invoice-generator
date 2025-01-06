import React, { useState } from "react";
import AddInvoiceForm from "./components/AddInvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import PastInvoices from "./components/PastInvoices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [currentInvoice, setCurrentInvoice] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 max-sm:p-0">
        <header>
          <h1 className="text-3xl font-semibold text-gray-800 text-center">
            Invoice Management
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Manage and preview your invoices efficiently.
          </p>
        </header>

        <main className="max-w-4xl mx-auto space-y-6 mt-5 max-sm:w-full max-sm:px-5">
          <section className="bg-white rounded-xl shadow-[0px_0px_4px_0px_#00000040] p-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Add New Invoice
            </h2>
            <AddInvoiceForm onInvoiceSaved={setCurrentInvoice} />
          </section>

          {currentInvoice && (
            <section className="bg-white shadow-[0px_0px_4px_0px_#00000040] rounded-xl p-6 ">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Invoice Preview
              </h2>
              <InvoicePreview invoice={currentInvoice} />
            </section>
          )}

          <section className="bg-white shadow-[0px_0px_4px_0px_#00000040] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Past Invoices
            </h2>
            <PastInvoices />
          </section>
        </main>

        <footer className="text-center text-gray-500 mt-10">
          <p className="text-sm">
            © 2025 Invoice Management. All rights reserved.
          </p>
        </footer>
      </div>
      <ToastContainer
        position="bottom-right" // Set position to bottom-right
        autoClose={3000} // Automatically close after 3 seconds
        limit={1}
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Display newest on top
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
