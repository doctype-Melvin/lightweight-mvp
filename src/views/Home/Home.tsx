import LinkButton from "../../components/NavigationButton/LinkButton"

export default function Home(){

    return (
        <>
            <LinkButton to="/log" text="log session" />
            <LinkButton to="/stats" text="view stats" />
            <LinkButton to="/create" text="create program" />
        </>
    )
}