import { useState } from "react";
import API from "../api";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingChat, setIsLoadingChat] = useState(false);

  const [uploadStatus, setUploadStatus] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;
    
    setIsLoadingChat(true);
    try {
      const res = await API.get("/ask", { params: { q: question } });
      setAnswer(res.data.answer);
    } catch (err) {
      alert(err.response?.data?.detail || "Failed to get answer");
    } finally {
      setIsLoadingChat(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      await API.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadStatus("File uploaded successfully!");
      setFile(null);
    } catch (err) {
      setUploadStatus(err.response?.data?.detail || "Upload failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAsk();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Chat with your documents</h2>
          </div>

          {/* File Upload Section */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload PDF Document</label>
            <div className="flex items-center">
              <label className="flex-1">
                <div className="relative border border-gray-300 rounded-lg px-4 py-3 bg-white flex items-center justify-between cursor-pointer hover:border-indigo-500 transition-colors duration-300">
                  <span className="text-gray-600 truncate">
                    {file ? file.name : "Choose a PDF file"}
                  </span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <input 
                    type="file" 
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files[0])} 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </label>
              <button 
                onClick={handleUpload} 
                disabled={!file || isLoading}
                className="ml-3 bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isLoading ? "Uploading..." : "Upload"}
              </button>
            </div>
            {uploadStatus && (
              <p className={`mt-2 text-sm ${uploadStatus.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {uploadStatus}
              </p>
            )}
          </div>

          {/* Question Input Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Ask a question about your document</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoadingChat}
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
              />
              <button 
                onClick={handleAsk} 
                disabled={!question.trim() || isLoadingChat}
                className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isLoadingChat ? "Thinking..." : "Ask"}
              </button>
            </div>
          </div>

          {/* Answer Section */}
          {answer && (
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800 mb-1">Answer</h3>
                  <p className="text-gray-700">{answer}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-indigo-600 font-bold">1</span>
              </div>
              <p className="text-sm text-gray-600">Upload a PDF document using the upload button above</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-indigo-600 font-bold">2</span>
              </div>
              <p className="text-sm text-gray-600">Ask questions about the content of your document</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-indigo-600 font-bold">3</span>
              </div>
              <p className="text-sm text-gray-600">Get AI-powered answers based on your document's content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}