import Link from 'next/link';

export default function ItemLink({ as, children, className, href }: any) {
  return (
    <Link {...{ href, as }} passHref>
      <a {...{ className }}>{children}</a>
    </Link>
  );
}
