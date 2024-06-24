import { ProjectPost } from "../../types";

const post: ProjectPost = {
    title: "UCF Experience The Game",
    date: "June 24, 2024",
    content: 
        `**Overview:** This project involves creating a 3D game in Unity that simulates the challenging experience of biking through the University of Central Florida (UCF) campus during peak class times. The player must navigate around Memory Mall, avoiding collisions with other students who have varying movement patterns and speeds.

**Key Features:**
- **Programmer Model or Memory Mall:** Includes a basic version UCF's Memory Mall for realistic navigation. Used Google maps to make the dimensions of the playable area roughly 1:1 with campus.
- **Dynamic Enemy Behaviors:** Features a variety of enemy players with different movement speeds and behaviors, simulating real student traffic.
- **Player Objectives:** The player's goal is to reach their desired building without running over or colliding with any enemy players.`,
    summary: 
        `**Overview:** This project involves creating a 3D game in Unity that simulates the challenging experience of biking through the University of Central Florida (UCF) campus during peak class times. The player must navigate a partial model of the UCF campus, avoiding collisions with other students who have varying movement patterns and speeds.`,
    chips: ["Unity", "3D Game", "Simulation", "Physics"]
}

export {post};
