# ProwPlus CRM Mock Data

This document provides sample mock data for development of the ProwPlus CRM system. AI can use these data structures when generating components and functionality.

## Users

```json
[
  {
    "id": "user1",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "avatar": "/images/avatars/avatar-1.jpg",
    "skills": ["Project Management", "Marketing", "UI/UX"],
    "position": "Project Manager",
    "department": "Operations",
    "availability": "available",
    "createdAt": "2023-01-15T08:30:00.000Z",
    "updatedAt": "2023-06-22T14:45:00.000Z"
  },
  {
    "id": "user2",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "manager",
    "avatar": "/images/avatars/avatar-2.jpg",
    "skills": ["Frontend Development", "React", "TypeScript"],
    "position": "Lead Developer",
    "department": "Engineering",
    "availability": "busy",
    "createdAt": "2023-02-10T10:15:00.000Z",
    "updatedAt": "2023-06-20T09:30:00.000Z"
  },
  {
    "id": "user3",
    "name": "Mike Johnson",
    "email": "mike@example.com",
    "role": "member",
    "avatar": "/images/avatars/avatar-3.jpg",
    "skills": ["Backend Development", "Node.js", "MongoDB"],
    "position": "Backend Developer",
    "department": "Engineering",
    "availability": "available",
    "createdAt": "2023-03-05T11:45:00.000Z",
    "updatedAt": "2023-06-21T16:20:00.000Z"
  },
  {
    "id": "user4",
    "name": "Sarah Williams",
    "email": "sarah@example.com",
    "role": "member",
    "avatar": "/images/avatars/avatar-4.jpg",
    "skills": ["Graphic Design", "UI/UX", "Illustration"],
    "position": "UI Designer",
    "department": "Design",
    "availability": "away",
    "createdAt": "2023-03-15T09:00:00.000Z",
    "updatedAt": "2023-06-19T13:10:00.000Z"
  },
  {
    "id": "user5",
    "name": "Alex Thompson",
    "email": "alex@example.com",
    "role": "client",
    "avatar": "/images/avatars/avatar-5.jpg",
    "position": "CEO",
    "department": "Executive",
    "availability": "offline",
    "createdAt": "2023-04-20T14:30:00.000Z",
    "updatedAt": "2023-06-18T17:45:00.000Z"
  }
]
```

## Projects

```json
[
  {
    "id": "proj1",
    "title": "Website Redesign",
    "summary": "Redesigning the corporate website with modern UI and improved UX",
    "status": "active",
    "startDate": "2023-06-01T00:00:00.000Z",
    "endDate": "2023-08-15T00:00:00.000Z",
    "createdBy": "user1",
    "team": ["user1", "user2", "user4"],
    "tasks": ["task1", "task2", "task3"],
    "labels": ["design", "high-priority", "frontend"],
    "milestones": [
      {
        "id": "ms1",
        "title": "Design Approval",
        "description": "Get client approval on design mockups",
        "dueDate": "2023-06-15T00:00:00.000Z",
        "status": "completed"
      },
      {
        "id": "ms2",
        "title": "Frontend Development",
        "description": "Complete all frontend components",
        "dueDate": "2023-07-20T00:00:00.000Z",
        "status": "in-progress"
      },
      {
        "id": "ms3",
        "title": "Launch",
        "description": "Website launch and handover",
        "dueDate": "2023-08-10T00:00:00.000Z",
        "status": "pending"
      }
    ],
    "createdAt": "2023-05-25T14:30:00.000Z",
    "updatedAt": "2023-06-20T09:45:00.000Z"
  },
  {
    "id": "proj2",
    "title": "Mobile App Development",
    "summary": "Building a native mobile app for iOS and Android platforms",
    "status": "active",
    "startDate": "2023-05-15T00:00:00.000Z",
    "endDate": "2023-09-30T00:00:00.000Z",
    "createdBy": "user1",
    "team": ["user1", "user3", "user4"],
    "tasks": ["task4", "task5"],
    "labels": ["mobile", "development"],
    "milestones": [
      {
        "id": "ms4",
        "title": "UI Design",
        "description": "Complete all app screens design",
        "dueDate": "2023-06-10T00:00:00.000Z",
        "status": "completed"
      },
      {
        "id": "ms5",
        "title": "MVP Release",
        "description": "Release minimum viable product",
        "dueDate": "2023-08-01T00:00:00.000Z",
        "status": "pending"
      }
    ],
    "createdAt": "2023-05-10T11:15:00.000Z",
    "updatedAt": "2023-06-18T16:30:00.000Z"
  },
  {
    "id": "proj3",
    "title": "Marketing Campaign",
    "summary": "Q3 marketing campaign for product launch",
    "status": "draft",
    "startDate": "2023-07-01T00:00:00.000Z",
    "endDate": "2023-09-15T00:00:00.000Z",
    "createdBy": "user2",
    "team": ["user1", "user5"],
    "labels": ["marketing", "q3"],
    "createdAt": "2023-06-15T10:00:00.000Z",
    "updatedAt": "2023-06-15T10:00:00.000Z"
  }
]
```

