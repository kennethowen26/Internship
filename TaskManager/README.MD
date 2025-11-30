# Task Manager

### RESTful API for task management featuring CRUD operations, input validation, and business logic.
---

## Feature
- Create new tasks (title,description,status, priority)
- View a list of all task
- View task details by ID
- Update tasks (all fields are editable)
- Delete Task 
- Input validation & error handling
- automatic timestamps ('created_at', 'updated_at')

---

## Tech Stack
- **Runtime**: Node.js (≥ 18)
- **Framework**: Express.js
- **Database**: MongoDB 
- **ODM**: Mongoose
- **Dependency**: dotenv
- **Testing**: Insomnia

---

## Installation 

Clone the repository:

```bash
git clone https://github.com/kennethowen26/Internship.git
cd Internship/TaskManager

npm install
npm run dev
``` 
---

**Note**: Create your own .env file with PORT and MONGODB_URI before starting. 

--- 
## Quick Test (Insomnia) 

### Create Task
POST `http://localhost:3000/tasks`  
Body → JSON:
```json
{
  "title": "First Task",
  "description": "Make a new task",
  "priority": 3,
  "due_date": "2025-12-04T00:00:00.000Z"
}
