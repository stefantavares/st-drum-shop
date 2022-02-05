import * as usersService from '../../utilities/users-service';

function OrderHistoryPage() {

  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(new Date(expDate));
  }

  return (
    <>
      <h1>OrderHistory</h1>
    </>
  );
}

export default OrderHistoryPage;