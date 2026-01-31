# Project Overview
The Smart E-Waste & Hazardous Waste Traceability System is a digital platform designed to ensure complete traceability of e-waste and hazardous waste from its point of generation to certified recycling or safe disposal.
The system addresses the issue of illegal dumping and improper waste handling by introducing QR-code based tracking, real-time status updates, and a transparent monitoring dashboard for regulatory authorities.
This solution aligns with Eco-Champion Hackathon – Track C: Waste Management.
# 🎯 Problem Statement
E-waste and hazardous waste are often mixed with general waste and disposed of in landfills due to the absence of a transparent tracking mechanism. Although certified recyclers exist, there is no end-to-end visibility to ensure compliance, leading to environmental pollution and loss of valuable recyclable materials.
# 💡 Solution
This project introduces a digital trace-and-verify ecosystem where:
Waste is registered digitally
A unique QR code is generated for each waste item
Authorized collectors and recyclers update waste status by scanning or referencing the QR code
Regulatory authorities monitor the complete lifecycle through a centralized dashboard
# 🔄 System Workflow
Waste Registration – Citizen/Institution registers waste via web interface
QR Code Generation – Unique QR code assigned to waste
Collection Stage – Collector scans QR and marks waste as collected
Recycling Stage – Certified recycler verifies and marks waste as recycled
Monitoring – Admin dashboard displays real-time waste lifecycle status
# 🧩 Key Features
QR-based waste identification
End-to-end waste lifecycle tracking
Role-based access (Citizen, Collector, Recycler, Admin)
Real-time status updates
Transparent monitoring dashboard
Scalable and low-cost implementation
# 🛠️ Technologies Used
# 🔹 Frontend
HTML5
CSS3
JavaScript (Vanilla JS)
Fetch API (for backend communication)
# 🔹 Backend
Node.js
Express.js
# 🔹 Database
MongoDB (NoSQL database)
# 🔹 Other Tools & Libraries
QRCode npm package (QR generation)
CORS (Cross-Origin Resource Sharing)
Mongoose (MongoDB ODM)
# 🚀 Installation & Setup
Prerequisites
Node.js
MongoDB
Web Browser
Steps
Copy code
Bash
# Clone the repository
git clone <your-github-repo-link>

# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start MongoDB
mongod

# Run the server
node server.js
Open frontend files (index.html) directly in the browser.
# 📊 Admin Dashboard
The admin dashboard displays:
Total registered waste
Current status (Registered / Collected / Recycled)
Waste type and lifecycle tracking
This enables authorities to monitor compliance and identify gaps in waste handling.
# 🌱 Environmental Impact
Prevents illegal dumping of hazardous waste
Increases recycling accountability
Improves environmental governance
Encourages responsible waste segregation
# 🔮 Future Enhancements
Blockchain-based tamper-proof records
Mobile application (Android/iOS)
AI-based image verification at recycler level
Integration with government pollution control systems
Incentive-based gamification for citizens
