# Lucia Authentication Template

This repository is a template for implementing authentication using Lucia, featuring session management, GitHub OAuth integration, and advanced security features like Two-Factor Authentication (2FA) and WebAuthn.

## Features

- Session Management using Lucia.
- GitHub OAuth integration.
- Optional Google OAuth support.
- Advanced security features:
  - Two-Factor Authentication (TOTP).
  - WebAuthn for passwordless login.

## Setup Instructions

1. Clone this repository:

   git clone https://github.com/<shankar-mallidi>/lucia-auth-template.git
   cd lucia-auth-template

2. Install dependencies:

   yarn install

3. Configure environment variables:
   Create a .env.local file in the root directory and add your MongoDB URI and OAuth credentials.

4. Run the application locally:

   yarn dev

5. Access the app at http://localhost:3000.
