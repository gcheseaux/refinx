# Refinx - Chat Interface with Tauri

This project is a chat interface built with Tauri and React, allowing users to chat with an LLM (Large Language Model).

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Required for frontend development and npm.
- **Rust**: Required for Tauri's backend.
- **Tauri CLI**: Required to create and manage Tauri projects.

## Setup Instructions

### 1. Install Dependencies

Use `brew` to install Node.js and Rust:

```bash
brew install node rust
```

Verify the installations:

```bash
node -v
npm -v
cargo --version
```

### 2. Navigate to Your Project Directory

This guide assumes your project is in `~/src/refinx`. If it's elsewhere, replace the path accordingly.

```bash
cd ~/src/refinx
```

### 3. Install Tauri CLI

Install the Tauri CLI globally using npm:

```bash
npm install --global @tauri-apps/cli
```

### 4. Create the Tauri Project

Create a new Tauri project with the React template:

```bash
npm create tauri-app@latest refinx -- --template react
```

### 5. Navigate into the Project

```bash
cd refinx
```

### 6. Install Project Dependencies

```bash
npm install
```

### 7. Run the Development Server

```bash
npm run tauri dev
```

This will start the Tauri development server, opening a window with your chat interface.

## Project Structure

- `src/`: Contains the React frontend code.
- `src-tauri/`: Contains the Rust backend code.
- `tauri.conf.json`: Tauri configuration file.

## Next Steps

- Design the chat UI in the React frontend.
- Implement API calls to an LLM in the Rust backend.
- Use Tauri's IPC for communication between frontend and backend.

## Troubleshooting

- If you encounter issues with Rust, ensure you have the latest version installed.
- If the Tauri CLI is not found, ensure it is installed globally and your PATH is updated.
