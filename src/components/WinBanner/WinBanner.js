import Banner from "../Banner";

function WinBanner({ num }) {
  return (
    <Banner status={"happy"}>
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{num}</strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;
