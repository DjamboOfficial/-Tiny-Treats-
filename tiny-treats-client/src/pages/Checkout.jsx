import PaypalCheckoutButton from "../components/PaypalCheckoutButton";

const Checkout = () => {
  const product = {
    description: "proceed to checkout"

  };

  return (
    <div>
      <PaypalCheckoutButton product={product} />
      <footer
        style={{
          padding: "0.5%",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div>
          <a>Copyright </a>
          <span>&copy; 2023 Tiny Treats. All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
