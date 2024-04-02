import ButtonAdd from "./components/ButtonAdd";
import SectionLinks from "./components/SectionLinks";
export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[400px] h-[300px] flex items-center justify-center">
        <SectionLinks>
          <ButtonAdd />
        </SectionLinks>
      </div>
    </div>
  );
}
