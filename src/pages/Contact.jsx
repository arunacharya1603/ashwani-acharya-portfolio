import React, { useEffect, useState } from 'react';

const Contact = () => {

  const formInitailDetails = {
    name: '',
    email: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitailDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
      });
  }

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  }, []);


const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText("Sending...");
  // const { name, email, message } = formDetails;
  let response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDetails)
    });
    let result = await response.json();
    console.log(result);
    if (result.status === "success") {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({ success: false, message: "Failed to send message" });
    }
        
}


  return (
    <div className="py-16 mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Me</h2>
        <div className="max-w-lg mx-auto p-1 rounded-lg shadow-lg">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-8 rounded-lg space-y-6">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formDetails.name}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                  onChange={(e) => onFormUpdate("name", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={formDetails.email}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Email"
                  onChange={(e) => onFormUpdate("email", e.target.value)}

                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                value={formDetails.message}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                  placeholder="Your Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {buttonText}
                </button>
                {status.message && (
                  <div>
                    <p className={status.success == false ? "bg-red-700" : "bg-green-800"}>
                      {status.message}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
