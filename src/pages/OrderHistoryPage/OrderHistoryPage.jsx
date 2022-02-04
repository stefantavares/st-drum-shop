import * as usersService from '../../utilities/users-service';

function OrderHistoryPage() {

  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(new Date(expDate));
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}

export default OrderHistoryPage;