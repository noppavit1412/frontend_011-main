'use client';
import { useEffect, useState } from 'react';

export default function Page({params}) {
    const {id} = params;

    const [items, setItems] = useState([]);
    useEffect(() => {
      async function getUsers() {
        try {
          const res = await fetch(`https://backend-main-lyart.vercel.app/api/users/${id}`);
          if (!res.ok) {
            console.error('Failed to fetch data');
            return;
          }
          const data = await res.json();
          setItems(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
   
    getUsers()
    //const interval  = setInterval(getUsers, 1000);
    //return () => clearInterval(interval);
    console.log(items);
  }, []);


  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://backend-main-lyart.vercel.app/api/users/${id}', {
      method: 'DELETE',
      headers: {
        Accept : 'application/json',
      },
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
    <br /><br /><br />
    <div className="container">
    <div class="card">
  <div class="card-header bg-success text-white">
    Delete From LE
    {/* Delete Form {JSON.stringify(items)} */}
  </div>
  <div class="card-body">

  {items.map((item) => (
  <form className="row g-3" onSubmit={handleDeleteSubmit}>
  <div className="col-md-6">
    <label for="basic-url" className="form-label">ID</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
      <input type="text" className="form-control" defaultValue={item.id} onChange={(e) => setFirstName(e.target.value)} required />
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-success"><i class="bi bi-box-arrow-right"></i>Delete</button>
  </div>
    </form>
    ))}
</div>
</div>
</div>

    </>
    
  );
}