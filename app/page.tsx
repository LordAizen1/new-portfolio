import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Mohammad Kaif — final-year CS student at IIIT-Delhi, developer, and problem solver. Explore my projects and experience.",
};
import { Library, FileText } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactLinks } from "@/components/contact-links";
import { TechStackCarousel } from "@/components/tech-stack-carousel";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans min-h-[calc(100vh-80px)] px-4">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center">
        <div className="w-full text-center">
          <h1 className="mb-4 text-4xl font-bold text-purple-600 sm:text-5xl">
            Hello, I'm Mohammad Kaif
          </h1>
          <p className="mb-8 text-lg sm:text-xl">
            I'm a final-year Computer Science student and a passionate developer and problem solver.
            I enjoy building impactful software solutions and I'm always eager to learn new
            technologies and skills.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/projects">
              <Button className="bg-purple-600">
                <Library />
                View My Work
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-purple-600">
                  <FileText />
                  Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle>My Resume</DialogTitle>
                </DialogHeader>
                <iframe
                  src="/images/Md_Kaif_CV.pdf"
                  className="w-full h-[70vh] border-0"
                  title="Resume PDF"
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="mx-auto mt-12 w-full max-w-md px-2 sm:px-4 [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
            <TechStackCarousel />
          </div>
        </div>
      </main>
      <ContactLinks />
    </div>
  );
}
