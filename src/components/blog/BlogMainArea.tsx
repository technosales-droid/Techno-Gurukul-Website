"use client";
import { useState, useMemo } from "react";
import { blogPosts } from "@/data";
import type { BlogPostType } from "@/types";
import Link from "next/link";
import Image from "next/image";

const BlogMainArea: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage: number = 6;

  // Memoize calculations that depend on blogPosts length
  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    return {
      totalPages,
      indexOfFirstPost,
      indexOfLastPost,
    };
  }, [currentPage, postsPerPage]);

  // Memoize current posts slice
  const currentPosts = useMemo((): BlogPostType[] => {
    return blogPosts.slice(
      paginationData.indexOfFirstPost,
      paginationData.indexOfLastPost
    );
  }, [paginationData.indexOfFirstPost, paginationData.indexOfLastPost]);

  // Memoize pagination numbers array
  const paginationNumbers = useMemo(() => {
    return Array.from(
      { length: paginationData.totalPages },
      (_, index) => index + 1
    );
  }, [paginationData.totalPages]);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <section className="innerPage_blog-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          {currentPosts.map((post) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6"
              key={post.id}
            >
              <div className="h2_blog-item mb-30">
                <div className="h2_blog-img">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      width={410}
                      height={240}
                      src={post.image}
                      alt={post.title}
                    />
                  </Link>
                </div>
                <div className="h2_blog-content">
                  <div className="h2_blog-content-meta">
                    <span>
                      <i className="fa-thin fa-user"></i> {post.author}
                    </span>
                    <span>
                      <i className="fa-thin fa-clock"></i> {post.date}
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

        <div className="row">
          <div className="col-12">
            <div className="pagination-area mt-20 mb-30">
              <ul>
                {paginationNumbers.map((pageNumber) => (
                  <li key={pageNumber}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(pageNumber);
                      }}
                      className={currentPage === pageNumber ? "active" : ""}
                    >
                      {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
                    </a>
                  </li>
                ))}
                {currentPage < paginationData.totalPages && (
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(currentPage + 1);
                      }}
                    >
                      <i className="fa-light fa-angle-right"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMainArea;
