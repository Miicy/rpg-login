import "./App.css";
import LandingPage from "./components/LandingPage.js";
import LoadingModal from "./components/LoadingModal.js";
import { setDataState } from "./store/reducers/notificationSlice.js";
import { DATA_STATE } from "./helpers/app.constants.js";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();
  
	window.onload = function () {
		if (!window.location.hash) {
		  dispatch(setDataState(DATA_STATE.DATA_STATE_LOADING));
		  window.location = window.location + "#loaded";
		  setTimeout(() => {
			window.location.reload();
		  }, 1000);
		}
	  };
	return (
		<div>
			<LandingPage />
			<LoadingModal />
		</div>
	);
}

export default App;
