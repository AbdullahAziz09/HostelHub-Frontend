import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const plans = [
  { id: 1, name: 'Basic Plan', price: '$10/month', features: ['Feature 1', 'Feature 2'] },
  { id: 2, name: 'Standard Plan', price: '$20/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  { id: 3, name: 'Premium Plan', price: '$30/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
];

const PaymentPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [purchasedPlan, setPurchasedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    // Prevent selecting another plan if one is already purchased
    if (purchasedPlan) {
      toast.error('You cannot select a new plan until you cancel your current plan.');
      return;
    }

    // Allow selecting a plan if no plan is purchased
    setSelectedPlan(plan);
  };

  const handleBuy = () => {
    if (!selectedPlan) {
      toast.error('Please select a plan before buying.');
      return;
    }
    setPurchasedPlan(selectedPlan);
    toast.success(`You have successfully purchased the ${selectedPlan.name}`);
    setSelectedPlan(null); // Clear selected plan
  };

  const handleCancel = () => {
    setPurchasedPlan(null); // Clear purchased plan
    setSelectedPlan(null); // Allow selection again
    toast.info('Your plan has been canceled.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Select a Payment Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between p-6 border rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 h-full ${
                selectedPlan?.id === plan.id ? 'bg-blue-100' : 'bg-white'
              }`}
            >
              <div>
                <h2 className="text-xl font-semibold text-center">{plan.name}</h2>
                <p className="text-lg text-center">{plan.price}</p>
                <ul className="text-gray-600 mt-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-center">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleSelectPlan(plan)}
                  disabled={!!purchasedPlan} // Disable if a plan is already purchased
                  className={`mt-4 ${selectedPlan?.id === plan.id ? 'bg-blue-500' : 'bg-blue-400'} text-white px-4 py-2 rounded hover:bg-blue-600`}
                >
                  {selectedPlan?.id === plan.id ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-6">
          {purchasedPlan ? (
            <p className="text-red-500 font-semibold">
              You have to cancel your current plan to upgrade.
            </p>
          ) : (
            <button
              onClick={handleBuy}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Buy
            </button>
          )}
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center">Purchased Plan</h2>
          <table className="min-w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Username</th>
                <th className="border border-gray-300 p-2">Plan</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 text-center">{purchasedPlan ? 'User123' : 'Username'}</td>
                <td className="border border-gray-300 p-2 text-center">{purchasedPlan ? purchasedPlan.name : 'No plan selected'}</td>
                <td className="border border-gray-300 p-2 text-center">
                  {purchasedPlan && (
                    <button
                      onClick={handleCancel}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default PaymentPlans;
