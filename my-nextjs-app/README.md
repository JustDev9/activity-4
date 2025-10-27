# My Next.js Personal Profile

This is a personal profile application built with Next.js and styled using Tailwind CSS. The application includes a profile page, an about page, and a contact page, providing a comprehensive overview of the user.

## Project Structure

```
my-nextjs-app
├── src
│   ├── pages
│   │   ├── index.tsx        # Main entry point of the application
│   │   ├── profile.tsx      # Personal profile page
│   │   ├── about.tsx        # About page with user information
│   │   └── contact.tsx      # Contact page with contact information
│   ├── components
│   │   └── Navbar.tsx       # Navigation bar component
│   └── styles
│       └── globals.css      # Global CSS styles
├── public
│   └── favicon.ico          # Favicon for the application
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # npm configuration and dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-nextjs-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Project Objectives

- Create a personal profile page that showcases the user's information.
- Implement a navigation bar for easy access to different sections of the application.
- Use Tailwind CSS for styling to ensure a responsive and modern design.
- Include basic interactivity using React, such as buttons that trigger alerts or change styles.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript

Feel free to explore and modify the project as needed!