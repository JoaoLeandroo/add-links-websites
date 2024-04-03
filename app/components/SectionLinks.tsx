interface SectionLinksProps {
  children: React.ReactNode;
}

const SectionLinks: React.FC<SectionLinksProps> = ({ children }) => {
  return (
    <div className="w-[80px] h-[80px] bg-slate-700/60 hover:bg-slate-600 flex items-center justify-center rounded-xl transition-all duration-200">
      {children}
    </div>
  );
};

export default SectionLinks;
