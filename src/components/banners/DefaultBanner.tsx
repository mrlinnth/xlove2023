import parse from "html-react-parser";

interface Props {
  firstLine: any;
  secondLine: string;
}

function DefaultBanner({firstLine, secondLine} : Props) {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {parse(firstLine)}
          </h1>
          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            {secondLine}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DefaultBanner;
