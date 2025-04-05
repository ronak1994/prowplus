# ProwPlus CRM Documentation Index

This document serves as a central index for all ProwPlus CRM documentation, designed to optimize AI-assisted development.

## Project Overview

ProwPlus CRM is a comprehensive dashboard application built with:
- **Frontend**: Next.js with App Router, TypeScript, Tailwind CSS (Ynex template)
- **Backend**: Node.js, Express, MongoDB (node-express-boilerplate)

The system development follows a sequential approach:
1. Frontend preparation and component development
2. MongoDB schema design
3. Backend API development with node-express-boilerplate
4. Frontend-backend integration

## Documentation Structure

### Project Architecture

- [Project Requirements](./project_requirement.md) - Main requirements document
- [Project Structure](./project_structure.md) - Codebase organization and architecture
- [API Schema](./api_schema.md) - MongoDB collections and API endpoints

### Development Guidelines

- [Component Guide](./component_guide.md) - Component patterns and best practices
- [Template Guide](./template_guide.md) - How to use the Ynex template
- [AI Workflow](./ai_workflow.md) - AI-optimized development workflow

### Implementation Resources

- [Development Roadmap](./development_roadmap.md) - Timeline and sequential development plan
- [Mock Data](./mock_data.md) - Sample data for frontend development

## Development Sequence

### Phase A: Frontend Development (Days 1-10)
- Customize Ynex template
- Create UI components with mock data
- Develop module interfaces

### Phase B: MongoDB Schema Design (Days 11-12)
- Design database collections
- Define relationships and indexes
- Optimize for performance

### Phase C: Backend API Development (Days 13-17)
- Implement Node-Express boilerplate
- Create MongoDB models
- Develop API endpoints and controllers

### Phase D: API Testing (Days 18-19)
- Test endpoints
- Validate data integrity
- Document APIs

### Phase E: Frontend-Backend Integration (Days 20-24)
- Connect frontend to real APIs
- Replace mock data
- Implement authentication flow

### Phase F: Final Polish and Deployment (Days 25-30)
- Comprehensive testing
- Performance optimization
- Deployment preparation

## Quick References

### Key Modules

1. **Dashboard** - Central overview of system
2. **Projects** - Project management with tasks, teams, and documents
3. **Teams** - Team members, skills, and collaboration
4. **Tasks** - Task assignment, tracking, and management
5. **Communication** - Chat, messaging, and notifications
6. **Payments** - Invoice and payment processing

### Common Development Tasks

| Task | Documentation Reference |
|------|-------------------------|
| Frontend component development | [Component Guide](./component_guide.md) |
| Template customization | [Template Guide](./template_guide.md) |
| MongoDB schema design | [API Schema](./api_schema.md) |
| Backend API development | [API Schema](./api_schema.md) |
| Using mock data | [Mock Data](./mock_data.md) |
| Following AI workflow | [AI Workflow](./ai_workflow.md) |

## Development Principles

1. **Sequential Approach** - Complete each development phase before moving to the next
2. **Module-First Within Phases** - Develop one complete module at a time within each phase
3. **Context-Rich Development** - Provide AI with sufficient context
4. **Pattern Consistency** - Establish and follow consistent patterns
5. **Documentation-Driven** - Keep documentation updated

## AI Communication Guidelines

When working with AI, provide:
- Clear specifications for the current development phase
- References to existing patterns
- Sample data structures
- Specific file paths for changes
- Clear acceptance criteria

## Backend Resources

- **MongoDB Schema**: Detailed in [API Schema](./api_schema.md)
- **Node-Express Boilerplate**: [hagopj13/node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate)
- **API Structure**: RESTful API with JWT authentication

---

This documentation will evolve as the project progresses through each development phase. 