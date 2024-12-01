interface Props {
  number: number;
}

const Dots = ({ number }: Props) => {
  switch (number) {
    case 2:
      return (
        <div className="second-face">
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
      );
    case 3:
      return (
        <div className="third-face">
          <span className="pip"></span>
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
      );
    case 4:
      return (
        <div className="fourth-face">
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="fifth-face">
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
      );
    case 6:
      return (
        <div className="sixth-face">
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
      );
    case 1:
    default:
      return (
        <div className="first-face">
          <span className="pip"></span>
        </div>
      );
  }
};

export default Dots;
