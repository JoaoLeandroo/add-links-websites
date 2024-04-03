"use client";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import SectionLinks from "./SectionLinks";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const ButtonAdd = () => {
  const [inputNome, setInputNome] = useState<string>("");
  const [inputUrl, setInputUrl] = useState<string>("");
  const { arr, setArr } = useContext(AuthContext);

  const addInfos = () => {
    if (inputNome === "" || inputUrl === "") {
      alert("Preencha todos os campos.");
      return;
    }
    const items = [];

    let url = inputUrl;
    let primeirasPalavras = inputUrl.substring(0, 8);
    if (primeirasPalavras != "https://") {
      url = `https://${url}`;
    }

    items.push(...arr, [inputNome, url]);
    setArr(items);
    setInputNome("");
    setInputUrl("");
  };

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
              className="h-11 p-4 bg-green-200 rounded-xl outline-none"
              onChange={(e) => setInputNome(e.target.value)}
              value={inputNome}
            />
          </div>
          <div className="flex flex-col w-full">
            <span>URL</span>
            <input
              type="text"
              className="h-11 p-4 bg-green-200 rounded-xl outline-none"
              onChange={(e) => setInputUrl(e.target.value)}
              value={inputUrl}
            />
          </div>
          <div className="w-full text-right mt-5">
            <DialogClose>
              <button
                className="p-3 bg-green-400 rounded-xl"
                onClick={addInfos}
              >
                Concluir
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAdd;
