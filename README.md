# LinkVault Frontend

<p align="center">
  <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/title.svg" width="50%"/>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

> **Note**: This is the frontend repository of LinkVault. The backend code can be found at [LinkVault Backend](https://github.com/brijrajparmar27/LinkVault-backend).

LinkVault is your personal link management solution that helps you save, organize, and access your important links with ease. Built with modern web technologies, it offers a seamless experience for managing your digital bookmarks with automatic thumbnail generation and a beautiful user interface.

## Features

- 🔐 **Secure Authentication**: User-friendly signup and login system
- 🔗 **Link Management**: Save and organize your important links
- 🖼️ **Automatic Thumbnails**: Generate preview images automatically using Puppeteer
- 📱 **Responsive Design**: Works seamlessly on both desktop and mobile devices
- 🎨 **Modern UI**: Clean and intuitive interface built with Mantine
- 🔍 **Easy Navigation**: Quick access to your saved links
- 🔔 **Real-time Notifications**: Stay informed with toast notifications
- 🎭 **Beautiful Animations**: Enhanced user experience with Lottie animations

## Tech Stack

### Frontend

- **React.js**: Modern UI development
- **Vite**: Fast development and building
- **Mantine**: Component library for rapid development
- **React Router**: Client-side routing
- **React Query**: Data fetching and caching
- **Axios**: HTTP client
- **React Toastify**: Toast notifications
- **Lottie**: Animation library
- **React Icons**: Icon library
- **Socket.io Client**: Real-time communication

### Backend (Separate Repository)

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Puppeteer**: Thumbnail generation
- **Socket.io**: Real-time features

## Screenshots

### Mobile View

<table style="width: 100%;">
  <tr>
    <td>
      <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/M1.jpeg" alt="Mobile 1">
    </td>
    <td>
      <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/M2.jpeg" alt="Mobile 2">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/M3.jpeg" alt="Mobile 3">
    </td>
    <td>
      <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/M4.jpeg" alt="Mobile 4">
    </td>
  </tr>
</table>

### Desktop View

   <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/D1.jpeg" alt="Desktop 1">
   <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/D2.jpeg" alt="Desktop 2">
   <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/D3.jpeg" alt="Desktop 3">
   <img src="https://raw.githubusercontent.com/brijrajparmar27/LinkVault-frontend/master/repo_assets/D4.jpeg" alt="Desktop 4">

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance
- Backend server running (see [LinkVault Backend](https://github.com/brijrajparmar27/LinkVault-backend) repository)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/brijrajparmar27/LinkVault-frontend.git
   cd LinkVault-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   VITE_API_URL=your_backend_url
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Sign Up/Login**

   - Create a new account or log in with existing credentials
   - Verify your email if required

2. **Adding Links**

   - Click the "Add Link" button
   - Enter the URL and title
   - The system will automatically generate a thumbnail
   - Save the link to your collection

3. **Managing Links**
   - View all your saved links in a grid layout
   - Click on links to open them
   - Edit or delete links as needed
   - Organize links with custom titles and categories

## Contributing

We welcome contributions to LinkVault! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Brijrajsinh Parmar - [brijrajparmaromegab32@gmail.com](mailto:brijrajparmaromegab32@gmail.com)

Project Links:

- Frontend: [https://github.com/brijrajparmar27/LinkVault-frontend](https://github.com/brijrajparmar27/LinkVault-frontend)
- Backend: [https://github.com/brijrajparmar27/LinkVault-backend](https://github.com/brijrajparmar27/LinkVault-backend)

---

⭐️ If you like this project, please give it a star on GitHub!
