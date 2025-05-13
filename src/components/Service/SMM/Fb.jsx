import { FaFacebookF } from "react-icons/fa";
function Fb() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition text-left">
      <div className="flex items-center mb-4 text-blue-600 text-3xl">
        <FaFacebookF className="mr-3" />
        <h3 className="text-xl font-bold">Facebook Marketing</h3>
      </div>
      <p className="text-gray-600 mb-2">
        Reach your ideal audience with advanced targeting and engaging content.
      </p>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        <li>Page Optimization & Branding</li>
        <li>Facebook Ad Campaigns</li>
        <li>Community Engagement</li>
        <li>Lead Generation Strategies</li>
      </ul>
    </div>
  );
}

export default Fb;
