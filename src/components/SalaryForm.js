import React from 'react';

const SalaryForm = ({ salaryAmount, taxDeduction, bankName, accountNumber }) => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Salary Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="salaryAmount" className="block font-medium text-gray-800">Salary Amount</label>
          <input
            type="text"
            id="salaryAmount"
            name="salaryAmount"
            value={salaryAmount}
            className="border border-gray-300 rounded-md p-2 w-full"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="taxDeduction" className="block font-medium text-gray-800">Tax Deduction</label>
          <input
            type="text"
            id="taxDeduction"
            name="taxDeduction"
            value={taxDeduction}
            className="border border-gray-300 rounded-md p-2 w-full"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="bankName" className="block font-medium text-gray-800">Bank Name</label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={bankName}
            className="border border-gray-300 rounded-md p-2 w-full"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="accountNumber" className="block font-medium text-gray-800">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={accountNumber}
            className="border border-gray-300 rounded-md p-2 w-full"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default SalaryForm;
