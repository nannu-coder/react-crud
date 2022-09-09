import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useUsers from "../../hook/contexthook";

const Home = () => {
  const [users, setUsers] = useUsers();

  const deleteUser = (id) => {
    if (window.confirm("Are you sure to delete this")) {
      const user = users.filter((user) => user.id != id);
      setUsers([...user]);
    }
  };

  return (
    <div className="container">
      <div className="header-btn mt-4 mb-3">
        <Link to="/create">
          <Button className="create__btn" variant="primary">
            Create User
          </Button>
        </Link>
      </div>

      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>
              <td>
                <Link to={`/read/${user.id}`}>
                  <Button className="action__btn me-3" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={`/edit/${user.id}`}>
                  <Button className="action__btn me-3" variant="info">
                    Edit
                  </Button>
                </Link>

                <Button variant="danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
