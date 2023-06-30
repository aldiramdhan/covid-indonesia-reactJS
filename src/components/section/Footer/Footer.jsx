import { Typography } from "@material-tailwind/react";
 
export default function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-primary-color">
      <Typography color="white" className="font-normal mx-8 sm:ms-10">
        &copy; 2023 Created By Muhamad Aldi Ramdani
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mx-5 sm:me-10">
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Global
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#stats"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Indonesia
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#table"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Provinsi
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About
          </Typography>
        </li>
      </ul>
    </footer>
  );
}