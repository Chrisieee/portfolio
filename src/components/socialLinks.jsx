import {Link} from "react-router";

function SocialLinks() {
    return (
        <>
            <Link className={"text-5xl text-blue-300 hover:text-blue-400 hover:scale-110"}
                  to="mailto:christa_pol1@hotmail.com"><i
                className="fa-solid fa-envelope"></i><p className="sr-only">Email</p></Link>
            <Link className={"text-5xl text-blue-300 hover:text-blue-400 hover:scale-110"}
                  to={"https://www.linkedin.com/in/christa-pol/"}
                  target={"_blank"}><i className="fa-brands fa-linkedin"></i><p className="sr-only">Linked-in</p></Link>
            <Link className={"text-5xl text-blue-300 hover:text-blue-400 hover:scale-110"}
                  to={"https://github.com/Chrisieee"} target={"_blank"}><i
                className="fa-brands fa-github"></i><p className="sr-only">Github</p></Link>
        </>
    )
}

export default SocialLinks