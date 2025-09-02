import React, { useState } from "react";

const Index = () => {
  const [date, setDate] = useState("");
  const [age, setAge] = useState(null);

  const ageCalculate = () => {
    if (!date) {
      alert("Please select a date");
      return;
    }

    const today = new Date();
    const birthDate = new Date(date);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Days adjust
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // Months adjust
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-teal-600 min-h-screen flex flex-col items-center py-10  justify-center">
      <p className="text-white text-2xl font-bold ">Age Calculator</p>

      <div className="min-w-[400px] min-h-[70px] bg-gray-300 rounded-xl mt-10 p-5">
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          max={new Date().toISOString().split("T")[0]} // future date disable
          className="p-4 rounded-lg bg-white text-black"
        />

        <button
          className="bg-blue-500 text-white p-2 rounded-lg ml-10"
          onClick={ageCalculate}
        >
          Calculate Age
        </button>


      </div>
      {age && (
        <p className="text-lg font-semibold text-gray-800 mt-4">
          You are{" "}
          <span className="text-blue-600">{age.years}</span> years,{" "}
          <span className="text-blue-600">{age.months}</span> months, and{" "}
          <span className="text-blue-600">{age.days}</span> days old.
        </p>
      )}
    </div>
  );
};

export default Index;
