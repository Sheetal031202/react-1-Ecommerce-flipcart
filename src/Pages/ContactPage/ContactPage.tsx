import React from 'react'

function ContactPage() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 my-10 ">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          We'd love to hear from you! Please fill out the form below and we'll get back to you soon.
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div>
            
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-600 dark:text-gray-300">
          <p>📞 +91 98765 43210</p>
          <p>📧 support@example.com</p>
          <p>🏢 123, Main Street, Mumbai, India</p>
        </div>
      </div>
    </section> 
    </>
  )
}

export default ContactPage
