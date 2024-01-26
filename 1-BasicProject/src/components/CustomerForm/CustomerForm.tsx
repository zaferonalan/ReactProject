import "./Customer.css";
const CustomerForm = () => {
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="add a new customer" />
        <button>+</button>
      </form>
    </div>
  );
};

export default CustomerForm;
