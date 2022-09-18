import { data } from "../../components/SideHustles/data";
import { TopicCardDeck } from "../../components/TopicCardDeck";

export function Splash() {
    console.log(data);
    return (
        <>
            <TopicCardDeck data={data}/>
        </>
    );
}
