import { SVGProps } from 'react';

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={24}
      height={24}
      viewBox="0 0 375 375"
      {...props}
    >
      <defs>
        <symbol overflow="visible" id="prefix__a">
          <path d="M83.664-233.723c-21.914 0-45.816.332-65.074 10.953-8.63 4.317-8.961 6.973-2.985 11.954 2.653 2.324 19.254 1.328 29.88-1.329 5.976-1.66 2.656-2.656 1.328 4.317-7.97 46.148-18.594 90.633-29.215 134.789C11.289-45.484 6.973-32.203 1.992-5.645c-1.328 7.97.664 11.29 8.633 13.282 8.629 2.324 16.266-1.66 17.926-8.965l.664-3.32c5.644-28.22 11.289-52.786 16.933-77.024 4.649 3.32 14.606 4.98 25.563 3.984 38.18-4.316 72.707-25.562 88.644-58.43 22.243-46.812-17.93-97.273-76.69-97.605zm56.438 63.41c-.332 16.598-5.645 30.543-17.926 44.82-15.606 17.595-38.18 28.22-62.086 31.872h-.996c-.996.332-6.305.664-10.621 1.992 4.648-19.258 9.293-38.512 14.273-60.426 3.984-18.59 8.633-36.851 9.629-55.773.332-6.64-4.98-7.969-3.32-8.965h.332c3.32-1.992 25.562-5.977 53.453 10.293 9.957 5.645 17.594 21.91 17.262 36.188zm0 0" />
        </symbol>
        <symbol overflow="visible" id="prefix__b">
          <path d="M70.137 6.98c40.883-2.328 70.797-16.953 86.086-42.878 24.265-41.551 12.632-78.778-31.575-100.715-2.992-1.66-2.66-2.66-.668-3.657 12.965-5.32 20.61-13.296 30.915-30.914 8.976-15.62 7.644-27.918-4.653-43.21-11.3-13.626-29.582-22.602-54.844-26.59-21.941-3.325-50.527 1.66-64.816 10.968-13.96 9.309.664 20.942 14.957 12.633 4.32-2.66 7.977-4.988 9.305-5.32 24.93-5.317 45.87-2.992 67.808 6.98 14.957 6.98 18.282 20.942 8.645 35.567-21.274 33.238-62.824 40.55-73.461 41.883-.664 0-.996-3.657-.332-6.98 4.652-16.954 11.965-46.204 12.297-47.868 1.996-13.961-.664-17.95-16.617-21.274h-.996c-5.985 0-4.989.668-7.317 8.977-8.309 45.54-18.281 79.441-28.918 123.648-5.648 24.598-10.3 41.883-13.957 65.817C.664-6.98 3.988-2.66 14.957 1.997c17.617 7.644 37.895 5.98 55.18 4.983zM38.559-10.637C27.258-11.3 26.922-8.309 30.582-24.93c5.648-26.59 12.297-58.832 19.277-91.074 1.328-5.984-.664-4.32 2.66-4.656 10.97-.664 21.606-2.324 29.583-4.32 15.62-3.989 26.921-.665 41.878 9.308 12.301 7.977 17.618 21.606 15.957 39.555-1.996 23.265-8.976 36.23-26.257 49.195C93.07-11.3 70.8-6.316 38.89-10.637zm0 0" />
        </symbol>
      </defs>
      <g fill="#fff">
        <use xlinkHref="#prefix__a" x={20.323} y={248.877} />
        <use xlinkHref="#prefix__b" x={185.996} y={354.504} />
      </g>
    </svg>
  );
}

export default Logo;