import { GitBranch, XCircle, AlertTriangle, Wifi } from "lucide-react";

export function StatusBar() {
  return (
    <footer className="hidden md:flex fixed bottom-0 left-64 right-0 px-6 h-10 z-50 justify-between items-center bg-[#000000] border-t border-primary/20 shadow-[0_-10px_40px_rgba(255,137,171,0.05)]">
      <div className="flex items-center space-x-6 text-[10px] font-mono text-gray-600 uppercase">
        <div className="flex items-center text-primary gap-1 cursor-pointer">
          <GitBranch size={11} />
          <span>main*</span>
        </div>
        <div className="flex items-center hover:text-white transition-colors gap-1 cursor-pointer">
          <XCircle size={11} />
          <span>0 Errors</span>
        </div>
        <div className="flex items-center hover:text-white transition-colors gap-1 cursor-pointer">
          <AlertTriangle size={11} />
          <span>0 Warnings</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-[10px] font-mono text-gray-400">
        <span className="animate-pulse text-primary">STDOUT</span>
        <span className="text-gray-700">|</span>
        <span>Ln 12, Col 42</span>
        <span className="text-gray-700">|</span>
        <span>UTF-8</span>
        <span className="text-gray-700">|</span>
        <div className="flex items-center gap-1 text-secondary">
          <Wifi size={11} />
          <span>NETWORK: NOMINAL</span>
        </div>
      </div>
    </footer>
  );
}
