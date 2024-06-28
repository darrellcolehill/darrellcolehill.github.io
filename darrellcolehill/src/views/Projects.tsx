import ProjectCard from "../components/ProjectCard"

import posts from '../ProjectPosts';

function Projects() {
    return (
        <>
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            {Object.entries(posts).map(([_, post]) => (
                <ProjectCard post={post}/>
            ))}
        </>
    )
}

export default Projects