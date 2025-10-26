import LinkButton from "../../components/NavigationButton/LinkButton"

export default function Home(){

    return (
        <>
            <LinkButton to="/log">log session</LinkButton>
            <LinkButton to="/stats">view statistics</LinkButton>
            <LinkButton to="/create">create program</LinkButton>
        </>
    )
}