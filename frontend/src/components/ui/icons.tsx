export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  hamburger: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={17} {...props}>
      <path
        d="M0 0h20v3H0zm0 7h20v3H0zm0 7h20v3H0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  close: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={17} {...props}>
      <path
        d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  suggestions: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} {...props}>
      <path
        d="M11.5 2.274a8.4 8.4 0 015.923 2.408 8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451a.465.465 0 010 .663.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z"
        fill="currentColor"
      />
    </svg>
  ),
  check: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={11} {...props}>
      <path
        fill="none"
        stroke="#AD1FEA"
        strokeWidth={2}
        d="M1 5.233L4.522 9 12 1"
      />
    </svg>
  ),
  arrowDown: ({ ...props }: IconProps) => (
    <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  ),
  arrowUp: ({ ...props }: IconProps) => (
    <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 6l4-4 4 4"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  ),
  arrowLeft: ({ ...props }: IconProps) => (
    <svg width={7} height={10} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 9L2 5l4-4"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  ),
  plus: ({ ...props }: IconProps) => (
    <svg width={9} height={9} xmlns="http://www.w3.org/2000/svg" {...props}>
      <text
        transform="translate(-24 -20)"
        fill="currentColor"
        fillRule="evenodd"
        fontFamily="Jost-Bold, Jost"
        fontSize={14}
        fontWeight="bold"
      >
        <tspan x={24} y={27.5}>
          {"+"}
        </tspan>
      </text>
    </svg>
  ),
  comments: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} {...props}>
      <path
        d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478a12.07 12.07 0 01-3.025-.388A4.705 4.705 0 012.62 16z"
        fill="currentColor"
      />
    </svg>
  ),
  logout: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2" />
      <path d="M9 12h12l-3-3M18 15l3-3" />
    </svg>
  ),
};
