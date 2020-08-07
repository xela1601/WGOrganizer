# WGOrganizer

- wird ne geile **Web-App**! Eine `PWA..` oder vielleicht sogar Native 😁

## Features:
* managing [Tasks](https://github.com/xela1601/WGOrganizer/blob/master/README.md#Tasks)
* managing money

### Tasks (= User Stories)
* every task has the following properties:
    - Name (brief description)
    - Description (more detailed description, optional)
    - acceptance criteria (criteria that needs to be fullfilled in order for the task to be completed)
    - state (new, active, closed, blocked)
    - priority (1 = highest -> 5 = lowest)
    - effort points (1, 2, 3, 5, 8, 13, 21)
    - assignment to one or more users
* WG members can create new tasks and enroll themselves for new tasks => tasks will be marked as "active"
* WG members can write comments to the tasks
* as soon as task is completed => mark it as "closed"
* if task can't be fullfilled because there is some kind of problem => "blocked"

### Money
When there is some item(s) that are needed for the WG and everyone (or at least the majority) agrees to get it, the one that bought it can make a new entry here:
* name
* description
* amount of money
* upload of receipt
* money received? (yes/no)

### User
Users can log in and log out.
They are registered and deleted internally.
User profiles consist of:
- Name (first, lastname)
- Profile-Image (optional)
- Role (List like WG-Member, Guest, Admin, Beer-pong-winner!!!!)
- WhatsappNr
- Birthday (optional)
You can also change your email and password.
Important under your profile data is your task-protocol.

## Das 'MERN' Konzept
**M** - MongoDB (512MB Cluster)

**E** - ExpressJS (Node Framework fügt features zu webserver runtime hinzu)

**R** - ReactJs (Leider Geil!)

**N** - Node (ist nicht wegzudenken..)
