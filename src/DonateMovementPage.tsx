import React, { useState, useEffect } from "react";
import { Heart, Globe, Banknote } from "lucide-react";

const DonateMovementPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("ngn");
  const [selectedBank, setSelectedBank] = useState(0);
  const [showForm, setShowForm] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    donationAmount: "",
    transferMethod: "",
    transactionRef: "",
    phone: "",
    message: ""
  });
  
  // Form validation state
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Validate form
  useEffect(() => {
    const { name, email, donationAmount, transferMethod } = formData;
    setIsFormValid(
      name.trim() !== "" && 
      email.trim() !== "" && 
      donationAmount.trim() !== "" && 
      transferMethod.trim() !== ""
    );
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const bankingDetails = {
    ngn: [
      {
        title: "GTBank Nigeria",
        details: [
          { label: "Bank Name", value: "Guaranty Trust Bank (GTB)" },
          { label: "Account Name", value: "FARM4US" },
          { label: "Account Number", value: "3000429056" },
          { label: "CIF ID", value: "C043149978" },
          { label: "Bank Code", value: "058" },
          { label: "Currency", value: "Nigerian Naira (NGN)" }
        ]
      }
    ],
    usd: [
      {
        title: "CitiBank New York",
        details: [
          { label: "Correspondent Bank", value: "CitiBank, New York" },
          { label: "Swift Code", value: "CITIUS33" },
          { label: "FEDWIRE/ABA NUMBER", value: "021000089" },
          { label: "For Credit Of", value: "GUARANTY TRUST BANK PLC, LAGOS NIGERIA" },
          { label: "Beneficiary's Bank Swift Code", value: "GTBINGLA" },
          { label: "GTBank's Account Number", value: "36129295" },
          { label: "For Final Credit Of", value: "Farm4us" },
          { label: "Beneficiary's A/C Number", value: "3000428884 (With GTBank)" }
        ]
      },
      {
        title: "Deutsche Bank New York",
        details: [
          { label: "Correspondent Bank", value: "Deutsche Bank, New York" },
          { label: "Swift Code", value: "BKTRUS33" },
          { label: "FEDWIRE/ABA NUMBER", value: "021001033" },
          { label: "For Credit Of", value: "GUARANTY TRUST BANK PLC, LAGOS NIGERIA" },
          { label: "Beneficiary's Bank Swift Code", value: "GTBINGLA" },
          { label: "GTBank's Account Number", value: "04434658" },
          { label: "For Final Credit Of", value: "Farm4us" },
          { label: "Beneficiary's A/C Number", value: "3000428884 (With GTBank)" }
        ]
      },
      {
        title: "Standard Chartered New York",
        details: [
          { label: "Intermediary Bank", value: "Standard Chartered Bank, New York" },
          { label: "Swift Code", value: "SCBLUS33" },
          { label: "FEDWIRE/ABA NUMBER", value: "026002561" },
          { label: "For Credit Of", value: "GUARANTY TRUST BANK PLC, LAGOS NIGERIA" },
          { label: "Beneficiary's Bank Swift Code", value: "GTBINGLA" },
          { label: "GTBank's Account Number", value: "3582-026828-001" },
          { label: "For Final Credit Of", value: "Farm4us" },
          { label: "Beneficiary's A/C Number", value: "3000428884 (With GTBank)" }
        ]
      },
      {
        title: "GTBank London",
        details: [
          { label: "Intermediary Bank", value: "CitiBank, New York" },
          { label: "Swift Code", value: "CITIUS33" },
          { label: "FEDWIRE Routing Code", value: "021000089" },
          { label: "Account with Bank", value: "GUARANTY TRUST BANK (UK) LIMITED" },
          { label: "Swift Code", value: "GTBIGB2L" },
          { label: "Account Number", value: "36917996" },
          { label: "GTBank's Account No", value: "90110014250330" },
          { label: "For Final Credit Of", value: "Farm4us" },
          { label: "Beneficiary's A/C Number", value: "3000428884 (With GTBank)" }
        ]
      }
    ],
    gbp: [
      {
        title: "Standard Chartered London",
        details: [
          { label: "Correspondent Bank", value: "SCB, London" },
          { label: "Swift Code", value: "SCBLGB2L" },
          { label: "Sort Code", value: "609104" },
          { label: "For Credit Of", value: "Guaranty Trust Bank plc, Lagos Nigeria" },
          { label: "Beneficiary's Bank Swift Code", value: "GTBINGLA" },
          { label: "Account Number", value: "01 027065310 50" },
          { label: "IBAN Number", value: "GB90 SCBL 6091 0427 0653 10" },
          { label: "For Final Credit Of", value: "Farm4us" },
          { label: "Beneficiary's A/C Number", value: "3000428884 (With GTBank)" }
        ]
      },
      {
        title: "CitiBank London",
        details: [
          { label: "Correspondent Bank", value: "CitiBank, London" },
          { label: "Swift Code", value: "CITIGB2L" },
          { label: "Sort Code", value: "185008" },
          { label: "For Credit Of", value: "Guaranty Trust Bank plc, Lagos Nigeria" },
          { label: "Beneficiary's Bank Swift Code", value: "GTBINGLA" },
          { label: "IBAN Number", value: "GB72 CITI 1850 0850 0808 3157 95" },
          { label: "For Final Credit Of", value: "Farm4us" },
          { label: "Beneficiary's A/C Number", value: "3000429070 (With GTBank)" }
        ]
      }
    ],
    eur: [
      {
        title: "CitiBank London",
        details: [
          { label: "Correspondent Bank", value: "CitiBank, London" },
          { label: "Swift Code", value: "CITIGB2L" },
          { label: "Sort Code", value: "185008" },
          { label: "For Credit Of", value: "Guaranty Trust Bank plc, Lagos Nigeria" },
          { label: "Beneficiary's Bank Swift Code", value: "GTBINGLA" },
          { label: "IBAN Number", value: "GB05 CITI 1850 0810 8205 71" },
          { label: "For Final Credit Of", value: "Farm4us" },
          { label: "Beneficiary's A/C Number", value: "3000429094 (With GTBank)" }
        ]
      },
      {
        title: "Deutsche Bank Frankfurt",
        details: [
          { label: "Correspondent Bank", value: "Deutsche Bank Frankfurt" },
          { label: "Swift Code", value: "DEUTDEFF" },
          { label: "Sort Code", value: "50070010" },
          { label: "For Credit Of", value: "Guaranty Trust Bank plc, Lagos Nigeria" },
          { label: "Beneficiary's Bank Swift Code", value: "GTBINGLA" },
          { label: "IBAN Number", value: "DE84 5007 0010 0955 7224 01" },
          { label: "For Final Credit Of", value: "Farm4us" },
          { label: "Beneficiary's A/C Number", value: "3000429094 (With GTBank)" }
        ]
      }
    ]
  };

  const currencySymbols = {
    ngn: "₦",
    usd: "$",
    gbp: "£",
    eur: "€"
  };

  const currencyNames = {
    ngn: "Nigerian Naira",
    usd: "US Dollar",
    gbp: "British Pound",
    eur: "Euro"
  };

  const currentBankDetails = bankingDetails[selectedCurrency as keyof typeof bankingDetails];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="w-16 h-16 text-yellow-300" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Donate to the Movement</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in transforming agriculture across Africa. Your donation helps build sustainable farming communities, 
              empowers local farmers, and creates lasting impact for generations to come.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <Globe className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Global Impact</div>
                <div className="text-sm opacity-90">Across Africa</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Banknote className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Multi-Currency</div>
                <div className="text-sm opacity-90">NGN, USD, GBP, EUR</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">100% Impact</div>
                <div className="text-sm opacity-90">Direct to farms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Currency Selection */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose Your Currency</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(bankingDetails).map((currency) => (
              <button
                key={currency}
                onClick={() => {
                  setSelectedCurrency(currency);
                  setSelectedBank(0);
                }}
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg transition-all ${
                  selectedCurrency === currency
                    ? "bg-green-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-green-500 hover:text-green-600"
                }`}
              >
                {currencySymbols[currency as keyof typeof currencySymbols]} {currencyNames[currency as keyof typeof currencyNames].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Bank Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Select Transfer Method for {currencyNames[selectedCurrency as keyof typeof currencyNames]}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {currentBankDetails.map((bank, index) => (
              <button
                key={index}
                onClick={() => setSelectedBank(index)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedBank === index
                    ? "border-green-600 bg-green-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-green-400"
                }`}
              >
                <div className="font-semibold text-gray-800">{bank.title}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {bank.details.find(d => d.label.includes('Swift'))?.value || 
                   bank.details.find(d => d.label.includes('Account'))?.value}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Bank Details */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mb-12">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
            <h3 className="text-2xl font-bold flex items-center">
              <Banknote className="w-8 h-8 mr-3" />
              {currentBankDetails[selectedBank].title} - Transfer Details
            </h3>
            <p className="mt-2 opacity-90">Use these details for your {currencyNames[selectedCurrency as keyof typeof currencyNames]} transfer</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentBankDetails[selectedBank].details.map((detail, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row border-b border-gray-100 pb-3">
                  <span className="font-semibold text-gray-700 sm:w-2/5 mb-1 sm:mb-0">{detail.label}:</span>
                  <span className="text-gray-900 font-mono text-sm bg-gray-50 px-3 py-1 rounded sm:w-3/5">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            I've Made My Transfer - Notify Farm4Us
          </button>
        </div>

        {/* Notification Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Donation Notification</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-white hover:text-gray-200 text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
                <p className="mt-2 opacity-90">Help us track your donation and send you a receipt</p>
              </div>
              
              <div className="p-8">
                <form 
                  action="https://formsubmit.co/hr@farm4us.com" 
                  method="POST"
                  className="space-y-6"
                >
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Donation Notification" />
                  <input type="hidden" name="_redirect" value="http://localhost:5174/thank-you" />
                  
                  {/* Form Type */}
                  <input type="hidden" name="formType" value="donation" />
                  <input type="hidden" name="currency" value={selectedCurrency} />
                  <input type="hidden" name="bankUsed" value={currentBankDetails[selectedBank].title} />

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">Full Name *</label>
                    <input
                      name="name"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">Donation Amount *</label>
                    <input
                      name="donationAmount"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder={`e.g. ${currencySymbols[selectedCurrency as keyof typeof currencySymbols]}100`}
                      value={formData.donationAmount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">Transfer Method Used *</label>
                    <select 
                      name="transferMethod"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      value={formData.transferMethod}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select the bank you used</option>
                      {currentBankDetails.map((bank, index) => (
                        <option key={index} value={bank.title}>
                          {currencyNames[selectedCurrency as keyof typeof currencyNames]} via {bank.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">Transaction Reference</label>
                    <input
                      name="transactionRef"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Bank reference number (if available)"
                      value={formData.transactionRef}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="+234 000 000 0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">Message (Optional)</label>
                    <textarea
                      name="message"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 h-24 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Any message you'd like to include with your donation"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="text-center pt-4">
                    <button 
                      type="submit"
                      className={`bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all ${
                        !isFormValid ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                      disabled={!isFormValid}
                    >
                      Submit Donation Information
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateMovementPage;