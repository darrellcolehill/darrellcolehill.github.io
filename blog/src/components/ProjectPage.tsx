import React from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ProjectPageProps = {
  title: string;
  image: string;
  markdownContent: string;
};

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  image,
  markdownContent,
}) => {
  const navigate = useNavigate();

  const imageUrl = image.startsWith("/")
    ? image
    : new URL(image, import.meta.url).href;

  // Log a warning if the image fails to load
  const handleImageError = () => {
    console.warn(`Project image not found: ${imageUrl}`);
  };

  // Map headings and paragraphs to Tailwind styled components
  const components = {
    h1: ({ node, ...props }: any) => (
      <h1 className="text-4xl font-bold mt-6 mb-4" {...props} />
    ),
    h2: ({ node, ...props }: any) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />
    ),
    h3: ({ node, ...props }: any) => (
      <h3 className="text-2xl font-semibold mt-5 mb-2" {...props} />
    ),
    p: ({ node, ...props }: any) => <p className="mb-4" {...props} />,
    li: ({ node, ...props }: any) => <li className="ml-6 list-disc mb-2" {...props} />,
    blockquote: ({ node, ...props }: any) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4" {...props} />
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      return !inline ? (
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      ) : (
        <code className="bg-gray-100 px-1 rounded" {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-4xl mx-auto mb-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-semibold transition"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
          {title}
        </h1>
        <img
          src={imageUrl}
          alt={title}
          onError={handleImageError} // ✅ log if image not found
          className="w-full rounded-2xl shadow-md mb-6 object-cover h-64 md:h-96"
        />
      </header>

      <main className="max-w-4xl mx-auto prose prose-lg prose-indigo dark:prose-invert">
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
          {markdownContent.trim()}
        </ReactMarkdown>
      </main>
    </div>
  );
};

export default ProjectPage;