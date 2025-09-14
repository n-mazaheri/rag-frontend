import "./Landing.css";

export default function Landing() {
  return (
    <div className="bg-light">
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-primary font-bold text-xl">ContextAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-dark hover:text-primary">
                Features
              </a>
              <a href="#how-it-works" className="text-dark hover:text-primary">
                How It Works
              </a>
              <a
                href="/signin"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90"
              >
                Sign In
              </a>
              <a
                href="/signup"
                className="text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white"
              >
                Sign Up
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button id="menu-btn" className="text-dark">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className="hidden md:hidden bg-white py-2 px-4 absolute w-full shadow-lg"
        >
          <a href="#features" className="block py-2 text-dark hover:text-primary">
            Features
          </a>
          <a
            href="#how-it-works"
            className="block py-2 text-dark hover:text-primary"
          >
            How It Works
          </a>
          <div className="flex space-x-4 py-2">
            <a
              href="/signin"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-opacity-90"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="text-primary border border-primary px-4 py-2 rounded-md text-sm hover:bg-primary hover:text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Chat with Your PDF Documents Using AI
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Upload your PDFs, ask questions in natural language, and get
              accurate answers powered by Langchain and advanced language
              models.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/chat"
                className="bg-primary text-white text-center px-6 py-3 rounded-md hover:bg-opacity-90"
              >
                Get Started Free
              </a>
            
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-64 h-64 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    How does the proposed quantum algorithm improve optimization
                    problems?
                  </p>
                </div>
                <div className="bg-primary text-white p-4 rounded-lg ml-8">
                  <p className="text-sm">
                    The research paper suggests that the quantum algorithm
                    provides a quadratic speedup for certain optimization
                    problems by leveraging quantum superposition and
                    interference effects. This is achieved through...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dark mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Our AI-powered platform helps you extract insights from your PDF
            documents through natural conversation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-light p-6 rounded-lg shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                PDF Upload & Processing
              </h3>
              <p className="text-gray-600">
                Upload any PDF document. Our system extracts the text and
                generates embeddings for efficient retrieval.
              </p>
            </div>

            <div className="feature-card bg-light p-6 rounded-lg shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                Natural Language Q&A
              </h3>
              <p className="text-gray-600">
                Ask questions about your documents in plain English. Get
                accurate answers powered by advanced language models.
              </p>
            </div>

            <div className="feature-card bg-light p-6 rounded-lg shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600">
                Your documents are stored securely with user-specific embeddings
                in ChromaDB. Your data remains private and isolated.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Our AI-powered process makes it simple to extract insights from your
            documents
          </p>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center justify-center">
            <div className="">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark">
                      Upload Your PDF
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Sign in to your account and upload any PDF document. Our
                      system will process it and generate embeddings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark">
                      Ask Questions
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Type your question in natural language about the content
                      of your uploaded PDF document.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark">
                      Get AI-Powered Answers
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Our system finds the most relevant content from your PDF
                      and generates a natural language answer using advanced
                      LLMs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 hero-gradient px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform How You Interact with PDFs?
          </h2>
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already using PDF Insight to extract
            valuable information from their documents through natural
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/chat"
              className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90"
            >
              Get Started Free
            </a> 
          </div>
        </div>
      </section>
      <footer className="bg-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-white font-bold text-xl">PDF Insight</span>
              <p className="text-gray-400 mt-2">
                Powered by Langchain, ChromaDB, and advanced LLMs
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; 2025 PDF Insight. A sample project showcasing AI-powered
              document interaction.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
