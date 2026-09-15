import Image from "next/image";

const BlogCommentSection = () => {
  return (
    <div className="blog_details-comment pb-40">
      <h4 className="blog_details-comment-title">3 Comments:</h4>
      <div className="blog_details-comment-item">
        <div className="blog_details-comment-img">
          <Image
            width={60}
            height={60}
            src="/assets/img/blog/details/author-2.jpg"
            alt="img"
          />
        </div>
        <div className="blog_details-comment-content">
          <h6>Russell Sprout</h6>
          <span>march 29,2023 at 10:47 pm</span>
          <p>
            There are many variations passages of lorem qoree available, but the
            majority have content marketing suffered alteration in some form.
          </p>
          <a href="#" className="comment-reply">
            Reply
          </a>
        </div>
      </div>
      <div className="blog_details-comment-item ml-80">
        <div className="blog_details-comment-img">
          <Image
            width={60}
            height={60}
            src="/assets/img/blog/details/author-3.jpg"
            alt="img"
          />
        </div>
        <div className="blog_details-comment-content">
          <h6>Brian Cumin</h6>
          <span>march 29,2023 at 10:47 pm</span>
          <p>
            There are many variations passages of lorem qoree available, but the
            majority have content marketing suffered alteration in some form.
          </p>
          <a href="#" className="comment-reply">
            Reply
          </a>
        </div>
      </div>
      <div className="blog_details-comment-item ml-80">
        <div className="blog_details-comment-img">
          <Image
            width={60}
            height={60}
            src="/assets/img/blog/details/author-4.jpg"
            alt="img"
          />
        </div>
        <div className="blog_details-comment-content">
          <h6>Parsley Montana</h6>
          <span>march 29,2023 at 10:47 pm</span>
          <p>
            There are many variations passages of lorem qoree available, but the
            majority have content marketing suffered alteration in some form.
          </p>
          <a href="#" className="comment-reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCommentSection;
