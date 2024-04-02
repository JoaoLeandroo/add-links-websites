"use client";
import SectionLinks from "./SectionLinks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ButtonAdd = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-zinc-700 hover:text-zinc-900">
        <SectionLinks>
          <span className="text-4xl">+</span>
        </SectionLinks>
      </DialogTrigger>
      <DialogContent>
        <div className="w-full flex flex-col gap-3 p-5">
          <h2 className="mb-2 text-xl font-bold">Adicionar um atalho</h2>
          <div className="flex flex-col w-full">
            <span>Nome</span>
            <input
              type="text"
              className="h-9 p-4 bg-green-200 rounded-xl outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <span>URL</span>
            <input
              type="text"
              className="h-9 p-4 bg-green-200 rounded-xl outline-none"
            />
          </div>
          <div className="w-full text-right mt-5">
            <button className="p-3 bg-green-400 rounded-xl">Concluir</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAdd;
