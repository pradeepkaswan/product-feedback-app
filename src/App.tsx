import { DataProvider } from "./context/data-context"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AddFeedback from "./pages/add-feedback"
import EditFeedback from "./pages/edit-feedback"
import FeedbackDetail from "./pages/feedback-detail"
import Home from "./pages/home"
import Roadmap from "./pages/roadmap"

const App = () => {
	return (
		<DataProvider>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/feedback/:id"
						element={<FeedbackDetail />}
					/>
					<Route
						path="/add"
						element={<AddFeedback />}
					/>
					<Route
						path="/edit/:id"
						element={<EditFeedback />}
					/>
					<Route
						path="/roadmap"
						element={<Roadmap />}
					/>
				</Routes>
			</Router>
		</DataProvider>
	)
}

export default App
