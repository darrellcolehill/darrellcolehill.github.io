// import React from "react";

// type ProjectCardProps = {
//   title: string;
//   description: string;
//   image: string;
//   href: string;
// };

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   title,
//   description,
//   image,
//   href,
// }) => {
//   return (
//     <a
//       href={href}
//       className="block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
//     >
//       {/* Image */}
//       <div className="h-48 w-full overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//           {title}
//         </h3>

//         <p className="mt-2 text-sm text-gray-600 line-clamp-3">
//           {description}
//         </p>
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;




import React from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  href: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, href }) => {
  return (
    <a
      href={href}
      className="block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>
    </a>
  );
};

export default ProjectCard;