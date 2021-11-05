import React from "react";

const Contact = () => {
  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto" >
          <form>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ex- Shaikh Juber"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Your Mobile No.</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Ex- +91 9595959595"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Your Email address</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Masseges</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-success" type="submit">Submit form</button>
  </div>
</form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Contact;
