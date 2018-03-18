import App from "../components/App";
import Header from "../components/Header";
import AlbumFinder from "../components/AlbumFinder";
import Footer from "../components/Footer";
import withData from "../lib/withData";

export default withData(() => (
  <App>
    <Header>Album Finder</Header>
    <AlbumFinder />
    <Footer />
  </App>
));
