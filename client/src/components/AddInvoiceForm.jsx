import React, { useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa"; // Import the trash icon
import { toast } from "react-toastify";
const AddInvoiceForm = ({ onInvoiceSaved }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    products: [{ name: "", quantity: 1, price: 0, disabled: false }], // Add 'disabled' property
    tax: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleProductChange = (index, key, value) => {
    const updatedProducts = [...formData.products];
    updatedProducts[index][key] = value;
    setFormData({ ...formData, products: updatedProducts });
  };

  const addProductRow = () => {
    const updatedProducts = formData.products.map((product) => ({
      ...product,
      disabled: true, // Mark all existing products as uneditable
    }));
    setFormData({
      ...formData,
      products: [
        ...updatedProducts,
        { name: "", quantity: 1, price: 0, disabled: false },
      ], // Add a new editable product
    });
  };

  const deleteProductRow = (index) => {
    const updatedProducts = formData.products.filter((_, i) => i !== index);
    setFormData({ ...formData, products: updatedProducts });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const total = formData.products.reduce(
        (sum, product) => sum + product.quantity * product.price,
        0
      );
      const taxAmount = (total * formData.tax) / 100;
      const invoice = { ...formData, total: total + taxAmount };
      const response = await axios.post(
        "http://localhost:3000/api/invoices/add",
        invoice
      );
      console.log(response);
      onInvoiceSaved(response.data);
      if (response.status === 201) {
        toast.success("Invoice saved successfully!");
        setFormData({
          customerName: "",
          customerEmail: "",
          products: [{ name: "", quantity: 1, price: 0, disabled: false }],
          tax: 0,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to save invoice.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Customer Name
        </label>
        <input
          type="text"
          placeholder="Enter customer name"
          value={formData.customerName}
          onChange={(e) =>
            setFormData({ ...formData, customerName: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-neutral-500 "
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Customer Email
        </label>
        <input
          type="email"
          placeholder="Enter customer email"
          value={formData.customerEmail}
          onChange={(e) =>
            setFormData({ ...formData, customerEmail: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-neutral-500"
          required
        />
      </div>
      <h3 className=" font-medium text-gray-800 mb-4">Products</h3>
      {formData.products.map((product, index) => (
        <div key={index} className="flex flex-wrap items-center gap-3 mb-4 ">
          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => handleProductChange(index, "name", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-neutral-500"
            disabled={product.disabled} // Disable input if product is marked as disabled
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={product.quantity}
            onChange={(e) =>
              handleProductChange(index, "quantity", e.target.value)
            }
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-neutral-500"
            disabled={product.disabled} // Disable input if product is marked as disabled
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) =>
              handleProductChange(index, "price", e.target.value)
            }
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-neutral-500"
            disabled={product.disabled} // Disable input if product is marked as disabled
            required
          />
          <button
            type="button"
            onClick={() => deleteProductRow(index)}
            className="bg-red-500 text-white px-3 py-3 rounded-md  hover:bg-red-600 transition "
          >
            <FaTrash />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addProductRow}
        className="text-neutral-700 border-2 border-neutral-700 rounded-lg px-4 py-2 hover:bg-neutral-700 hover:text-white transition font-medium"
      >
        Add Product
      </button>
      <div className="my-6">
        <label className="block text-gray-700 font-medium mb-2">Tax (%)</label>
        <input
          type="number"
          placeholder="Enter tax percentage"
          value={formData.tax}
          onChange={(e) => setFormData({ ...formData, tax: e.target.value })}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-neutral-500"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-neutral-700 text-white px-4 py-3 rounded-md hover:bg-neutral-800 transition font-semibold text-lg"
      >
        {isLoading ? "Saving..." : "Save Invoice"}
      </button>
    </form>
  );
};

export default AddInvoiceForm;
