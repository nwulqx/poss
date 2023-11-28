import styles from "./index.module.scss";
const Loading = ({ loading }) => {
  return loading ? (
    <div className={styles.loading}>
      <img src="/public/loading.gif" />
    </div>
  ) : (
    ""
  );
};

export default Loading;
