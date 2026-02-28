import {createContext, useContext, useState} from "react";

const ProjectsContext = createContext()

export function ProjectsProvider({children}) {
    const projectNL = {
        title: "Projecten",
        project1: "Voor dit project heb ik een simpele platformer gemaakt in de Excalibur game engine. Dit was een project die ik heb gemaakt voor school.",
        project2: "Dit was een project waar je een eigen vorm mocht kiezen om je groei te laten zien. Ik heb hiervoor een simpele platformer gemaakt met verschillende werelden en levels.",
        title2: "Signatuur game (solo)",
        project3: "Dit is een full stack project van school. Hierbij moesten we de front-end en de back-end zelf maken.",
        project4: "Dit is een projectje wat ik voor de lol heb gedaan. Ik wou iets maken wat Audio visueel zou maken. Dit heb ik gedaan met de Audio API.",
        project5: "Dit is een project waar ik nog mee bezig ben. Ik ben een eigen discord bot aan het bouwen voor onder andere twitch & youtube meldingen.",

    }
    const projectEN = {
        title: "Projects",
        project1: "I made a simple platformer game for this project. I made this in the Excalibur game engine. This was a project I made for school.",
        project2: "We had the change to choice our own methode to show our grow. I choose to make a game for this project with different levels and worlds.",
        title2: "Signature game (solo)",
        project3: "This is a full stack project from school. We needed to make the back-end and front-end ourselves.",
        project4: "I made this project for fun. I wanted to make something that made audio something visual. I made this using the Audio API.",
        project5: "This is a work in progress project. I am making my own discord bot to give twitch and youtube alerts in a server."
    }
    const [project, setProject] = useState(projectNL)

    const advoNL = {
        details1: "Dit was een school project waar we voor het eerst een game hebben gemaakt. Ik heb hier Excalibur voor moeten gebruiken, omdat dit met Javascript werkt. Ook was dit de eerste ervaring met OOP programmeren.",
        details2: "Ik heb de keuze gemaakt om de controls ook voor controller te maken, omdat ik dit een leuke extra uitdaging vond.",
        details3: "Als ik er nu op terug kijk ben ik met het meeste wel blij vooral, omdat dit de eerste keer was. Maar ik had bijvoorbeeld de score tekst niet transparant gemaakt. Ook zou ik meer levels hebben gemaakt als ik terug in de tijd zou kunnen. Dit is een project wat ik nog in Godot wil gaan uitwerken."
    }
    const advoEN = {
        details1: "This was a project for school. We needed to make our first game. I needed to use Excalibur for this, because that works with Javascript. This was my fist experience with OOP programming.",
        details2: "I made the choice to also make it for controller, because I thought that would be a fun extra challenge.",
        details3: "If I look back at this game I am pretty happy with the game, because it was the first time making something like this. But if I would make it again I would make the score text less transparant. I would also make more levels if I would have had the time. This is a project that I want to build on to and work out to a total game in Godot."
    }
    const [advo, setAdvo] = useState(advoNL)

    const signNL = {
        details1: "Voor dit project moesten iets maken waarbij we onze groei aantoonde die we hadden doormaakt in het afgelopen halfjaar. Hiervoor waren we vrij om een vorm te kiezen en mij leek het een leuke uitdaging om een game te maken. Aangezien ik ervaring had met excalibur heb ik ervoor gekozen om hem hier mee te maken.",
        details2: "Als ik er nu op terug kijk ben ik middelmatig blij. Ik ben blij dat ik hem af heb kunnen krijgen en dat hij is geworden wat ik voor ogen had. Ik had wel de levels wat uitdagender en leuker te maken. Zo had ik bij de tweede wereld een nieuwe mechanic kunnen toevoegen dat had het al wat leuker gemaakt.",
    }
    const signEN = {
        details1: "I needed to make something that show the grow I made in the last semester. We were free to choose our own methode to show this and I chose to make a game for this, because I thought that would be a fun challenge. And because I had experience in Excalibur I chose to make it with that.",
        details2: "If I look back om this project I am kinda happy but I could have done better. I am happy I finished it and that it is wat I wanted to make. But I would have wanted to make the levels more challenging and fun. I wanted to add a new mechanic in the second world to make it more fun.",
    }
    const [sign, setSign] = useState(signNL)

    const reviewNL = {
        details1: "Dit was een full stack project op school. We moesten de back-end schrijven met Express met een MongoDB database. De front-end is gemaakt met React.",
        details2: "Ik heb best wel wat dingen gedaan die ik nog nooit gedaan heb. Zo had ik nog nooit met Express JS, MongoBD en mongoose gewerkt. Ook was React nieuw voor mij. Daarnaast ben ik de uitdaging aangegaan om veel extra onderdelen toe te voegen. Denk aan pagination, filteren en het werken met relaties in de database.",
    }
    const reviewEN = {
        details1: "This was a full stack project for school. We needed to make the back-end with Express with a MongoDB database. The front-end is made with React.",
        details2: "With this project I did a lot of things I never tried. For example I had never worked with Express JS, MongoDB or mongoose. React was also new for me. I also challenged myself to add a lot of extra elements than were needed. Think about pagination, filtering and working with relationships in the database.",
    }
    const [review, setReview] = useState(reviewNL)

    const audioNL = {
        details1: "Dit is een project wat ik heb gedaan, omdat het me leuk leek om iets te maken wat audio visueel maakt. Hiervoor ben ik aan de slag gegaan met de Audio API. Voor de styling wou ik eerst met normaal CSS werken, maar uiteindelijk besloot ik het toch met tailwind te doen. Dit omdat ik merk dat ik nu ik tailwind wat beter begrijp ik hier sneller mee werk.",
        details2: "Ik heb de keuze gemaakt om twee keer de cirkel naast elkaar te zetten, omdat het me leuk leek om te spelen met het spiegelen van de animatie. Bij de rechter heb ik ook wat gespeeld met een soort glitch effect toe te voegen als er een grote bass is. Dit geeft best wel een cool effect.",
    }
    const audioEN = {
        details1: "I did this project, because I thought it would be fun to make audio into something visual. I used the Audio API for this. For the styling I wanted to use normal CSS but I choose to use tailwind in the end. This because I am noticing I am working faster with tailwind now I understand it better.",
        details2: "I made the choose to put the circle twice next to each other, because I thought it would be fun to play with the mirroring of the animation. On the right one I also played with adding a sort of glitch effect when there is a bass. I think this gives a cool effect.",
    }
    const [audio, setAudio] = useState(audioNL)

    const botNL = {
        details1: "Dit is een Work in Progress project. Ik ben een eigen discord bot aan het bouwen, omdat ik een beetje gek word van alle verschillende bots die ik in mijn server heb. Hierom ben ik bezig met een all in one discord bot te bouwen.",
        details2: "Ik ben begonnen met een simpele melding als ik live ben op mijn kanaal. Dit heb ik gedaan met de Twitch API, omdat je daarin request kan doen naar de server om te checken of een kanaal live is. Daarna ben ik gaan spelen om deze melding met een embedded message te maken.",
    }
    const botEN = {
        details1: "This project is still a Work in Progress. I am working on making my own discord bot, because I am annoyed at al the different bots I have in my server. This is why I am working on making a all in one discord bot.",
        details2: "I started with a simple alert for when I am live on my channel. I did this with the Twitch API, because you can doe request in there to check if the channel is live. After this worked I started playing with a embedded message.",
    }
    const [bot, setBot] = useState(botNL)


    return (
        <ProjectsContext.Provider value={{
            projectNL, projectEN, project, setProject,
            advoNL, advoEN, advo, setAdvo,
            signNL, signEN, sign, setSign,
            reviewNL, reviewEN, review, setReview,
            audioNL, audioEN, audio, setAudio,
            botNL, botEN, bot, setBot,
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export function useProjects() {
    return useContext(ProjectsContext)
}