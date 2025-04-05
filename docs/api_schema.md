# ProwPlus CRM API Schema

This document outlines the data models and API endpoints that will be implemented for the ProwPlus CRM system using Node.js, Express, and MongoDB via the [hagopj13/node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate). This will serve as a reference for AI-assisted development.

## MongoDB Collections

The backend will utilize MongoDB with the following collection structure:

### Users Collection
```javascript
{
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true, private: true },
  role: { type: String, enum: ['admin', 'manager', 'member', 'client'], default: 'member' },
  avatar: { type: String },
  skills: [{ type: String }],
  position: { type: String },
  department: { type: String },
  availability: { type: String, enum: ['available', 'busy', 'away', 'offline'], default: 'available' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Projects Collection
```javascript
{
  title: { type: String, required: true, trim: true },
  summary: { type: String, trim: true },
  status: { type: String, enum: ['draft', 'active', 'completed', 'archived'], default: 'draft' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdBy: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
  team: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
  labels: [{ type: String }],
  milestones: [{
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Documents Collection
```javascript
{
  name: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String },
  size: { type: Number },
  projectId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Project' },
  taskId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Task' },
  uploadedBy: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
  uploadedAt: { type: Date, default: Date.now }
}
```

### Tasks Collection
```javascript
{
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  project: { type: mongoose.SchemaTypes.ObjectId, ref: 'Project' },
  assignees: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
  startDate: { type: Date },
  endDate: { type: Date, required: true },
  priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
  status: { type: String, enum: ['todo', 'in-progress', 'review', 'completed'], default: 'todo' },
  tags: [{ type: String }],
  recurring: {
    frequency: { type: String, enum: ['daily', 'weekly', 'monthly', 'custom'] },
    interval: { type: Number },
    endAfter: { type: Number },
    endDate: { type: Date }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Chats Collection
```javascript
{
  type: { type: String, enum: ['direct', 'group'], required: true },
  participants: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true }],
  name: { type: String }, // For group chats
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Messages Collection
```javascript
{
  sender: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  chatId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Chat', required: true },
  attachments: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Document' }],
  reactions: [{
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    type: { type: String }
  }],
  createdAt: { type: Date, default: Date.now }
}
```

### Invoices Collection
```javascript
{
  client: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
  project: { type: mongoose.SchemaTypes.ObjectId, ref: 'Project' },
  items: [{
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    rate: { type: Number, required: true },
    amount: { type: Number, required: true }
  }],
  subtotal: { type: Number, required: true },
  tax: { type: Number },
  total: { type: Number, required: true },
  status: { type: String, enum: ['draft', 'sent', 'paid', 'overdue', 'cancelled'], default: 'draft' },
  dueDate: { type: Date, required: true },
  issueDate: { type: Date, required: true },
  paymentDate: { type: Date },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

## API Endpoints (Express Routes)

The backend API will be built following the node-express-boilerplate structure, with routes organized in the `/routes/v1` directory.

### Authentication Routes
```javascript
/**
 * @route POST /v1/auth/register
 * @route POST /v1/auth/login
 * @route POST /v1/auth/refresh-tokens
 * @route POST /v1/auth/logout
 * @route GET /v1/auth/me
 */
```

### Users Routes
```javascript
/**
 * @route GET /v1/users - List users (with filtering/pagination)
 * @route POST /v1/users - Create a new user
 * @route GET /v1/users/:userId - Get user details
 * @route PATCH /v1/users/:userId - Update user
 * @route DELETE /v1/users/:userId - Delete user
 * @route GET /v1/users/:userId/tasks - Get user's tasks
 * @route GET /v1/users/:userId/projects - Get user's projects
 */
```

### Projects Routes
```javascript
/**
 * @route GET /v1/projects - List projects (with filtering/pagination)
 * @route POST /v1/projects - Create project
 * @route GET /v1/projects/:projectId - Get project details
 * @route PATCH /v1/projects/:projectId - Update project
 * @route DELETE /v1/projects/:projectId - Delete/archive project
 * @route GET /v1/projects/:projectId/tasks - Get project tasks
 * @route GET /v1/projects/:projectId/team - Get project team
 * @route POST /v1/projects/:projectId/milestones - Create milestone
 * @route PATCH /v1/projects/:projectId/milestones/:milestoneId - Update milestone
 * @route DELETE /v1/projects/:projectId/milestones/:milestoneId - Delete milestone
 */
```

### Tasks Routes
```javascript
/**
 * @route GET /v1/tasks - List tasks (with filtering/pagination)
 * @route POST /v1/tasks - Create task
 * @route GET /v1/tasks/:taskId - Get task details
 * @route PATCH /v1/tasks/:taskId - Update task
 * @route DELETE /v1/tasks/:taskId - Delete task
 * @route PATCH /v1/tasks/:taskId/status - Update task status
 */
```

### Communication Routes
```javascript
/**
 * @route GET /v1/chats - List user's chats
 * @route POST /v1/chats - Create new chat
 * @route GET /v1/chats/:chatId - Get chat details
 * @route GET /v1/chats/:chatId/messages - Get chat messages
 * @route POST /v1/chats/:chatId/messages - Send message
 * @route PATCH /v1/chats/:chatId/messages/:messageId/react - React to message
 */
```

### Invoices Routes
```javascript
/**
 * @route GET /v1/invoices - List invoices (with filtering/pagination)
 * @route POST /v1/invoices - Create invoice
 * @route GET /v1/invoices/:invoiceId - Get invoice details
 * @route PATCH /v1/invoices/:invoiceId - Update invoice
 * @route PATCH /v1/invoices/:invoiceId/status - Update invoice status
 * @route POST /v1/invoices/:invoiceId/send - Send invoice
 * @route GET /v1/invoices/:invoiceId/download - Download invoice as PDF
 */
```

## Implementation Notes

1. The API will follow RESTful principles as implemented in the node-express-boilerplate.
2. Authentication will be JWT-based with refresh token support.
3. Each endpoint will include:
   - Proper validation using Joi schemas
   - Error handling using the ApiError utility
   - Pagination support where appropriate
4. All endpoints will be protected by authentication middleware except for login and register.
5. Role-based authorization will control access to different endpoints.
6. Swagger documentation will be generated for all endpoints.

## Integration with Frontend

The frontend will connect to these API endpoints through a dedicated service layer that will:
1. Handle authentication token management
2. Format requests and parse responses
3. Implement error handling
4. Manage loading states

This API schema will be implemented during the backend development phase, after the frontend components have been built with mock data. 