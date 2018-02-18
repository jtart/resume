import Link from "next/link";

export default ({ as, href, text }) => (
  <Link as={as} href={href}>
    <a>{text}</a>
  </Link>
)