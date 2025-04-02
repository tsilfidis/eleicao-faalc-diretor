import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center p-2 lg:flex-row">
        <div className="min-w-[300px]">
          <Image
            src="/ufms.png"
            alt="Logo UFMS"
            width={280}
            height={150}
            priority={true}
          />
        </div>
        <div className="mt-8 font-extrabold w-full text-center text-2xl font-[family-name:var(--font-geist-sans)]">
          Consulta Diretor FAALC Exercício: 2025-2029
        </div>
        <div className="min-w-[250px] hidden lg:block"></div>
      </div>
      <div className="bg-foreground text-background font-semibold text-center text-2xl font-[family-name:var(--font-geist-sans)] py-4">
        Selecione sua respectiva urna
      </div>
      <div className="mt-6 items-center justify-items-center p-2 gap-16 sm:p-8 text-2xl lg:mt-16 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-[32px] row-start-2 items-center">
          <div className="flex gap-4 items-center flex-col text-2xl lg:flex-row">
            <a
              className="max-w-[250px] min-h-[150px] text-center flex items-center justify-center gap-2 rounded-lg border-2 border-solid border-foreground transition-colors hover:bg-foreground hover:text-background font-semibold p-4 md:min-w-[300px] md:min-h-[200px] lg:min-h-[300px]"
              href="https://urnas.ufms.br/helios/e/FAALC-DOCENTES-CONSULTA-DIRETOR_9"
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
              Urna Docentes
            </a>
            <a
              className="max-w-[250px] min-h-[150px] text-center rounded-lg border-2 border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-foreground hover:text-background font-semibold p-4 md:min-w-[300px] md:min-h-[200px] lg:min-h-[300px]"
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
              className="max-w-[250px] min-h-[150px] text-center rounded-lg border-2 border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-foreground hover:text-background font-semibold p-4 md:min-w-[300px] md:min-h-[200px] lg:min-h-[300px]"
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
              Urna Estudantes
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
