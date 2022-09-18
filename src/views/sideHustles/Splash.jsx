import { data } from "../../components/SideHustles/data";
import { TopicCardDeck } from "../../components/TopicCardDeck";

export function Splash() {
    return (
        <>
            <TopicCardDeck data={data}/>
        </>
    );
}
