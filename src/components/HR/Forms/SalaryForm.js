import axios from 'axios';
import React, { useState } from 'react';

const SalaryForm = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [taxDeduction, setTaxDeduction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sal = { selectedEmployee, basicSalary, bankName, accountNo, accountHolderName, ifscCode, taxDeduction }
    await axios.post( 'http://localhost:5000/salary/add', sal );
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Salary Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="employee" className="block text-sm font-medium mb-2">
            Select Employee
          </label>
          <select
            id="employee"
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Employee</option>
            {/* Add employee options dynamically */}
            <option value="employee1">Employee 1</option>
            <option value="employee2">Employee 2</option>
            <option value="employee3">Employee 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="basicSalary" className="block text-sm font-medium mb-2">
            Basic Salary
          </label>
          <input
            type="text"
            id="basicSalary"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bankName" className="block text-sm font-medium mb-2">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="accountNo" className="block text-sm font-medium mb-2">
            Account No
          </label>
          <input
            type="text"
            id="accountNo"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="accountHolderName" className="block text-sm font-medium mb-2">
            Account Holder Name
          </label>
          <input
            type="text"
            id="accountHolderName"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            className="w-full px-3 py-2 border rounded
            focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ifscCode" className="block text-sm font-medium mb-2">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifscCode"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="taxDeduction" className="block text-sm font-medium mb-2">
            Tax Deduction
          </label>
          <input
            type="text"
            id="taxDeduction"
            value={taxDeduction}
            onChange={(e) => setTaxDeduction(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SalaryForm;