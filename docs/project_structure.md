# ProwPlus CRM Project Structure

## Overview

ProwPlus CRM is being developed as a comprehensive dashboard application with a clear separation between frontend and backend components:

- **Frontend**: Next.js with App Router, TypeScript, and Tailwind CSS based on the Ynex template
- **Backend**: Node.js, Express, and MongoDB using the node-express-boilerplate

## Technology Stack

### Frontend
- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Template**: Ynex dashboard template
- **State Management**: Redux or Context API (to be finalized)
- **Authentication**: Next-Auth (integration with backend JWT)

### Backend
- **Framework**: Express.js
- **Language**: Node.js
- **Database**: MongoDB
- **Boilerplate**: [hagopj13/node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate)
- **Authentication**: JWT
- **Validation**: Joi

## Directory Structure

### Frontend Structure
```
/frontend
  /app               # Next.js app router pages
    /dashboard       # Main dashboard area
    /projects        # Projects module
    /teams           # Teams module
    /tasks           # Tasks module
    /communication   # Communication module
    /payments        # Payments module
    /(auth)          # Authentication related pages
  /components        # Reusable components
    /ui              # Basic UI components
    /layout          # Layout components
    /modules         # Module-specific components
    /forms           # Form components
  /lib               # Utility functions, constants, etc.
    /api             # API service layer
  /hooks             # Custom React hooks
  /stores            # State management
  /types             # TypeScript type definitions
  /styles            # Global style overrides
  /public            # Static assets
```

### Backend Structure (Following node-express-boilerplate)
```
/backend
  /src
    /config          # Environment variables and configuration
    /controllers     # Route controllers (controller layer)
    /docs            # Swagger documentation
    /middlewares     # Custom express middlewares
    /models          # Mongoose models (data layer)
    /routes          # Routes
      /v1            # API version 1 routes
    /services        # Business logic (service layer)
    /utils           # Utility classes and functions
    /validations     # Request data validation schemas
    app.js           # Express app
    index.js         # App entry point
  /tests             # Tests
  /.env.example      # Environment variables example file
```

## Development Phases

The project will be developed in the following sequential phases:

1. **Frontend Development**
   - Whitelabeling and optimizing the Ynex template
   - Building UI components with mock data
   - Setting up all module interfaces

2. **MongoDB Schema Design**
   - Designing database collections and relationships
   - Defining indexes and optimization strategies

3. **Backend API Development**
   - Setting up the Node-Express backend
   - Implementing all required endpoints
   - Creating authentication and validation

4. **API Testing**
   - Testing all endpoints
   - Ensuring robustness and security

5. **Integration**
   - Connecting frontend components to real APIs
   - Implementing authentication flow
   - Replacing mock data with real data

Each phase will focus on completing the functionality across all modules. 