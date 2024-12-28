"use client";

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { gql, request } from "graphql-request";
import Image from "next/image";

interface BlogPost {
  publication: {
    posts: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          brief: string;
          slug: string;
          url: string;
          publishedAt: string;
          readTimeInMinutes: number;
          author: {
            id: string;
            name: string;
            profilePicture: string;
          };
          tags: Array<{
            id: string;
            name: string;
          }>;
          coverImage: {
            attribution: string;
            photographer: string;
            url: string;
          };
        };
      }>;
    };
    id: string;
    title: string;
  };
}

const postQuery = gql`
  query {
    publication(host: "blog.atas.or.id") {
      posts(first: 3) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            author {
              id
              name
              profilePicture
            }
            tags {
              id
              name
            }
            coverImage {
              attribution
              photographer
              url
            }
          }
        }
      }
      id
      title
    }
  }
`;

export function Blog() {
  const { data } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const posts = await request<BlogPost>(
        "https://gql.hashnode.com",
        postQuery
      );
      const blogPosts = posts.publication.posts.edges.map(post => post.node);
      return {
        id: posts.publication.id,
        title: posts.publication.title,
        blogs: blogPosts,
      };
    },
    staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
  });

  // TODO: Add skeleton loader upon isLoading
  const blogs = data?.blogs || [];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Dari blog ATAS
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Berita dan informasi terbaru dari ATAS Indonesia.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((post, index) => (
            <article
              key={index}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <Image
                src={post.coverImage.url}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-auto rounded-lg mb-4 shadow-lg"
              />
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.publishedAt} className="text-gray-500">
                  {format(new Date(post.publishedAt), "MMM dd, yyyy")}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.readTimeInMinutes} menit
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.url}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-2 text-sm/6 text-gray-600">
                  {post.brief}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  alt="ATAS Indonesia"
                  src={post.author.profilePicture}
                  width={100}
                  height={100}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a
                      href="https://blog.atas.or.id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">Volunteer ATAS Indonesia</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
