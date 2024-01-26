import CustomerForm from "../CustomerForm/CustomerForm";
import CustomerList from "../CustomerList/CustomerList";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-info">
      <div className="card">
        <h1>Customer Manage System</h1>
        <CustomerForm />
        <CustomerList />
      </div>
    </div>
  );
};

export default Card;
