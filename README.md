# Node-js-REST--API-s
This Repository contains the REST API's Related Work.
<H1>Task Management Application:</H1>
<p>
    Description: Create a REST API for a task management application where users can create, update, delete, and manage their tasks.
    API Endpoints: Users, tasks, projects, tags, etc.
    Functionality: Users should be able to add tasks, set deadlines, assign priorities, and categorize tasks into projects.

    EndPoints:
        1-  url => /Users , /Users/:userID
            method => GET
            Description => Return the list of Users and if you pass the UserId then it will return the information related to the passed userid
        
        2-  url => /Users
            method => POST
            Description => Create an user 
            RequestBody - {
                "name": "John Doe",
                "email": "johndoe@example.com",
                "password": "securepassword",
                "username": "johndoe",
                "profile_picture_url": "https://example.com/profiles/johndoe.jpg"
            }

        3-  url => /tasks/:userID
            method => GET
            Description => return all the task assigned to a specific user
        
        4-  url => /tasks
            method => POST
            Description => create a task for the user.
            RequestBody -{
                "username": "Johndoe",
                "taskName": "Task Name",
                "createdAt": "Date",
                "description" : "Description"
            }

        5-  url => /project/:projectName, /projects 
            Method => GET
            Description => add project for a specific user and /projects return all the project.


        6-  url => /addProject
            Method => POST
            Description => add project for a specific user.
            RequestBody - {
                "name": "Project Alpha",
                "description": "This is the first project for the team.",
                "start_date": "2024-04-22",
                "end_date": "2024-05-22",
                "team_members": ["member1_id", "member2_id"],
                "tags": ["important", "urgent"]
            }

</p>