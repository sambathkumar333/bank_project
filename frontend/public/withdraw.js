function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div>
      {show ?
        <WithdrawForm setShow={setShow} setStatus={setStatus} /> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus} />}
    </div>
  )
}

function WithdrawMsg(props) {
  return (<>
    <h5>Success</h5>
    <button type="submit"
      className="btn btn-light"
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
      Withdraw again
    </button>
  </>);
}

function WithdrawForm(props) {
  const [email, setEmail] = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle() {
    fetch(`/account/update/${email}/-${amount}`)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          props.setStatus(JSON.stringify(data.value));
          props.setShow(false);
          console.log('JSON:', data);
        } catch (err) {
          props.setStatus('Deposit failed')
          console.log('err:', text);
        }
      });
  }

  return (<>
    <div className="account">
      <div class="card">
        <div class="bg-danger card-headera">withdraw</div>
        <div class="card-body">
          Email<br />
          <input type="input"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)} /><br />
          Amount<br />
          <input type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.currentTarget.value)} /><br />

          <button type="submit"
            className="btn btn-light"
            onClick={handle}>
            Withdraw
          </button>
        </div>
      </div>
    </div>


  </>);
}
