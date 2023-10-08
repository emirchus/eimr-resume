import Image from "next/image";

import yoBrBugs from "@/images/yo_br_bugs.png";
import yoBugs from "@/images/yo_bugs.png";
import yoCaballo from "@/images/yo_caballo.png";
import yoHaru from "@/images/yo_haru.png";
import { Card } from "@/components/Card";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen justify-start items-center w-full px-4 py-4 md:px-[20%] space-y-8">
      <Card
        left={
          <div className="text-text text-center md:text-start md:max-w-md">
            <h2 className="text-2xl md:text-3xl text-pink">Sobre mí</h2>
            <p>
              Comencé programando en <span className="text-blue">Java</span> en
              2015, y con el tiempo aprendí más acerca de la programación
              orientada a objetos. En{" "}
              <span className="text-flamingo">2018</span> inicié a usar{" "}
              <span className="text-yellow">JavaScript</span>,{" "}
              <span className="text-peach">HTML</span> y{" "}
              <span className="text-peach">CSS</span>, adentrándome en un
              principio en <span className="text-blue">ReactJS</span>, para
              luego encaminarme en el desarrollo de backend, utilizando{" "}
              <span className="text-maroon">ExpressJS</span>. Más adelante,
              decidí aprender <span className="text-blue">ElectronJS</span>,
              para desarrollar aplicaciones aplicando conceptos de los lenguajes
              mencionados. Asimismo, durante éste periodo, participé en
              proyectos en <span className="text-sapphire">C#</span> con WPF. En
              2020 me introduje en el ecosistema de{" "}
              <span className="text-sky">Flutter</span>; framework
              multiplataforma, así como también con{" "}
              <span className="text-flamingo">NextJS</span>,{" "}
              <span className="text-flamingo">NestJS</span> y{" "}
              <span className="text-flamingo">DevOps</span>. En aspectos
              personales, me apasiona el diseño, la fotografía, la música y{" "}
              <span className="underline">programar</span>.
            </p>
          </div>
        }
        right={
          <div className="m-auto">
            <Image
              src={yoBugs}
              className="rounded-md w-full"
              alt="Foto mía"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        left={
          <div className="text-text text-center md:text-start md:max-w-md">
            <h2 className="text-2xl md:text-3xl text-pink">Mis sueños</h2>
            <p>
              Cuándo comencé a programar, solo esperaba ganar plata para ayudar
              a mi mamá con ese tipo de tema, si bien solo tenía 13 años, tenía
              una computadora y un millón de cosas por hacer, empezar fue muy
              díficil pero con el tiempo y conociendo a más gente, entendí que
              la programación es cuestión de persistencia y entenderla,
              abrazarla y hasta besarla.
              <br />
              Respiré programación durante 5 años, y con todo lo que aprendí, me
              gustaría poder dejar una huella en el mundo, y si no es en el
              mundo que sea en mi vida, y si no es en mi vida que sea en la vida
              de los demás. Me gustaría poder ayudar a la gente, dar un poco de
              mí para que todo lo que aprendí no sea en vano.
            </p>
          </div>
        }
        right={
          <div className="m-auto">
            <Image
              src={yoCaballo}
              className="rounded-md w-full"
              alt="Yo de chiquito con un caballo"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        left={
          <div className="text-text text-center md:text-start md:max-w-md">
            <h2 className="text-2xl md:text-3xl text-pink">Mi día</h2>
            <p>
              Me gusta empezar mis día con un buen café (soy medio vago para
              hacer tostadas jeje) y con un poco de música, me gusta escuchar
              música de todo tipo, pero mi favorita en este momento es el rock
              nacional e indie.
              <br />
              Después de estirar a mis gatas y de despejarme, empiezo a
              programar, un poco de flutter, next, grails y reuniones para
              finalizar viendo alguna serie o anime.
              <br />
              Los findes me gusta dormir hasta tarde y sale algo, me copo jeje
            </p>
          </div>
        }
        right={
          <div className="m-auto">
            <Image
              src={yoHaru}
              className="rounded-md w-full"
              alt="Yo de chiquito con un caballo"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        left={
          <div className="text-text text-center md:text-start md:max-w-md">
            <h2 className="text-2xl md:text-3xl text-pink">Por último</h2>
            <p>
              Gracias por llegar hasta acá, espero que te haya gustado mi
              resúmen de «mi existencia»
              <br />
              Mi vida puede ser poco interesante, pero es una vida llena de
              orgullo y amor, trato de dar lo máximo de mí y llevar todo con
              calma
              <br />
              Todo esto es con amor y apreciaición a la programación, ya que sin
              ella no sé qué estaría haciendo ahora mismo.
            </p>
          </div>
        }
        right={
          <div className="m-auto">
            <Image
              src={yoBrBugs}
              className="rounded-md w-full"
              alt="Yo de chiquito con un caballo"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
    </main>
  );
}
