import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="flex gap-4">
        <Link href="/solve">
          <Button>Решавай</Button>
        </Link>
        <Link href="/problems">
          <Button>Избери върпос</Button>
        </Link>
        <Link href="/upload">
          <Button>Добави върпос</Button>
        </Link>
      </div>
    </main>
  );
}
