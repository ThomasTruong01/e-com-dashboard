const Users = (router) => {
  const { pid } = router.query
  return (
    <div>{pid}</div>
  )
}

export default Users
