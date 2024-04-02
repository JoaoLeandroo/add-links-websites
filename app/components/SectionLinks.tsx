interface SectionLinksProps {
  children: React.ReactNode;
}

const SectionLinks: React.FC<SectionLinksProps> = ({ children }) => {
  return (
    <div className="w-[80px] h-[80px] bg-slate-400 hover:bg-slate-500 flex items-center justify-center rounded-xl transition-all duration-200">
      {children}
    </div>
  );
};

export default SectionLinks;
