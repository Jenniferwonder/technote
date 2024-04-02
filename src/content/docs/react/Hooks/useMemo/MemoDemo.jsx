// 🏷️ useMemo
import MemoToDo from "./useMemo/MemoToDo";
import RecalToDo from "./useMemo/RecalToDo";
// 🏷️ useCallback
import FormCallback from "./useCallback/FormCallback";

export default function MemoDemo() {
	return (
		<>
			<h1>🏷️05-3-A-useMemo</h1>
			<MemoToDo />
			<RecalToDo />
			<h1>🏷️05-3-B-useCallback</h1>
			<FormCallback />
		</>
	);
}
