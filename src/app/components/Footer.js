import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start text-dark">
      <div className="container p-3 ">
        <div className="text-center ">
          <h6 className="text-uppercase">Footer</h6>
          <p className=''>
            This is a simple footer for your wildlife photography enthusiasts website.
          </p>
        </div>
      </div>
      <div className="text-center p-3 bg-light" style={{ borderTop: '1px solid #e7e7e7' }}>
        &copy; {new Date().getFullYear()} Wildlife Photography Enthusiasts
      </div>
    </footer>
  );
}
