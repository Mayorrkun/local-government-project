export const roles =[
    {id:1, title:"Admin",description:"Platform Admin",createdDate:"Mar 6, 2026 2:26PM"},
    {id:2, title:"Staff",description:"Company Staff",createdDate:"Mar 6, 2026 2:26PM"},
    {id:3, title:"User",description:"General user",createdDate:"Mar 6, 2026 2:26PM"},
    {id:4, title:"Visitor",description:"Visitor",createdDate:"Mar 6, 2026 2:26PM"}
];

export const userPermissions=[
    {id:1, title:"Create User"},
    {id:2, title:"View User List"},
    {id:3, title:"Access Restricted Pages"},
    {id:4, title:"Deactivate User"},
    {id:5, title:"Assign Role"},
]
export const rolePermissions=[
    {id:1, title:"Create Role"},
    {id:2, title:"View Role List"},
    {id:3, title:"Access Restricted Pages"},
    {id:4, title:"Deactivate Role"},
    {id:5, title:"Assign User"},
]
export const users = [
    { id: 1, first_name: "John", last_name: "Doe", email: "john.doe@email.com", status: "Active", role: "Admin", last_login: "2026-03-01 09:14" },
    { id: 2, first_name: "Sarah", last_name: "Johnson", email: "sarah.johnson@email.com", status: "Inactive", role: "User", last_login: "2026-02-25 14:22" },
    { id: 3, first_name: "Michael", last_name: "Smith", email: "michael.smith@email.com", status: "Active", role: "Admin", last_login: "2026-03-04 18:30" },
    { id: 4, first_name: "Emily", last_name: "Brown", email: "emily.brown@email.com", status: "Active", role: "User", last_login: "2026-03-03 10:05" },
    { id: 5, first_name: "Daniel", last_name: "Wilson", email: "daniel.wilson@email.com", status: "Inactive", role: "User", last_login: "2026-02-18 16:44" },
    { id: 6, first_name: "Olivia", last_name: "Taylor", email: "olivia.taylor@email.com", status: "Active", role: "Admin", last_login: "2026-03-02 11:27" },
    { id: 7, first_name: "James", last_name: "Anderson", email: "james.anderson@email.com", status: "Inactive", role: "User", last_login: "2026-01-30 08:12" },
    { id: 8, first_name: "Sophia", last_name: "Thomas", email: "sophia.thomas@email.com", status: "Active", role: "Admin", last_login: "2026-03-04 13:09" },
    { id: 9, first_name: "William", last_name: "Jackson", email: "william.jackson@email.com", status: "Active", role: "User", last_login: "2026-02-28 19:45" },
    { id: 10, first_name: "Ava", last_name: "White", email: "ava.white@email.com", status: "Inactive", role: "User", last_login: "2026-02-11 21:03" },
    { id: 11, first_name: "Benjamin", last_name: "Harris", email: "benjamin.harris@email.com", status: "Active", role: "Admin", last_login: "2026-03-01 07:55" },
    { id: 12, first_name: "Mia", last_name: "Martin", email: "mia.martin@email.com", status: "Inactive", role: "User", last_login: "2026-02-20 12:18" },
    { id: 13, first_name: "Lucas", last_name: "Thompson", email: "lucas.thompson@email.com", status: "Active", role: "Admin", last_login: "2026-03-04 17:36" },
    { id: 14, first_name: "Charlotte", last_name: "Garcia", email: "charlotte.garcia@email.com", status: "Active", role: "User", last_login: "2026-03-02 15:49" },
    { id: 15, first_name: "Henry", last_name: "Martinez", email: "henry.martinez@email.com", status: "Inactive", role: "User", last_login: "2026-02-14 09:40" },
    { id: 16, first_name: "Amelia", last_name: "Robinson", email: "amelia.robinson@email.com", status: "Active", role: "Admin", last_login: "2026-03-03 20:11" },
    { id: 17, first_name: "Alexander", last_name: "Clark", email: "alexander.clark@email.com", status: "Inactive", role: "User", last_login: "2026-02-05 06:58" },
    { id: 18, first_name: "Harper", last_name: "Rodriguez", email: "harper.rodriguez@email.com", status: "Active", role: "Admin", last_login: "2026-03-04 09:22" },
    { id: 19, first_name: "Ethan", last_name: "Lewis", email: "ethan.lewis@email.com", status: "Active", role: "Staff", last_login: "2026-03-01 13:33" },
    { id: 20, first_name: "Evelyn", last_name: "Lee", email: "evelyn.lee@email.com", status: "Active", role: "Staff", last_login: "2026-03-03 22:17" }
];

export const companies = [
    {
        id: 1,
        name:"Giliette",
        owner:"Jesse Roy",
        status:"Active",
        createdDate:"09/12/2025 06:25pm",
        userTotal:5,
    },
    {
        id: 2,
        name:"L'Oreal",
        owner:"Cody Fisher",
        status:"Deactivated",
        createdDate:"09/12/2025 06:25pm",
        userTotal:60,
    },
    {
        id: 3,
        name:"Mitsubishi",
        owner:"Marvin Mckinney",
        status:"Active",
        createdDate:"09/12/2025 06:25pm",
        userTotal:43,
    },
    {
        id: 4,
        name:"Sony",
        owner:"Esther Howard",
        status:"Active",
        createdDate:"09/12/2025 06:25pm",
        userTotal:12,
    },
];

export const logs = [
    {   id:1,
        dateTime:"09/12/2025 06:25pm",
        actor:"Jesse Roy",
        action:"Password Change",
        Description:"Change profile password",
    },
    {   id:2,
        dateTime:"09/12/2025 06:25pm",
        actor:"Cody Fisher",
        action:"Password Change",
        Description:"Change profile password",
    },
    {   id:3,
        dateTime:"09/12/2025 06:25pm",
        actor:"Marvin Mckinney",
        action:"Password Change",
        Description:"Change profile password",
    },
    {   id:4,
        dateTime:"09/12/2025 06:25pm",
        actor:"Esther Howard",
        action:"Password Change",
        Description:"Change profile password",
    },

];