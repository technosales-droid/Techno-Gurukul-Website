"use client";
import { useRouter } from "next/navigation";
import BlogCommentSection from "./BlogCommentSection";
import { blogPosts } from "@/data";
import Link from "next/link";
import ContactForm from "../form/ContactForm";
import Image from "next/image";

interface Props {
  title: string;
  author: string;
  currentIndex: number;
}
const BlogDetailInfo = ({ title, author, currentIndex }: Props) => {
  const prevItem =
    blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length];
  const nextItem = blogPosts[(currentIndex + 1) % blogPosts.length];
  const router = useRouter();
  return (
    <div className="blog_details-wrap mb-60">
      <div className="blog_details-top mb-50">
        <h3 className="blog_details-title">{title}</h3>
        <div className="blog_details-meta">
          <div className="blog_details-author">
            <div className="blog_details-author-img">
              <Image
                width={40}
                height={40}
                src="/assets/img/blog/details/author-1.jpg"
                alt=""
              />
            </div>
            <div className="blog_details-author-info">
              <span>Teacher</span>
              <h5>
                <Link href="/team">{author}</Link>
              </h5>
            </div>
          </div>
          <div className="blog_details-category">
            <span>Categories</span>
            <h5>
              <a href="#">Online Teaching</a>
            </h5>
          </div>
          <div className="blog_details-rating">
            <span>Review</span>
            <ul>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog_details-content">
        <div className="blog_details-inner-text mr-80">
          <p className="mb-25">
            Curabitur tempus tincidunt tellus ac placerat. Nul lam non libero
            nisi. Fusce congue est eget nisl tristique ornare. Vestibulum id
            massa felis. Nullam vehicula bibendum nulla eu vulputate. Aenean
            fringilla tortor ut laoreet congue magna, a viverra turpis
            consectetur porta.
          </p>
          <p className="mb-35">
            Curabitur tempus tincidunt tellus ac placerat. Nullam non libero
            nisi. Fusce congue est eget nisl tristique ornare. Vestibulum id
            massa felis. Nullam vehicula bibendum nulla eu vulputate. Aenean
            fringilla tortor ut laoreet congue magna, a viverra turpis
            consectetur porta.
          </p>
        </div>
        <blockquote className="blog_details-quote">
          <p>
            My experience of distance learning has been exciting and
            enlightening! I have got toknow people from various countries and
            continents.
          </p>
          <h6>Dylan Meringue</h6>
          <span className="blog_details-quote-icon">
            <i className="fa-solid fa-quote-right"></i>
          </span>
        </blockquote>
        <div className="blog_details-highlight">
          <div className="blog_details-highlight-img">
            <Image
              width={310}
              height={204}
              src="/assets/img/blog/details/2.jpg"
              alt=""
            />
          </div>
          <div className="blog_details-highlight-text">
            <h3>
              Education Week News and View on Education Policy and Practice.
            </h3>
          </div>
        </div>
        <div className="blog_details-inner-text">
          <p className="mb-40">
            Curabitur tempus tincidunt tellus ac placerat. Nullam non lib ero
            nisi. Fusce congue est eget nisl tristique ornare. Vestibulum id
            massa felis. Nullam vehicula bibendum nulla eu vulputate. Aenean
            fringilla tortor ut laoreet congue magna, a viverra turpis
            consectetur porta.
          </p>
        </div>
        <div className="blog_details-content-meta">
          <div className="blog_details-content-tag">
            <h6>Tags :</h6>
            <ul>
              <li>
                <a href="#">Education</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
          </div>
          <div className="blog_details-content-social">
            <h6>Social Network :</h6>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog_details-bottom mb-50">
        {prevItem && (
          <div
            className="blog_details-bottom-item"
            role="button"
            onClick={() => router.push(`/blog/${prevItem.slug}`)}
          >
            <span>
              <i className="fa-thin fa-angle-left"></i>
            </span>
            <h5>
              {prevItem.title.length > 60
                ? `${prevItem.title.slice(0, 60)}...`
                : prevItem.title}
            </h5>
          </div>
        )}
        {nextItem && (
          <div
            className="blog_details-bottom-item inner-item-2 text-end"
            role="button"
            onClick={() => router.push(`/blog/${nextItem.slug}`)}
          >
            <h5>
              {nextItem.title.length > 60
                ? `${nextItem.title.slice(0, 60)}...`
                : nextItem.title}
            </h5>
            <span>
              <i className="fa-light fa-angle-right"></i>
            </span>
          </div>
        )}
      </div>
      <div className="blog_details-related mb-45">
        <h3 className="blog_details-related-title">Related Blogs</h3>
        <div className="row">
          {blogPosts.slice(4, 6).map((post) => (
            <div className="col-md-6" key={post.id}>
              <div className="h2_blog-item mb-30">
                <div className="h2_blog-img">
                  <Link href={`/blog/${post.slug}`}>
                    <Image width={410} height={240} src={post.image} alt="" />
                  </Link>
                </div>
                <div className="h2_blog-content">
                  <div className="h2_blog-content-meta">
                    <span>
                      <i className="fa-thin fa-user"></i>
                      {post.author}
                    </span>
                    <span>
                      <i className="fa-thin fa-clock"></i>
                      {post.date}
                    </span>
                  </div>
                  <h5 className="h2_blog-content-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h5>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="theme-btn blog-btn t-theme-btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BlogCommentSection />
      <div className="blog_details-message">
        <h3 className="blog_details-message-title">Send Me Message</h3>
        <ContactForm variant />
      </div>
    </div>
  );
};

export default BlogDetailInfo;
