// README.md content
# Creative Upaay Dashboard

A modern, responsive task management dashboard built with React.js and Redux.

## 🚀 Features

- **Kanban Board**: Drag and drop tasks between To Do, In Progress, and Done columns
- **Task Management**: Add, edit, delete, and move tasks
- **Advanced Filtering**: Filter by category, priority, and search by title/description
- **Data Persistence**: All tasks are saved to localStorage and persist across sessions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React.js+vite (18.2+)
- **State Management**: Redux
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/creative-upaay-dashboard.git
   cd creative-upaay-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run lint` - Runs ESLint to check for code issues
- `npm run format` - Formats code using Prettier

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page-level components
├── redux/             # State management (store, actions, reducers)
├── hooks/             # Custom React hooks
├── utils/             # Helper functions and constants
├── styles/            # Global styles and Tailwind configuration
└── data/              # Mock data and initial state
```

## 🎯 Usage

### Adding Tasks
1. Click the "+" button in any column header
2. Fill in the task details (title, description, category, priority, due date)
3. Click "Add Task" to save

### Managing Tasks
- **Move Tasks**: Click the dropdown arrow on any task card to move between columns
- **Delete Tasks**: Use the dropdown menu to delete tasks
- **Filter Tasks**: Use the search bar and filter dropdowns to find specific tasks

### Filtering
- **Search**: Type in the search box to find tasks by title or description
- **Category Filter**: Filter by Work, Personal, or Urgent categories
- **Priority Filter**: Filter by High, Medium, or Low priority tasks

## 🚀 Deployment



### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspiration from modern task management tools
- Tailwind CSS for the excellent utility framework
- Lucide React for the beautiful icon set