import { Layout } from "../../Components/Layout"
import { ShoppingCarContext } from "../../Context"
import { useContext, useRef, useState } from "react"

function MyAccount() {
  const {
    setAccount
  } = useContext(ShoppingCarContext)
  const [view, setView] = useState("user-info");
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  const form = useRef(null);

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    }
    //Update account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringifiedAccount);
    setAccount(data);
  }

  const renderUserInfo = () => {
    return (
      <div className='flex flex-col w-80 mt-8 p-4'>
        <p>
          <span className='font-light text-sm'>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className='border border-black rounded-lg mt-6 py-3'
          onClick={() => setView('edit-user-info')}>
          Edit
        </button>
      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col w-80 p-4 mt-6 justify-center items-center">
        <figure className="w-40 h-40 rounded-full mb-3">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile photo" className="rounded-full" />
        </figure>
        <p className="flex items-center justify-center font-semibold text-xl w-full mb-6">{parsedAccount.name}</p>
        <div className="flex w-full">
          <div className="flex flex-col w-full h-full gap-1">
            <label
              htmlFor="name"
              className="font-semibold ">Username:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={parsedAccount.name}
              placeholder="Peter"
              className="w-full border border-gray-400 rounded-lg p-1.5 mb-2" />
            <label
              htmlFor="email"
              className="font-semibold ">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={parsedAccount.email}
              placeholder="user@example.com"
              className="w-full border border-gray-400 rounded-lg p-1.5 mb-2 " />
            <label
              htmlFor="password"
              className="font-semibold ">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              defaultValue={parsedAccount.password}
              placeholder="********"
              className="w-full border border-gray-400 rounded-lg p-1.5 mb-2" />
          </div>
        </div>
        <button
          className='bg-black text-white w-full rounded-lg py-3 mt-4'
          onClick={() => {setView('user-info'), editAccount()}}>
          Edit
        </button>
      </form>
    )
  }

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 h-auto">
          <h1 className="font-medium text-xl">My Account</h1>
        </div>
        {renderView()}
      </Layout>
    </>
  )
}

export { MyAccount }