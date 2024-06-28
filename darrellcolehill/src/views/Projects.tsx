import ProjectCard from "../components/ProjectCard"
import ProjectPosts from '../ProjectPosts';

function Projects() {
    return (
        <>
            {(ProjectPosts).map((post) => (
                <ProjectCard post={post}/>
            ))}
        </>
    )
}

export default Projects