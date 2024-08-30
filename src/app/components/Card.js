import Image from "next/image";
import c1 from "../../../public/C1.png";
import c2 from "../../../public/C2.png";
import c3 from "../../../public/C3.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Image src={c1} className="card-img-top" alt="Card 1" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">Mercury Planet</h5>
                <p className="card-text">Amet commodo pariatur elit mollit proident deserunt consectetur aute proident cillum officia commodo excepteur culpa.
                   Labore pariatur consequat irure eiusmod consectetur labore nulla. In est consectetur reprehenderit ex quis. Excepteur mollit ut nostrud cupidatat 
                   proident consectetur deserunt nulla sit cillum ut est ad.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Lated 1 min</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c2} className="card-img-top" alt="Card 2" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">Venus Planet</h5>
                <p className="card-text">Amet commodo pariatur elit mollit proident deserunt consectetur aute proident cillum officia commodo excepteur culpa.
                   Labore pariatur consequat irure eiusmod consectetur labore nulla. In est consectetur reprehenderit ex quis. Excepteur mollit ut nostrud cupidatat 
                   proident consectetur deserunt nulla sit cillum ut est ad.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Lated 1 min</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c3} className="card-img-top" alt="Card 3" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">Earth Planet</h5>
                <p className="card-text">Amet commodo pariatur elit mollit proident deserunt consectetur aute proident cillum officia commodo excepteur culpa.
                   Labore pariatur consequat irure eiusmod consectetur labore nulla. In est consectetur reprehenderit ex quis. Excepteur mollit ut nostrud cupidatat 
                   proident consectetur deserunt nulla sit cillum ut est ad.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Lated 1 min</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
