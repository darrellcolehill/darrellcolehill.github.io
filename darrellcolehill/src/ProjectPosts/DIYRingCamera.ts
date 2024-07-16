import { ProjectPost } from "../../types";

const post: ProjectPost = {
    title: "DIY Smart Camera",
    date: "July 16, 2024",
    content: 
        `**Overview:** Don't want to spend subscription fee for something I can do myself.

**Key Features:**
- **No Subscription fee:** runs everything locally, or using free-tier hosting.
- **People detection:** uses OpenCV to detect when a person is in the image.
- **Notifications:** when a person is in view, sends a notification.
- **Video streaming:** allow for video streaming from camera to mobile device. `,
    summary: 
        `**Overview:** This project involves creating a 3D game in Unity that simulates the challenging experience of biking through the University of Central Florida (UCF) campus during peak class times. The player must navigate a partial model of the UCF campus, avoiding collisions with other students who have varying movement patterns and speeds.`,
    chips: ["Unity", "3D Game", "Simulation", "Physics"]
}

export {post};