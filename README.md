<h1 align="center">🔐 Lucia Auth Template</h1> <p align="center"> <img src="https://img.shields.io/badge/Lucia-Auth-2B2D42?style=for-the-badge&logo=lucia&logoColor=white" /> <img src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" /> <img src="https://img.shields.io/badge/OAuth-GitHub-24292F?style=for-the-badge&logo=github&logoColor=white" /> <img src="https://img.shields.io/badge/OAuth-Google-4285F4?style=for-the-badge&logo=google&logoColor=white" /> <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" /> </p> <p align="center"> <b>A secure, modern authentication template using <a href="https://lucia-auth.com/">Lucia</a>, with GitHub & Google OAuth, 2FA, and WebAuthn.</b> </p> <p align="center"> <i>Kickstart your next SvelteKit or Node.js project with rock-solid, production-ready authentication.</i> </p>

<br>

<h2>✨ Features</h2>
🔑 Lucia-powered Session Management<br>
🔗 GitHub OAuth integration<br>
🔗 Google OAuth (optional)<br>
🛡️ Two-Factor Authentication (TOTP)<br>
🧑‍💻 WebAuthn for passwordless login<br>
🗄️ MongoDB as the session/user store<br>
⚡ Secure, scalable, and customizable template<br>

<br>

<h2>🛠️ Tech Stack</h2> <p align="left"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg" alt="svelte" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" alt="google" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </p>

<br>

<h3>📦 Project Structure</h3> 📁 <b>src/</b> &nbsp; <i># Main application code (SvelteKit or Node.js)</i><br> &nbsp;&nbsp;├── 📁 lib/ &nbsp; <i># Lucia config, authentication logic</i><br> &nbsp;&nbsp;├── 📁 routes/ &nbsp; <i># API endpoints (login, callback, etc.)</i><br> &nbsp;&nbsp;├── 📁 components/ &nbsp; <i># UI components (login forms, 2FA, etc.)</i><br> &nbsp;&nbsp;└── app.html / +layout.svelte / +page.svelte<br> <br> 📁 <b>prisma/</b> &nbsp; <i># (If using Prisma ORM)</i><br> 📁 <b>public/</b> &nbsp; <i># Static assets</i><br> .env.local &nbsp; <i># Environment variables</i><br> README.md &nbsp; <i># Project documentation</i><br> package.json &nbsp; <i># Project metadata and dependencies</i><br> yarn.lock / package-lock.json<br>

<br>

<h2 style="font-family:Arial, sans-serif; color:#e67e22;">⚡ Getting Started</h2> <h3 style="font-family:Arial, sans-serif; color:#34495e;">1. 🔽 Clone the Repository</h3> <div style="background-color:#f4f4f4; padding:12px; border-radius:8px; border:1px solid #ddd; font-family:Courier New, monospace; white-space:pre-line;"> git clone https://github.com/shankar-mallidi/lucia-auth-template.git cd lucia-auth-template </div>
<h3 style="font-family:Arial, sans-serif; color:#34495e;">2. ⚙️ Setup Environment Variables</h3> <p style="font-family:Arial, sans-serif;">Create a <code>.env.local</code> file in the root directory with your MongoDB URI and OAuth credentials:</p> <div style="background-color:#fdf6e3; padding:12px; border-radius:8px; border:1px solid #eee; font-family:Courier New, monospace; white-space:pre-line;"> MONGODB_URI=your_mongodb_connection_string GITHUB_CLIENT_ID=your_github_client_id GITHUB_CLIENT_SECRET=your_github_client_secret GOOGLE_CLIENT_ID=your_google_client_id GOOGLE_CLIENT_SECRET=your_google_client_secret </div>
<h3 style="font-family:Arial, sans-serif; color:#34495e;">3. 📦 Install Dependencies</h3> <div style="background-color:#f4f4f4; padding:12px; border-radius:8px; border:1px solid #ddd; font-family:Courier New, monospace; white-space:pre-line;"> yarn install # or npm install </div>
<h3 style="font-family:Arial, sans-serif; color:#34495e;">4. 🚀 Run the Application</h3> <div style="background-color:#f4f4f4; padding:12px; border-radius:8px; border:1px solid #ddd; font-family:Courier New, monospace; white-space:pre-line;"> yarn dev # or npm run dev </div> <p style="font-family:Arial, sans-serif;">The app will be available at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></p>


<br>

<h2>🧪 Example API Usage</h2> <details> <summary><b>Login with GitHub</b></summary>
text
GET /api/auth/github
Redirects user to GitHub OAuth consent screen.

</details> <details> <summary><b>2FA Verification</b></summary>
text
POST /api/auth/2fa
Content-Type: application/json

{
  "userId": "abc123",
  "totp": "123456"
}
</details>

<p> in colaboration with https://github.com/raydennnnn/ </p>

