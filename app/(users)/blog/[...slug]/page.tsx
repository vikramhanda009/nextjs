type BlogPageProps = {
  params: {
    slug: string[];
  };
};

const Blog = async ({ params }: BlogPageProps) => {
  const { slug } = params;

  console.log("slug:", slug);

  return <div>Blog</div>;
};

export default Blog;
