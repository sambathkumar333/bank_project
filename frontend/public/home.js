function Home() {
  return (
    <div className="home">
      <Card
        txtcolor="black"
        header="CENTRAL BANK OF INDIA"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)}
      />
    </div>
  );
}

