import { TopicCardDeck } from "../../../components/TopicCardDeck";
import { Header } from "../../../components/Header";
import { data } from "../../../components/Home/data"

export function Splash() {
    return (
        <>
            <Header/>
            <br/><br/>
            <TopicCardDeck data={data}/>
        </>
    );
}