## Tasks

```json
[
  {
    "id": "task1",
    "title": "Design Homepage Mockup",
    "description": "Create a modern and engaging homepage design",
    "project": "proj1",
    "assignees": ["user4"],
    "startDate": "2023-06-01T00:00:00.000Z",
    "endDate": "2023-06-10T00:00:00.000Z",
    "priority": "high",
    "status": "completed",
    "tags": ["design", "homepage"],
    "createdAt": "2023-05-28T09:15:00.000Z",
    "updatedAt": "2023-06-10T16:30:00.000Z"
  },
  {
    "id": "task2",
    "title": "Implement Homepage Components",
    "description": "Convert homepage design to React components",
    "project": "proj1",
    "assignees": ["user2"],
    "startDate": "2023-06-12T00:00:00.000Z",
    "endDate": "2023-06-25T00:00:00.000Z",
    "priority": "medium",
    "status": "in-progress",
    "tags": ["development", "frontend"],
    "createdAt": "2023-06-10T14:20:00.000Z",
    "updatedAt": "2023-06-20T11:45:00.000Z"
  },
  {
    "id": "task3",
    "title": "Setup API Endpoints",
    "description": "Create necessary API endpoints for the website",
    "project": "proj1",
    "assignees": ["user3"],
    "startDate": "2023-06-15T00:00:00.000Z",
    "endDate": "2023-07-05T00:00:00.000Z",
    "priority": "medium",
    "status": "todo",
    "tags": ["backend", "api"],
    "createdAt": "2023-06-12T09:30:00.000Z",
    "updatedAt": "2023-06-12T09:30:00.000Z"
  },
  {
    "id": "task4",
    "title": "Mobile App UI Design",
    "description": "Design all screens for the mobile application",
    "project": "proj2",
    "assignees": ["user4"],
    "startDate": "2023-05-16T00:00:00.000Z",
    "endDate": "2023-06-10T00:00:00.000Z",
    "priority": "high",
    "status": "completed",
    "tags": ["design", "mobile"],
    "createdAt": "2023-05-15T13:45:00.000Z",
    "updatedAt": "2023-06-10T10:15:00.000Z"
  },
  {
    "id": "task5",
    "title": "Backend API Development",
    "description": "Develop backend services for the mobile app",
    "project": "proj2",
    "assignees": ["user3"],
    "startDate": "2023-06-01T00:00:00.000Z",
    "endDate": "2023-07-15T00:00:00.000Z",
    "priority": "high",
    "status": "in-progress",
    "tags": ["backend", "api"],
    "createdAt": "2023-05-28T11:00:00.000Z",
    "updatedAt": "2023-06-18T14:30:00.000Z"
  },
  {
    "id": "task6",
    "title": "Weekly Team Meeting",
    "description": "Regular team sync-up meeting",
    "assignees": ["user1", "user2", "user3", "user4"],
    "startDate": "2023-06-05T09:00:00.000Z",
    "endDate": "2023-06-05T10:00:00.000Z",
    "priority": "medium",
    "status": "completed",
    "tags": ["meeting"],
    "recurring": {
      "frequency": "weekly",
      "interval": 1
    },
    "createdAt": "2023-06-01T15:00:00.000Z",
    "updatedAt": "2023-06-05T10:30:00.000Z"
  }
]
```

