import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AddFeedback from "./pages/add-feedback"
import EditFeedback from "./pages/edit-feedback"
import FeedbackDetail from "./pages/feedback-detail"
import Home from "./pages/home"
import Roadmap from "./pages/roadmap"
import { ApolloProvider } from "@apollo/client"
import client from "./apollo-client"

const App = () => {
	return (
		<ApolloProvider client={client}>
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
						path="/create-feedback"
						element={<AddFeedback />}
					/>
					<Route
						path="/edit-feedback/:id"
						element={<EditFeedback />}
					/>
					<Route
						path="/roadmap"
						element={<Roadmap />}
					/>
				</Routes>
			</Router>
		</ApolloProvider>
	)
}

export default App
