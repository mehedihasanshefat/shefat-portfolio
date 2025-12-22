import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
function SocialContacts() {
  return (
    <div className="flex items-center gap-4">
      <Link href="#">
        <GithubIcon className="size-5 sm:size-6 text-muted-foreground" />
      </Link>
      <Link href="#">
        <LinkedinIcon className="size-5 sm:size-6 text-muted-foreground" />
      </Link>
      <Link href="#">
        <TwitterIcon className="size-5 sm:size-6 text-muted-foreground" />
      </Link>
      <Link href="#">
        <YoutubeIcon className="size-5 sm:size-6 text-muted-foreground" />
      </Link>
    </div>
  );
}

export default SocialContacts;
