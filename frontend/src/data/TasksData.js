

export default [
    {
        id: 1,
        name: "Fixing the pool",
        description: "The pool is not heated right now, which needs to be fixed.",
        acceptenceCriteria: [
            "Pool can be heated by our solar panels on the roof.", 
            "The engine next to the pool is cleaned up and the dirt next to it is removed."
        ],
        priority: 5
    },
    {
        id: 2,
        name: "Create new cleaning plan",
        description: "Since we have a new resident and the old cleaning plan wasn't that popular, we need a new one.",
        acceptenceCriteria: [
            "every residant of the WG has equal cleaning-work", 
            "residants have cleaning-tasks related to their location inside the WG",
            "there are working sanctions, in case someone doesn't do his/he job.",
        ],
        priority: 4
    },
    {
        id: 3,
        name: "Finish renovating the chill-out room in the basement",
        description: "What needs to be done is glueing the Sockelleisten on the wall with fix-all."+
        "Fix-all needs to be bought from hagebaumarkt",
        acceptenceCriteria: [
            "The Sockelleisten are glued to the wall as well as to the doorframe.", 
            "The room is cleaned up properly",
            "The leather furniture is moved to the room."
        ],
        priority: 3
    },
    {
        id: 4,
        name: "Finish renovating the techno-bunker",
        description: "What needs to be done is ",
        acceptenceCriteria: [
            "Foam is glued properly to the walls.",
            "Room is cleaned up",
            "Acustics are optimized through Sonarworks",
            "Electronics (Speakers, Sub, Mixer,..) are set up"
        ],
        priority: 2
    },
    {
        id: 5,
        name: "Fixing the sunblind on the balcony",
        description: "The sunblind is broken and water is running through",
        acceptenceCriteria: [
            "The sunblind is sewed and no water is going through anymore (or at least not that much).",
            "The gutter above the balcony is cleaned in a way that there is no water leaking out anymore."
        ],
        priority: 1
    },
];