import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <div
        style={
          {
            // backgroundImage:
            //   "url(https://rosaritooceansports.com/wp-content/uploads/2015/07/WPScuba-1-scaled.jpg)",
          }
        }
        className="w-full h-full p-5 bg-gradient-to-r from-green-400 to-blue-500"
      >
        <section
          style={{ backdropFilter: "blur(20px)" }}
          className="relative flex flex-col px-4 py-10 bg-white border border-gray-200 shadow-lg w-96 sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60"
        >
          <DiveSession startingNitrogen={0} endingNitrogen={60} />
          <button className="self-end ml-3">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </section>
      </div>
    </>
  );
}
const DiveSession = ({ startingNitrogen, endingNitrogen, onChange }) => {
  return (
    <div className="p-5 border border-black border-opacity-20">
      <div>Starting residual nitrogen: {startingNitrogen}</div>
      <div className="mt-5">
        <NumberInput
          label="Dive Time"
          unit="minutes"
          value={60}
          onChange={(value) => console.log(value)}
        />
      </div>

      <div className="mt-5">
        <NumberInput
          label="Depth"
          unit="feet"
          value={60}
          onChange={(value) => console.log(value)}
        />
      </div>
      <div className="mt-5">
        <NumberInput
          label="Surface Interval"
          unit="minutes"
          value={0}
          onChange={(value) => console.log(value)}
        />
      </div>
      <div className="mt-5">Ending residual nitrogen: {endingNitrogen}</div>
    </div>
  );
};
const NumberInput = ({ label, unit, value, onChange }) => (
  <label>
    <span className="block">{label}</span>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-16"
    />{" "}
    {unit}
  </label>
);

const times = {
  20: [26, 43, 61, 82, 106, 133, 165, 205, 256, 330, 461],
};

const surfaceIntervals = [
  ["A", ["24:00", "0:10"]],
  ["B", ["24:00", "1:17"], ["1:16", "0:10"]],
];

const repetiveDive = [];
