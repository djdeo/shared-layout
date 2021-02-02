import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Item from "./Item";
import List from "./List";

function App() {
  return (
    <AnimateSharedLayout type="crossfade">
      <Router>
        <Route path={["/:id", '/']} component={Store}/>
      </Router>
    </AnimateSharedLayout>
  );
}

export default App;

const Store = ({match}) => {
  const {id} = match.params
  return (
    <>
      <List selectedId={id}/>
      <AnimatePresence>{id && <Item id={id} key="item" />}</AnimatePresence>
    </>
  )
}