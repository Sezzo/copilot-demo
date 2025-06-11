# Productivity Hub

A modern, full-stack productivity application built with Angular and NestJS. This application includes task management, calendar functionality, mood tracking, and a comprehensive dashboard.

## 🚀 Features

### 📊 Dashboard
- **Overview Statistics**: Quick view of pending tasks, completed items, and high-priority tasks
- **Quick Actions**: Fast access to create new tasks, events, or mood entries
- **Motivational Content**: Daily inspiration and productivity tips
- **Personalized Greeting**: Time-based greetings and current date display

### ✅ Todo Management
- **CRUD Operations**: Create, read, update, and delete tasks
- **Priority Levels**: High, medium, and low priority classification
- **Due Dates**: Optional deadline tracking
- **Completion Status**: Mark tasks as complete/incomplete
- **Smart Sorting**: Automatic sorting by completion status and priority

### 📅 Calendar
- **Event Management**: Create and manage calendar events
- **Date/Time Selection**: Precise scheduling with datetime controls
- **All-Day Events**: Support for all-day events
- **Location Tracking**: Optional location field for events
- **Visual Indicators**: Special styling for today's events and upcoming items

### 🌟 Mood Tracker
- **5-Star Rating System**: Intuitive star-based mood rating
- **Personal Notes**: Optional notes for mood context
- **Statistics Dashboard**: Average mood, weekly trends, and total entries
- **Historical View**: Timeline of past mood entries
- **Visual Feedback**: Interactive star selection with animations

## 🛠 Technology Stack

### Backend (NestJS)
- **Framework**: NestJS with TypeScript
- **Architecture**: Modular design with controllers, services, and DTOs
- **APIs**: RESTful endpoints for all features
- **CORS**: Configured for frontend integration
- **Validation**: Input validation and error handling

### Frontend (Angular)
- **Framework**: Angular 20+ with TypeScript
- **State Management**: NgRx for predictable state management
- **UI/UX**: Modern, responsive design with SCSS
- **Routing**: Single-page application with lazy loading
- **Forms**: Reactive forms with validation
- **Animations**: Smooth transitions and hover effects

## 🏗 Project Structure

```
copilot-demo/
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── todos/           # Todo management module
│   │   ├── calendar/        # Calendar events module
│   │   └── mood/            # Mood tracking module
│   └── package.json
├── frontend/                # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/  # UI Components
│   │   │   ├── models/      # TypeScript interfaces
│   │   │   ├── services/    # HTTP services
│   │   │   └── store/       # NgRx state management
│   │   └── styles.scss      # Global styles
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.x or higher)
- npm (v10.x or higher)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sezzo/copilot-demo.git
   cd copilot-demo
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run start:dev
   ```
   Backend will be available at `http://localhost:3000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will be available at `http://localhost:4200`

### Building for Production

1. **Build Backend**
   ```bash
   cd backend
   npm run build
   ```

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

## 📚 API Documentation

### Todos API
- `GET /todos` - Get all todos
- `POST /todos` - Create a new todo
- `GET /todos/:id` - Get a specific todo
- `PATCH /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo

### Calendar API
- `GET /calendar` - Get all events
- `POST /calendar` - Create a new event
- `GET /calendar/:id` - Get a specific event
- `PATCH /calendar/:id` - Update an event
- `DELETE /calendar/:id` - Delete an event

### Mood API
- `GET /mood` - Get all mood entries
- `POST /mood` - Create a new mood entry
- `GET /mood/stats` - Get mood statistics
- `GET /mood/:id` - Get a specific mood entry
- `PATCH /mood/:id` - Update a mood entry
- `DELETE /mood/:id` - Delete a mood entry

## 🎨 Design Features

### Modern UI/UX
- **Professional Gradient Sidebar**: Beautiful purple gradient navigation
- **Card-Based Layout**: Clean, organized content presentation
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Subtle hover effects and transitions
- **Consistent Typography**: Professional font hierarchy
- **Color-Coded Priority**: Visual priority indicators for tasks

### Accessibility
- **Keyboard Navigation**: Full keyboard accessibility support
- **Screen Reader Friendly**: Semantic HTML and ARIA labels
- **High Contrast**: Readable color combinations
- **Focus Indicators**: Clear focus states for interactive elements

## 🔧 Development Features

### Code Quality
- **TypeScript**: Strong typing throughout the application
- **ESLint**: Code linting for consistency
- **Prettier**: Automatic code formatting
- **Git Hooks**: Pre-commit quality checks

### Performance
- **Lazy Loading**: Optimized bundle sizes
- **Change Detection**: OnPush strategy where applicable
- **Build Optimization**: Production-ready builds
- **Asset Optimization**: Compressed styles and scripts

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layouts with touch-friendly controls
- **Mobile**: Streamlined interface with collapsible navigation

## 🚀 Production Ready

This application is production-ready with:
- ✅ Error handling and validation
- ✅ CORS configuration
- ✅ Build optimization
- ✅ TypeScript strict mode
- ✅ Professional UI/UX design
- ✅ Responsive layouts
- ✅ State management
- ✅ API documentation

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.