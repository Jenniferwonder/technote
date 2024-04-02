// 🏷️04-useState
import Message from "./add-interactivity/Message";
import Gallery from "./add-interactivity/Gallery";
import Scores from "./add-interactivity/Scores";
import InfoChange from "./add-interactivity/InfoChange";
import ImmerInfoChange from "./add-interactivity/ImmerInfoChange";
import Quiz from "./react-to-input/city-quiz/Quiz";
import RemoveBg from "./react-to-input/remove-bg/RemoveBg";
import EditProfile from "./react-to-input/edit-profile/EditProfile";
import MailSelect from "./react-to-input/mail-select/MailSelect";
import MailHighlight from "./react-to-input/mail-highlight/MailHighlight";

import TravelPlan from "./state-structure/travel-plan/TravelPlan";

import FilterList from "./share-state/filter-list/FilterList";

import FancyCounter from "./preserve-reset-state/score-board/FancyCounter";
import PauseCounter from "./preserve-reset-state/score-board/PauseCounter";
import ScoreboardA from "./preserve-reset-state/score-board/ScoreboardA";
import ScoreboardB from "./preserve-reset-state/score-board/ScoreboardB";
import ChatForm from "./preserve-reset-state/chat-form/ChatForm";
import TaskStateApp from "./TaskStateApp";
export default function StateDemo() {
	return (
		<div>
			<h1>🏷️04-1-useState</h1>
			<Gallery />
			<Message />
			<Scores />
			<InfoChange />
			<ImmerInfoChange />
			<Quiz />
			<RemoveBg />
			<EditProfile />
			<MailHighlight />
			<MailSelect />
			<TravelPlan />
			<FilterList />
			<FancyCounter />
			<PauseCounter />
			<ScoreboardA />
			<ScoreboardB />
			<ChatForm />
			<TaskStateApp />
			<hr></hr>
		</div>
	);
}
