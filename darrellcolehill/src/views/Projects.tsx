import ProjectCard from "../components/ProjectCard"
import posts from '../ProjectPosts';

function Projects() {
    return (
        <>
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            {Object.entries(posts).map(([key, post]) => (
                <ProjectCard key={`projectCard${key}`} post={post}/>
            ))}
        </>
    )
}

export default Projects