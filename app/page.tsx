import { Button } from "@/components/ui/button";
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
import { TechStackCloud } from "@/components/tech-stack-cloud";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans min-h-[calc(100vh-80px)]">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-purple-600">
            Hello, I'm Mohammad Kaif
          </h1>
          <p className="text-xl mb-8">
            I'm a final-year Computer Science student and a passionate developer and problem solver.
            I enjoy building impactful software solutions and I'm always eager to learn new
            technologies and skills.
          </p>
          <div className="flex justify-center gap-4">
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
        </div>
      </main>
      <ContactLinks />

      {/* Tech Stack Dialog - Triggered by Rainbow Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <RainbowButton size="sm">
              ✨ Tech Stack
            </RainbowButton>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl">Technologies I Work With</DialogTitle>
            </DialogHeader>
            <div className="flex items-center justify-center py-8">
              <TechStackCloud />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
