import Image from "next/image";
import B1 from "../../../public/B1.jpg";
import B2 from "../../../public/B2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={B1} className="d-block w-100" alt="Slide 1" width={1080} height={1080} />    
          </div>
          <div className="carousel-item">
            <Image src={B2} className="d-block w-100" alt="Slide 2" width={1080} height={1080} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
