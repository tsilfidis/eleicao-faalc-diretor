import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center p-2">
        <div className="min-w-[300px]">
          <Image
            src="/ufms.png"
            alt="Logo UFMS"
            width={400}
            height={150}
            priority={true}
          />
        </div>
        <div className="font-extrabold w-full text-center text-2xl">
          Consulta Diretor FAALC Exercício: 2025-2029
        </div>
        <div className="min-w-[300px]"></div>
      </div>
      <div className="bg-foreground text-background font-semibold text-center text-2xl font-[family-name:var(--font-geist-sans)] py-4">
        Selecione sua respectiva Urna
      </div>
      <div className="mt-24 items-center justify-items-center p-2 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex gap-16 items-center flex-col sm:flex-row">
            <a
              className="min-w-[350px] min-h-[350px] rounded-lg border-2 border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-foreground hover:text-background font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://urnas.ufms.br/helios/e/FAALC-DOCENTES-CONSULTA-DIRETOR_9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="min-w-[20px]">
                <Image
                  src="/ufms-paliteiro.png"
                  alt="Vercel logomark"
                  width={40}
                  height={65}
                  priority={true}
                />
              </div>
              Urna Docentes
            </a>
            <a
              className="min-w-[350px] min-h-[350px] rounded-lg border-2 border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-foreground hover:text-background font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://urnas.ufms.br/helios/e/FAALC-TECNICOS-CONSULTA-DIRETOR_9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ufms-paliteiro.png"
                alt="Vercel logomark"
                width={40}
                height={65}
                priority={true}
              />
              Urna Técnicos Administrativos
            </a>
            <a
              className="min-w-[350px] min-h-[350px] rounded-lg border-2 border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-foreground hover:text-background font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://urnas.ufms.br/helios/e/FAALC-ESTUDANTES-CONSULTA-DIRETOR_9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ufms-paliteiro.png"
                alt="UFMS paliteiro"
                width={40}
                height={65}
                priority={true}
              />
              Estudantes
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
