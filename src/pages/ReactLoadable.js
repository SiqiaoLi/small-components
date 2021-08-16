import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./ReactLazyLoader"),
  loading({ error }) {
    return error ? "Failed" : "Loading";
  },
});