## Chat Messages

```json
[
  {
    "id": "msg1",
    "sender": "user1",
    "content": "Hi team, how is the website redesign coming along?",
    "chatId": "chat1",
    "createdAt": "2023-06-19T09:15:00.000Z",
    "reactions": [
      {
        "userId": "user2",
        "type": "👍"
      }
    ]
  },
  {
    "id": "msg2",
    "sender": "user2",
    "content": "Going well! Homepage components are about 70% complete.",
    "chatId": "chat1",
    "createdAt": "2023-06-19T09:18:00.000Z"
  },
  {
    "id": "msg3",
    "sender": "user4",
    "content": "I've uploaded the latest designs for the about page. Can you check them?",
    "chatId": "chat1",
    "attachments": [
      {
        "id": "att1",
        "name": "about-page-design.fig",
        "url": "/uploads/about-page-design.fig",
        "type": "application/fig",
        "size": 4500000,
        "uploadedBy": "user4",
        "uploadedAt": "2023-06-19T09:22:00.000Z"
      }
    ],
    "createdAt": "2023-06-19T09:22:00.000Z"
  }
]
```

## Chats

```json
[
  {
    "id": "chat1",
    "type": "group",
    "name": "Website Redesign Team",
    "participants": ["user1", "user2", "user3", "user4"],
    "createdAt": "2023-05-26T10:00:00.000Z",
    "updatedAt": "2023-06-19T09:22:00.000Z"
  },
  {
    "id": "chat2",
    "type": "direct",
    "participants": ["user1", "user5"],
    "createdAt": "2023-06-15T14:30:00.000Z",
    "updatedAt": "2023-06-18T11:45:00.000Z"
  }
]
```

## Invoices

```json
[
  {
    "id": "inv1",
    "client": "user5",
    "project": "proj1",
    "items": [
      {
        "description": "Website Design",
        "quantity": 1,
        "rate": 3500,
        "amount": 3500
      },
      {
        "description": "Frontend Development",
        "quantity": 40,
        "rate": 75,
        "amount": 3000
      }
    ],
    "subtotal": 6500,
    "tax": 650,
    "total": 7150,
    "status": "sent",
    "issueDate": "2023-06-15T00:00:00.000Z",
    "dueDate": "2023-06-30T00:00:00.000Z",
    "notes": "Payment due within 15 days",
    "createdAt": "2023-06-15T11:30:00.000Z",
    "updatedAt": "2023-06-15T11:30:00.000Z"
  },
  {
    "id": "inv2",
    "client": "user5",
    "project": "proj2",
    "items": [
      {
        "description": "Mobile App UI Design",
        "quantity": 1,
        "rate": 2800,
        "amount": 2800
      }
    ],
    "subtotal": 2800,
    "tax": 280,
    "total": 3080,
    "status": "paid",
    "issueDate": "2023-06-01T00:00:00.000Z",
    "dueDate": "2023-06-15T00:00:00.000Z",
    "paymentDate": "2023-06-10T00:00:00.000Z",
    "createdAt": "2023-06-01T09:45:00.000Z",
    "updatedAt": "2023-06-10T14:20:00.000Z"
  }
]
```

This mock data can be used for development purposes. When implementing components, you can use this data to populate UI elements before connecting to actual API endpoints. 