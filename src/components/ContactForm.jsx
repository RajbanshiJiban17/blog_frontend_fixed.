
function ContactForm() {
return (
    <section id="contact" className="relative bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-24">
  <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
   
    <div className="text-center max-w-2xl mx-auto mb-20">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">Let’s Connect</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
        Have a project in mind, a question, or just want to say hi? Drop us a line.
      </p>
    </div>

    
    <div className="grid md:grid-cols-2 gap-12">
      
      <div className="space-y-8">
        
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl">
            📍
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Our Office</h4>
            <p className="text-gray-600 dark:text-slate-400">Location<br />New York, NY 10001</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl">
            📞
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Say Hello</h4>
            <p className="text-gray-600 dark:text-slate-400">+92 334---------</p>
            <p className="text-gray-600 dark:text-slate-400">E-mail@example.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl">
            ⏰
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Working Hours</h4>
            <p className="text-gray-600 dark:text-slate-400">Mon–Fri: 09:00–6:00</p>
            <p className="text-gray-600 dark:text-slate-400">Sat: 08:00–12:00</p>
          </div>
        </div>
      </div>

      
      <div className="bg-white dark:bg-slate-900/70 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h3>
        <form className="space-y-6" id="contactForm">
          <div>
            <label for="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com"
              className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
          </div>
          <div>
            <label for="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message..."
              className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"></textarea>
          </div>
          <div>
            <button type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 transition-colors text-white py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}
export default ContactForm
