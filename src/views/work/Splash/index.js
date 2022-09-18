import { data } from '../../../components/WorkExperience/data';
import { TopicCardDeck } from '../../../components/TopicCardDeck'

export function Splash() {
    return (
        <>
            <TopicCardDeck data={data}/>
        </>
    );
}