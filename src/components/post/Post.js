import styles from "./Post.module.css";

const Post = ({
  image,
  link,
  title,
  authorLink,
  author,
  date,
  topic,
  category,
}) => {
  const publishedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      <div className="col-4">
        <div className="p-card shadowed">
          <div class="p-card__content">
            <p className={styles.heading}>{topic || "cloud and server"}</p>
            <hr className={styles.dotted} />
            <img src={image} alt="" className="p-card__image" />
            <h4 className={styles.expandable_head}>
              <a href={link}>{title}</a>
            </h4>
            <p className="p-heading--6">
              By <a href={authorLink}>{author}</a> on {publishedDate}
            </p>
            <hr className={styles.dotted} />
            <p>{category || "Article"}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
