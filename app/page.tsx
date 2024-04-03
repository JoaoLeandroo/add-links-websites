import ButtonAdd from "./components/ButtonAdd";
import RenderUrl from "./components/RenderUrl";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[400px] h-[300px] flex items-center justify-center gap-2 flex-wrap">
        <RenderUrl/>
        <ButtonAdd />
      </div>
    </div>
  );
}
