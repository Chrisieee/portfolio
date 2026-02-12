import {createContext, useContext, useState} from "react";

const ProjectsContext = createContext()

export function ProjectsProvider({children}) {
    const projectNL = {
        title: "Projecten",
        project1: "Voor dit project heb ik een simpele platformer gemaakt in de Excalibur game engine. Dit was een project die ik heb gemaakt voor school.",
        project2: "Dit was een project waar je een eigen vorm mocht kiezen om je groei te laten zien. Ik heb hiervoor een simpele platformer gemaakt met verschillende werelden en levels.",
        title2: "Signatuur game (school)",
        project3: "Dit is een full stack project van school. Hierbij moesten we de front-end en de back-end zelf maken.",
        project4: "Dit is een projectje wat ik voor de lol heb gedaan. Ik wou iets maken wat Audio visueel zou maken. Dit heb ik gedaan met de Audio API.",
        project5: "Dit is een project waar ik nog mee bezig ben. Ik ben een eigen discord bot aan het bouwen voor onder andere twitch & youtube meldingen.",

    }
    const projectEN = {
        title: "Projects",
        project1: "I made a simple platformer game for this project. I made this in the Excalibur game engine. This was a project I made for school.",
        project2: "We had the change to choice our own methode to show our grow. I choose to make a game for this project with different levels and worlds.",
        title2: "Signature game (school)",
        project3: "This is a full stack project from school. We needed to make the back-end and front-end ourselves.",
        project4: "I made this project for fun. I wanted to make something that made audio something visual. I made this using the Audio API.",
        project5: "This is a work in progress project. I am making my own discord bot to give twitch and youtube alerts in a server."
    }
    const [project, setProject] = useState(projectNL)

    return (
        <ProjectsContext.Provider value={{
            projectNL, projectEN, project, setProject,
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export function useProjects() {
    return useContext(ProjectsContext)
}