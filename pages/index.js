import App from "../components/App";
import Header from "../components/Header";
import NewReleases from "../components/NewReleases";
import Footer from "../components/Footer";
import withData from "../lib/withData";

export default withData(() => (
  <App>
    <Header>New Releases</Header>
    <NewReleases />
    <Footer />
  </App>
));
